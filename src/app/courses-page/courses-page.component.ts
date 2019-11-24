import { Component, OnInit, DoCheck } from "@angular/core";
import { AuthorizationService } from "../core/authorization.service";

/**
 * Course page component
 */
@Component({
    selector: "app-courses-page",
    templateUrl: "./courses-page.component.html",
    styleUrls: ["./courses-page.component.scss"]
})
export class CoursesPageComponent implements OnInit, DoCheck {
    public searchText: string;

    public isAuthorized: boolean;

    public user: string;

    constructor(private authService: AuthorizationService) {}

    public ngOnInit(): void {
        this.isAuthorized = this.authService.getIsAuthenticated();
        this.user = this.authService.getUserInfo();
        console.log("init", this.user, this.isAuthorized);
    }

    public ngDoCheck(): void {
        this.isAuthorized = this.authService.getIsAuthenticated();
        this.user = this.authService.getUserInfo();
    }

    public onSearch(data: string): void {
        this.searchText = data;
    }

    public onLogout(): void {
        this.authService.logout();
        console.log("log off user");
    }
}
