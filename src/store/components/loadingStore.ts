import { defineStore } from 'pinia'
import { ILoading } from '../../Interfaces/components/ILoading'

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    loading: {
      isLoading: false,
      message: 'Loading...'
    } as ILoading
  }),
  actions: {
    present (message?: string): void {
      this.loading = {
        message,
        isLoading: true
      }
    },
    dismiss (): void {
      this.loading = {
        isLoading: false,
        message: 'Loading...'
      }
    }
  }
})
