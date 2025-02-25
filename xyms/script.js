document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");

    const tarefas = [
        { descricao: "Exibir todos os usuários (JSONPlaceholder)", func: listarUsuarios },
        { descricao: "Exibir usuário com ID = 1 (JSONPlaceholder)", func: listarUsuario1 },
        { descricao: "Buscar CEP (ViaCEP)", func: buscarCEP },
        { descricao: "Previsão do tempo - São Paulo", func: tempoSaoPaulo },
        { descricao: "Previsão do tempo - Cidade qualquer", func: tempoCidade },
        { descricao: "Retornar 10 pokémons", func: listarPokemons10 },
        { descricao: "Retornar N pokémons", func: listarPokemonsN },
        { descricao: "Exibir usuários (randomuser.me)", func: listarUsuariosRandom },
        { descricao: "Exibir usuário com ID = 1 (randomuser.me)", func: listarUsuario1Random },
        { descricao: "Buscar fato sobre gatos", func: buscarFatoGato },
        { descricao: "Imagem aleatória de cachorro", func: imagemCachorro },
        { descricao: "Converter dólar para real", func: converterDolar }
    ];

    tarefas.forEach(tarefa => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.textContent = tarefa.descricao;
        box.addEventListener("click", tarefa.func);
        container.appendChild(box);
    });
});

// Funções

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        alert("Erro ao buscar dados.");
    }
};

// 1. Listar todos os usuários (JSONPlaceholder)
async function listarUsuarios() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/users");
    alert(JSON.stringify(data, null, 2));
}

// 2. Listar usuário com ID = 1 (JSONPlaceholder)
async function listarUsuario1() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/users/1");
    alert(JSON.stringify(data, null, 2));
}

// 3. Buscar CEP (ViaCEP)
async function buscarCEP() {
    let cep = prompt("Digite o CEP:");
    if (cep) {
        const data = await fetchData(`https://viacep.com.br/ws/${cep}/json/`);
        alert(JSON.stringify(data, null, 2));
    }
}

// 4. Previsão do tempo - São Paulo
async function tempoSaoPaulo() {
    const data = await fetchData(`https://api.weatherapi.com/v1/current.json?key=38d5e1a2045747d5920113329252502&q=Sao Paulo&lang=pt`);
    alert(`Temperatura: ${data.current.temp_c}°C`);
}

// 5. Previsão do tempo - Cidade qualquer
async function tempoCidade() {
    let cidade = prompt("Digite o nome da cidade:");
    if (cidade) {
        const data = await fetchData(`https://api.weatherapi.com/v1/current.json?key=SUA_CHAVE&q=${cidade}&lang=pt`);
        alert(`Temperatura: ${data.current.temp_c}°C`);
    }
}

// 6. Retornar 10 pokémons
async function listarPokemons10() {
    const data = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=10");
    alert(JSON.stringify(data.results, null, 2));
}

// 7. Retornar N pokémons
async function listarPokemonsN() {
    let quantidade = prompt("Quantos Pokémons deseja listar?");
    if (quantidade) {
        const data = await fetchData(`https://pokeapi.co/api/v2/pokemon?limit=${quantidade}`);
        alert(JSON.stringify(data.results, null, 2));
    }
}

// 8. Listar usuários do randomuser.me
async function listarUsuariosRandom() {
    const data = await fetchData("https://randomuser.me/api/?results=10");
    alert(JSON.stringify(data.results, null, 2));
}

// 9. Exibir usuário com ID = 1 (randomuser.me)
async function listarUsuario1Random() {
    const data = await fetchData("https://randomuser.me/api/");
    alert(JSON.stringify(data.results[0], null, 2));
}

// 10. Buscar fato sobre gatos
async function buscarFatoGato() {
    const data = await fetchData("https://catfact.ninja/fact");
    alert(data.fact);
}

// 11. Imagem aleatória de cachorro
async function imagemCachorro() {
    const data = await fetchData("https://dog.ceo/api/breeds/image/random");
    const img = document.createElement("img");
    img.src = data.message;
    img.style.maxWidth = "300px";
    document.body.appendChild(img);
}

// 12. Converter dólar para real
async function converterDolar() {
    const data = await fetchData("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    let valor = prompt("Digite o valor em dólares:");
    if (valor) {
        let cotacao = parseFloat(data.USDBRL.bid);
        let resultado = (valor * cotacao).toFixed(2);
        alert(`$${valor} equivale a R$${resultado}`);
    }
}
