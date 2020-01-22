import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { CoursesService } from "./../core/courses.service";
import { Course } from "../courses-page/courses-list/models/course.model";
import { AuthorResponse } from "./../core/models/http-models";
import { convertAuthors } from "../core/helpers/courses.mappers";

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

    /**
     * Authors list
     */
    public authors$: Observable<AuthorResponse[]>;

    constructor(private coursesService: CoursesService, private router: Router) {}

    public ngOnInit(): void {
        this.course$ = this.coursesService.editData$;
        this.authors$ = this.coursesService.authors$;
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
                  authors: course.authors.map((author) => convertAuthors(author.name))
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
