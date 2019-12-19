import { Observable } from "rxjs";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

/**
 * Header component
 */
@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    private logoutBF: EventEmitter<void> = new EventEmitter<void>();

    /**
     * User nickname
     */
    @Input() public user: string;

    /**
     * Whether user is authorized
     */
    @Input() public isAthorized: boolean;

    /**
     * Link end for breadcrumbs
     */
    @Input() public link: string;

    /**
     * Emit logout event
     */
    @Output() public logout: Observable<void> = this.logoutBF.asObservable();

    /**
     * On logoff
     */
    public onLogoff(): void {
        this.logoutBF.emit();
    }
}
