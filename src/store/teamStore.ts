import { defineStore } from 'pinia'
import { IPokemon } from '../Interfaces/IPokemon'
import { useAlertStore } from './components/alertStore'

export const useTeamStore = defineStore('team', {
  state: () => ({
      team: [] as IPokemon[]
    }),
  actions: {
    addToTeam (pokemon: IPokemon): void {
      const alertStore = useAlertStore()
      if (this.team.length === 6) {
        alertStore.showAlert({
          state: 'error',
          message: 'You can only add 6 pokemon to the team',
          show: true
        })
        return
      } else {
        this.team.push(pokemon)
        alertStore.showAlert({
          state: 'success',
          show: true,
          message: 'The pokemon was add correctly to your team.'
        })
      }
    },
    removeFromTeam(id: number):void {
      const alertStore = useAlertStore()

      this.team = this.team.filter((pokemon) => pokemon.id !== id)

      alertStore.showAlert({
        state: 'success',
        show: true,
        message: 'The pokemon was removed correctly.'
      })
    }
  }
})
