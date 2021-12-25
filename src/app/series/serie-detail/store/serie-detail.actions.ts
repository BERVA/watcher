import { createAction, props } from "@ngrx/store";
import { AppendToResponseSerie } from "src/app/shared/shared.model";

export const GET_SERIE_ALL_DETAIL = '[Serie Detail] Get Serie All Detail';
export const GET_SERIE_ALL_DETAIL_SUCCESS = '[Serie Detail] Get Serie All Detail Success';
export const GET_SERIE_TRAILER = '[Serie Detail] Get Serie Trailer';
export const GET_SERIE_TRAILER_SUCCESS = '[Serie Detail] Get MoSerievie Trailer Success';
export const ON_SERIE_DETAIL_ERROR = '[Serie Detail] On Serie Error';


export const GetSerieAllDetail = createAction(
  GET_SERIE_ALL_DETAIL
);

export const GetSerieAllDetailSuccess = createAction(
  GET_SERIE_ALL_DETAIL_SUCCESS,
  props<{append: AppendToResponseSerie}>()
);

export const GetSerieTrailer = createAction(
  GET_SERIE_TRAILER
);

export const GetSerieTrailerSucces = createAction(
  GET_SERIE_TRAILER_SUCCESS,
  props<{trailer: string}>()
)

export const OnSerieDetailError = createAction(
  ON_SERIE_DETAIL_ERROR,
  props<{error: string}>()
)
