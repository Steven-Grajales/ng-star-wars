import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { People } from '../../'
import { DataService } from '../../../shared'
import { Subscription } from 'rxjs'

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
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = +params.id + 1
      console.log(this.id)
      // return this.dataService.getPerson(this.id).subscribe((data: People) => {
      this.getPersonSub = this.dataService.getPerson(this.id).subscribe((data: People) => {
        console.log(data)
        this.person = data
      })
    })
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe()
    this.getPersonSub.unsubscribe()
  }
}