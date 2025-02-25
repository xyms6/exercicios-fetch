async function carregarUsuario() {
    try {
       
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');

        const usuario = await resposta.json();

        const usuarioInfo = document.getElementById('usuario');

        usuarioInfo.innerHTML = `
            <h2>${usuario.name}</h2>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Telefone:</strong> ${usuario.phone}</p>
            <p><strong>Website:</strong> <a href="https://${usuario.website}" target="_blank">${usuario.website}</a></p>
            <p><strong>Empresa:</strong> ${usuario.company.name}</p>
        `;
    } catch (erro) {
        console.error('Erro ao carregar usuário:', erro);
    }
}

document.addEventListener('DOMContentLoaded', carregarUsuario);
