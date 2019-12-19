import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, Subject, of } from "rxjs";
import { first, tap, catchError, map } from "rxjs/operators";

import { User } from "../login-page/models/user.model";
import { LoginResponse } from "./models/http-models";

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
                first(),
                map(({ token }: LoginResponse) => token),
                tap((token) => {
                    if (!!token) {
                        localStorage.setItem("user", JSON.stringify(user));
                        localStorage.setItem("token", JSON.stringify(token));
                        this.setNickname();
                        this.isAuthenticated$.next(true);
                    }
                }),
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
        const user: User = JSON.parse(localStorage.getItem("user"));
        this.nickName$.next(user && user.login);
    }
}
