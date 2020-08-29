import { State, Selector, Action, StateContext } from '@ngxs/store'

import { People } from '../models'
// import { AddPerson, AddPeople, FetchPeople } from '../actions/people.actions'
import * as PeopleActions from '../actions/people.actions'

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

	@Action(PeopleActions.AddPerson)
	addPerson({ getState, patchState }: StateContext<PeopleStateModel>, { payload }: PeopleActions.AddPerson) {
		const state = getState()
		patchState({
			people: [...state.people, payload]
		})
	}

	@Action(PeopleActions.AddPeople)
	addPeople({ getState, patchState }: StateContext<PeopleStateModel>, { payload }: PeopleActions.AddPeople) {
		const state = getState()
		patchState({
			// people: [...state.people, payload]
		})
	}

	@Action(PeopleActions.FetchPeople)
	fetchPeople({ getState, patchState }: StateContext<PeopleStateModel>, { payload }: PeopleActions.FetchPeople) {

	}
}