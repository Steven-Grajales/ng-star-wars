import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { API } from './constants'

@Injectable({ providedIn: 'root' })
export class DataService {

	constructor(private http: HttpClient) { }

	getPeople() {
		return this.http.get(`${API}people/`)
		// return this.http.get(`${API}people/?page=4`)
	}

	getStarShips() {
		return this.http.get(`${API}starships/`)
	}
}