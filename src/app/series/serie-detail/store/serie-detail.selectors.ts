import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SerieDetailState } from "./serie-detail.reducer";

const getSerieDetailState = createFeatureSelector<SerieDetailState>(
  "serie"
)

export const getSerieDetail = createSelector(
  getSerieDetailState,
  (state: SerieDetailState) => state.serie
)

export const getSerieCredits = createSelector(
  getSerieDetailState,
  (state: SerieDetailState) => state.credits
)

export const getSerieCast = createSelector(
  getSerieDetailState,
  (state: SerieDetailState) => state.credits.cast
)
