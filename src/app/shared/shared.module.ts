import { NgModule } from '@angular/core'

import { LoadingSpinner } from './loading-spinner/loading-spinner.component'

@NgModule({
	declarations: [
		LoadingSpinner
	],
	exports: [
		LoadingSpinner
	]
})
export class SharedModule { }