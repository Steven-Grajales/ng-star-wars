import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Store } from '@ngxs/store'

import { People, PeopleData } from '../models'
import * as PeopleActions from '../actions/people.actions'
import { API } from '../../../modules/shared/constants'

@Injectable({ providedIn: 'root' })
export class PeopleService {

	constructor(
		private http: HttpClient,
		private store: Store
	) { }

	getPeople(pageIndex: number) {
		return this.http.get(`${API}people/?page=${pageIndex}`)
	}

	getPerson(id: number) {
		return this.http.get<People>(`${API}people/${id}`)
	}

	fetchPeople(pageIndex: number) {
		this.http.get<People[]>(`${API}people/?page=${pageIndex}`)
			.subscribe((data: PeopleData) => {
				console.log('people data in data service!', data)
				this.store.dispatch(new PeopleActions.SetPeople(data.results))
			})
	}
}