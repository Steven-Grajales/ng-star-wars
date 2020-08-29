import { People } from '../models'

export class AddPeople {
	static readonly type = '[People] Add People'
	constructor(public payload: People[]) { }
}

export class AddPerson {
	static readonly type = '[People] Add Person'
	constructor(public payload: People) { }
}

export class GetPeople {
	static readonly type = '[People] Get People'
	constructor() { }
	// constructor(public payload: People[]) { }
}