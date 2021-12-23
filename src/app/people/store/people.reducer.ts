import { createReducer, on } from "@ngrx/store";
import { AppendToResponsePerson } from "src/app/shared/shared.model";
import * as PeopleActions from "./people.actions";


export interface PeopleState {
  people: AppendToResponsePerson[]
}

const intialState: PeopleState = {
  people: []
}

export const peopleReducer = createReducer(
  intialState,
  on(
    PeopleActions.GetPopularPeopleSuccess, (state, action) => {
      return {
        ...state,
        people: action.people
      }
    }
  )
)
