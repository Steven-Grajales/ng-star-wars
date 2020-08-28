import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'

import { DataService, icons } from '../../../shared'
import { People, PeopleData } from '../../models'
import { Store } from '@ngxs/store'
import { GetPeople } from '../../store/people.actions'
// import { PeopleState } from '../../store/PeopleState'

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

  // @Select(PeopleState) people$: Observable<string[]>

  private getPeople() {

    this.peopleSub = this.dataService.getPeople(this.pageIndex)
      .subscribe((data: PeopleData) => this.people = data.results)
  }

  ngOnInit(): void {
    this.getPeople()
    this.store.dispatch(new GetPeople).subscribe((data) => console.log(data))
    // console.log(this.people$)
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