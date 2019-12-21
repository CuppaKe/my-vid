import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class LoaderService {
    /**
     * Whether loader should be shown
     */
    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

    /**
     * Shows laoder
     */
    public show(): void {
        this.isLoading.next(true);
    }

    /**
     * Hides loader
     */
    public hide(): void {
        this.isLoading.next(false);
    }
}
