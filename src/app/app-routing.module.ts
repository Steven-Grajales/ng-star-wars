import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PeopleComponent } from './people/people.component'
import { StarshipsComponent } from './starships/starships.component'
import { HomebaseComponent } from './homebase/homebase.component'

const routes: Routes = [
  {
    path: '',
    component: HomebaseComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'starships',
    component: StarshipsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
