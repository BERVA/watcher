import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FsApiService } from '../shared/fs-api.service';
import { watchListe } from '../shared/shared.model';
import { AppState } from '../store/app.reducer';
import * as WatchListActions from './store/watchlist.actions'
import { getWatchListMovies } from './store/watchlist.selectors';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  watchList: Observable<[]>;

  constructor(
    private fs: FsApiService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.dispatch(WatchListActions.GetWatchList())

    this.watchList = this.store.pipe(
      select(getWatchListMovies)
    )

    console.log(this.watchList);




  }

}
