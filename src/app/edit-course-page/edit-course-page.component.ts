import { Component, OnInit } from "@angular/core";
import { Router, ParamMap, ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

import { CoursesService } from "./../core/courses.service";
import { Course } from "../courses-page/courses-list/models/course.model";

@Component({
    selector: "app-edit-course-page",
    templateUrl: "./edit-course-page.component.html",
    styleUrls: ["./edit-course-page.component.scss"]
})
export class EditCoursePageComponent implements OnInit {
    public course$: Observable<Course>;

    constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.course$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.coursesService.getCourseById(+params.get("data")))
        );
    }

    public onEdit(course: Course): void {
        console.log(course);
        // if course has id we edit it else add as new one
        course.id ? this.coursesService.updateCourse(course) : this.coursesService.createCourse(course);

        this.router.navigate(["/courses-page"]);
    }

    public onBack(): void {
        this.router.navigate(["/courses-page"]);
    }
}
