import { Component, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs'

import { DataService, icons } from '../../../shared'
import { People, PeopleData } from '../../models'

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

  constructor(private dataService: DataService) {
    this.iconPath = icons.JediOrderIcon
  }

  private getPeople() {
    this.peopleSub = this.dataService.getPeople(this.pageIndex).subscribe((data: PeopleData) => this.people = data.results)
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