import { Component } from '@angular/core'

import { icons } from '../../shared/constants'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  iconPath: string

  constructor() {
    this.iconPath = icons.Stormtrooper
  }
}