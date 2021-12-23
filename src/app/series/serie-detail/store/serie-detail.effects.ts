import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, switchMap } from "rxjs";
import * as SerieDetailActions from "./serie-detail.actions";
import { DataService } from "src/app/shared/data.service";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../store/app.reducer";

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
          return this.dataService.getDetail(newReq).pipe(
            map(data => {
              return SerieDetailActions.GetSerieAllDetailSuccess({ append: data});
            })
          );
        }
      )
  ));

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<fromApp.AppState>
  ){}
}
