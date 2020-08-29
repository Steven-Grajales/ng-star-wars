import { People } from '../models'

// Gets people from NGXS store
export class GetPeople {
	static readonly type = '[People] Get People'
	constructor() { }
}
// Sets people data from SWAPI to NGXS store
export class SetPeople {
	static readonly type = '[People] Set People'
	constructor(public payload: People[]) { }
}

export type PeopleActions =
	| GetPeople
	| SetPeople