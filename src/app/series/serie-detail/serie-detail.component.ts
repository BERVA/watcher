import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Serie } from '../serie.model';
import * as fromApp from '../../store/app.reducer'
import { map } from 'rxjs';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {

  serie!: Serie;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('serie').pipe(
      map(
        seriesState => seriesState.serie
      )
    ).subscribe(
      (serie: Serie) => {
        this.serie = serie;
      }
    )

  }

}
