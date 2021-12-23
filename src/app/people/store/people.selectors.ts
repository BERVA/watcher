import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PeopleState } from "./people.reducer";

const getPeopleState = createFeatureSelector<PeopleState>(
  "people"
)

export const getPopularPeople = createSelector(
  getPeopleState,
  (state: PeopleState) => state.people
)
