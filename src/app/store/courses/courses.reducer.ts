import { Action, createReducer, on, ActionReducer } from "@ngrx/store";

import { Course } from "src/app/courses-page/courses-list/models/course.model";
import * as CoursesActions from "./courses.actions";

export const coursesFeatureKey: string = "courses";

export interface CoursesState {
    courses: Course[];
    message: string;
    idToEdit: number;
}

export const initialState: CoursesState = {
    courses: [],
    message: undefined,
    idToEdit: undefined
};

const coursesReducer: ActionReducer<CoursesState> = createReducer(
    initialState,
    on(CoursesActions.fetchCoursesSuccess, (state, { courses }) => ({ ...state, courses })),

    on(CoursesActions.fetchCoursesFail, (state, { message }) => ({ ...state, message })),

    on(CoursesActions.searchCoursesSuccess, (state, { courses }) => ({ ...state, courses })),

    on(CoursesActions.searchCoursesFail, (state, { message }) => ({ ...state, message })),

    on(CoursesActions.openEditCourse, (state, { id }) => ({ ...state, idToEdit: id }))
);

export function reducer(state: CoursesState = initialState, action: Action): CoursesState {
    return coursesReducer(state, action);
}
