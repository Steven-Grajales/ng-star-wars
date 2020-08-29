import { State, Selector, Action, StateContext } from '@ngxs/store'

import { People } from '../models'
import * as PeopleActions from './people.actions'

export class PeopleStateModel {
	people: People[]
}

@State<PeopleStateModel>({
	name: 'peopleStore',
	defaults: {
		people: []
	}
})
export class PeopleState {
	@Selector()
	static getPeople(state: PeopleStateModel) {
		return state.people
	}

	@Action(PeopleActions.SetPeople)
	setPeople({ getState, patchState }: StateContext<PeopleStateModel>, { payload }: PeopleActions.SetPeople) {
		const state = getState()
		console.log('payload', payload)
		patchState({
			people: [...state.people, payload]
		})
	}
}