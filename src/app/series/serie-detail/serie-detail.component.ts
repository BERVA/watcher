import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cast, Credits, Crew, Serie } from '../serie.model';
import * as fromApp from '../../store/app.reducer'
import { map } from 'rxjs';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {

  serie!: Serie;
  credits!: Credits;
  cast!: Cast[];
  crew!: Crew[];

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
    );

    this.store.select('credits').pipe(
      map(
        serieState => serieState.credits
      )
    ).subscribe(
      (credits: Credits) => {
        this.credits = credits;
        this.cast = (credits.cast) as Cast[];
        this.crew = (credits.crew) as Crew[];

        console.log(this.cast);

      }
    )




  }

}
