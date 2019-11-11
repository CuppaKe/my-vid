import { Component, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

/**
 * Control panel component
 */
@Component({
    selector: "app-courses-panel",
    templateUrl: "./courses-panel.component.html",
    styleUrls: ["./courses-panel.component.scss"]
})
export class CoursesPanelComponent {
    private searchBF: EventEmitter<string> = new EventEmitter<string>();

    @Output() public search: Observable<string> = this.searchBF.asObservable();

    /**
     * Input search request
     */
    public inputSearch: string;

    /**
     * Searches course
     */
    public onSearch(): void {
        this.searchBF.emit(this.inputSearch);
    }
}
