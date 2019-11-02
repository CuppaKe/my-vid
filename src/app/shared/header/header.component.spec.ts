import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent:", () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let getButtonByIcon: Function;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [MatIconModule],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        getButtonByIcon = (textContent: string) => {
            return fixture.debugElement
                .queryAll(By.css("mat-icon"))
                .find((el) => el.nativeElement.textContent.trim() === textContent).parent;
        };
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("handles logoff button click", () => {
        spyOn(console, "log");
        getButtonByIcon("arrow_right_alt").triggerEventHandler("click");

        expect(console.log).toHaveBeenCalledWith("log off user");
    });
});
