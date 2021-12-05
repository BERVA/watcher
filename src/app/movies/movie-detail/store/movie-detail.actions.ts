import { createAction, props } from "@ngrx/store";
import { Movie } from "../../movie.model";

export const GET_MOVIE_DETAIL = '[Movies Detail] Get Movies Detail';
export const GET_MOVIE_DETAIL_SUCCESS= '[Movies Detail] Get Movie Detail Success';


export const GetMovieDetail = createAction(
  '[Movies Detail] Get Movies Detail'
);

export const GetMovieDetailSuccess = createAction(
  GET_MOVIE_DETAIL_SUCCESS,
  props<{movie: Movie}>()
)
