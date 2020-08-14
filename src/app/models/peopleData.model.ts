import { People } from './people.model'

export class PeopleData {
	constructor(
		public count: number,
		public results: People[]
	) { }
}