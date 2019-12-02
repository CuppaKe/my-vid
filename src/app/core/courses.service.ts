import { BehaviorSubject, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

import { courses } from "./constants";
import { Course } from "../courses-page/courses-list/models/course.model";

@Injectable({
    providedIn: "root"
})
export class CoursesService {
    private coursesBF: BehaviorSubject<Course[]> = new BehaviorSubject(courses);

    public getList(): Observable<Course[]> {
        return this.coursesBF.asObservable();
    }

    public createCourse(item: Course): void {
        this.coursesBF.next(this.getLastList().concat({ ...item, id: this.setIndex() }));
    }

    public getCourseById(id: number): Observable<Course> {
        return of(this.getLastList().find((item) => item.id === id));
    }

    public updateCourse(changedItem: Course): void {
        this.coursesBF.next(
            this.getLastList().map((oldCourse: Course) => (oldCourse.id === changedItem.id ? changedItem : oldCourse))
        );
    }

    public removeCourse(id: number): void {
        this.coursesBF.next(this.getLastList().filter((item) => item.id !== id));
    }

    private getLastList(): Course[] {
        return this.coursesBF.value;
    }

    private setIndex(): number {
        return Math.max(...this.getLastList().map((course) => course.id)) + 1;
    }
}
