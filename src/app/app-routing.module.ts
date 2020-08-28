// Angular
import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
// Components
import { HomebaseComponent } from './components'

const routes: Routes = [
  {
    path: '',
    component: HomebaseComponent,
    pathMatch: 'full'
  },
  {
    path: 'people',
    loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'starships',
    loadChildren: () => import('./modules/starships/starships.module').then(m => m.StarshipsModule)
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
export class AppRoutingModule {

}