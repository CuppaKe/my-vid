import { Component } from "@angular/core";

/**
 * Course page component
 */
@Component({
    selector: "app-courses-page",
    templateUrl: "./courses-page.component.html",
    styleUrls: ["./courses-page.component.scss"]
})
export class CoursesPageComponent {
    public searchText: string;

    public onSearch(data: string): void {
        this.searchText = data;
    }
}
