import { ActionReducerMap, createFeatureSelector, MetaReducer } from "@ngrx/store";

import { CoursesState, reducer as CoursesReducer, coursesFeatureKey } from "./courses/courses.reducer";
import { AuthState, reducer as AuthReducer, authFeatureKey } from "./auth/auth.reducer";

export interface State {
    courses: CoursesState;
    auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
    courses: CoursesReducer,
    auth: AuthReducer
};

export const getCoursesState: (root: Object) => CoursesState = createFeatureSelector<CoursesState>(coursesFeatureKey);

export const getAuthState: (root: Object) => AuthState = createFeatureSelector<AuthState>(authFeatureKey);
