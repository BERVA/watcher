import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppendToResponseMovie, AppendToResponseSerie } from '../shared.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() figure: AppendToResponseSerie | AppendToResponseMovie;
  @Input() figureTrailerKey: string;

  constructor() {

  }

  ngOnInit(): void {


  }


}
