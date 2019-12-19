import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, first } from "rxjs/operators";
import { BehaviorSubject, Observable, of } from "rxjs";

import { courseResponsetoCourseMapper, CoursetoCourseResponse } from "./helpers/courses.mappers";
import { Course } from "src/app/courses-page/courses-list/models/course.model";
import { CourseResponse } from "./models/http-models";

@Injectable({
    providedIn: "root"
})
export class CoursesService {
    /**
     * Courses store
     */
    public coursesBF: BehaviorSubject<Course[]> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {}

    /**
     * Fetches courses
     * @param count - number - quantity of courses
     * @param start - number - index from which to start load new courses
     */
    public getList(count: number, start: number = 0): void {
        this.http
            .get("http://localhost:3004/courses/", { params: { start: start.toString(), count: count.toString() } })
            .pipe(
                first(),
                map((coursesResponse: CourseResponse[]) => coursesResponse.map(courseResponsetoCourseMapper))
            )
            .subscribe((courses) => this.coursesBF.next(courses));
    }

    /**
     * Fetch courses according to search text
     * @param textFragment - string - search text
     */
    public search(textFragment: string): void {
        this.http
            .get("http://localhost:3004/courses/", { params: { textFragment } })
            .pipe(
                first(),
                map((coursesResponse: CourseResponse[]) => coursesResponse.map(courseResponsetoCourseMapper))
            )
            .subscribe((courses) => this.coursesBF.next(courses));
    }

    /**
     * Create new course
     * @param item - Course - new course to create
     */
    public createCourse(item: Course): void {
        this.http
            .post("http://localhost:3004/courses/", CoursetoCourseResponse(item))
            .pipe(first())
            .subscribe();
    }

    /**
     * Return course by id
     * @param id - number - course id
     */
    public getCourseById(id: number): Observable<Course> {
        return of(this.getLastList().find((item) => item.id === id));
    }

    /**
     * Update course
     * @param changedItem - Course - course to update
     */
    public updateCourse(changedItem: Course): void {
        this.coursesBF.next(
            this.getLastList().map((oldCourse: Course) => (oldCourse.id === changedItem.id ? changedItem : oldCourse))
        );
    }

    /**
     * Deletes course
     * @param id - number - course id
     */
    public removeCourse(id: number): void {
        this.http
            .delete(`http://localhost:3004/courses/${id}`)
            .pipe(first())
            .subscribe();
        this.getList(5);
    }

    private getLastList(): Course[] {
        return this.coursesBF.value;
    }
}
