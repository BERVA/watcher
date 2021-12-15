import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "../auth.service";
import { User } from "../user.model";
import * as fromAuthActions from "./auth.actions";

const handleAuthentication = (email: string, userId: string, idToken:string, expiresIn: number) => {
  const expirationDate = new Date( new Date().getTime() + (+expiresIn * 1000));
  const authenticatedUser = new User(email,userId,idToken,expirationDate)
  localStorage.setItem('userData', JSON.stringify(authenticatedUser))
  return fromAuthActions.AuthenticateSuccess({ user: authenticatedUser});
}

@Injectable()
export class AuthEffects{
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ){}
  authLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.LoginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map(
            (data) => {
              return handleAuthentication(data.email, data.localId, data.idToken, +data.expiresIn);
            }
          )
        )
      })
    )
  )
  authSignIn = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.SignInStart),
      exhaustMap((action) => {
        return this.authService.singup(action.email, action.password).pipe(
          map(
            (data) => {
              return handleAuthentication(data.email, data.localId, data.idToken, +data.expiresIn);
            }
          )
        )
      })
    )
  )

  authAutoLogin = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.AutoLogin),
      map(
        action => {
          const userData: {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
            } = JSON.parse(localStorage.getItem('userData'));

            if(!userData){
              return { type: 'No Effect'};
            }
            const tokenExpirationDate = new Date(userData._tokenExpirationDate);

            const loadedUser = new User(
              userData.email,
              userData.id,
              userData._token,
              tokenExpirationDate
            );

            if(loadedUser.token){
              return  fromAuthActions.AuthenticateSuccess({user: loadedUser});
            }
            return {type: 'No Effect'}
        }
      )

    )
  )

  authLogout = createEffect(() =>
  this.actions$.pipe
    (
      ofType(fromAuthActions.Logout),
        map(
          (logoutaction) =>
          {
            if(logoutaction){
              localStorage.removeItem('userData')
              this.router.navigate(['/auth'])
            }
          }
        )
    )
  ,{dispatch: false}
);
  authRedirect = createEffect(() =>
  this.actions$.pipe
    (
      ofType(fromAuthActions.AuthenticateSuccess),
        map(
          (authSuccesAction) =>
          {
            if(authSuccesAction.user){
              this.router.navigate(['/movies'])
            }
          }
        )
    )
  ,{dispatch: false}
);
}
