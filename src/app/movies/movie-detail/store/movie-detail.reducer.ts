import { createReducer, on } from "@ngrx/store";
import { AppendToResponseMovie } from "src/app/shared/shared.model";
import * as MovieDetailAction from "./movie-detail.actions";

export interface MovieDetailState{
  append: AppendToResponseMovie,
  trailer: string,
  error: String
}
const initialState: MovieDetailState = {
  append: {
    videos: {
      results: []
    }
  },
  trailer: null,
  error: null
}
export const movieDetailReducer = createReducer(
  initialState,
    on(
      MovieDetailAction.GetMovieAllDetailSuccess, (state, action) => {
        return{
          ...state,
          append: action.append
        }
      }
    ),
    on(
      MovieDetailAction.GetMovieTrailerSucess, (state, action) =>{
        return {
          ...state,
          trailer: action.trailer
        }
      }
    ),
    on(
      MovieDetailAction.OnMovieDetailError, (state, action) =>{
        return {
          ...state,
          error: action.error
        }
      }
    )
);
