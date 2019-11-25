import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { AuthorizationService } from "../core/authorization.service";

/**
 * Course page component
 */
@Component({
    selector: "app-courses-page",
    templateUrl: "./courses-page.component.html",
    styleUrls: ["./courses-page.component.scss"]
})
export class CoursesPageComponent implements OnInit {
    public searchText: string;

    public isAuthorized$: Observable<boolean>;

    public user$: Observable<string>;

    constructor(private authService: AuthorizationService) {}

    public ngOnInit(): void {
        this.isAuthorized$ = this.authService.getIsAuthenticated();
        this.user$ = this.authService.getUserInfo();
    }

    public onSearch(data: string): void {
        this.searchText = data;
    }

    public onLogout(): void {
        this.authService.logout();
        console.log("log off user");
    }
}
