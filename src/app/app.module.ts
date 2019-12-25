import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

import { SharedModule } from "./shared/shared.module";
import { CoursesPageModule } from "./courses-page/courses-page.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageModule } from "./login-page/login-page.module";
import { EditCoursePageModule } from "./edit-course-page/edit-course-page.module";
import { TokenInterceptor } from "./core/interceptors/token-interceptor";
import { LoaderInterceptor } from "./core/interceptors/loader-interceptor";
import { reducers } from "./store";
import { environment } from "../environments/environment";
import { CoursesEffects } from "./store/courses/courses.effects";
import { AuthEffects } from "./store/auth/auth.effects";

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
        EditCoursePageModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([CoursesEffects, AuthEffects])
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
