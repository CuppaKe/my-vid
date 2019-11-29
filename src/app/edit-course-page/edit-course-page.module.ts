import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { EditCoursePageComponent } from "./edit-course-page.component";
import { EditCourseFormComponent } from "./edit-course-form/edit-course-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [EditCoursePageComponent, EditCourseFormComponent],
    imports: [SharedModule, CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
    exports: [EditCoursePageComponent]
})
export class EditCoursePageModule {}
