import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

import { Course } from "src/app/courses-page/courses-list/models/course.model";

@Component({
    selector: "app-edit-course-form",
    templateUrl: "./edit-course-form.component.html",
    styleUrls: ["./edit-course-form.component.scss"]
})
export class EditCourseFormComponent implements OnInit {
    private updateBF: EventEmitter<any> = new EventEmitter();
    private backBF: EventEmitter<void> = new EventEmitter();

    public form: FormGroup;

    @Input() public course: Course;

    @Output() public update: Observable<any> = this.updateBF.asObservable();

    @Output() public back: Observable<void> = this.backBF.asObservable();

    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.createForm();
        this.setValues();
    }

    private createForm(): void {
        this.form = this.formBuilder.group({
            title: [""],
            description: [""],
            date: [""],
            duration: [""],
            author: [""]
        });
    }

    private setValues(): void {
        if (this.course) {
            this.form.patchValue({
                title: this.course.title,
                description: this.course.description,
                date: this.course.creationDate,
                duration: this.course.duration
            });
        }
    }

    public getData(): void {
        this.updateBF.emit({ ...this.form.value, id: this.course && this.course.id });
    }

    public getBack(): void {
        this.backBF.emit();
    }
}
