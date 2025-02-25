async function obterUsuario() {
    const resposta = await fetch('https://randomuser.me/api/?results=1');
    const dados = await resposta.json();
    const usuario = dados.results[0];
    document.getElementById('usuario').innerHTML = `
        <h2>${usuario.name.first} ${usuario.name.last}</h2>
        <p>Email: ${usuario.email}</p>
        <p>Localização: ${usuario.location.city}, ${usuario.location.country}</p>
    `;
}

document.addEventListener('DOMContentLoaded', obterUsuario);
