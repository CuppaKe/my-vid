import { Component, OnInit, OnChanges, Optional } from "@angular/core";
import { AuthorizationService } from "../core/authorization.service";

/**
 * Course page component
 */
@Component({
    selector: "app-courses-page",
    templateUrl: "./courses-page.component.html",
    styleUrls: ["./courses-page.component.scss"]
})
export class CoursesPageComponent implements OnInit, OnChanges {
    public searchText: string;

    public isAuthorized: boolean;

    public user: string;

    constructor(private authService: AuthorizationService) {}

    public ngOnInit(): void {
        this.isAuthorized = this.authService.getIsAuthenticated();
        this.user = this.authService.getUserInfo();
        console.log("init", this.user, this.isAuthorized);
    }

    public ngOnChanges(): void {
        this.isAuthorized = this.authService.getIsAuthenticated();
        this.user = this.authService.getUserInfo();
        console.log("change", this.user, this.isAuthorized);
    }

    public onSearch(data: string): void {
        this.searchText = data;
        console.log("test", this.user, this.isAuthorized);
    }

    public onLogout(): void {
        this.authService.logout();
        console.log("log off user");
    }
}
