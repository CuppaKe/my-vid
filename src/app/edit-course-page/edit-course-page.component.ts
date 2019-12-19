import { Component, OnInit } from "@angular/core";
import { Router, ParamMap, ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
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
        this.course$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.coursesService.getCourseById(+params.get("data")))
        );
    }

    /**
     * Edits course
     */
    public onEdit(course: Course): void {
        // if course has id we edit it else add as new one
        course.id
            ? this.coursesService.updateCourse(course)
            : this.coursesService.createCourse({
                  ...course,
                  id: Math.random(),
                  authors: { id: Math.random(), name: "Petya" }
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
