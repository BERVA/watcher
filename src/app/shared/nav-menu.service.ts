import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class NavigationMenuService {

  constructor(){ }

  isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  toggleMenu(){
    this.isOpen.next(!this.isOpen.value)
  }

}
