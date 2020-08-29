import { People } from './'

export interface PeopleData {
	count: number,
	next: string,
	previous?: any
	results: People[]
}