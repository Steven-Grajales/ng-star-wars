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
    loadChildren: () => import('./components/people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./components/starships/starships.module').then(m => m.StarshipsModule)
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
