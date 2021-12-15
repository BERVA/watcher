import { createReducer, on } from "@ngrx/store";
import { Serie } from "../serie.model";
import * as SeriesActions from './series.actions';

export interface SeriesState{
  series: Serie[]
}
const seriesinitialState: SeriesState = {
  series: []
}
export const moviesReducer = createReducer(
  seriesinitialState,
  on(SeriesActions.GetPopularSeriesSuccess, (state, action) => {
    return {
      ...state,
      series: action.series
    }
  })
);
