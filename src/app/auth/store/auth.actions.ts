import { createAction, props } from "@ngrx/store";
import { User } from "../user.model";


export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const SIGN_IN_START  = '[Auth] Sign In Start';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const LOGOUT = '[Auth] Logout';


export const LoginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
)

export const AutoLogin = createAction(
  AUTO_LOGIN
)

export const AuthenticateSuccess = createAction(
  AUTHENTICATE_SUCCESS,
  props<{user: User}>()
)

export const SignInStart = createAction(
  SIGN_IN_START,
  props<{email: string, password: string}>()
)

export const Logout = createAction(
  LOGOUT
)
