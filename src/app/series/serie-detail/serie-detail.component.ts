import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Backdrops, Cast, Credits, Media, Serie } from '../serie.model';
import * as fromApp from '../../store/app.reducer';
import * as fromSerieDetailSelector from './store/serie-detail.selectors';
import {map, Observable } from 'rxjs';
import { AppendToResponseSerie } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {
  serie$: Observable<AppendToResponseSerie>;
  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.serie$ = this.store.pipe(
      select(fromSerieDetailSelector.getSerieAllDetail)
    )

  }

}
