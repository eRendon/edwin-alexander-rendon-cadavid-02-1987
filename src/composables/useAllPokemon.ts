import { ref } from 'vue'
import { IPokemon } from '../Interfaces/IPokemon'
import { get } from '../libs/fecth'
import { IApiResponse } from '../Interfaces/IApiResponse'
import { useLoadingStore } from '../store/components/loadingStore'

export function useAllPokemon() {
  const allPokemon = ref<IPokemon[]>([])
  const page = ref(1)
  const limit = ref(25)
  const totalPages = Math.ceil(151 / limit.value)
  const { present, dismiss } = useLoadingStore()
  const fetchPokemons = async (): Promise<void> => {
    try {
      present()
      const offset = (page.value - 1) * limit.value
      const response = await get<IApiResponse>(`pokemon?limit=${limit.value}&offset=${offset}`)
      const { results } = response
      const promises = results.map(async (pokemon): Promise<IPokemon> => {
        return await get<IPokemon>(`pokemon/${pokemon.name}`)
      })

      allPokemon.value = await Promise.all(promises)
      dismiss()
    } catch (e) {
      console.log(e)
      dismiss()
    }
  }

  const nextPage = async (): Promise<void> => {
    if (page.value < totalPages) {
      page.value++;
      await fetchPokemons()
    }
  }

  const prevPage = async (): Promise<void> => {
    if (page.value > 1) {
      page.value--
      await fetchPokemons()
    }
  }

  return {
    allPokemon,
    page,
    totalPages,
    fetchPokemons,
    nextPage,
    prevPage
  }
}
