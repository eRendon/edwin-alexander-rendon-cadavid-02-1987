import { ref } from 'vue'
import { IPokemon } from '../Interfaces/IPokemon'
import { get } from '../libs/fecth'
import { AxiosError } from 'axios'
import { useRouter } from 'vue-router'
import { useAlertStore } from '../store/components/alertStore'
import { useLoadingStore } from '../store/components/loadingStore'

export function usePokemonDetail() {
  const pokemon = ref<IPokemon>()
  const pokemonDetail = ref<IPokemon>()
  const router = useRouter()
  const { showAlert } = useAlertStore()
  const { present, dismiss } = useLoadingStore()
  const getById = async (id: string): Promise<void> => {
    present()
    try {
      const response = await get<IPokemon>(`pokemon/${id}`)
      const detail = await get<IPokemon>(`pokemon-species/${id}`)
      console.log('detalle', response)
      pokemon.value = response
      pokemonDetail.value = detail
      dismiss()
    } catch (error: AxiosError) {
      const { status } = error.response
      if (status === 404) {
        showAlert({
          state: 'error',
          show: true,
          message: 'The pokemon do not exist, you will be redirect to home in a few seconds'
        })
        dismiss()
        setTimeout(async () => {
          await router.push('/')
        }, 3000)
      }
    }
  }

  return {
    getById,
    pokemon,
    pokemonDetail
  }
}
