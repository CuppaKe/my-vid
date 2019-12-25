import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { Course } from "./models/course.model";
import { CoursesService } from "./../../core/courses.service";

/**
 * Component for displaying courses
 */
@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit {
    /**
     * Courses
     */
    public courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService, private router: Router) {}

    public ngOnInit(): void {
        this.courses$ = this.coursesService.courses$;
    }

    /**
     * Deletes course
     */
    public onDeleteCourse(courseId: number): void {
        // TODO replace confirm with material dialog
        if (confirm("Do you want to delete this course")) {
            this.coursesService.removeCourse(courseId);
        }
    }

    /**
     * Edits course
     */
    public onEditCourse(courseId: number): void {
        this.router.navigate([`/edit-course`, courseId]);
        this.coursesService.openEditCourse(courseId);
    }

    /**
     * Loads more courses
     */
    public onLoad(count: number): void {
        this.coursesService.getList(count + 5);
    }
}
