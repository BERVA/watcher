import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieDetailState } from "./movie-detail.reducer";

const getMovieDetailState = createFeatureSelector<MovieDetailState>(
  "movie"
)

export const getMovieAllDetail = createSelector(
  getMovieDetailState,
  (state: MovieDetailState) => state?.append
)

export const getMovieTrailer = createSelector(
  getMovieDetailState,
  (state: MovieDetailState) => state.trailer
)

export const clearMovieDetail = createSelector(
  getMovieDetailState,
  (state: MovieDetailState) => state?.append
)
