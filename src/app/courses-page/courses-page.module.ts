import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoursesPageComponent } from "./courses-page.component";
import { CourseItemComponent } from "./course-item/course-item.component";
import { CoursesPanelComponent } from "./courses-panel/courses-panel.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";

@NgModule({
  declarations: [
    CoursesPageComponent,
    CoursesPanelComponent,
    CoursesListComponent,
    CourseItemComponent,
  ],
  imports: [CommonModule],
  exports: [CoursesPageComponent]
})
export class CoursesPageModule {}
