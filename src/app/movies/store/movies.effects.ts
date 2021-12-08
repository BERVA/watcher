
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { DataService } from "src/app/shared/data.service";
import * as MoviesActions from "./movies.actions"



@Injectable()

export class MoviesEffects{

getPopularMovies$ = createEffect(
  () => this.actions$.pipe(
    ofType('[Movies] Get Popular Movies'),
    switchMap( action => {
      console.log('hello from popular');
      return this.dataService.getPopular('movie').pipe(
        map((data) => {
          console.log(data);
          return MoviesActions.GetPopularMoviesSuccess({movies: data})
        })
      )
    })
  )
)

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ){}
}
