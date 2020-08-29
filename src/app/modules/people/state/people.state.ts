import { State, Selector, Action, StateContext } from '@ngxs/store'

import { People } from '../models'
import { AddPerson, AddPeople } from '../actions/people.actions'

export class PeopleStateModel {
	people: People[]
}

@State<PeopleStateModel>({
	name: 'people',
	defaults: {
		people: []
	}
})
export class PeopleState {
	@Selector()
	static getPeople(state: PeopleStateModel) {
		return state.people
	}

	@Action(AddPerson)
	add({ getState, patchState }: StateContext<PeopleStateModel>, { payload }: AddPerson) {
		const state = getState()
		patchState({
			people: [...state.people, payload]
		})
	}

	@Action(AddPeople)
	add({ getState, patchState }: StateContext<PeopleStateModel>, { payload }: AddPeople) {
		const state = getState()
		patchState({
			people: [...state.people, payload]
		})
	}
}