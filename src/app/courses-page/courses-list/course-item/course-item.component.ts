import { Component, Input, OnInit, EventEmitter, Output, SimpleChanges, OnChanges } from "@angular/core";
import { Observable } from "rxjs";

import { CourseItem } from "../models/course.model";

/**
 * Component with course details
 */
@Component({
    selector: "app-course-item",
    templateUrl: "./course-item.component.html",
    styleUrls: ["./course-item.component.scss"]
})
export class CourseItemComponent implements OnInit, OnChanges {
    private deleteCourseBF: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Course item
     */
    @Input() public course: CourseItem;

    /**
     * Emit delete event
     */
    @Output() public deleteCourse: Observable<number> = this.deleteCourseBF.asObservable();

    public ngOnInit(): void {
        console.log(this.course, "second");
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log("first");
    }

    /**
     * Remove course
     */
    public onRemove(courseId: number): void {
        this.deleteCourseBF.emit(courseId);
    }
}
