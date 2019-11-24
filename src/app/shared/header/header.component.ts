import { AuthorizationService } from "./../../core/authorization.service";
import { Component } from "@angular/core";

/**
 * Header component
 */
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
    constructor(private authService: AuthorizationService) {}

    /**
     * Loggs off user
     */
    public onLogoff(): void {
        this.authService.logout();
        console.log("log off user");
    }
}
