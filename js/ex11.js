async function obterImagem() {
    const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
    const dados = await resposta.json();
    document.getElementById('imagem-cachorro').src = dados.message;
}

document.addEventListener('DOMContentLoaded', obterImagem);
