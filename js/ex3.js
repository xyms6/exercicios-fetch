async function buscarCEP() {
    const cep = document.getElementById('cep').value.trim();
    if (cep.length !== 8 || isNaN(cep)) {
        document.getElementById('resultado').innerHTML = "<p>CEP inválido. Digite um CEP válido com 8 números.</p>";
        return;
    }

    try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();

        if (dados.erro) {
            document.getElementById('resultado').innerHTML = "<p>CEP não encontrado.</p>";
            return;
        }

        document.getElementById('resultado').innerHTML = `
            <p><strong>CEP:</strong> ${dados.cep}</p>
            <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>Estado:</strong> ${dados.uf}</p>
        `;
    } catch (erro) {
        console.error("Erro ao buscar CEP:", erro);
        document.getElementById('resultado').innerHTML = "<p>Erro ao buscar o CEP. Tente novamente.</p>";
    }
}
