<template>
  <div class="grid grid-cols-2 w-6/12 gap-3 mt-8 mb-8">
    <form class="">
      <label for="versions"
             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select version</label>
      <select id="versions"
              v-model="selectedVersion"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Select version</option>
        <option v-for="(version, index) in versions" :key="index" :value="version">{{ version }}</option>
      </select>
    </form>
    <form class="">
      <label for="versions"
             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select language</label>
      <select id="versions"
              v-model="selectedLanguage"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Select version</option>
        <option v-for="language in languagesForSelectedVersion" :key="language.name" :value="language.name">{{ language.name }}</option>
      </select>
    </form>
  </div>
  <Card class="p-8 bg-gray-100">
    <h2 class="text-center mb-5">Description</h2>
    <p class="text-center">{{ selectedFlavorText }}</p>
  </Card>
  <div class="grid grid-cols-3 gap-4 p-4">
    <div  v-for="pokemon in pokemonEvolves">
      <Pokemon to="#" :pokemon="pokemon"></Pokemon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { IPokemon } from '../Interfaces/IPokemon'
import Card from './Atomic/Card.vue'
import Pokemon from './Pokemon.vue'
import { usePokemonChain } from '../composables/usePokemonChain'

const props = defineProps<{
  pokemon?: IPokemon
}>()

const  { pokemonEvolves, getChains }  = usePokemonChain()

const selectedVersion = ref('red');
const selectedLanguage = ref('en');

const versions = computed(() => {
  if (!props.pokemon) return []
  return props.pokemon.flavor_text_entries.map(entry => entry.version.name);
})

const languagesForSelectedVersion = computed(() => {
  if (!props.pokemon) return []
  const versionEntries = props.pokemon.flavor_text_entries.filter(entry => entry.version.name === selectedVersion.value)
  return versionEntries.map(entry => entry.language)
})

const selectedFlavorText = computed(() => {
  if (!props.pokemon) return ''
  const entry = props.pokemon.flavor_text_entries.find(entry => entry.version.name === selectedVersion.value && entry.language.name === selectedLanguage.value)
  return entry ? entry.flavor_text : 'No description available'
})

onMounted(() => {
  getChains(props.pokemon!.evolution_chain.url)
})

</script>

<style scoped>

</style>
