import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PersonDetailState } from "./person-detail.reducer";

const getPersonDetailState = createFeatureSelector<PersonDetailState>(
  "person"
)

export const getPersonDetail = createSelector(
  getPersonDetailState,
  (state: PersonDetailState) => state.person
)
