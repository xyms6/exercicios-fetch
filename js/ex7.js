async function obterPokemons() {
    const quantidade = document.getElementById('quantidade').value || 10;
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantidade}`);
    const dados = await resposta.json();
    const listaPokemons = document.getElementById('pokemons');
    listaPokemons.innerHTML = '';
    dados.results.forEach(pokemon => {
        const item = document.createElement('li');
        item.textContent = pokemon.name;
        listaPokemons.appendChild(item);
    });
}
