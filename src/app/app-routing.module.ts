// Angular
import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
// Components
import { HomebaseComponent } from './components/homebase/homebase.component'

const routes: Routes = [
  {
    path: '',
    component: HomebaseComponent,
    pathMatch: 'full'
  },
  {
    path: 'people',
    loadChildren: './components/people/people.module#PeopleModule'
  },
  {
    path: 'starships',
    loadChildren: './components/starships/starships.module#StarshipsModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
