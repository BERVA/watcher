import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { AutoLogin } from './auth/store/auth.actions';
import { NavigationMenuService } from './shared/nav-menu.service';
import { AppState } from './store/app.reducer';
import { getLoading } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Watcher';

  showLoading$: Observable<boolean>;



  constructor(
    private navMenuService : NavigationMenuService,
    private store: Store<AppState>
  ){}
  isMenuOpen = this.navMenuService.isOpen;
  toggleMenu(){
    this.navMenuService.toggleMenu()
  }
  ngOnInit(){
    this.store.dispatch(AutoLogin());
    this.showLoading$ = this.store.select(getLoading)
  }
}
