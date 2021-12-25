import { createAction, props } from "@ngrx/store";
import { AppendToResponseMovie } from "src/app/shared/shared.model";

export const GET_MOVIE_ALL_DETAIL = '[Movies Detail] Get Movie All Detail';
export const GET_MOVIE_ALL_DETAIL_SUCCESS = '[Movies Detail] Get Movie All Detail Success';
export const GET_MOVIE_TRAILER = '[Movies Detail] Get Movie Trailer';
export const GET_MOVIE_TRAILER_SUCCESS = '[Movies Detail] Get Movie Trailer Success';
export const ON_MOVIE_DETAIL_ERROR = '[Movies Detail] On Error';


export const GetMovieAllDetail = createAction(
  GET_MOVIE_ALL_DETAIL
);

export const GetMovieAllDetailSuccess = createAction(
  GET_MOVIE_ALL_DETAIL_SUCCESS,
  props<{append: AppendToResponseMovie}>()
)

export const GetMovieTrailer = createAction(
  GET_MOVIE_TRAILER
)

export const GetMovieTrailerSucess = createAction(
  GET_MOVIE_TRAILER_SUCCESS,
  props<{trailer: string}>()
)

export const OnMovieDetailError = createAction(
  ON_MOVIE_DETAIL_ERROR,
  props<{error: String}>()
)
