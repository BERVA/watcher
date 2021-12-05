import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params } from '@angular/router';
import { routerNavigatedAction, routerNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { DataService } from 'src/app/shared/data.service';
import * as fromApp from '../../store/app.reducer'
import { Movie } from '../movie.model';
import * as MovieDetailActions from '../store/movies.actions';
import { GetMovieDetail } from './store/movie-detail.actions';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  movie!: Observable<Movie> | Movie;
  subs!: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {

    this.subs = this.store.select('movie')
    .pipe(
      map(movieState => movieState.movie))
    .subscribe( (movie: Movie) => {
      this.movie = movie;
    });
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }

}
