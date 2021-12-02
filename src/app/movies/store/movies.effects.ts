import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs";
import { Movie } from "../movie.model";
import { MoviesService } from "../movies.service";
import * as MoviesActions from "./movies.actions"



@Injectable()

export class MoviesEffects{

  getPopularMovies$ = createEffect(
    () => this.actions$.pipe(
      ofType('[Movies] Get Popular Movies'),
      mergeMap( action => {
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
    private http: HttpClient,
    private moviesService: MoviesService
  ){}
}
