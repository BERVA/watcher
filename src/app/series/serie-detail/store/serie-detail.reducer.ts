import { createReducer, on } from "@ngrx/store";
import { Credits, Serie } from "../../serie.model";
import * as SerieDetailAction from "./serie-detail.actions";

export interface SerieDetailState{
  serie: Serie,
  credits: Credits
}
const initialState: SerieDetailState = {
  serie : {},
  credits: {}
}
export const serieDetailReducer = createReducer(
  initialState,
  on(SerieDetailAction.GetSerieDetailSuccess, (state, action) => {
    return {
      ...state,
      serie: action.serie
    }
  }),
  on(SerieDetailAction.GetSerieCredit, (state, action)=> {
    return {
      ...state,
      credits: action.credits
    }
  })
);
