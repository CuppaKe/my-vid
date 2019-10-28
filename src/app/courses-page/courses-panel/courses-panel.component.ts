import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-courses-panel",
    templateUrl: "./courses-panel.component.html",
    styleUrls: ["./courses-panel.component.scss"]
})
export class CoursesPanelComponent  {
    public inputSearch: string;

    public onSearch(): void {
        console.log(this.inputSearch);
    }
}
