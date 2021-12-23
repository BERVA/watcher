import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from '../shared/data.service';
import { AppendToResponsePerson } from '../shared/shared.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  cevap: AppendToResponsePerson;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {


    //  this.dataService.getPersonDetail('person/73968').pipe(
    //   map((data: any) => {
    //     this.cevap = data
    //     console.log(data);

    //   })
    // ).subscribe()



  }

}
