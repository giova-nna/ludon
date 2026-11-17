// recupera o usuario logado pelo id do dados.js
const idUsuario = dados.usuarioLogadoId;

// usa o id pra procurar o usuário
const usuarioLogado = dados.usuarios.find(user => user.id === idUsuario);

// verifica se tem usuario logado
if (!usuarioLogado) {
    alert("Você precisa fazer login antes de acessar seu perifl.");
    window.location.href = "login.html";
}

// console.log(usuarioLogado);

// atualzia as informações do perfil

document.getElementById("usuario-perfil").src = usuarioLogado.foto; // altera o src="" do html

document.getElementById("usuario-arroba").textContent = "@" + usuarioLogado.nomeUsuario;

document.getElementById("usuario-bio").textContent = usuarioLogado.bio || "Adicione uma descrição.";

// puxa a biblioteca[] do usuario logado
const biblioteca = usuarioLogado.biblioteca;

// percorre os jogos
biblioteca.forEach(teca => {
    // pega o id da biblioteca e procura em jogos
    const jogo = dados.jogos.find(jogo => jogo.id === teca.jogoId);

    // refazer o html antigo com javascript

    // refaz as duas divs principais
    const jogoItem = document.createElement("div");
    jogoItem.classList.add("jogo-item");

    const jogoBloco = document.createElement("div");
    jogoBloco.classList.add("jogo-bloco");


    // adiciona capa
    const capa = document.createElement("img");
    capa.classList.add("jogo-capa");
    capa.src = jogo.capa;




    // estatisticas
    const jogoBaixo = document.createElement("div");
    jogoBaixo.classList.add("jogo-baixo");

    // horas jogadas
    const tempo = document.createElement("span");
    tempo.classList.add("jogo-tempo", "estatistica");
    tempo.innerHTML = `<i data-lucide="clock"></i>${teca.horas}h`;

    // consquistas
    const progresso = document.createElement("span");
    progresso.classList.add("jogo-progresso", "estatistica");
    progresso.innerHTML = `<i data-lucide="trophy"></i>${teca.progresso}/${jogo.totalConquistas}`;

    // adiciona no html 
    jogoBaixo.appendChild(tempo);
    jogoBaixo.appendChild(progresso);


    jogoBloco.appendChild(capa);
    jogoBloco.appendChild(jogoBaixo);
    jogoItem.appendChild(jogoBloco);

    const botaoContainer = document.createElement("div")
    botaoContainer.classList.add("botao-container");

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar-jogo");
    botaoEditar.textContent = "EDITAR"

    // termina de adicionar tudo no html meu deus
    botaoContainer.appendChild(botaoEditar);
    jogoItem.appendChild(botaoContainer)
    document.getElementById("jogos-grid").appendChild(jogoItem)

});

lucide.createIcons(); // pra gerar os icones criados no html de cima

// <div class="jogo-item">
//     <div class="jogo-bloco">
//         <img class="jogo-capa"
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVShEmz6vN01_rxUF2YCKuthXrEvxJgb5l98MLX5sOg&s=10">
//             <div class="jogo-baixo">
//                 <span class="jogo-tempo estatistica"><i data-lucide="clock"></i> 100h
//                     30m</span>
//                 <span class="jogo-progresso estatistica"><i
//                     data-lucide="trophy"></i>16/57</span>
//             </div>

//     </div>
//     <div class="botao-container">
//         <button class="botao-editar-jogo">
//             EDITAR</button>
//     </div>
// </div>
