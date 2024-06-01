import { ref } from 'vue'
import { get } from '../libs/fecth'
import { IChain, IChainResponse, IPokemon, ITrigger } from '../Interfaces/IPokemon'
import { useLoadingStore } from '../store/components/loadingStore'

export function usePokemonChain() {
  const pokemonChain = ref<IChain>()
  const evolutions = ref<ITrigger[]>([]);
  const pokemonEvolves = ref<IPokemon[]>([])
  const { present, dismiss } = useLoadingStore()
  const getEvolves = async (): Promise<void> => {
    present()
    const promises = evolutions.value.map(async (chain): Promise<IPokemon> => {
      return await get<IPokemon>(`pokemon/${chain.name}`);
    });
    pokemonEvolves.value = await Promise.all(promises)
    console.log('pokemonEvolves', pokemonEvolves.value)
    dismiss()
  }
  const getChains = async (url: string): Promise<void> => {
    const response = await get<IChainResponse>(url)
    const { chain } = response
    pokemonChain.value = chain

    processEvolutions(response)
  }

  const processEvolutions = async (evolutionChainData: IChainResponse): Promise<void> => {
    const chain = evolutionChainData.chain;

    const addPokemonToEvolutions = (node: IChain) => {
      evolutions.value.push({ name: node.species.name, url: node.species.url });

      for (const evolution of node.evolves_to) {
        addPokemonToEvolutions(evolution);
      }
    }

    addPokemonToEvolutions(chain)
    await getEvolves()
  }

  return {
    pokemonChain,
    getChains,
    evolutions,
    pokemonEvolves
  }
}
