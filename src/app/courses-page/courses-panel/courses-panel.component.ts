import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-courses-panel",
    templateUrl: "./courses-panel.component.html",
    styleUrls: ["./courses-panel.component.scss"]
})
export class CoursesPanelComponent implements OnInit {
    public inputSearch: string;

    constructor() {}

    ngOnInit() {}

    public onSearch(): void {
        console.log(this.inputSearch);
    }
}
