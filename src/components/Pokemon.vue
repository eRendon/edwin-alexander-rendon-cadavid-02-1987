<template>
  <Card>
    <img src="/bg-card.jpg" alt="imagen header card" class="card-header">
    <div class="flex flex-col items-center">
      <img :src="pokemon.sprites.front_default" alt="Pokémon" width={300} height={300} class="w-full image-pokemon h-48 object-contain  hover:scale-110 transition-transform duration-200 transform ease-in-out">
      <div class="p-4">
        <h3 class="text-xl capitalize font-bold">{{ pokemon.name }}</h3>
        <div class="flex items-center gap-2 mt-2">
          <span class="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">Electric</span>
          <span class="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">HP: 35</span>
          <span class="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">Attack: 55</span>
        </div>
      </div>
    </div>
    <div class="flex">
      <router-link to="#" class="block bg-gray-900 w-full text-white text-center py-2 hover:bg-gray-800" prefetch={false}>
        View Details
      </router-link>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from './Atomic/Card/Card.vue';
import { IPokemon } from '../Interfaces/IPokemon'
defineProps<{
  pokemon: IPokemon
}>()
</script>

<style scoped>
.image-pokemon {
  width: 200px;
  height: 200px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: calc(-100px - 5px);
  background-color: white;
}
</style>
