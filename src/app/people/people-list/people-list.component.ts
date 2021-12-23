import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppendToResponsePerson } from 'src/app/shared/shared.model';
import * as fromApp from 'src/app/store/app.reducer';
import { GetPopularPeople } from '../store/people.actions';
import * as fromPeopleSelector from '../store/people.selectors';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  people$: Observable<AppendToResponsePerson[]>


  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(GetPopularPeople());
    this.people$ = this.store.pipe(
      select(fromPeopleSelector.getPopularPeople)
    )
  }

}
