import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { API } from '../../../modules/shared/constants'

@Injectable({ providedIn: 'root' })
export class StarshipsService {

	constructor(private http: HttpClient) { }

	getStarShips(pageIndex: number) {
		return this.http.get(`${API}starships/?page=${pageIndex}`)
	}
}