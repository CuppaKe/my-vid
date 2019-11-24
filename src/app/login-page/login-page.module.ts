import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { LoginPageComponent } from "./login-page.component";

@NgModule({
    declarations: [LoginPageComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [LoginPageComponent]
})
export class LoginPageModule {}
