import { Action, createReducer, on, ActionReducer } from "@ngrx/store";

import * as AuthActions from "./auth.actions";
import { UserInfoResponse } from "./../../core/models/http-models";

export const authFeatureKey: string = "auth";

export interface AuthState {
    isAuthorized: boolean;
    token: string;
    info: UserInfoResponse;
}

export const initialState: AuthState = {
    isAuthorized: false,
    token: undefined,
    info: undefined
};

const authReducer: ActionReducer<AuthState> = createReducer(
    initialState,
    on(AuthActions.fetchAuthTokenSuccess, (state, { token }) => ({ ...state, token, isAuthorized: true })),

    on(AuthActions.fetchAuthTokenFail, (state, { message }) => ({ ...state, message })),

    on(AuthActions.fetchUserInfoSuccess, (state, { info }) => ({ ...state, info })),

    on(AuthActions.fetchUserInfoFail, (state, { message }) => ({ ...state, message })),

    on(AuthActions.logOut, (state) => ({ ...state, info: undefined, token: undefined, isAuthorized: false }))
);

export function reducer(state: AuthState = initialState, action: Action): AuthState {
    return authReducer(state, action);
}
