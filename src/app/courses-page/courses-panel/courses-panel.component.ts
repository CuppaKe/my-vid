import { Component } from "@angular/core";

/**
 * Control panel component
 */
@Component({
    selector: "app-courses-panel",
    templateUrl: "./courses-panel.component.html",
    styleUrls: ["./courses-panel.component.scss"]
})
export class CoursesPanelComponent {
    /**
     * Input search request
     */
    public inputSearch: string;

    /**
     * Searches course
     */
    public onSearch(): void {
        console.log(this.inputSearch);
    }
}
