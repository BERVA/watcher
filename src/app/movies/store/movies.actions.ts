import { createAction, props } from "@ngrx/store";
import { Movie } from "../movie.model";

export const GET_POPULAR_MOVIES = '[Movies] Get Popular Movies';
export const GET_POPULAR_MOVIES_SUCCESS = '[Movies] Get Popular Movies Success';

export const GetPopularMovies = createAction(
  '[Movies] Get Popular Movies'
);

export const GetPopularMoviesSuccess = createAction(
  GET_POPULAR_MOVIES_SUCCESS,
  props<{ movies: Movie[]}>()
)
