import { NgModule } from '@angular/core'

import { LoadingSpinner } from './components/loading-spinner/loading-spinner.component'

@NgModule({
	declarations: [
		LoadingSpinner
	],
	exports: [
		LoadingSpinner
	]
})
export class SharedModule { }