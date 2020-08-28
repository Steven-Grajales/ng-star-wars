import { Component } from '@angular/core'

import { icons } from '../constants'

@Component({
	selector: 'app-loading-spinner',
	template: `<img class="spinner" [src]="path">`,
	styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinner {
	path: string
	constructor() {
		this.path = icons.GalacticEmpire
	}
}