import { createReducer, on } from "@ngrx/store";
import { Serie } from "../../serie.model";
import * as SerieDetailAction from "./serie-detail.actions";

export interface SerieDetailState{
  serie: Serie
}
const initialState: SerieDetailState = {
  serie : {}
}
export const serieDetailReducer = createReducer(
  initialState,
  on(SerieDetailAction.GetSerieDetailSuccess, (state, action) => {
    return {
      ...state,
      serie: action.serie
    }
  })
);
