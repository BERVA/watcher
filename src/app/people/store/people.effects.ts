import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { DataService } from "src/app/shared/data.service";
import * as PeopleActions from "./people.actions";

@Injectable()
export class PeopleEffects {


  getPopularPerson$ = createEffect(
    () => this.actions$.pipe(
      ofType(PeopleActions.GetPopularPeople),
      switchMap(
        () => {
          return this.dataService.getPopularPeople().pipe(
            map(
              data => {
                return PeopleActions.GetPopularPeopleSuccess({ people: data})
              }
            )
          )
        }
      )
    )
  )


  constructor(
    private actions$ : Actions,
    private dataService: DataService
  ){

  }
}
