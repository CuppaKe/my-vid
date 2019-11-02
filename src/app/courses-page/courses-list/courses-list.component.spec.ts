import { By } from "@angular/platform-browser";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursesListComponent } from "./courses-list.component";
import { Course } from "./models/course.model";

const testCourses: Course[] = [
    {
        id: 1,
        title: "Course 1",
        creationDate: "2019-10-10",
        duration: 600,
        description: "Some text"
    }
];

describe("CoursesListComponent:", () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;
    let courseItem: DebugElement;
    let getButtonByText: Function;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesListComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        getButtonByText = (textContent: string) => {
            return fixture.debugElement
                .queryAll(By.css("button"))
                .find((el) => el.nativeElement.textContent.trim() === textContent);
        };
    });

    it("should init component", () => {
        expect(component).toBeTruthy();
    });

    describe("Event handling from course item component:", () => {
        beforeEach(() => {
            component.courses = testCourses;
            fixture.detectChanges();
            courseItem = fixture.debugElement.query(By.css("app-course-item"));
        });

        it("should handle remove course event", () => {
            spyOn(component, "onDeleteCourse");
            courseItem.triggerEventHandler("deleteCourse", 1);

            expect(component.onDeleteCourse).toHaveBeenCalledWith(1);
        });
    });

    it("should load more courses", () => {
        spyOn(console, "log");
        getButtonByText("Load more").triggerEventHandler("click");

        expect(console.log).toHaveBeenCalledWith("load more");
    });
});
