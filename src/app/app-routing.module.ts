import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./core/auth.guard";
import { LoginPageComponent } from "./login-page/login-page.component";
import { EditCoursePageComponent } from "./edit-course-page/edit-course-page.component";
import { CoursesPageComponent } from "./courses-page/courses-page.component";
import { ComponentNotFoundComponent } from "./shared/component-not-found/component-not-found.component";

const routes: Routes = [
    { path: "courses-page", component: CoursesPageComponent },
    { path: "add-new-course", canActivate: [AuthGuard], component: EditCoursePageComponent },
    { path: "edit-course/:id", canActivate: [AuthGuard], component: EditCoursePageComponent },
    { path: "login", component: LoginPageComponent },
    { path: "404", component: ComponentNotFoundComponent },
    { path: "", redirectTo: "/courses-page", pathMatch: "full" },
    { path: "**", redirectTo: "/404" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
