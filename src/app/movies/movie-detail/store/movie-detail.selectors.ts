import { createFeatureSelector, createSelector } from "@ngrx/store";
import {MovieDetailState} from "./movie-detail.reducer";

const getMovieDetailState = createFeatureSelector<MovieDetailState>(
  "movie"
)


export const getMovieDetail = createSelector(
  getMovieDetailState,
  (state: MovieDetailState) => state.movie
)

export const getMovieCredits = createSelector(
  getMovieDetailState,
  (state: MovieDetailState) => state.credits
)


export const getMovieCast = createSelector(
  getMovieDetailState,
  (state: MovieDetailState) => state.credits.cast
)
