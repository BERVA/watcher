
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromMovies from '../movies/store/movies.reducer';
import * as fromMovieDetail from '../movies/movie-detail/store/movie-detail.reducer';
import * as fromRouter from '@ngrx/router-store';
import * as customSerializer from './router/custom-serializer';

export interface AppState{
  movies: fromMovies.MoviesState;
  movie: fromMovieDetail.MovieDetailState;
  routerState: fromRouter.RouterReducerState<customSerializer.RouterStateUrl>
}

export const appReducer: ActionReducerMap<AppState, any> = {
  movies: fromMovies.moviesReducer,
  movie: fromMovieDetail.movieDetailReducer,
  routerState: fromRouter.routerReducer
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<customSerializer.RouterStateUrl>>('router')
