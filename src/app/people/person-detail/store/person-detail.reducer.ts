import { createReducer, on } from "@ngrx/store";
import { AppendToResponsePerson } from "src/app/shared/shared.model";
import * as PersonDetailActions from "./person-detail.actions";

export interface PersonDetailState {
  person: AppendToResponsePerson
}

const initialState: PersonDetailState = {
  person: {}
}

export const personDetailReducer = createReducer(
  initialState,
  on(
    PersonDetailActions.GetPersonDetailSuccess, (state, action) => {
      return {
        ...state,
        person: action.person
      }
    })
)
