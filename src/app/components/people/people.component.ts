import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core'
import { Subscription } from 'rxjs'

import { DataService } from '../../shared/dataService.service'
import { People } from '../../models/people.model'
import { PeopleData } from '../../models/peopleData.model'
import { icons } from '../../shared/constants'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  pageIndex: number = 1
  iconPath: string
  people: People[]
  peopleSub: Subscription
  @Output() selectedPerson: People

  constructor(private dataService: DataService) {
    this.iconPath = icons.JediOrderIcon
  }

  ngOnInit(): void {
    this.getPeople()
  }

  ngOnDestroy() {
    this.peopleSub.unsubscribe()
  }

  private getPeople() {
    this.peopleSub = this.dataService.getPeople(this.pageIndex).subscribe((data: PeopleData) => this.people = data.results)
  }

  previousPage() {
    this.pageIndex--
    this.getPeople()
  }

  nextPage() {
    this.pageIndex++
    this.getPeople()
  }

  selectPerson(person: People) {
    this.selectedPerson = person
  }
}