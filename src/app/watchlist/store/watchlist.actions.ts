import { createAction, props } from "@ngrx/store";
import { watchListe } from "src/app/shared/shared.model";


export const GET_WATCHLIST = "[Watch List] Get WatchList";
export const GET_WATCHLIST_SUCCESS = "[Watch List] Get WatchList Success";


export const GetWatchList = createAction(
  GET_WATCHLIST
)

export const GetWatchListSuccess = createAction(
  GET_WATCHLIST_SUCCESS,
  props<{watchlist: watchListe}>()
)
