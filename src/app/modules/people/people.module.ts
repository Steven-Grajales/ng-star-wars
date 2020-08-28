// Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Modules
import { SharedModule } from 'src/app/modules/shared/shared.module'
import { PeopleRoutingModule } from './people-routing.module'
// Components
import { PeopleComponent } from './components/people/people.component'
import { PersonDetailComponent } from './components/person-detail/person-detail.component'

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