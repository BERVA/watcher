import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { Serie } from '../serie.model';
import * as fromApp from '../../store/app.reducer'
import { GetPopularSeries } from '../store/series.actions';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit, OnDestroy {

  series!: Serie[];
  subs!: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {

    this.store.dispatch(GetPopularSeries())
    this.subs = this.store.select('series').pipe(
      map(seriesState => seriesState.series)
    ).subscribe(
      (series: Serie[]) =>{
        this.series = series;
      }
    )

  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }

}
