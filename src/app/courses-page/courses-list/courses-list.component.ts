import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
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
export class CoursesListComponent implements OnInit, OnChanges {
    /**
     * Courses
     */
    public courses$: Observable<Course[]>;

    /**
     * Filter for courses
     */
    @Input() public filter: string;

    constructor(private coursesService: CoursesService, private router: Router) {}

    public ngOnInit(): void {
        this.courses$ = this.coursesService.coursesBF;
        this.coursesService.getList(5);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.filter && !changes.filter.firstChange) {
            this.coursesService.search(this.filter);
        }
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
        this.router.navigate([`/edit-course`, courseId, { data: courseId }]);
    }

    /**
     * Loads more courses
     */
    public onLoad(count: number): void {
        this.coursesService.getList(count + 5);
    }
}
