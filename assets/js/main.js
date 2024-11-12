const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 1025
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

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    let qttRecordNextPage = offset + limit

    if(qttRecordNextPage >= maxRecords){
        getPokemons(offset, qttRecordNextPage - maxRecords)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
        return
    }
    getPokemons(offset, limit)
})


getPokemons(offset, limit)


/* -------------------------- Testes --------------------------------- */
/* getPokemon(1).then((response) => console.log(response)) */


