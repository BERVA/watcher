import { createReducer, on } from "@ngrx/store";
import { Movie } from "../../movie.model";
import * as MoviesAction from "./movie-detail.actions";

export interface MovieDetailState{
  movie: Movie
}
const initialState: MovieDetailState = {
  movie : {}
}
export const movieDetailReducer = createReducer(
  initialState,
  on(MoviesAction.GetMovieDetailSuccess, (state, action) => {
    return {
      ...state,
      movie: action.movie
    }
  })
);
