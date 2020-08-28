// Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Modules
import { SharedModule } from '../shared/shared.module'
import { PeopleRoutingModule } from './people-routing.module'
// Components
import { PeopleComponent, PersonDetailComponent } from './'

@NgModule({
	declarations: [
		PersonDetailComponent,
		PeopleComponent
	],
	imports: [
		RouterModule,
		CommonModule,
		SharedModule,
		PeopleRoutingModule
	]
})
export class PeopleModule {

}