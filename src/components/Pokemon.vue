<script setup lang="ts">
import Card from './Atomic/Card.vue';
import { IPokemon } from '../Interfaces/IPokemon'
import { useTeamStore } from '../store/teamStore'
import Button from './Atomic/Button.vue'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const props = defineProps<{
  pokemon: IPokemon
  to: string
}>()

const teamStore = useTeamStore()
const { team } = storeToRefs(teamStore)

const addTeamData = (pokemon: IPokemon): void => {
  teamStore.addToTeam(pokemon)
}

const deletePokemon = (pokemon: IPokemon): void => {
  teamStore.removeFromTeam(pokemon.id)
}

const isInTeam = computed(() => {
  return team.value.some((p) => p.id === props.pokemon.id); // Verifica si el Pokémon está en el equipo
})

</script>

<template>
  <Card>
    <router-link :to="to">
      <img src="/bg-card.jpg" alt="imagen header card" class="card-header w-full">
      <div class="flex flex-col items-center">
        <img :src="pokemon?.sprites.front_default"
             alt="Pokémon"
             width={300}
             height={300}
             class="lg:w-[150px] lg:h-[150px] w-[160px] mt-[calc(-70px-1.75rem)] sm:mt-[calc(-100px-1.75rem)] lg:mt-[calc(-60px-15px)] image-pokemon object-contain  hover:scale-110 transition-transform duration-200 transform ease-in-out">
        <div class="p-4">
          <h3 class="text-xl capitalize font-bold">{{ pokemon?.name }}
            <span class="state">{{ pokemon?.base_experience }}hp</span>
          </h3>
          <slot name="weight"></slot>
          <slot name="height"></slot>
        </div>
      </div>
      <div v-if="!isInTeam" @click="addTeamData(pokemon)" class="flex">
        <Button label="Add To My Team"></Button>
      </div>
      <div v-if="isInTeam" @click.prevent="deletePokemon(pokemon)" class="flex">
        <Button styles="bg-[#303883] hover:bg-[#30388390]" label="Delete Pokemon"></Button>
      </div>
    </router-link>
  </Card>
</template>

<style scoped>
.image-pokemon {
  border: 5px solid white;
  border-radius: 50%;
  background-color: white;
}

h3 {
  font-family: 'Kumbh Sans', sans-serif;
}
</style>
