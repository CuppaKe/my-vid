import { Component, OnInit, forwardRef, Input } from "@angular/core";
import { ErrorStateMatcher } from "@angular/material/core";
import {
    NG_VALUE_ACCESSOR,
    FormControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    ValidationErrors,
    FormGroupDirective,
    NgForm
} from "@angular/forms";
import { DateTime } from "luxon";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return (control.touched && form.control.get("creationDate").invalid) || (control.touched && control.invalid);
    }
}

@Component({
    selector: "app-custom-date-input",
    templateUrl: "./custom-date-input.component.html",
    styleUrls: ["./custom-date-input.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomDateInputComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CustomDateInputComponent),
            multi: true
        }
    ]
})
export class CustomDateInputComponent implements OnInit, ControlValueAccessor {
    /**
     * Error matcher
     */
    public matcher: ErrorStateMatcher = new MyErrorStateMatcher();

    /**
     * Date form control
     */
    public date: FormControl = new FormControl();

    /**
     * Initial date if course is edited
     */
    @Input() public dateInput: string;

    /**
     * Part of ControlValueAccessor callback
     */
    public onChange: Function;

    /**
     * Part of ControlValueAccessor callback
     */
    public onTouched: Function = () => {};

    public ngOnInit(): void {
        this.writeValue(this.dateInput);
    }

    /**
     * Edit date
     */
    public editDate(): void {
        this.onChange(DateTime.fromJSDate(this.date.value).toISO());
    }

    /**
     * Part of ControlValueAccessor
     */
    public writeValue(date: any): void {
        if (date) {
            this.date.setValue(DateTime.fromISO(date).toJSDate());
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
    public validate(c: FormControl): ValidationErrors | null {
        if (!this.date.value) {
            return { required: { valid: false, message: "field is required" } };
        }

        return undefined;
    }
}
