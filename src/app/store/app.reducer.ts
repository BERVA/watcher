
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as customSerializer from './router/custom-serializer';
import * as fromMovies from '../movies/store/movies.reducer';
import * as fromMovieDetail from '../movies/movie-detail/store/movie-detail.reducer';
import * as fromSeries from '../series/store/series.reducer';
import * as fromSerieDetail from '../series/serie-detail/store/serie-detail.reducer'

export interface AppState{
  movies: fromMovies.MoviesState;
  movie: fromMovieDetail.MovieDetailState;
  routerState: fromRouter.RouterReducerState<customSerializer.RouterStateUrl>
  series: fromSeries.SeriesState;
  serie: fromSerieDetail.SerieDetailState;
  credits: fromSerieDetail.SerieDetailState;

}

export const appReducer: ActionReducerMap<AppState, any> = {
  movies: fromMovies.moviesReducer,
  movie: fromMovieDetail.movieDetailReducer,
  routerState: fromRouter.routerReducer,
  series: fromSeries.moviesReducer,
  serie: fromSerieDetail.serieDetailReducer,
  credits: fromSerieDetail.serieDetailReducer
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<customSerializer.RouterStateUrl>>('router')
