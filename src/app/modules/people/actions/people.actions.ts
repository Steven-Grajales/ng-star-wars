import { People } from '../models'

export class AddPeople {
	static readonly type = '[People] Add People'
	constructor(public payload: People[]) { }
}
// Adds a new person to our store
export class AddPerson {
	static readonly type = '[People] Add Person'
	constructor(public payload: People) { }
}
// Gets people from NGXS store
export class GetPeople {
	static readonly type = '[People] Get People'
	constructor() { }
}
// Fetches people data from SWAPI
export class FetchPeople {
	static readonly type = '[People] Fetch People'
	constructor() { }
}
// Sets people data from SWAPI to NGXS store
export class SetPeople {
	static readonly type = '[People] Set People'
	constructor(public payload: People[]) { }
}

export type PeopleActions =
	| AddPeople
	| AddPerson
	| GetPeople
	| FetchPeople
	| SetPeople