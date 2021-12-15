import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Cast, Credits, Serie } from '../serie.model';
import * as fromApp from '../../store/app.reducer';
import * as fromSerieDetailSelector from './store/serie-detail.selectors';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {
  serie$: Observable<Serie>;
  credits$: Observable<Credits>;
  cast$: Observable<Cast[]>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.serie$ = this.store.pipe(
      select(fromSerieDetailSelector.getSerieDetail)
    )
    this.cast$ = this.store.pipe(
      select(fromSerieDetailSelector.getSerieCast)
    )

  }

}
