import { Injectable } from "@angular/core";

import { User } from "../login-page/models/user.model";

@Injectable({
    providedIn: "root"
})
export class AuthorizationService {
    private isAuthenticated: boolean;

    public login(user: User): void {
        this.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(user));
    }

    public logout(): void {
        this.isAuthenticated = false;
        localStorage.removeItem("user");
    }

    public getUserInfo(): string {
        const user: User = JSON.parse(localStorage.getItem("user"));
        return user && user.login;
    }

    public getIsAuthenticated(): boolean {
        return this.isAuthenticated;
    }
}
