import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store, createSelector } from "@ngrx/store";

import { User } from "../login-page/models/user.model";
import { State, getAuthState } from "./../store/index";
import * as AuthActions from "../store/auth/auth.actions";
import { getIsAuthorized, getUserFullName, getToken } from "./../store/auth/auth.selectors";

@Injectable({
    providedIn: "root"
})
export class AuthorizationService {
    public isAuthenticated$: Observable<boolean>;
    public userFullName$: Observable<string>;
    public token$: Observable<string>;

    constructor(private store: Store<State>) {
        this.isAuthenticated$ = this.store.select(
            createSelector(
                getAuthState,
                getIsAuthorized
            )
        );

        this.userFullName$ = this.store.select(
            createSelector(
                getAuthState,
                getUserFullName
            )
        );

        this.token$ = this.store.select(
            createSelector(
                getAuthState,
                getToken
            )
        );
    }

    /**
     * Login user
     * @param user - User - current user
     */
    public login(user: User): void {
        this.store.dispatch(AuthActions.fetchAuthToken({ user }));
    }

    /**
     * Logout
     */
    public logout(): void {
        this.store.dispatch(AuthActions.logOut());
    }
}
