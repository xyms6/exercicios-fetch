// Função para buscar usuários e exibir na tela
async function carregarUsuarios() {
    try {
        // Fazendo requisição para a API
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');

        const usuarios = await resposta.json();

        const listaUsuarios = document.getElementById('usuarios');

        usuarios.forEach(usuario => {
            const item = document.createElement('li');
            item.textContent = `${usuario.name} - ${usuario.email}`;
            listaUsuarios.appendChild(item);
        });
    } catch (erro) {
        console.error('Erro ao carregar usuários:', erro);
    }
}

document.addEventListener('DOMContentLoaded', carregarUsuarios);
