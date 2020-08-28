import { Component, OnInit } from '@angular/core'

import { icons } from '../../shared/constants'

@Component({
  selector: 'app-homebase',
  templateUrl: './homebase.component.html',
  styleUrls: ['./homebase.component.scss']
})
export class HomebaseComponent implements OnInit {
  iconPath: string

  constructor() {
    this.iconPath = icons.DarthMaulLightsabers
  }

  ngOnInit(): void {
  }
}