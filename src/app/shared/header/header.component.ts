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
    /**
     * Loggs off user
     */
    public onLogoff(): void {
        console.log("log off user");
    }
}
