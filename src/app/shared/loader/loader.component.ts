import { Observable } from "rxjs";
import { LoaderService } from "./../../core/loader.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
    /**
     * Loader color
     */
    public COLOR: string = "accent";

    /**
     * Loader mode
     */
    public MODE: string = "indeterminate";

    /**
     * Whether loader should be shown
     */
    public isLoading$: Observable<boolean>;

    constructor(private loaderService: LoaderService) {}

    public ngOnInit(): void {
        this.isLoading$ = this.loaderService.isLoading;
    }
}
