export interface IPokemon {
  abilities: [
    {
      ability: ITrigger
      is_hidden: boolean
      slot: number
    }
  ]
  base_experience: number
  cries: {
    latest: string
    legacy: string
  }
  forms: ITrigger[]
  game_indices: [
    {
      game_index: number
      version: ITrigger
    }
  ]

  height: string
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: [
    {
      move: ITrigger
      version_group_details: [
        {
          level_learned_at: number
          move_learn_method: ITrigger
          version_group: ITrigger
        }
      ]
    }
  ]
  name: string
  order: number
  past_abilities: []
  past_types: []
  species: ITrigger
  sprites: {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }

  stats: [
    {
      base_stat: number
      effort: number
      stat: ITrigger
    }
  ]
  types: [
    {
      slot: number
      type: ITrigger
    }
  ]
  weight: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  color: ITrigger
  shape: ITrigger
  evolves_from_species: ITrigger | null
  evolution_chain: {
    url: string
  };
  habitat: ITrigger | null
  generation: ITrigger
  names: {
    name: string
    language: ITrigger
  }[]
  flavor_text_entries: {
    flavor_text: string
    language: ITrigger
    version: ITrigger
  }[]
  genera: {
    genus: string
    language: ITrigger
  }[]
}


export interface IChainResponse {
  baby_trigger_item: null
  chain: IChain
  id: number
}

export interface IChain {
  evolution_details: [{
    gender: null
    held_item: null
    item: null
    known_move: null
    known_move_type: null
    location: null
    min_affection: null
    min_beauty: null
    min_happiness: null
    min_level: 32
    needs_overworld_rain: false
    party_species: null
    party_type: null
    relative_physical_stats: null
    time_of_day: ""
    trade_species: null
    trigger: ITrigger
    turn_upside_down: false
  }]
  evolves_to: IChain[]
  is_baby: boolean
  species : {
    name: string
    url: string
  }
}


export interface ITrigger {
  name: string
  url: string
}
