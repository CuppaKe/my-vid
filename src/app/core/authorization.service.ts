import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject, of } from "rxjs";
import { tap, catchError, switchMap } from "rxjs/operators";

import { User } from "../login-page/models/user.model";
import { LoginResponse, UserInfoResponse } from "./models/http-models";

@Injectable({
    providedIn: "root"
})
export class AuthorizationService {
    private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private nickName$: Subject<string> = new Subject();

    constructor(private http: HttpClient) {}

    /**
     * Login user
     * @param user - User - current user
     */
    public login(user: User): void {
        this.http
            .post("http://localhost:3004/auth/login/", user)
            .pipe(
                tap(({ token }: LoginResponse) => {
                    if (!!token) {
                        localStorage.setItem("token", JSON.stringify(token));
                        this.isAuthenticated$.next(true);
                    }
                }),
                switchMap((token) =>
                    this.http.post("http://localhost:3004/auth/userinfo/", token).pipe(
                        tap(({ name }: UserInfoResponse) => {
                            localStorage.setItem("user", JSON.stringify(name));
                            this.setNickname();
                        })
                    )
                ),
                catchError(() => {
                    this.isAuthenticated$.next(false);
                    return of("");
                })
            )
            .subscribe();
    }

    /**
     * Logout
     */
    public logout(): void {
        this.isAuthenticated$.next(false);
        localStorage.clear();
    }

    /**
     * Return user info
     */
    public getUserInfo(): Observable<string> {
        return this.nickName$.asObservable();
    }

    /**
     * Returns whether user is authenticated
     */
    public getIsAuthenticated(): Observable<boolean> {
        return this.isAuthenticated$.asObservable();
    }

    private setNickname(): void {
        const user: { [key: string]: string } = JSON.parse(localStorage.getItem("user"));
        this.nickName$.next(`${user.first} ${user.last}`);
    }
}
