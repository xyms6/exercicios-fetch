async function obterUsuarios() {
    const resposta = await fetch('https://randomuser.me/api/?results=10');
    const dados = await resposta.json();
    const listaUsuarios = document.getElementById('usuarios');
    dados.results.forEach(usuario => {
        const item = document.createElement('li');
        item.textContent = `${usuario.name.first} ${usuario.name.last}`;
        listaUsuarios.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', obterUsuarios);
