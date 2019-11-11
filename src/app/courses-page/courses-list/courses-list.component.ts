import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";

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
export class CoursesListComponent implements OnInit, OnChanges {
    /**
     * Courses
     */
    public courses: CourseItem[];

    /**
     * Filter for courses
     */
    @Input() public filter: string;

    public ngOnInit(): void {
        this.courses = courses;
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
        console.log(courseId);
    }

    /**
     * Loads more courses
     */
    public onLoad(): void {
        console.log("load more");
    }
}
