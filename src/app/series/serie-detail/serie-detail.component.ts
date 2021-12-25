import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as SerieDetailActions from './store/serie-detail.actions';
import * as fromApp from '../../store/app.reducer';
import * as fromSerieDetailSelector from './store/serie-detail.selectors';
import { map, Observable } from 'rxjs';
import { AppendToResponseSerie } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {
  serie$: Observable<AppendToResponseSerie>;
  trailerKey$: Observable<string>;

  constructor(
    private store: Store<fromApp.AppState>
  ) {
    this.store.dispatch(SerieDetailActions.GetSerieTrailer())
  }

  ngOnInit(): void {
    this.serie$ = this.store.pipe(
      select(fromSerieDetailSelector.getSerieAllDetail)
    )

    this.trailerKey$ = this.store.pipe(
      select(fromSerieDetailSelector.getSerieTrailer),
      map( (key) => {
        if(key){
          return 'https://www.youtube.com/embed/' + key;
        }
        else{
          return null;
        }

      })
    )

  }

}
