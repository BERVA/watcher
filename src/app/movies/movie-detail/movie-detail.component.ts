import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {  Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducer'
import * as fromMovieDetailSelectors from "./store/movie-detail.selectors";
import { AppendToResponseMovie } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<AppendToResponseMovie>;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.movie$ = this.store.pipe(
      select(fromMovieDetailSelectors.getMovieAllDetail)
    )
  }

}
