import { createAction, props } from "@ngrx/store";
import { AppendToResponseSerie } from "src/app/shared/shared.model";

export const GET_SERIE_ALL_DETAIL = '[Serie Detail] Get Serie All Detail';
export const GET_SERIE_ALL_DETAIL_SUCCESS = '[Serie Detail] Get Serie All Detail Success';


export const GetSerieAllDetail = createAction(
  GET_SERIE_ALL_DETAIL
);

export const GetSerieAllDetailSuccess = createAction(
  GET_SERIE_ALL_DETAIL_SUCCESS,
  props<{append: AppendToResponseSerie}>()
)
