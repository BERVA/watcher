import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map, switchMap, withLatestFrom } from "rxjs";
import { getUserId } from "src/app/auth/store/auth.selector";
import { FsApiService } from "src/app/shared/fs-api.service";
import { watchListe } from "src/app/shared/shared.model";
import { AppState } from "src/app/store/app.reducer";
import * as WatchListActions from "./watchlist.actions";


@Injectable()

export class WatchListEffects {


  getWatchList = createEffect(
    () => this.actions$.pipe(
      ofType(WatchListActions.GET_WATCHLIST),
      switchMap( userID => {
        return this.afs.getWatchList().pipe(
          map(data => {
            return WatchListActions.GetWatchListSuccess({ watchlist: data} );
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private afs: FsApiService,
    private store: Store<AppState>
    ){}

}
