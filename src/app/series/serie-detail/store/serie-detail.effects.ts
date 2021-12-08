import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, switchMap } from "rxjs";
import * as SerieDetailActions from "./serie-detail.actions";
import { DataService } from "src/app/shared/data.service";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";

@Injectable()

export class SerieDetailEffects{
  getSerieDetail$ = createEffect(
    ()=> this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => {
        return r.payload.routerState.url.startsWith('/series/')
      }),
      switchMap(
        (url) => {
          const reqUrl = url.payload.routerState['url']
          const newReq =  reqUrl.replace('series', 'tv')
          return this.dataService.getData(newReq).pipe(
            map(data => {
              return SerieDetailActions.GetSerieDetailSuccess({ serie: data});
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
