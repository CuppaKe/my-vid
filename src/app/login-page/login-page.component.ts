import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthorizationService } from "./../core/authorization.service";
import { User } from "./models/user.model";

/**
 * Login component
 */
@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
    /**
     * Form for login
     */
    public loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthorizationService, private router: Router) {}

    public ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    /**
     * On login
     */
    public login(): void {
        const user: User = {
            login: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        };

        this.authService.login(user);
        this.loginForm.reset();
        this.router.navigate(["/courses-page"]);
    }
}
