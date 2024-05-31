<template>
  <main class="flex-1 overflow-y-auto p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Pokemon :pokemon="pokemon" v-for="pokemon in allPokemon"></Pokemon>
    </div>
  </main>
</template>

<script setup>
import Pokemon      from '../components/Pokemon.vue';
import {usePokemon} from '../composables/usePokemon.ts';
import {onMounted}  from 'vue';
const { fetchPokemons, allPokemon } = usePokemon()

onMounted(fetchPokemons)
</script>

<style scoped>

</style>
