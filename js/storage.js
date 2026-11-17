// chave local storage
const chave = "ludon";

// salva dados
function salvarDados() {
    localStorage.setItem(chave, JSON.stringify(dados))
}

// puxar daddos salvos
function carregarDados() {
    const dadosSalvos = localStorage.getItem(chave);

    dadosSalvos ? dados = JSON.parse(dadosSalvos) : salvarDados();
}


// chama função
carregarDados();