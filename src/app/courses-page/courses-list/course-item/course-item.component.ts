import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

import { CourseItem } from "../models/course.model";

/**
 * Component with course details
 */
@Component({
    selector: "app-course-item",
    templateUrl: "./course-item.component.html",
    styleUrls: ["./course-item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
    private deleteCourseBF: EventEmitter<number> = new EventEmitter<number>();
    private editCourseBF: EventEmitter<number> = new EventEmitter<number>();

    /**
     * Course item
     */
    @Input() public course: CourseItem;

    /**
     * Emit delete event
     */
    @Output() public deleteCourse: Observable<number> = this.deleteCourseBF.asObservable();

    /**
     * Emit edit course event
     */
    @Output() public editCourse: Observable<number> = this.editCourseBF.asObservable();

    /**
     * Remove course
     */
    public onRemove(courseId: number): void {
        this.deleteCourseBF.emit(courseId);
    }

    /**
     * Edit course
     */
    public onEdit(courseId: number): void {
        this.editCourseBF.emit(courseId);
    }
}
