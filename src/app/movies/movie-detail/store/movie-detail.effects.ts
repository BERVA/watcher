import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, switchMap } from "rxjs";
import * as MovieDetailActions from "./movie-detail.actions";
import { DataService } from "src/app/shared/data.service";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";

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
          const reqUrl = url.payload.routerState['url']
          const newReq =  reqUrl.replace('movies', 'movie')
          return this.dataService.getData(newReq).pipe(
            map(data => {
              return MovieDetailActions.GetMovieDetailSuccess({ movie: data});
            })
          );
        }
      )
  ))
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ){}
}
