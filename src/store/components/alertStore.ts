import { defineStore } from 'pinia'
import { IAlert } from '../../Interfaces/components/IAlert'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    alert: {
      state: null,
      message: '',
      show: false
    } as IAlert
  }),
  actions: {
    showAlert (alertState: IAlert): void {
      this.alert = alertState

      setTimeout(() => {
        this.dismissAlert()
      }, 5000)
    },
    dismissAlert (): void {
      this.alert = {
        state: null,
        message: '',
        show: false
      }
    }
  }
})
