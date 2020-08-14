import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { DataService } from '../shared/dataService.service'
import { People } from './peopel.model'

class PeopleData {
  constructor(
    public count: number,
    public results: []
  ) { }
}
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  peopleSub: Subscription
  people: People[]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.peopleSub = this.dataService.getPeople()
      .subscribe((data: PeopleData) => {
        console.log(data)
        this.people = data.results
      })
  }

  ngOnDestroy() {
    this.peopleSub.unsubscribe()
  }
}