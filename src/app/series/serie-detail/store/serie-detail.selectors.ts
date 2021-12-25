import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SerieDetailState } from "./serie-detail.reducer";

const getSerieDetailState = createFeatureSelector<SerieDetailState>(
  "serie"
)

export const getSerieAllDetail = createSelector(
  getSerieDetailState,
  (state: SerieDetailState) => state?.append
)

export const getSerieTrailer = createSelector(
  getSerieDetailState,
  (state: SerieDetailState) => state?.trailer
)
