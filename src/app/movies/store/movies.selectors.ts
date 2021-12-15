import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MoviesState } from "./movies.reducer";


const getMoviesState = createFeatureSelector<MoviesState>(
  "movies"
)

export const getPopularMovies = createSelector(
  getMoviesState,
  (state: MoviesState) => state.movies
)
