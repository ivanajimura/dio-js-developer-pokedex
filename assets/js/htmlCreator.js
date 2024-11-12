const htmlCreator = {}

htmlCreator.pokemonToLi = (pokemon) => {
    const pokemonNumber = `<span class="number">#${pokemon.number}</span>`
    const pokemonName = `<span class="name">${pokemon.name}</span>`

    let pokemonTypes = `
                    <ol class="types">
                        <li class="type ${pokemon.mainType}">${pokemon.mainType}</li>`
    if (!(pokemon.secondaryType === "")){
        pokemonTypes += `
                        <li class="type ${pokemon.secondaryType}">${pokemon.secondaryType}</li>`
    }
    pokemonTypes += `</ol>`
                    
    pokemonImage = `
                        <img src=${pokemon.image}
                        alt=${pokemon.name}>
                    `

    return `
            <li class="pokemon ${pokemon.mainType}">
                ${pokemonNumber}
                ${pokemonName}
                <div class="detail">
                ${pokemonTypes}
                ${pokemonImage}
                </div>
            </li>
            `
}

/* console.log(htmlCreator.pokemonToLi({"name": "Bulba"})) */