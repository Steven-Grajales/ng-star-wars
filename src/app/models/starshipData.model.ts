import { Starship } from './starship.model'

export class StarshipData {
	constructor(
		public count: number,
		public results: Starship[]
	) { }
}