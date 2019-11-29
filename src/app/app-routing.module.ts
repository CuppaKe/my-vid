import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginPageComponent } from "./login-page/login-page.component";
import { EditCoursePageComponent } from "./edit-course-page/edit-course-page.component";
import { CoursesPageComponent } from "./courses-page/courses-page.component";

const routes: Routes = [
    { path: "courses-page", component: CoursesPageComponent },
    { path: "add-new-course", component: EditCoursePageComponent },
    { path: "edit-course/:id", component: EditCoursePageComponent },
    { path: "login", component: LoginPageComponent },
    { path: "**", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
