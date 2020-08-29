import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { People } from '../models'
import { API } from '../../../modules/shared/constants'

@Injectable({ providedIn: 'root' })
export class PeopleService {

	constructor(private http: HttpClient) { }

	getPeople(pageIndex: number) {
		return this.http.get(`${API}people/?page=${pageIndex}`)
	}

	getPerson(id: number) {
		return this.http.get<People>(`${API}people/${id}`)
	}

	fetchPeople(pageIndex: number) {
		return this.http.get<People[]>(`${API}people/?page=${pageIndex}`)
	}
}