<template>
  <main class="grid grid-cols-1 gap-2">
      <Card v-if="pokemon" class="p-4">
        <div class="grid grid-cols-2 gap-3">
          <Pokemon to="#" :pokemon="pokemon">
            <template #weight>
              <p class="text-xl capitalize font-bold">
                weight: <span class="state">{{ pokemon?.weight }}</span>
              </p>
            </template>
            <template #height>
              <p class="text-xl capitalize font-bold">
                height: <span class="state">{{ pokemon?.height }}</span>
              </p>
            </template>
          </Pokemon>
          <PokemonStats :pokemon="pokemon"></PokemonStats>
        </div>
        <div>
          <PokemonDetail :pokemon="pokemonDetail"></PokemonDetail>
        </div>
      </Card>
  </main>
</template>

<script setup lang="ts">
import Card from '../components/Atomic/Card.vue'
import PokemonStats from '../components/PokemonStats.vue'
import Pokemon from '../components/Pokemon.vue'
import { usePokemonDetail } from '../composables/usePokemonDetail'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PokemonDetail from '../components/PokemonDetail.vue'

const { getById, pokemon, pokemonDetail } = usePokemonDetail()

const route = useRoute()
const router = useRouter()
const id = ref('')

onMounted(async () => {
  if (route.params.id) {
    id.value = <string>route.params.id
    await getById(id.value)
  } else {
    router.go(1)
  }
})

</script>

<style scoped>

</style>
