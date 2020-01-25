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
    private languageSelectBF: EventEmitter<string> = new EventEmitter<string>();

    /**
     * Available languages
     */
    public languages: Array<{ [key: string]: string }> = [
        { value: "en", context: "HEADER.EN" },
        { value: "ru", context: "HEADER.RU" }
    ];

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
     * Emit language select event
     */
    @Output() public selectLanguage: Observable<string> = this.languageSelectBF.asObservable();

    /**
     * On logoff
     */
    public onLogoff(): void {
        this.logoutBF.emit();
    }

    /**
     * On language select
     * @param language string - selected language
     */
    public onLanguageSelect(language: string): void {
        this.languageSelectBF.emit(language);
    }
}
