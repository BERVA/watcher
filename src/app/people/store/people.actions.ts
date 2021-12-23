import { createAction, props } from "@ngrx/store";
import { AppendToResponsePerson } from "src/app/shared/shared.model";


export const GET_POPULAR_PEOPLE = '[People] Get Poplular People';
export const GET_POPULAR_PEOPLE_SUCCESS = '[People] Get Poplular People Success';


export const GetPopularPeople = createAction(
  GET_POPULAR_PEOPLE
)

export const GetPopularPeopleSuccess = createAction(
  GET_POPULAR_PEOPLE_SUCCESS,
  props<{people: AppendToResponsePerson[]}>()
)
