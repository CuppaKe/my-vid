import { By } from "@angular/platform-browser";
import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import noop from "lodash/noop";

import { Course } from "./../models/course.model";
import { CourseItemComponent } from "./course-item.component";

describe("CourseItemComponent:", () => {
    let testComponent: TestCourseItemComponent;
    let fixture: ComponentFixture<TestCourseItemComponent>;
    let getButtonByText: Function;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseItemComponent, TestCourseItemComponent],
            imports: [MatCardModule, MatIconModule]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestCourseItemComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();

        getButtonByText = (textContent: string) => {
            return fixture.debugElement
                .queryAll(By.css("button"))
                .find((el) => el.nativeElement.textContent.trim() === textContent);
        };
    });

    it("should init component", () => {
        expect(testComponent).toBeTruthy();
    });

    it("render proper title", () => {
        debugElement = fixture.debugElement.query(By.css("mat-card-title"));
        expect(debugElement.nativeElement.textContent).toBe(testComponent.course.title);
    });

    describe("Delete button:", () => {
        it("render delete button", () => {
            expect(getButtonByText("Delete")).toBeTruthy();
        });

        it("should send remove event", () => {
            spyOn(testComponent, "onRemove");
            getButtonByText("Delete").triggerEventHandler("click", 777);
            expect(testComponent.onRemove).toHaveBeenCalledWith(777);
        });
    });
});

@Component({
    template: `
        <app-course-item [course]="course" (deleteCourse)="onRemove($event)"> </app-course-item>
    `
})
class TestCourseItemComponent {
    public course: Course = {
        id: 777,
        title: "Test course",
        creationDate: "2019-01-01",
        duration: 3600,
        description: "blablabla"
    };

    public onRemove(courseId: number): void {
        noop();
    }
}
