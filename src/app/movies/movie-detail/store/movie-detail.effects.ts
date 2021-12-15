import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, switchMap } from "rxjs";
import * as MovieDetailActions from "./movie-detail.actions";
import { DataService } from "src/app/shared/data.service";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { setLoadingSpinner } from "src/app/store/shared/shared.actions";

@Injectable()

export class MovieDetailEffects{
  getMovieDetail$ = createEffect(
    ()=> this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => {
        return r.payload.routerState.url.startsWith('/movies/')
      }),
      switchMap(
        (url) => {
          this.store.dispatch(setLoadingSpinner({status: true}))
          const reqUrl = url.payload.routerState['url']
          const newReq =  reqUrl.replace('movies', 'movie')
          return this.dataService.getData(newReq).pipe(
            map(data => {
              this.store.dispatch(setLoadingSpinner({status: false}))
              return MovieDetailActions.GetMovieDetailSuccess({ movie: data});
            })
          );
        }
      )
  ))
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<AppState>
  ){}
}
