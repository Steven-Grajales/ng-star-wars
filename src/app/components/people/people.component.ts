import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { DataService } from '../../shared/dataService.service'
import { People } from '../../models/people.model'
import { PeopleData } from '../../models/peopleData.model'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  peopleSub: Subscription
  people: People[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.peopleSub = this.dataService.getPeople().subscribe((data: PeopleData) => this.people = data.results)
  }

  ngOnDestroy() {
    this.peopleSub.unsubscribe()
  }
}