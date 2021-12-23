import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppendToResponsePerson, Cast } from 'src/app/shared/shared.model';
import { AppState } from 'src/app/store/app.reducer';
import * as fromPersonDetailSelector from './store/person-detail.selectors';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  person$: Observable<AppendToResponsePerson>;
  person: AppendToResponsePerson;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.person$ = this.store.pipe(
      select(fromPersonDetailSelector.getPersonDetail)
    )

    this.person$.subscribe(
      (data:  AppendToResponsePerson) => {
        this.person = data;
      }
    );





  }

}
