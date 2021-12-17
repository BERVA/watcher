import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, switchMap, take, withLatestFrom } from "rxjs";
import * as SerieDetailActions from "./serie-detail.actions";
import { DataService } from "src/app/shared/data.service";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import * as fromApp from "../../../store/app.reducer";

@Injectable()

export class SerieDetailEffects{
  getSerieDetail$ = createEffect(
    ()=> this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => {
        return r.payload.routerState.url.startsWith('/series/')
      }),
      switchMap(
        (url) => {
          const reqUrl = url.payload.routerState['url']
          const newReq =  reqUrl.replace('series', 'tv')
          return this.dataService.getData(newReq).pipe(
            map(data => {
              return SerieDetailActions.GetSerieDetailSuccess({ serie: data});
            })
          );
        }
      )
  ));

  getSerieCredit$ = createEffect(
    ()=> this.actions$.pipe(
      ofType(SerieDetailActions.GET_SERIE_DETAIL_SUCCESS),
      switchMap(
        (url: any) => {
          const newReq =  'tv/' + url.serie.id;
          return this.dataService.getCredits(newReq).pipe(
            map(data => {
              return SerieDetailActions.GetSerieCredit({ credits: data});
            })
          );
        }
      )
  )
  );

  // getSerieMedia$ = createEffect(
  //   () => this.actions$.pipe(
  //     ofType(SerieDetailActions.GET_SERIE_CREDIT),
  //     take(1),
  //     withLatestFrom(
  //       this.store.select(fromApp.getRouterState),
  //       (action, router ) => {
  //         const id = router.state.params['id']
  //         return id;
  //       }
  //     ),
  //     switchMap(
  //       (id) => {
  //         const newReq = 'tv/' + `${id}`;
  //         console.log(newReq);
  //         return this.dataService.getMedia(newReq).pipe(
  //           map(
  //             data => {
  //               return SerieDetailActions.GetSerieMedia({media: data})
  //             }
  //           )
  //         )
  //       }
  //     )
  //   )
  // )



  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<fromApp.AppState>
  ){}
}
