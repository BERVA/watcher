import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { Serie } from '../serie.model';
import * as fromApp from '../../store/app.reducer'
import * as fromSeries from '../store/series.selectors'
import { GetPopularSeries } from '../store/series.actions';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {
  series$: Observable<Serie[]>;
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(GetPopularSeries());
    this.series$ = this.store.pipe(
      select(fromSeries.getPopularSeries)
    )

  }
}
