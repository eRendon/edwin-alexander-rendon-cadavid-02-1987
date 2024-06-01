<template>
  <div v-if="loading.isLoading" class="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50">
    <div class="animate-spin rounded-full h-12 w-12 border-4 border-gray-400 border-t-transparent"></div>
    <p class="font-bold text-gray-400 text-xl mr-3">{{ loading.message }}</p>
  </div>
</template>

<script setup lang="ts">

import { useLoadingStore } from '../../store/components/loadingStore'
import { storeToRefs } from 'pinia'

const loadingStore = useLoadingStore()
const { loading } = storeToRefs(loadingStore)
</script>

<style scoped>

</style>
