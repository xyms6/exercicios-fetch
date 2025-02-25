const pFatos = document.getElementById('fatos');
const btnTrocarFato = document.getElementById('trocarFato');

async function fetchFatos() {
    try{
        const resposta = await fetch('https://catfact.ninja/fact')
        const dados = await resposta.json();
        pFatos.textContent = dados.fact;
    }catch(error){
        pFatos.textContent = 'erro';
        console.log('erro')
    }

}

btnTrocarFato.addEventListener('click', fetchFatos);
fetchFatos();