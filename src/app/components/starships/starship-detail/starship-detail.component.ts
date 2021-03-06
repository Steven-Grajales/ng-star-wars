import { Component, Input } from '@angular/core'

import { Starship } from 'src/app/models/starship.model'

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent {
  @Input() starship: Starship
  constructor() { }
}