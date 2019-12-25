import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

import { CoursesService } from "./../core/courses.service";
import { Course } from "../courses-page/courses-list/models/course.model";

/**
 * Edit course component
 */
@Component({
    selector: "app-edit-course-page",
    templateUrl: "./edit-course-page.component.html",
    styleUrls: ["./edit-course-page.component.scss"]
})
export class EditCoursePageComponent implements OnInit {
    /**
     * Course to edit
     */
    public course$: Observable<Course>;

    constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.course$ = this.coursesService.editData$;
    }

    /**
     * Edits course
     */
    public onEdit(course: Course): void {
        // if course has id we edit it else add as new one
        course.id
            ? this.coursesService.editCourse(course)
            : this.coursesService.createCourse({
                  ...course,
                  id: Math.round(Math.random() * 1000),
                  authors: { id: Math.round(Math.random() * 100), name: "Petya" }
              });

        this.router.navigate(["/courses-page"]);
    }

    /**
     * Cancel editing
     */
    public onBack(): void {
        this.router.navigate(["/courses-page"]);
    }
}
