import { createAction, props } from "@ngrx/store";
import { AppendToResponsePerson } from "src/app/shared/shared.model";

export const GET_PERSON_DETAIL = '[Person Detail] Get Person Detail';
export const GET_PERSON_DETAIL_SUCCESS = '[Person Detail] Get Person Detail Success';


export const GetPersonDetail = createAction(
  GET_PERSON_DETAIL
)

export const GetPersonDetailSuccess = createAction(
  GET_PERSON_DETAIL_SUCCESS,
  props<{ person: AppendToResponsePerson}>()
)
