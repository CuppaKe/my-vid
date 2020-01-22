import { FormControl, ValidationErrors, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { Component, OnInit, forwardRef, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return (control.touched && form.control.get("duration").invalid) || (control.touched && control.invalid);
    }
}

@Component({
    selector: "app-custom-duration-input",
    templateUrl: "./custom-duration-input.component.html",
    styleUrls: ["./custom-duration-input.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CustomDurationInputComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CustomDurationInputComponent),
            multi: true
        }
    ]
})
export class CustomDurationInputComponent implements OnInit {
    /**
     * Error matcher
     */
    public matcher: ErrorStateMatcher = new MyErrorStateMatcher();

    /**
     * Duration form control
     */
    public duration: FormControl = new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$")]);

    /**
     * Part of ControlValueAccessor callback
     */
    public onChange: Function;

    /**
     * Initial duration if course is edited
     */
    @Input() public durationInput: number;

    /**
     * Part of ControlValueAccessor callback
     */
    public onTouched: Function = () => {};

    public ngOnInit(): void {
        this.writeValue(this.durationInput);
    }

    /**
     * Edit duration
     */
    public editDuration(): void {
        this.onChange(this.duration.value);
    }

    public touch(): void {
        this.onTouched();
    }

    /**
     * Part of ControlValueAccessor
     */
    public writeValue(duration: number): void {
        if (duration) {
            this.duration.setValue(duration);
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
        if (c.value < 1) {
            return { error: true };
        }
    }
}
