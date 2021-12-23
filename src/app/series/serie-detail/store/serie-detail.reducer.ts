import { createReducer, on } from "@ngrx/store";
import { AppendToResponseSerie } from "src/app/shared/shared.model";
import * as SerieDetailAction from "./serie-detail.actions";

export interface SerieDetailState{
  append: AppendToResponseSerie
}
const initialState: SerieDetailState = {
  append: {}
}
export const serieDetailReducer = createReducer(
  initialState,
  on(
    SerieDetailAction.GetSerieAllDetailSuccess, (state, action) => {
      return {
        ...state,
        append: action.append
      }
    }
  )
);
