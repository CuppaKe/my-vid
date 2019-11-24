import { Observable } from "rxjs";
import { Component, EventEmitter, Output, Input } from "@angular/core";

/**
 * Header component
 */
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
    private logoutBF: EventEmitter<void> = new EventEmitter<void>();

    @Input() public user: string;

    @Input() public isAthorized: boolean;

    @Output() public logout: Observable<void> = this.logoutBF.asObservable();

    /**
     * Loggs off user
     */
    public onLogoff(): void {
        this.logoutBF.emit();
    }
}
