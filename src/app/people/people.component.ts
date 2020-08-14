import { Component, OnInit } from '@angular/core'

import { DataService } from '../shared/dataService.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: any = null

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.people = this.dataService.getPeople().subscribe(data => console.log(data))
    console.log('PEOPLE', this.people)
  }
}