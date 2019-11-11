import { Directive, ElementRef, Renderer2, Input, OnInit } from "@angular/core";
import { DateTime, Duration } from "luxon";

/**
 * Directive to set border depending on creation date
 */
@Directive({
    selector: "[appCreationDate]"
})
export class CreationDateDirective implements OnInit {
    /**
     * Creation date
     */
    @Input("appCreationDate") public date: string;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    public ngOnInit(): void {
        this.setBorder();
    }

    private setBorder(): void {
        const diff: number = DateTime.local()
            .diff(DateTime.fromISO(this.date))
            .as("seconds");

        const limit: number = Duration.fromObject({ days: 14 }).as("seconds");

        if (diff > 0 && diff <= limit) {
            this.renderer.setStyle(this.elementRef.nativeElement, "border", "green solid");
        } else if (diff < 0) {
            this.renderer.setStyle(this.elementRef.nativeElement, "border", "blue solid");
        }
    }
}
