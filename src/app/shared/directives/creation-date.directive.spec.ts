import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DateTime } from "luxon";

import { CreationDateDirective } from "./creation-date.directive";

describe("CreationDateDirective:", () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let divEl: DebugElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, CreationDateDirective]
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        divEl = fixture.debugElement.query(By.directive(CreationDateDirective));
        fixture.detectChanges();
    });

    beforeAll(() => {
        jasmine.clock().uninstall();
        jasmine.clock().install();
        jasmine.clock().mockDate(DateTime.fromISO("2000-01-15").toJSDate());
    });

    afterAll(() => {
        jasmine.clock().uninstall();
    });

    it("should set green border", () => {
        expect(divEl.nativeElement.style.borderColor).toBe("green");
    });

    it("should set blue border", () => {
        component.time = "2022-01-16";
        fixture.detectChanges();

        console.log(divEl.nativeElement.style)
        expect(divEl.nativeElement.style.borderColor).toBe("blue");
    });
});

@Component({
    template: `
        <div [appCreationDate]="time">Example</div>
    `
})
class TestComponent {
    public time: string = "2000-01-05";
}
