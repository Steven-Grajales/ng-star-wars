import { Component, Input } from '@angular/core'

import { People } from '../../'
import { icons } from '../../../shared'

@Component({
	selector: 'app-person-item',
	templateUrl: './person-item.component.html',
	styleUrls: ['./person-item.component.scss']
})
export class PersonItemComponent {
	@Input() person: People
	@Input() index: number
	iconPath: string

	constructor() {
		this.iconPath = icons.JediOrderIcon
	}
}