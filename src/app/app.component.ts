import { Component, OnInit } from '@angular/core';
import { NavigationMenuService } from './shared/nav-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Watcher';

  constructor(
    private navMenuService : NavigationMenuService
  ){}

  isMenuOpen = this.navMenuService.isOpen;

  toggleMenu(){
    this.navMenuService.toggleMenu()

  }

  ngOnInit(){


  }




}
