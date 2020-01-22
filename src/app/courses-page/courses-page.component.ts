import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { CoursesService } from "./../core/courses.service";

/**
 * Course page component
 */
@Component({
    selector: "app-courses-page",
    templateUrl: "./courses-page.component.html",
    styleUrls: ["./courses-page.component.scss"]
})
export class CoursesPageComponent {
    constructor(private router: Router, private coursesService: CoursesService) {}

    /**
     * Searches course
     */
    public onSearch(fragment: string): void {
        this.coursesService.search(fragment);
    }
    /**
     * Add new course
     */
    public onAddCourse(): void {
        this.coursesService.fetchAuthors();
        this.router.navigate(["/add-new-course"]);
    }
}
