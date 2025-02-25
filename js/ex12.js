const API_KEY = '04e9723a8b084d83b2db7782ca650f52';

async function converter() {
    const valorDolar = document.getElementById('valor-dolar').value;
    const resposta = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
    const dados = await resposta.json();
    const valorReal = valorDolar * dados.conversion_rates.BRL;
    document.getElementById('resultado').innerHTML = `${valorDolar} USD = ${valorReal} BRL`;
}