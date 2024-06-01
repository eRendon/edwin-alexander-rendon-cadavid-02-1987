<template>
  <main class="flex-1 overflow-y-auto p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Pokemon to="#" :pokemon="pokemon" v-for="pokemon in allPokemon"></Pokemon>
    </div>
    <Paginator :total-pages="totalPages" :page="page" @changePage="changePage"></Paginator>
  </main>
</template>

<script setup lang="ts">
import Pokemon      from '../components/Pokemon.vue';
import { useAllPokemon } from '../composables/useAllPokemon.ts';
import {onMounted}  from 'vue';
import Paginator from '../components/Atomic/Paginator.vue'
const { fetchPokemons, allPokemon, page, prevPage, nextPage, totalPages } = useAllPokemon()

const changePage = async (newPage: number) => {
  if (newPage < page.value) {
    await prevPage();
  } else if (newPage > page.value) {
    await nextPage();
  } else {
    await fetchPokemons();
  }
};

onMounted(fetchPokemons)
</script>

<style scoped>

</style>
