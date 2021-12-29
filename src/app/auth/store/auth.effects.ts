import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { Anahtar } from "src/app/shared/keys";
import { AuthResponseData, AuthService } from "../auth.service";
import { User } from "../user.model";
import * as fromAuthActions from "./auth.actions";

const handleAuthentication = (email: string, userId: string, idToken:string, expiresIn: number) => {
  const expirationDate = new Date( new Date().getTime() + (+expiresIn * 1000));
  const authenticatedUser = new User(email,userId,idToken,expirationDate)
  localStorage.setItem('userData', JSON.stringify(authenticatedUser))
  return fromAuthActions.AuthenticateSuccess({ user: authenticatedUser});
}
const handleError = (errorRes: HttpErrorResponse) => {
  let errorMessage = "An error occured!";
  if(!errorRes.error || !errorRes.error.error){
    return of(fromAuthActions.AuthenticateFail({errorMessage: errorMessage}));
  } else {
    switch (errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errorMessage= 'The email address is already in use by another account.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'User not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is invalid';
        break;
      case 'USER_DISABLED':
        errorMessage = 'The user account has been disabled.';
        break;
      default:
        errorMessage = 'An unknown error occurred!';
        break;
    }
    return of(fromAuthActions.AuthenticateFail({errorMessage: errorMessage}))
  }
}
@Injectable()
export class AuthEffects{
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient,
    private anahtar: Anahtar
  ){}
  authLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.LoginStart),
      exhaustMap((action) => {
        return this.http
        .post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.anahtar.firebase}`,
        {
        email: action.email,
         password: action.password,
        returnSecureToken: true
        })
        .pipe(
          tap(
            data => {
              this.authService.setLogoutTimer(+data.expiresIn * 1000);
            }
          ),
          map(
            data => {
              return handleAuthentication(data.email, data.localId, data.idToken, +data.expiresIn);
            }
          ),
          catchError( (err: HttpErrorResponse) => {
           return handleError(err)
          })
        )
      })
    )
  )
  authSignIn = createEffect(
    () => this.actions$.pipe(
      ofType(fromAuthActions.SignInStart),
      exhaustMap((action) => {
        return this.http
        .post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.anahtar.firebase}`,
        {
        email: action.email,
        password: action.password,
        returnSecureToken: true
        })
        .pipe(
          tap(
            data => {
              this.authService.setLogoutTimer(+data.expiresIn * 1000)
            }
          ),
          map(
            data => {
              return handleAuthentication(data.email, data.localId, data.idToken, +data.expiresIn);
            }
          ),
          catchError( (err: HttpErrorResponse) => {
            return handleError(err)
           })
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
              const expirationDuration = tokenExpirationDate.getTime() - new Date().getTime();
              this.authService.setLogoutTimer(expirationDuration);
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
              localStorage.removeItem('userData');
              this.authService.clearLogoutTimer();
              this.router.navigate(['/auth']);
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
