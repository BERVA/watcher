import { createFeatureSelector, createSelector } from "@ngrx/store";
import { watchListe } from "src/app/shared/shared.model";
import { WatchListState } from "./watchlist.reducers";

const getWatchListState = createFeatureSelector<WatchListState>(
  "watchList"
)

export const getWatchListMovies = createSelector(
  getWatchListState,
  (state: WatchListState) => state.watchList.movieIds
)

export const getWatchListSeries = createSelector(
  getWatchListState,
  (state: WatchListState) => state.watchList.serieIds
)
