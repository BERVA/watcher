import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser, getUserMail } from '../auth/store/auth.selector';
import { User } from '../auth/user.model';
import { AppState } from '../store/app.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user$: Observable<string>

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.user$ = this.store.pipe(
      select(getUserMail)
    )
  }

}
