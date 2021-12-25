import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, filter, map, mergeMap, of, switchMap, take, withLatestFrom } from "rxjs";
import * as MovieDetailActions from "./movie-detail.actions";
import { DataService } from "src/app/shared/data.service";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { setLoadingSpinner } from "src/app/store/shared/shared.actions";
import { AppendToResponseMovie } from "src/app/shared/shared.model";
import * as fromApp from 'src/app/store/app.reducer';
@Injectable()
export class MovieDetailEffects{
  getMovieDetail$ = createEffect(
    ()=> this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigationAction) => {
        return r.payload.routerState.url.startsWith('/movies/')
      }),
      mergeMap(
        (url) => {
          this.store.dispatch(setLoadingSpinner({status: true}))
          const reqUrl = url.payload.routerState['url']
          const newReq =  reqUrl.replace('movies', 'movie')
          return this.dataService.getDetail(newReq).pipe(
            map((data : AppendToResponseMovie) => {
              this.store.dispatch(setLoadingSpinner({status: false}));
              return MovieDetailActions.GetMovieAllDetailSuccess({ append: data});
            }),
            catchError(() => of(MovieDetailActions.OnMovieDetailError))
          );
        }
      )
  ))
  getMovieTrailer$ = createEffect(
    () => this.actions$.pipe(
      ofType(MovieDetailActions.GetMovieTrailer),
      withLatestFrom(
          this.store.select(fromApp.getRouterState),
          (action, router ) => {
            const id = router.state.params['id']
            return id;
         }
       ),
      mergeMap(
        ( data )=> {
          let id = data
          let reqUrl = 'movie/' + id;
          return this.dataService.getTrailer(reqUrl).pipe(
            map(( data: any) =>{
              let officialTrailer = data.results.find((video: { name: string; }) => video.name === 'Official Trailer');
              let officialTeaser = data.results.find((video: { name: string; }) => video.name === 'Official Teaser');
              if(data.results < 1){
                return MovieDetailActions.GetMovieTrailerSucess({trailer: null})
              } else{
                if( officialTrailer){
                  return MovieDetailActions.GetMovieTrailerSucess({trailer: officialTrailer.key})
                } else if( officialTeaser){
                  return MovieDetailActions.GetMovieTrailerSucess({trailer: officialTeaser.key})
                }
                else {
                  return MovieDetailActions.GetMovieTrailerSucess({trailer: data.results[0].key})
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
    private store: Store<AppState>
  ){}
}
