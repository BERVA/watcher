import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, mergeMap, switchMap, withLatestFrom } from "rxjs";
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
          return this.dataService.getDetail(newReq).pipe(
            map(data => {
              return SerieDetailActions.GetSerieAllDetailSuccess({ append: data});
            })
          );
        }
      )
  ));

  getSerieTrailer$ = createEffect(
    () => this.actions$.pipe(
      ofType(SerieDetailActions.GET_SERIE_TRAILER),
      withLatestFrom(
        this.store.select(fromApp.getRouterState),
        (action, router) => {
          let id = router.state.params['id'];
          return id;
        }
      ),
      mergeMap(
        (id) => {
          let reqUrl = 'tv/'+ id;
          return this.dataService.getTrailer(reqUrl).pipe(
            map( (data: any) => {
              let officialTrailer = data.results.find((video: { name: string; }) => video.name === 'Official Trailer');
              let officialTeaser = data.results.find((video: { name: string; }) => video.name === 'Official Teaser');
              if(data.results.length < 1){
                return SerieDetailActions.GetSerieTrailerSucces({trailer: null})
              } else {
                if( officialTrailer){
                  return SerieDetailActions.GetSerieTrailerSucces({trailer: officialTrailer.key})
                } else if( officialTeaser){
                  return SerieDetailActions.GetSerieTrailerSucces({trailer: officialTeaser.key})
                }
                else {
                  return SerieDetailActions.GetSerieTrailerSucces({trailer: data.results[0].key})
                }
              }
            })
          )
        }
      )
    )
  )
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<fromApp.AppState>
  ){}
}
