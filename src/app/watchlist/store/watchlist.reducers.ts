import { createReducer, on } from "@ngrx/store";
import { watchListe } from "src/app/shared/shared.model";
import * as WatchListActions from './watchlist.actions';


export interface WatchListState{
  watchList: watchListe

}

const initialState: WatchListState = {
  watchList: {
    movieIds: [],
    serieIds: []
  }
}

export const watchListReducer = createReducer(
  initialState,
  on(WatchListActions.GetWatchListSuccess, (state, action) => {
    return{
      ...state,
      watchList: action.watchlist
    }
  })
)
