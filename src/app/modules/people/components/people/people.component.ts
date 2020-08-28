import { Component, OnInit, OnDestroy, Output } from '@angular/core'
import { Subscription } from 'rxjs'

import { icons } from '../../../../modules/shared/constants'
import { DataService } from 'src/app/modules/shared/dataService.service'
// Models
import { People, PeopleData } from '../../models'

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

  lastPage() {
    this.pageIndex = 1
    this.getPeople()
  }

  selectPerson(person: People) {
    this.selectedPerson = person
  }
}