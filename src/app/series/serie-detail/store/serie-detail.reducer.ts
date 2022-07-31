import { createReducer, on } from "@ngrx/store";
import { AppendToResponseSerie } from "src/app/shared/shared.model";
import * as SerieDetailAction from "./serie-detail.actions";

export interface SerieDetailState{
  append: AppendToResponseSerie,
  trailer: string,
  error: string
}
const initialState: SerieDetailState = {
  append: {},
  trailer: null,
  error: null
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
  ),
  on(
    SerieDetailAction.GetSerieTrailerSucces, (state, action) => {
      return{
        ...state,
        trailer: action.trailer
      }
    }
  ),
  on(
    SerieDetailAction.OnSerieDetailError, (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(
    SerieDetailAction.OnSerieDetailClear, (state, action) => {
      return {
        ...state,
        append: action.append
      }
    }
  )
);
