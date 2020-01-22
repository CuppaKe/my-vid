import { Injectable } from "@angular/core";
import { Store, createSelector } from "@ngrx/store";
import { Observable } from "rxjs";

import { Course } from "src/app/courses-page/courses-list/models/course.model";
import * as CoursesActions from "../store/courses/courses.actions";
import { getCourses, getDataToEdit, getAuthors } from "./../store/courses/courses.selectors";
import { State, getCoursesState } from "./../store/index";
import { AuthorResponse } from "./models/http-models";

/**
 * Courses service
 */
@Injectable({
    providedIn: "root"
})
export class CoursesService {
    /**
     * Courses
     */
    public courses$: Observable<Course[]>;

    /**
     * Course to edit
     */
    public editData$: Observable<Course>;

    /**
     * Authors list
     */
    public authors$: Observable<AuthorResponse[]>;

    constructor(private store: Store<State>) {
        this.courses$ = this.store.select(
            createSelector(
                getCoursesState,
                getCourses
            )
        );

        this.editData$ = this.store.select(
            createSelector(
                getCoursesState,
                getDataToEdit
            )
        );

        this.authors$ = this.store.select(
            createSelector(
                getCoursesState,
                getAuthors
            )
        );
    }

    /**
     * Fetches courses
     * @param count - number - quantity of courses
     * @param start - number - index from which to start load new courses
     */
    public getList(count: number, start: number = 0): void {
        this.store.dispatch(CoursesActions.fetchCourses({ request: { count, start } }));
    }

    /**
     * Fetch courses according to search text
     * @param textFragment - string - search text
     */
    public search(textFragment: string): void {
        this.store.dispatch(CoursesActions.searchCourses({ textFragment }));
    }

    /**
     * Create new course
     * @param item - Course - new course to create
     */
    public createCourse(course: Course): void {
        this.store.dispatch(CoursesActions.createCourse({ course }));
    }

    /**
     * Open course to edit
     * @param id - number - course id
     */
    public openEditCourse(id: number): void {
        this.store.dispatch(CoursesActions.openEditCourse({ id }));
        this.fetchAuthors();
    }

    /**
     * Update course
     * @param course - Course - course to update
     */
    public editCourse(course: Course): void {
        this.store.dispatch(CoursesActions.editCourse({ course }));
    }

    /**
     * Deletes course
     * @param id - number - course id
     */
    public removeCourse(id: number): void {
        this.store.dispatch(CoursesActions.deleteCourse({ id }));
    }

    /**
     * Fetches authors list
     */
    public fetchAuthors(): void {
        this.store.dispatch(CoursesActions.fetchAuthors());
    }
}
