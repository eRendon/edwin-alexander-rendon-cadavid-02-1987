export interface IAlert {
  message: string
  state: 'success' | 'error' | null
  show: boolean
}
