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
// Gets selected person from store
// export class GetPerson {
// 	static readonly type = '[People] Get Person'
// 	constructor(public payload: number) { }
// }

export type PeopleActions =
	| GetPeople
	| SetPeople
	// | GetPerson