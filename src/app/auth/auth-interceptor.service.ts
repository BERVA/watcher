import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { exhaustMap, map, Observable, take } from "rxjs";
import { AppState } from "../store/app.reducer";

export class AuthInterceptorService implements HttpInterceptor{
  constructor(
    private store: Store<AppState>
  ){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
      exhaustMap( user => {
        if(!user){
          return next.handle(req);
        } else {
          const modifiedReq = req.clone({params: new HttpParams().set('auth', user.token)});
          return next.handle(modifiedReq);
        }
      })
    )
  }
}
