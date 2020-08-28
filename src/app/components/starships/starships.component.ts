import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { DataService } from '../shared/dataService.service'
import { Starship } from '../models/starship.model'
import { StarshipData } from '../models/starshipData.model'

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit, OnDestroy {
  starshipSub: Subscription
  starships: Starship[]

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.starshipSub = this.dataService.getStarShips()
      .subscribe((data: StarshipData) => {
        console.log(data)
        this.starships = data.results
      })
  }

  ngOnDestroy() {
    this.starshipSub.unsubscribe()
  }
}