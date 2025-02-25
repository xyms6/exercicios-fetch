const API_KEY = 'a71feac18cfc45eab40185235252002';

async function obterPrevisao() {
    const cidade = document.getElementById('cidade').value;
    try {
        const resposta = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&lang=pt`);
        const dados = await resposta.json();
        document.getElementById('previsao').innerHTML = `
            <h2>Tempo em ${dados.location.name}</h2>
            <p><strong>Temperatura:</strong> ${dados.current.temp_c}°C</p>
            <p><strong>Condição:</strong> ${dados.current.condition.text}</p>
            <p><strong>Umidade:</strong> ${dados.current.humidity}%</p>
            <p><strong>Vento:</strong> ${dados.current.wind_kph} km/h</p>
        `;
    } catch (erro) {
        console.error('Erro ao carregar previsão:', erro);
    }
}
