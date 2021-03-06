import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { TranslateModule } from "@ngx-translate/core";

import { CoursesPageComponent } from "./courses-page.component";
import { CourseItemComponent } from "./courses-list/course-item/course-item.component";
import { CoursesPanelComponent } from "./courses-panel/courses-panel.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [CoursesPageComponent, CoursesPanelComponent, CoursesListComponent, CourseItemComponent],
    imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, MatCardModule, SharedModule, TranslateModule],
    exports: [CoursesPageComponent]
})
export class CoursesPageModule {}
