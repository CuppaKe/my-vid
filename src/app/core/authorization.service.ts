import { Injectable } from "@angular/core";

import { User } from "../login-page/models/user.model";

@Injectable({
    providedIn: "root"
})
export class AuthorizationService {
    private isAuthenticated: boolean = false;

    public login(user: User): void {
        localStorage.setItem("user", JSON.stringify(user));
        this.isAuthenticated = true;
    }

    public logout(): void {
        localStorage.removeItem("user");
        this.isAuthenticated = false;
    }

    public getUserInfo(): User {
        return JSON.parse(localStorage.getItem("user"));
    }

    public getIsAuthenticated(): boolean {
        return this.isAuthenticated;
    }
}
