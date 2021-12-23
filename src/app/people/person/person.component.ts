import { Component, Input, OnInit } from '@angular/core';
import { AppendToResponsePerson } from 'src/app/shared/shared.model';

@Component({
  selector: '[app-person]',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: AppendToResponsePerson;

  constructor() { }

  ngOnInit(): void {
  }

}
