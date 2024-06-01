<template>
  <main class="grid grid-cols-1 gap-2">
    <div v-if="team.length > 0" v-for="pokemon of team">
      <Card class="p-4">
        <div class="grid grid-cols-2 gap-3">
          <Pokemon :to="`/team/${pokemon.id}`" :pokemon="pokemon"></Pokemon>
          <PokemonStats :pokemon="pokemon"></PokemonStats>
        </div>
      </Card>
    </div>
    <div v-else class="text-center font-bold mt-20">
      Not have pokemon in your team yet.
    </div>
  </main>
</template>

<script setup lang="ts">
import { useTeamStore } from '../store/teamStore'
import { storeToRefs } from 'pinia'
import Pokemon from '../components/Pokemon.vue'
import PokemonStats from '../components/PokemonStats.vue'
import Card from '../components/Atomic/Card.vue'

const pokemonStore = useTeamStore()

const { team } = storeToRefs(pokemonStore)

console.log(team.value)
</script>

<style scoped>

</style>
