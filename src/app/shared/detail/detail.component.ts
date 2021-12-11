import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cast, Credits } from 'src/app/series/serie.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() figure: Observable<any> | any;
  @Input() figureCast!: Cast[];

  constructor() { }

  ngOnInit(): void {
  }

}
