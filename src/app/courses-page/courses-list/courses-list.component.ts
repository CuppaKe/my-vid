import { CoursesService } from "./../../core/courses.service";
import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from "@angular/core";

import { CourseItem } from "./models/course.model";
import { courses } from "../../core/constants";

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
    public courses: CourseItem[];

    /**
     * Filter for courses
     */
    @Input() public filter: string;

    constructor(private coursesService: CoursesService, private cd: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.courses = this.coursesService.getList();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.filter && !changes.filter.firstChange) {
            this.courses = courses.filter((course) =>
                course.title.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
            );
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
        this.courses = this.coursesService.getList();
    }

    /**
     * Loads more courses
     */
    public onLoad(): void {
        console.log("load more");
    }
}
