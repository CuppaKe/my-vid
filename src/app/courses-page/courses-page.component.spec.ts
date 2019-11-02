import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursesPageComponent } from "./courses-page.component";

describe("CoursesPageComponent", () => {
    let component: CoursesPageComponent;
    let fixture: ComponentFixture<CoursesPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesPageComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should init component", () => {
        expect(component).toBeTruthy();
    });
});
