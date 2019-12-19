import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { SharedModule } from "./shared/shared.module";
import { CoursesPageModule } from "./courses-page/courses-page.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageModule } from "./login-page/login-page.module";
import { EditCoursePageModule } from "./edit-course-page/edit-course-page.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        CoursesPageModule,
        SharedModule,
        BrowserAnimationsModule,
        LoginPageModule,
        EditCoursePageModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
