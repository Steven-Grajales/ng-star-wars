import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { PeopleComponent, PersonDetailComponent } from './'

const routes: Routes = [
	{
		path: '',
		component: PeopleComponent,
		children: [
			{
				path: ':id',
				component: PersonDetailComponent
			}
		]
	}
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