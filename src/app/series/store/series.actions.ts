import { createAction, props } from "@ngrx/store";
import { Serie } from "../serie.model";



export const GET_POPULAR_SERIES = '[Series] Get Popular Series';
export const GET_POPULAR_SERIES_SUCCESS = '[Series] Get Popular Series Success';


export const GetPopularSeries = createAction(
  GET_POPULAR_SERIES
);

export const GetPopularSeriesSuccess = createAction(
  GET_POPULAR_SERIES_SUCCESS,
  props<{ series: Serie[]}>()
)
