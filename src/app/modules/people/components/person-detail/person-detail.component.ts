import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { People } from '../../'
import { Subscription } from 'rxjs'
import { PeopleService } from '../../providers/people.service'
import { Store } from '@ngxs/store'
// import { GetPerson } from '../../store/people.actions'

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit, OnDestroy {
  person: People
  getPersonSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService
    // private store: Store
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   const id = +params.id + 1
    //   this.store.dispatch(new GetPerson(id)).subscribe(data => {
    //     console.log('data', data)
    //   })
    // })
    this.route.params.subscribe(params => {
      this.getPersonSub = this.peopleService.getPerson(+params.id + 1)
        .subscribe((data: People) => this.person = data)
    })
  }

  ngOnDestroy(): void {
    this.getPersonSub.unsubscribe()
  }
}