import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationMenuService } from 'src/app/shared/nav-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {




  constructor(
    private navMenuService: NavigationMenuService
  ) { }
    isOpen = this.navMenuService.isOpen;

  ngOnInit(): void {

  }

  menuOpen(){ 
    this.navMenuService.toggleMenu()
  }

}
