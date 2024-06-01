<template>
  <transition name="slide-fade">
    <div v-if="alert.show" id="alert-border-3"
         :class="alert.state === 'success' ? 'bg-green-50 text-green-800 border-green-300' : 'bg-red-50 text-red-800 border-red-300'"
         class="flex fixed right-2 bottom-0 rounded-lg items-center p-4 mb-4  border-t-4 "
         role="alert">
      <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <div class="ms-3 text-sm font-medium">
        {{ alert.message }}
      </div>
      <button @click="alertStore.dismissAlert()"
              type="button"
              :class="alert.state === 'success' ? 'text-green-500 focus:ring-green-400 bg-green-50 hover:bg-green-200' : 'text-red-500 focus:ring-red-400 bg-red-50 hover:bg-red-200'"
              class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8">
        <span class="sr-only">Dismiss</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useAlertStore } from '../../store/components/alertStore'
import { storeToRefs } from 'pinia'

const alertStore = useAlertStore()
const { alert } = storeToRefs(alertStore)

</script>

<style scoped>

</style>
