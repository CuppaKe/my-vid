import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, Subject } from "rxjs";

import { User } from "../login-page/models/user.model";

@Injectable({
    providedIn: "root"
})
export class AuthorizationService {
    private isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private nickName$: Subject<string> = new Subject();

    public login(user: User): void {
        this.isAuthenticated$.next(true);
        localStorage.setItem("user", JSON.stringify(user));
        this.setNickname();
    }

    public logout(): void {
        this.isAuthenticated$.next(false);
        localStorage.removeItem("user");
    }

    public getUserInfo(): Observable<string> {
        return this.nickName$.asObservable();
    }

    public getIsAuthenticated(): Observable<boolean> {
        return this.isAuthenticated$.asObservable();
    }

    private setNickname(): void {
        const user: User = JSON.parse(localStorage.getItem("user"));
        this.nickName$.next(user && user.login);
    }
}
