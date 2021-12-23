import { createReducer, on } from "@ngrx/store";
import { Credits } from "src/app/series/serie.model";
import { AppendToResponseMovie, Media } from "src/app/shared/shared.model";
import { Movie } from "../../movie.model";
import * as MovieDetailAction from "./movie-detail.actions";

export interface MovieDetailState{
  movie: Movie,
  credits: Credits,
  media: Media,
  append: AppendToResponseMovie
}
const initialState: MovieDetailState = {
  movie : {},
  credits: {},
  media: {},
  append: {}
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
    )
);
