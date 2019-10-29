import { Component, Input, OnInit, EventEmitter, Output, SimpleChanges, OnChanges } from "@angular/core";
import { Observable } from "rxjs";

import { CourseItem } from "../models/course.model";

@Component({
    selector: "app-course-item",
    templateUrl: "./course-item.component.html",
    styleUrls: ["./course-item.component.scss"]
})
export class CourseItemComponent implements OnInit, OnChanges {
    private deleteCourseBF: EventEmitter<number> = new EventEmitter<number>();

    @Input() public course: CourseItem;

    @Output() public deleteCourse: Observable<number> = this.deleteCourseBF.asObservable();

    public ngOnInit(): void {
        console.log(this.course, "second");
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log("first");
    }

    public onRemove(courseId: number): void {
        this.deleteCourseBF.emit(courseId);
    }
}
