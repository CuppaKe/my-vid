import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, switchMap, catchError, concatMap } from "rxjs/operators";

import * as AuthActions from "./auth.actions";
import { LoginResponse, UserInfoResponse } from "src/app/core/models/http-models";

/**
 * Auth effects
 */
@Injectable()
export class AuthEffects {
    /**
     * Fetch auth token
     */
    public fetchAuthToken$: Observable<Action>;

    /**
     * Fetch user info
     */
    public fetchUserInfo$: Observable<Action>;

    constructor(private actions$: Actions, private http: HttpClient) {
        this.fetchAuthToken$ = createEffect(() => this.createFetchAuthTokenEffect());
        this.fetchUserInfo$ = createEffect(() => this.createFetchUserInfoEffect());
    }

    private createFetchAuthTokenEffect(): Observable<Action> {
        return this.actions$.pipe(
            ofType(AuthActions.fetchAuthToken),
            map((action) => action.user),
            switchMap((user) =>
                this.http.post("http://localhost:3004/auth/login/", user).pipe(
                    concatMap(({ token }: LoginResponse) => [
                        AuthActions.fetchAuthTokenSuccess({ token }),
                        AuthActions.fetchUserInfo({ token })
                    ]),
                    catchError(() => of(AuthActions.fetchAuthTokenFail({ message: "fetch token failed" })))
                )
            )
        );
    }

    private createFetchUserInfoEffect(): Observable<Action> {
        return this.actions$.pipe(
            ofType(AuthActions.fetchUserInfo),
            map((action) => action.token),
            switchMap((token) =>
                this.http.post("http://localhost:3004/auth/userinfo/", { token }).pipe(
                    map((info: UserInfoResponse) => AuthActions.fetchUserInfoSuccess({ info })),
                    catchError(() => of(AuthActions.fetchUserInfoFail({ message: "fetch user info failed" })))
                )
            )
        );
    }
}
