
import { ActionReducerMap } from '@ngrx/store';
import * as fromMovies from '../movies/store/movies.reducer';

export interface AppState{
  movies: fromMovies.MoviesState;
}

export const appReducer: ActionReducerMap<AppState, any> = {
  movies: fromMovies.moviesReducer
}
