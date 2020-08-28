import { Injectable } from '@angular/core'
import { State } from '@ngxs/store'

@State<string[]>({
	name: 'people',
	defaults: []
})
@Injectable()
export class PeopleState {

}