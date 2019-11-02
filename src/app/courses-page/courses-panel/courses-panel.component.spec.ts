import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursesPanelComponent } from "./courses-panel.component";

describe("CoursesPanelComponent:", () => {
    let component: CoursesPanelComponent;
    let fixture: ComponentFixture<CoursesPanelComponent>;
    let input: DebugElement;
    let getButtonByIcon: Function;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesPanelComponent],
            imports: [FormsModule, MatIconModule]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        getButtonByIcon = (textContent: string) => {
            return fixture.debugElement
                .queryAll(By.css("mat-icon"))
                .find((el) => el.nativeElement.textContent.trim() === textContent).parent;
        };

        input = fixture.debugElement.query(By.css("input"));
    });

    it("should init component", () => {
        expect(component).toBeTruthy();
    });

    it("should handle search input value", () => {
        spyOn(console, "log");

        input.nativeElement.value = "test";
        input.nativeElement.dispatchEvent(new Event("input"));
        fixture.detectChanges();

        getButtonByIcon("search").triggerEventHandler("click");

        expect(console.log).toHaveBeenCalledWith("test");
    });
});
