import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Store } from '@ngxs/store'

import { icons } from '../../../shared'
import { People } from '../../models'
import { PeopleService } from '../../providers/people.service'
import * as PeopleActions from '../../store/people.actions'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  peopleDataSub: Subscription
  iconPath: string = icons.JediOrderIcon // Path to the icon to show next to the name of the person
  pageIndex: number = 1 // Current Page index to fetch from api
  people: People[] // Person objects to render

  constructor(
    private peopleService: PeopleService,
    private store: Store
  ) { }

  private getPeople() {
    this.peopleDataSub = this.peopleService.fetchPeople(this.pageIndex).subscribe(data => {
      this.store.dispatch(new PeopleActions.SetPeople(data.results)).subscribe(() => {
        this.store.dispatch(new PeopleActions.GetPeople).subscribe(people => {
          this.people = people.peopleStore.people[0]
        }).unsubscribe()
      }).unsubscribe()
    })
  }

  ngOnInit(): void {
    this.getPeople()
  }

  ngOnDestroy() {
    this.peopleDataSub.unsubscribe()
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