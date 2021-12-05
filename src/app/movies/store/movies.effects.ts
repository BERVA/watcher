
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { MoviesService } from "../movies.service";
import * as MoviesActions from "./movies.actions"



@Injectable()

export class MoviesEffects{
 getPopularMovies$ = createEffect(
    () => this.actions$.pipe(

      ofType('[Movies] Get Popular Movies'),
      switchMap( action => {
        console.log('hello from popular');
        return this.moviesService.getPopular().pipe(
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
    private moviesService: MoviesService
  ){}
}
