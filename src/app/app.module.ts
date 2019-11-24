import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { SharedModule } from "./shared/shared.module";
import { CoursesPageModule } from "./courses-page/courses-page.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageModule } from "./login-page/login-page.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoursesPageModule,
        SharedModule,
        BrowserAnimationsModule,
        LoginPageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
