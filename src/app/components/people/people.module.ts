// Angular
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
// Modules
import { SharedModule } from 'src/app/shared/shared.module'
import { PeopleRoutingModule } from './people-routing.module'
// Components
import { PersonDetailComponent } from './person-detail/person-detail.component'
import { PeopleComponent } from './people.component'

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