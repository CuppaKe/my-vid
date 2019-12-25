/* tslint:disable:typedef */
import { createAction, props } from "@ngrx/store";

import { User } from "src/app/login-page/models/user.model";
import { UserInfoResponse } from "src/app/core/models/http-models";

/**
 * Fetches authorization token
 */
export const fetchAuthToken = createAction(
    "[Auth] FETCH_AUTH_TOKEN",
    props<{
        user: User;
    }>()
);

/**
 * Fetches authorization token succeed
 */
export const fetchAuthTokenSuccess = createAction(
    "[Auth] FETCH_AUTH_TOKEN_SUCCESS",
    props<{
        token: string;
    }>()
);

/**
 * Fetches authorization token failed
 */
export const fetchAuthTokenFail = createAction(
    "[Auth] FETCH_AUTH_TOKEN_FAIL",
    props<{
        message: string;
    }>()
);

/**
 * Fetches user info
 */
export const fetchUserInfo = createAction(
    "[Auth] FETCH_USER_INFO",
    props<{
        token: string;
    }>()
);

/**
 * Fetches user info succeed
 */
export const fetchUserInfoSuccess = createAction(
    "[Auth] FETCH_USER_INFO_SUCCESS",
    props<{
        info: UserInfoResponse;
    }>()
);

/**
 * Fetches user info failed
 */
export const fetchUserInfoFail = createAction(
    "[Auth] FETCH_USER_INFO_FAIL",
    props<{
        message: string;
    }>()
);

/**
 * Log out user
 */
export const logOut = createAction("[Auth] LOG_OUT");
