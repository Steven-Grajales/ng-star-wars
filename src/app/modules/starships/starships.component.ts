import { Component, OnInit, OnDestroy, Output } from '@angular/core'
import { Subscription } from 'rxjs'

import { DataService } from '../../shared/dataService.service'
import { icons } from '../../shared/constants'

import { Starship } from '../../models/starship.model'
import { StarshipData } from '../../models/starshipData.model'

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit, OnDestroy {
  pageIndex: number = 1
  starshipSub: Subscription
  @Output() selectedStarship: Starship
  starships: Starship[]
  iconPath: string

  constructor(private dataService: DataService) {
    this.iconPath = icons.MillenniumFalcon
  }

  ngOnInit(): void {
    this.getStarships()
  }

  ngOnDestroy() {
    this.starshipSub.unsubscribe()
  }

  private getStarships() {
    this.starshipSub = this.dataService.getStarShips(this.pageIndex).subscribe((data: StarshipData) => this.starships = data.results)
  }

  previousPage() {
    this.pageIndex--
    this.getStarships()
  }

  nextPage() {
    this.pageIndex++
    this.getStarships()
  }

  selectStarship(starship: Starship) {
    this.selectedStarship = starship
  }
}