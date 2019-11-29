import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { AuthorizationService } from "./core/authorization.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    public isAuthorized$: Observable<boolean>;

    public user$: Observable<string>;

    constructor(private authService: AuthorizationService, private router: Router) {}

    public ngOnInit(): void {
        this.isAuthorized$ = this.authService.getIsAuthenticated();
        this.user$ = this.authService.getUserInfo();
    }

    public onLogout(): void {
        this.authService.logout();
        this.router.navigate(["/login"]);
        console.log("log off user");
    }
}
