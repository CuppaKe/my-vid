import { Component, OnInit } from "@angular/core";

import { CourseItem } from "./models/course.model";
import { courses } from "./constants/constants";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.scss"]
})
export class CoursesListComponent implements OnInit {
    public courses: CourseItem[];

    public ngOnInit(): void {
        this.courses = courses;
    }
}
