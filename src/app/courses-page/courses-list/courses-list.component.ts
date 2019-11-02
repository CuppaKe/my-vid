import { Component, OnInit } from "@angular/core";

import { CourseItem } from "./models/course.model";
import { courses } from "./constants/constants";

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
    public courses: CourseItem[];

    public ngOnInit(): void {
        this.courses = courses;
    }

    /**
     * Deletes course
     */
    public onDeleteCourse(courseId: number): void {
        console.log(courseId);
    }

    /**
     * Loads more courses
     */
    public onLoad(): void {
        console.log("load more");
    }
}
