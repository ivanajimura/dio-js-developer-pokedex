const pokeAPI = {
    baseLink: "https://pokeapi.co/api/v2/pokemon",
}


pokeAPI.getPokemons = (offset, limit) => {
    const link = `${pokeAPI.baseLink}?offset=${offset}&limit=${limit}`

    return fetch(link)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeAPI.getPokemon))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.log(error))

}

pokeAPI.getPokemon = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokeAPIdetail) => pokeAPI.convertAPIToPokemon(pokeAPIdetail))
        /* .then((result) => console.log(result)) */
}

pokeAPI.convertAPIToPokemon = (pokeAPIdetail) => {
    const pokemon = new Pokemon()
    pokemon.number = pokeAPIdetail.id
    pokemon.name = pokeAPIdetail.name
    pokemon.abilities = pokeAPIdetail.abilities
    pokemon.cry = pokeAPIdetail.cries.latest
    pokemon.height = pokeAPIdetail.height
    pokemon.weight = pokeAPIdetail.weight
    pokemon.image = pokeAPIdetail.sprites.front_default
    const types = pokeAPIdetail.types.map((typeSlot) => typeSlot.type.name)
    pokemon.mainType = types[0]
    pokemon.secondaryType = ""
    if (types.length > 1){
        pokemon.secondaryType = types[1]
    }

    console.log(pokemon)
    return pokemon
}

/* pokemonApi.buildPokemonsLink(0,1) */
/* pokemonApi.getPokemon(500) */
/* pokemonApi.getPokemons(0,5) */
