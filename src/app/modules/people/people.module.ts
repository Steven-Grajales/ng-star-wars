// Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Modules
import { SharedModule } from 'src/app/shared/shared.module'
import { PeopleRoutingModule } from './people-routing.module'
// Components
import { PeopleComponent } from './people.component'
import { PersonDetailComponent } from './person-detail/person-detail.component'

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