import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { API } from '../constants'

@Injectable({ providedIn: 'root' })
export class DataService {

	constructor(private http: HttpClient) { }

	getPeople(pageIndex: number) {
		return this.http.get(`${API}people/?page=${pageIndex}`)
	}

	getStarShips(pageIndex: number) {
		return this.http.get(`${API}starships/?page=${pageIndex}`)
	}
}