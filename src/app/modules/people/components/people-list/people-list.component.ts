import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { icons } from '../../../shared'
import { People } from '../../models'
import { PeopleService } from '../../providers/people.service'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  peopleSub: Subscription
  iconPath: string
  pageIndex: number = 1
  people: People[]

  constructor(private peopleService: PeopleService) {
    this.iconPath = icons.JediOrderIcon
  }

  private getPeople() {
    this.peopleService.fetchPeople(this.pageIndex)
  }

  ngOnInit(): void {
    this.getPeople()
  }

  ngOnDestroy() {
    this.peopleSub.unsubscribe()
  }

  previousPage() {
    this.pageIndex--
    this.getPeople()
  }

  nextPage() {
    this.pageIndex++
    this.getPeople()
  }

  lastPage() {
    this.pageIndex = 1
    this.getPeople()
  }
}