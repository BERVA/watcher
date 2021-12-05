import { createReducer, on } from "@ngrx/store";
import { Movie } from "../movie.model";
import * as MoviesAction from "./movies.actions";

export interface MoviesState{
  movies: Movie[]
}

const initialState: MoviesState = {
  movies : []
}

export const moviesReducer = createReducer(
  initialState,
  on(MoviesAction.GetPopularMoviesSuccess, (state, action) => {
    return {
      ...state,
      movies: action.movies
    }
  })

);
