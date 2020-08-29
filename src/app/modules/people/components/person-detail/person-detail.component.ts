import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { People } from '../../'
import { Subscription } from 'rxjs'
import { PeopleService } from '../../providers/people.service'

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit, OnDestroy {
  id: number
  person: People
  routeSubscription: Subscription
  getPersonSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params
      .subscribe(params => {
        this.id = +params.id + 1
        this.getPersonSub = this.peopleService.getPerson(this.id)
          .subscribe((data: People) => {
            this.person = data
          })
      })
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe()
    this.getPersonSub.unsubscribe()
  }
}