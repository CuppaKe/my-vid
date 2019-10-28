import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CoursesPageComponent } from "./courses-page/courses-page.component";

const routes: Routes = [
    { path: "courses-page", component: CoursesPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
