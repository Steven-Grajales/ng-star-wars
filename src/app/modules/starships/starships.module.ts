// Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Modules
import { SharedModule } from '../shared/shared.module'
import { StarshipsRoutingModule } from './starships-routing.module'
// Components
import { StarshipsComponent } from './starships.component'
import { StarshipDetailComponent } from './starship-detail/starship-detail.component'


@NgModule({
	declarations: [
		StarshipsComponent,
		StarshipDetailComponent
	],
	imports: [
		RouterModule,
		CommonModule,
		SharedModule,
		StarshipsRoutingModule
	]
})
export class StarshipsModule {

}