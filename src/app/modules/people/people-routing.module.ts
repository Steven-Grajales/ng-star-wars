// Angular
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
// Components
import { PeopleComponent, PersonDetailComponent } from './'
// Module routes
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