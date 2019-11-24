import { Injectable } from "@angular/core";

import { courses } from "./constants";
import { Course } from "../courses-page/courses-list/models/course.model";

@Injectable({
    providedIn: "root"
})
export class CoursesService {
    /**
     * List of course
     */
    private courses: Course[];

    constructor() {
        this.courses = courses;
    }

    public getList(): Course[] {
        return this.courses;
    }

    public createCourse(item: Course): void {
        this.courses.push(item);
    }

    public getCourseById(id: number): Course {
        return this.courses.find((item) => item.id === id);
    }

    public updateCourse(changedItem: Course): void {}

    public removeCourse(id: number): void {
        this.courses = this.courses.filter((item) => item.id !== id);
        console.log(id, this.courses);
    }
}
