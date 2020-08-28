import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PeopleComponent } from './people.component'
// import { PersonDetailComponent } from './person-detail/person-detail.component'

const routes: Routes = [
	{
		path: '',
		component: PeopleComponent
	}
	// {
	// 	path: ':id',
	// 	component: PersonDetailComponent
	// }
]

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class PeopleRoutingModule {

}