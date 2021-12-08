
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { DataService } from "src/app/shared/data.service";
import * as SeriesActions from "./series.actions"



@Injectable()

export class SeriesEffects{

  getPopularSeries$ = createEffect(
    () => this.actions$.pipe(
      ofType(SeriesActions.GET_POPULAR_SERIES),
      switchMap(
        action => {
          return this.dataService.getPopular('tv').pipe(
            map(
              data => {
                return SeriesActions.GetPopularSeriesSuccess({series: data})
              }
            )
          )
        }
      )
    )
  )

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ){}
}
