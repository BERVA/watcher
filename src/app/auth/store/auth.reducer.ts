import { act } from "@ngrx/effects";
import { createReducer, on } from "@ngrx/store";
import { User } from "../user.model";
import * as AuthActions from './auth.actions';


export interface AuthState{
  user: User,
  authError: string,
  isAuthenticated: boolean
}

const authInitialState: AuthState = {
  user: null,
  authError: null,
  isAuthenticated: false
}


export const authReducer = createReducer(
  authInitialState,
  on(AuthActions.LoginStart, (state)=> {
    return{
      ...state,
      authError: null
    }
  }),
  on(AuthActions.AuthenticateSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      isAuthenticated: true
    }
  }),
  on(AuthActions.Logout, (state) => {
    return {
      ...state,
      user: null,
      isAuthenticated: false
    }
  }),
  on(AuthActions.AuthenticateFail, (state, action) => {
    return{
      ...state,
      authError: action.errorMessage
    }
  })

)
