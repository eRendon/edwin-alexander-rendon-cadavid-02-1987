import { IPokemon } from './IPokemon'

export interface IApiResponse {
  count: number
  next: string
  previous: string
  results: IPokemon[]
}
