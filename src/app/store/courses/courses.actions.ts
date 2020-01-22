import { AuthorResponse } from "./../../core/models/http-models";
/* tslint:disable:typedef */
import { createAction, props } from "@ngrx/store";

import { Course } from "src/app/courses-page/courses-list/models/course.model";

/**
 * Fetch courses
 */
export const fetchCourses = createAction(
    "[Courses] FETCH_COURSES",
    props<{
        request: {
            count: number;
            start: number;
        };
    }>()
);

/**
 * Fetch courses succeed
 */
export const fetchCoursesSuccess = createAction(
    "[Courses] FETCH_COURSES_SUCCESS",
    props<{
        courses: Course[];
    }>()
);

/**
 * Fetch courses failed
 */
export const fetchCoursesFail = createAction(
    "[Courses] FETCH_COURSES_FAIL",
    props<{
        message: string;
    }>()
);

/**
 * Search courses
 */
export const searchCourses = createAction(
    "[Courses] SEARCH_COURSES",
    props<{
        textFragment: string;
    }>()
);

/**
 * Search courses succeed
 */
export const searchCoursesSuccess = createAction(
    "[Courses] SEARCH_COURSES_SUCCESS",
    props<{
        courses: Course[];
    }>()
);

/**
 * Search courses failed
 */
export const searchCoursesFail = createAction(
    "[Courses] SEARCH_COURSES_FAIL",
    props<{
        message: string;
    }>()
);

/**
 * Create course
 */
export const createCourse = createAction(
    "[Courses] CREATE_COURSE",
    props<{
        course: Course;
    }>()
);

/**
 * Create course succeed
 */
export const createCourseSuccess = createAction("[Courses] CREATE_COURSE_SUCCESS");

/**
 * Create course failed
 */
export const createCourseFail = createAction(
    "[Courses] CREATE_COURSE_FAIL",
    props<{
        message: string;
    }>()
);

/**
 * Delete course
 */
export const deleteCourse = createAction(
    "[Courses] DELETE_COURSE",
    props<{
        id: number;
    }>()
);

/**
 * Delete course success
 */
export const deleteCourseSuccess = createAction("[Courses] DELETE_COURSE_SUCCESS");

/**
 * Delete course failed
 */
export const deleteCourseFail = createAction(
    "[Courses] DELETE_COURSE_FAIL",
    props<{
        message: string;
    }>()
);

export const openEditCourse = createAction(
    "[Courses] OPEN_EDIT_COURSE",
    props<{
        id: number;
    }>()
);

/**
 * Edit course
 */
export const editCourse = createAction(
    "[Courses] EDIT_COURSE",
    props<{
        course: Course;
    }>()
);

/**
 * Edit course success
 */
export const editCourseSuccess = createAction("[Courses] EDIT_COURSE_SUCCESS");

/**
 * Edit course failed
 */
export const editCourseFail = createAction(
    "[Courses] EDIT_COURSE_FAIL",
    props<{
        message: string;
    }>()
);

/**
 * Fetch authors
 */
export const fetchAuthors = createAction("[Courses] FETCH_AUTHORS");

/**
 * Fetch authors succeed
 */
export const fetchAuthorsSuccess = createAction(
    "[Courses] FETCH_AUTHORS_SUCCESS",
    props<{
        authors: AuthorResponse[];
    }>()
);

/**
 * Fetch authors failed
 */
export const fetchAuthorsFail = createAction(
    "[Courses] FETCH_AUTHORS_FAIL",
    props<{
        authors: [];
    }>()
);
