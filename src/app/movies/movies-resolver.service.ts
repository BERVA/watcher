import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import { Actions, ofType} from "@ngrx/effects";
import { map, switchMap, take } from "rxjs/operators";
import { of } from "rxjs";
import { Movie } from "./movie.model";
import * as MovieActions from "./store/movies.actions";

@Injectable({
  providedIn: 'root'
})

export class MoviesResolverService implements Resolve<Movie[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
    ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    return this.store.select('movies').pipe(
      take(1),
      map(resState => {
        return resState.movies;
      }),
      switchMap(movies => {
        if( movies.length === 0){
          this.store.dispatch(new (MovieActions.GetPopularMovies({movies}) as any))
            return this.actions$.pipe(
              ofType('[Movies] Get Popular Movies'),
              take(1)
            );
          } else {
            return of(movies);
          }
      })
    )
  }
}
