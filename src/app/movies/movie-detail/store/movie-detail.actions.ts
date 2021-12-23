import { createAction, props } from "@ngrx/store";
import { AppendToResponseMovie } from "src/app/shared/shared.model";

export const GET_MOVIE_ALL_DETAIL = '[Movies Detail] Get Movie All Detail';
export const GET_MOVIE_ALL_DETAIL_SUCCESS = '[Movies Detail] Get Movie All Detail Success';


export const GetMovieAllDetail = createAction(
  GET_MOVIE_ALL_DETAIL
);

export const GetMovieAllDetailSuccess = createAction(
  GET_MOVIE_ALL_DETAIL_SUCCESS,
  props<{append: AppendToResponseMovie}>()
)
