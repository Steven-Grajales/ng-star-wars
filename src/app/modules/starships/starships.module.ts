// Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Modules
import { SharedModule } from '../shared/shared.module'
import { StarshipsRoutingModule } from './starships-routing.module'
// Components
import { StarshipDetailComponent, StarshipsComponent } from './'

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