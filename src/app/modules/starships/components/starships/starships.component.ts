import { Component, OnInit, OnDestroy, Output } from '@angular/core'
import { Subscription } from 'rxjs'

import { icons } from '../../../shared'
// Models
import { Starship, StarshipData } from '../../models'
import { StarshipsService } from '../../providers/starships.service'

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

  constructor(private starshipsService: StarshipsService) {
    this.iconPath = icons.MillenniumFalcon
  }

  ngOnInit(): void {
    this.getStarships()
  }

  ngOnDestroy() {
    this.starshipSub.unsubscribe()
  }

  private getStarships() {
    this.starshipSub = this.starshipsService.getStarShips(this.pageIndex).subscribe((data: StarshipData) => this.starships = data.results)
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