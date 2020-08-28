import { Component, OnInit, Input } from '@angular/core'

import { People } from 'src/app/modules/people/models/people.model'

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: People

  constructor() { }

  ngOnInit(): void { }
}