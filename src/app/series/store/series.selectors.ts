import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SeriesState } from "./series.reducer";

const getSeriesState = createFeatureSelector<SeriesState>(
  "series"
)

export const getPopularSeries = createSelector(
  getSeriesState,
  (state: SeriesState) => state.series
)
