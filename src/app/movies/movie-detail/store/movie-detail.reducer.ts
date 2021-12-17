import { createReducer, on } from "@ngrx/store";
import { Credits } from "src/app/series/serie.model";
import { Movie } from "../../movie.model";
import * as MovieDetailAction from "./movie-detail.actions";

export interface MovieDetailState{
  movie: Movie,
  credits: Credits
}
const initialState: MovieDetailState = {
  movie : {},
  credits: {}
}
export const movieDetailReducer = createReducer(
  initialState,
  on(MovieDetailAction.GetMovieDetailSuccess, (state, action) => {
    return {
      ...state,
      movie: action.movie
    }
  }),
  on(
     MovieDetailAction.GetMovieCredits, (state, action) => {
       return {
         ...state,
         credits: action.credits
       }
     }
    )
);
