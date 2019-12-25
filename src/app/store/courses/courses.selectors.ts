import { createSelector, Selector } from "@ngrx/store";

import { CoursesState } from "./courses.reducer";
import { Course } from "src/app/courses-page/courses-list/models/course.model";

/**
 * Courses
 */
export const getCourses: Selector<CoursesState, Course[]> = (state) => state.courses;

const getIdToEdit: Selector<CoursesState, number> = (state) => state.idToEdit;

/**
 * Course to edit
 */
export const getDataToEdit: Selector<CoursesState, Course> = createSelector(
    getCourses,
    getIdToEdit,
    (courses: Course[], id: number) => courses.find((course) => course.id === id)
);
