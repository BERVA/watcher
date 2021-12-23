import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PersonDetailActions from "./person-detail.actions";
import { filter, map, switchMap } from "rxjs";
import { DataService } from "src/app/shared/data.service";
import { RouterNavigatedAction, ROUTER_NAVIGATION } from "@ngrx/router-store";

@Injectable()
export class PersonDetailEffects {

  getPersonDetail$ = createEffect(
    () => this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/person/')
      }),
      switchMap(
        (url) => {
          const reqUrl = url.payload.routerState['url'];
          return this.dataService.getPersonDetail(reqUrl).pipe(
            map(data => {
              console.log(data);
              return PersonDetailActions.GetPersonDetailSuccess({person: data})
            })
          )
        }
      )
    )
  )

  constructor(
    private actions$ : Actions,
    private dataService: DataService
  ){}

}
