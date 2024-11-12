const pokemonList = document.getElementById('pokemonList')

const limit = 10
let offset = 0;

function getPokemons(offset, limit){
    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(htmlCreator.pokemonToLi).join('')
        /* console.log(newHtml) */
        pokemonList.innerHTML += newHtml
    })
}

function getPokemon(id){
    return pokeAPI.getPokemon(id)     
}


getPokemons(offset, limit)


/* -------------------------- Testes --------------------------------- */
/* getPokemon(1).then((response) => console.log(response)) */


