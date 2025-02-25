async function obterPokemons() {
    const resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const dados = await resposta.json();
    const listaPokemons = document.getElementById('pokemons');
    dados.results.forEach(pokemon => {
        const item = document.createElement('li');
        item.textContent = pokemon.name;
        listaPokemons.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', obterPokemons);
