import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

import { EditCoursePageComponent } from "./edit-course-page.component";
import { EditCourseFormComponent } from "./edit-course-form/edit-course-form.component";
import { SharedModule } from "../shared/shared.module";
import { CustomDateInputComponent } from "./custom-date-input/custom-date-input.component";
import { CustomDurationInputComponent } from "./custom-duration-input/custom-duration-input.component";
import { CustomAuthorInputComponent } from "./custom-author-input/custom-author-input.component";

@NgModule({
    declarations: [
        EditCoursePageComponent,
        EditCourseFormComponent,
        CustomDateInputComponent,
        CustomDurationInputComponent,
        CustomAuthorInputComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatAutocompleteModule
    ],
    exports: [EditCoursePageComponent]
})
export class EditCoursePageModule {}
