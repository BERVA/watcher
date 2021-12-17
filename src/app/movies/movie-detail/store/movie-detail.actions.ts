import { createAction, props } from "@ngrx/store";
import { Credits } from "src/app/series/serie.model";
import { Movie } from "../../movie.model";

export const GET_MOVIE_DETAIL = '[Movies Detail] Get Movies Detail';
export const GET_MOVIE_DETAIL_SUCCESS= '[Movies Detail] Get Movie Detail Success';
export const GET_MOVIE_CREDITS = '[Movie Detail] Get Movie Credits';


export const GetMovieDetail = createAction(
  '[Movies Detail] Get Movies Detail'
);

export const GetMovieDetailSuccess = createAction(
  GET_MOVIE_DETAIL_SUCCESS,
  props<{movie: Movie}>()
)

export const GetMovieCredits = createAction(
  GET_MOVIE_CREDITS,
  props<{credits: Credits}>()
)
