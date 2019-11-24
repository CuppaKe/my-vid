import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthorizationService } from "./../core/authorization.service";
import { User } from "./models/user.model";

@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
    public loginForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private authService: AuthorizationService) {}

    public ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    public login(): void {
        const user: User = {
            login: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        };

        this.authService.login(user);
        this.loginForm.reset();

        console.log("logged in successfully");
    }
}
