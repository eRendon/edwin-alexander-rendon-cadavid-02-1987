<template>
    <div class="grid grid-cols-1">
      <div class="h-60 mr-auto ml-auto">
        <ChartPie :labels="stats?.labels" :stats="stats?.stats"></ChartPie>
      </div>
      <div class="flex justify-end">
        <AudioPlay :url-audio="pokemon.cries.latest"></AudioPlay>
      </div>
    </div>
</template>

<script setup lang="ts">


import { reactive } from 'vue'
import ChartPie from './Atomic/ChartPie.vue'
import { IPokemon } from '../Interfaces/IPokemon'
import AudioPlay from '../components/Atomic/AudioPlay.vue'

const props = defineProps<{
  pokemon: IPokemon
}>()

const stats = reactive({
  stats: props.pokemon.stats.map((state) => {
    return state.base_stat
  }),
  labels: props.pokemon.stats.map((state) => {
    return state.stat.name
  })
})

</script>

<style scoped>

</style>
