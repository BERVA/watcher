
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as customSerializer from './router/custom-serializer';
import * as fromMovies from '../movies/store/movies.reducer';
import * as fromMovieDetail from '../movies/movie-detail/store/movie-detail.reducer';
import * as fromSeries from '../series/store/series.reducer';
import * as fromSerieDetail from '../series/serie-detail/store/serie-detail.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromPeople from "../people/store/people.reducer";
import * as fromPersonDetail from "../people/person-detail/store/person-detail.reducer";
import * as fromWatchList from "../watchlist/store/watchlist.reducers";
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';
import { SharedReducer } from './shared/shared.reducer';

export interface AppState{
  movies: fromMovies.MoviesState;
  movie: fromMovieDetail.MovieDetailState;
  routerState: fromRouter.RouterReducerState<customSerializer.RouterStateUrl>
  series: fromSeries.SeriesState;
  serie: fromSerieDetail.SerieDetailState;
  people: fromPeople.PeopleState,
  person: fromPersonDetail.PersonDetailState,
  auth: fromAuth.AuthState;
  watchList: fromWatchList.WatchListState;
  [SHARED_STATE_NAME]: SharedState;

}

export const appReducer: ActionReducerMap<AppState, any> = {
  movies: fromMovies.moviesReducer,
  movie: fromMovieDetail.movieDetailReducer,
  routerState: fromRouter.routerReducer,
  series: fromSeries.moviesReducer,
  serie: fromSerieDetail.serieDetailReducer,
  people: fromPeople.peopleReducer,
  person: fromPersonDetail.personDetailReducer,
  auth: fromAuth.authReducer,
  watchList: fromWatchList.watchListReducer,
  [SHARED_STATE_NAME]: SharedReducer
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<customSerializer.RouterStateUrl>>('routerState')
