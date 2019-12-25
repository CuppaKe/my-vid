import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, switchMap, filter, distinctUntilChanged, debounceTime, catchError, concatMap } from "rxjs/operators";

import * as CoursesActions from "./courses.actions";
import { CourseResponse } from "src/app/core/models/http-models";
import { courseResponsetoCourseMapper, CoursetoCourseResponse } from "src/app/core/helpers/courses.mappers";

/**
 * Courses effects
 */
@Injectable()
export class CoursesEffects {
    /**
     * Fetch courses effect
     */
    public fetchCourses$: Observable<Action>;

    /**
     * Search courses effect
     */
    public searchCourses$: Observable<Action>;

    /**
     * Create course effect
     */
    public createCourse$: Observable<Action>;

    /**
     * Delete course effect
     */
    public deleteCourse$: Observable<Action>;

    /**
     * Edit course effect
     */
    public editCourse$: Observable<Action>;

    constructor(private actions$: Actions, private http: HttpClient) {
        this.fetchCourses$ = createEffect(() => this.createFetchCoursesEffect());
        this.searchCourses$ = createEffect(() => this.createSearchCoursesEffect());
        this.createCourse$ = createEffect(() => this.createCreateCourseEffect());
        this.deleteCourse$ = createEffect(() => this.createDeleteCourseEffect());
        this.editCourse$ = createEffect(() => this.createEditCourseEffect());
    }

    private createFetchCoursesEffect(): Observable<Action> {
        return this.actions$.pipe(
            ofType(CoursesActions.fetchCourses),
            map((action) => action.request),
            switchMap(({ count, start }) =>
                this.http
                    .get("http://localhost:3004/courses/", {
                        params: { start: start.toString(), count: count.toString() }
                    })
                    .pipe(
                        map((coursesResponse: CourseResponse[]) => coursesResponse.map(courseResponsetoCourseMapper)),
                        map((courses) => CoursesActions.fetchCoursesSuccess({ courses })),
                        catchError(() => of(CoursesActions.fetchCoursesFail({ message: "fetch courses failed" })))
                    )
            )
        );
    }

    private createSearchCoursesEffect(): Observable<Action> {
        return this.actions$.pipe(
            ofType(CoursesActions.searchCourses),
            map((action) => action.textFragment),
            filter((textFragment: string) => textFragment.length >= 3),
            debounceTime(1000),
            distinctUntilChanged(),
            switchMap((textFragment: string) =>
                this.http.get("http://localhost:3004/courses/", { params: { textFragment } }).pipe(
                    map((coursesResponse: CourseResponse[]) => coursesResponse.map(courseResponsetoCourseMapper)),
                    map((courses) => CoursesActions.searchCoursesSuccess({ courses })),
                    catchError(() => of(CoursesActions.searchCoursesFail({ message: "search courses failed" })))
                )
            )
        );
    }

    private createCreateCourseEffect(): Observable<Action> {
        return this.actions$.pipe(
            ofType(CoursesActions.createCourse),
            map((action) => action.course),
            switchMap((course) =>
                this.http.post("http://localhost:3004/courses/", CoursetoCourseResponse(course)).pipe(
                    map(() => CoursesActions.createCourseSuccess()),
                    catchError(() => of(CoursesActions.createCourseFail({ message: "create course failed" })))
                )
            )
        );
    }

    private createDeleteCourseEffect(): Observable<Action> {
        return this.actions$.pipe(
            ofType(CoursesActions.deleteCourse),
            map((action) => action.id),
            switchMap((id) =>
                this.http.delete(`http://localhost:3004/courses/${id}`).pipe(
                    concatMap(() => [
                        CoursesActions.deleteCourseSuccess(),
                        CoursesActions.fetchCourses({ request: { count: 5, start: 0 } })
                    ]),
                    catchError(() => of(CoursesActions.deleteCourseFail({ message: "delete course failed" })))
                )
            )
        );
    }

    private createEditCourseEffect(): Observable<Action> {
        return this.actions$.pipe(
            ofType(CoursesActions.editCourse),
            map((action) => action.course),
            map((course) => CoursetoCourseResponse(course)),
            switchMap((course) =>
                this.http.patch(`http://localhost:3004/courses/${course.id}`, course).pipe(
                    concatMap(() => [
                        CoursesActions.editCourseSuccess(),
                        CoursesActions.fetchCourses({ request: { count: 5, start: 0 } })
                    ]),
                    catchError(() => of(CoursesActions.deleteCourseFail({ message: "edit course failed" })))
                )
            )
        );
    }
}
