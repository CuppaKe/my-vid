import { Selector } from "@ngrx/store";

import { AuthState } from "./auth.reducer";

/**
 * Whether user is authorized
 */
export const getIsAuthorized: Selector<AuthState, boolean> = (state) => state.isAuthorized;

/**
 * Full user name
 */
export const getUserFullName: Selector<AuthState, string> = (state) => {
    const userName: { [key: string]: string } = state.info && state.info.name;
    return userName && `${userName.first} ${userName.last}`;
};

/**
 * Authorization token
 */
export const getToken: Selector<AuthState, string> = (state) => state.token;
