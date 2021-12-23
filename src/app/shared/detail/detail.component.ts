import { Component, Input, OnInit } from '@angular/core';
import { AppendToResponseMovie, AppendToResponseSerie } from '../shared.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() figure: AppendToResponseSerie| AppendToResponseMovie;




  constructor() { }

  ngOnInit(): void {



  }


}
