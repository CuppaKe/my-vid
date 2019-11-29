import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthorizationService } from "../core/authorization.service";

/**
 * Course page component
 */
@Component({
    selector: "app-courses-page",
    templateUrl: "./courses-page.component.html",
    styleUrls: ["./courses-page.component.scss"]
})
export class CoursesPageComponent {
    public searchText: string;

    constructor(private authService: AuthorizationService, private router: Router) {}

    public onSearch(data: string): void {
        this.searchText = data;
    }

    public onAddCourse(): void {
        this.router.navigate(["/add-new-course"]);
    }
}
