import { Component } from "@angular/core";
import { Router } from "@angular/router";

/**
 * Course page component
 */
@Component({
    selector: "app-courses-page",
    templateUrl: "./courses-page.component.html",
    styleUrls: ["./courses-page.component.scss"]
})
export class CoursesPageComponent {
    /**
     * Search filter string
     */
    public searchText: string;

    constructor(private router: Router) {}

    /**
     * Searches course
     */
    public onSearch(data: string): void {
        this.searchText = data;
    }
    /**
     * Add new course
     */
    public onAddCourse(): void {
        this.router.navigate(["/add-new-course"]);
    }
}
