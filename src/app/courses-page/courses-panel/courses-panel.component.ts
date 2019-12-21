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
    private addBF: EventEmitter<void> = new EventEmitter<void>();

    /**
     * Emit search request
     */
    @Output() public search: Observable<String> = this.searchBF.asObservable();

    /**
     * Emit add new course request
     */
    @Output() public add: Observable<void> = this.addBF.asObservable();

    /**
     * Searches course
     */
    public onSearch(event: KeyboardEvent): void {
        this.searchBF.emit((event.target as HTMLInputElement).value);
    }

    /**
     * Adds new course
     */
    public addCourse(): void {
        this.addBF.emit();
    }
}
