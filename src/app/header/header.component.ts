import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavigationMenuService } from 'src/app/shared/nav-menu.service';
import { Logout } from '../auth/store/auth.actions';
import { getAuthenticated, getUserMail } from '../auth/store/auth.selector';
import { AppState } from '../store/app.reducer';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private navMenuService: NavigationMenuService,
    private store: Store<AppState>,
  ) { }
    isOpen = this.navMenuService.isOpen;
    isAuthenticated$: Observable<boolean>;
    userMail$: Observable<string>;

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(
      select(getAuthenticated)
    )
    this.userMail$ = this.store.pipe(
      select(getUserMail)
    )
  }

  menuOpen(){ 
    this.navMenuService.toggleMenu()
  }

  onLogout(){
    this.store.dispatch(Logout())
  }

  onSearch(){

  }

}
