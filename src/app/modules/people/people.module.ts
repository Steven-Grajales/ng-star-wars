// Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Modules
import { SharedModule } from '../shared'
import { PeopleRoutingModule } from './'
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