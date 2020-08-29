import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { Store } from '@ngxs/store'

import { DataService, icons } from '../../../shared'
import { People, PeopleData } from '../../models'
import { AddPeople } from '../../actions/people.actions'

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

  constructor(
    private dataService: DataService,
    private store: Store
  ) {
    this.iconPath = icons.JediOrderIcon
  }

  private getPeople() {
    this.peopleSub = this.dataService.getPeople(this.pageIndex)
      .subscribe((data: PeopleData) => {
        this.people = data.results
        this.store.dispatch(new AddPeople(data.results))
      })
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