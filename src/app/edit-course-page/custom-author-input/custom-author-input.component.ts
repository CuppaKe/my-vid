import { Component, OnInit, forwardRef, Input } from "@angular/core";
import { ErrorStateMatcher } from "@angular/material/core";
import {
    NG_VALUE_ACCESSOR,
    NG_VALIDATORS,
    ValidationErrors,
    FormControl,
    FormGroupDirective,
    NgForm
} from "@angular/forms";
import find from "lodash/find";
import without from "lodash/without";

import { AuthorResponse } from "./../../core/models/http-models";
import { Author } from "src/app/courses-page/courses-list/models/course.model";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return (control.touched && form.control.get("authors").invalid) || (control.touched && control.invalid);
    }
}

@Component({
    selector: "app-custom-author-input",
    templateUrl: "./custom-author-input.component.html",
    styleUrls: ["./custom-author-input.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomAuthorInputComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CustomAuthorInputComponent),
            multi: true
        }
    ]
})
export class CustomAuthorInputComponent implements OnInit {
    /**
     * Error matcher
     */
    public matcher: ErrorStateMatcher = new MyErrorStateMatcher();

    /**
     * Authors formgControl
     */
    public authorsControl: FormControl = new FormControl([]);

    /**
     * Selected authors
     */
    public selected: Array<AuthorResponse | Author> = [];

    /**
     * Available authors
     */
    @Input() public authors: AuthorResponse[] = [];

    /**
     * Initial authors if course is edited
     */
    @Input() public authorsInitial: [];

    /**
     * Part of ControlValueAccessor callback
     */
    public onChange: Function;

    /**
     * Part of ControlValueAccessor callback
     */
    public onTouched: Function = () => {};

    public ngOnInit(): void {
        this.writeValue(this.authorsInitial); // set initial value
    }

    /**
     * Add author
     */
    public addAuthor(author: AuthorResponse | Author): void {
        const tempValue: Array<AuthorResponse | Author> = this.selected;

        if (!find(tempValue, author)) {
            this.selected = [...tempValue, author];
        }

        this.authorsControl.setValue("");

        this.onChange(this.selected);
    }

    /**
     * Remove author
     */
    public removeAuthor(author: AuthorResponse | Author): void {
        const tempValue: Array<AuthorResponse | Author> = this.selected;

        this.selected = [...without(tempValue, author)];

        this.onChange(this.selected);
    }

    public touch(): void {
        this.onTouched();
    }

    /**
     * Part of ControlValueAccessor
     */
    public writeValue(authors: Author[]): void {
        if (authors.length) {
            this.selected = [...authors.map((author) => ({ ...author, name: `${author.name} ${author.lastName}` }))];
        }
    }

    /**
     * Part of ControlValueAccessor
     */
    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Part of ControlValueAccessor
     */
    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    /**
     * Part of NG_VALIDATORS
     */
    public validate(): ValidationErrors | null {
        if (this.selected.length < 1) {
            return { error: { valid: false, message: "Add at least one author" } };
        }
    }
}
