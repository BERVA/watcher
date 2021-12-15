import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

const getAuthState = createFeatureSelector<AuthState>(
  'auth'
)


export const getUser = createSelector(
  getAuthState,
  (state: AuthState) => state.user
)


export const getUserMail = createSelector(
  getAuthState,
  (state: AuthState) => state.user.email
)

export const getAuthenticated = createSelector(
  getAuthState,
  (state: AuthState) => state.isAuthenticated
)
