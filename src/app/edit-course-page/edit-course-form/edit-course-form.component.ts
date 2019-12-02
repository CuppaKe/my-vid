import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

import {Course} from "src/app/courses-page/courses-list/models/course.model";

@Component({
    selector: "app-edit-course-form",
    templateUrl: "./edit-course-form.component.html",
    styleUrls: ["./edit-course-form.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCourseFormComponent implements OnInit {
    private updateBF: EventEmitter<any> = new EventEmitter();
    private backBF: EventEmitter<void> = new EventEmitter();

    /**
     * Form to edit/add course
     */
    public form: FormGroup;

    /**
     * Course for editing
     */
    @Input() public course: Course;

    /**
     * Emit course to update update
     */
    @Output() public update: Observable<any> = this.updateBF.asObservable();

    /**
     * Emit cancel event
     */
    @Output() public back: Observable<void> = this.backBF.asObservable();

    constructor(private formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.createForm();
        this.setValues();
    }

    /**
     * On update
     */
    public getData(): void {
        this.updateBF.emit({ ...this.form.value, id: this.course && this.course.id });
    }

    /**
     * On cancel editing
     */
    public getBack(): void {
        this.backBF.emit();
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
}
