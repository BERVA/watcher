import { createAction, props } from "@ngrx/store";
import { Credits, Serie } from "../../serie.model";

export const GET_SERIE_DETAIL = '[Serie Detail] Get Serie Detail';
export const GET_SERIE_DETAIL_SUCCESS= '[Serie Detail] Get Serie Detail Success';
export const GET_SERIE_CREDIT = '[Serie Detail] Get Serie Credit';


export const GetSerieDetail = createAction(
  GET_SERIE_DETAIL
);

export const GetSerieDetailSuccess = createAction(
  GET_SERIE_DETAIL_SUCCESS,
  props<{serie: Serie}>()
)

export const GetSerieCredit = createAction(
  GET_SERIE_CREDIT,
  props<{credits: Credits}>()
)
