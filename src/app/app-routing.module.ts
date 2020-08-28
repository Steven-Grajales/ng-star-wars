import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PeopleComponent } from './components/people/people.component'
import { StarshipsComponent } from './components/starships/starships.component'
import { HomebaseComponent } from './components/homebase/homebase.component'

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
