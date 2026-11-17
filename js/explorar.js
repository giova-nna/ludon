// puxa a seção sessão todos os jogos
const jogosTodos = document.getElementById("jogos-todos");

// puxa jogos recomendaods
const jogosRecomendados = document.getElementById("jogos-recomendados");


// puxa o id do usuario logado
const usuarioLogado = dados.usuarios.find(user => user.id === dados.usuarioLogadoId);

// percorre todos os jogos em dados.js

function criarJogos(jogo, tipoClasse) {
    // refazer o html original
    const jogoBloco = document.createElement("div");
    jogoBloco.classList.add("jogo-bloco");

    // infos
    const jogoTopo = document.createElement("div");
    jogoTopo.classList.add("jogo-topo");

    const capa = document.createElement("img");
    capa.classList.add("jogo-capa")
    capa.src = jogo.capa;

    const titulo = document.createElement("h3");
    titulo.classList.add("jogo-nome");
    titulo.textContent = jogo.titulo;

    const ano = document.createElement("span");
    ano.classList.add("jogo-ano");
    ano.textContent = `(${jogo.lancamento})`;

    // refazer hover
    const jogoHover = document.createElement("div");
    jogoHover.classList.add("jogo-hover");

    const botaoAdicionar = document.createElement("button");
    botaoAdicionar.classList.add("botao-adicionar")
    botaoAdicionar.textContent = "+ ADICIONAR"

    // montar html
    // info
    jogoTopo.appendChild(titulo);
    jogoTopo.appendChild(ano);

    // hover
    jogoHover.appendChild(botaoAdicionar);

    // jogo
    jogoBloco.appendChild(capa);
    jogoBloco.appendChild(jogoTopo)
    jogoBloco.appendChild(jogoHover)


    tipoClasse.appendChild(jogoBloco)

    // logica do botao pra adiconar o jogo na biblioteca
    botaoAdicionar.addEventListener("click", function () {
        // força login
        if (!usuarioLogado) {
            alert("Você tem que estar logado pra adicionar jogos à biblioteca!");
            window.location.href = "login.html";
            return;
        }

        // verifica se o jogo já existe
        const jogoExiste = usuarioLogado.biblioteca.some(item => item.jogoId === jogo.id); // some ve se existe epelo menos um elemento igual

        // se existir n repete
        if (jogoExiste) {
            alert("Jogo já adicionado.");
            return;
        }

        // adicionar
        usuarioLogado.biblioteca.push({
            jogoId: jogo.id,
            horas: 0,
            progresso: 0
        })

        // salva no localstorage
        salvarDados();

        alert(`Você adicionou ${jogo.titulo} na biblioteca.`)
    });
}


// usa função
dados.jogos.forEach(jogo => {
    criarJogos(jogo, jogosTodos)
})

// filtra jogos com recomendando: true
dados.jogos.filter(jogo => jogo.recomendado).forEach(jogo => {
    criarJogos(jogo, jogosRecomendados)
})


// < div class="jogos-todos" >
//                 <div class="jogos-grid">
//                     <div class="jogo-bloco">
//                         <img class="jogo-capa"
//                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVShEmz6vN01_rxUF2YCKuthXrEvxJgb5l98MLX5sOg&s=10">
//                         <div class="jogo-topo">
//                             <h3 class="jogo-nome">Cyberpunk 2077</h3>
//                             <span class="jogo-ano">(2022)</span>
//                         </div>

//                         <div class="jogo-hover">
//                             <button class="botao-adicionar">
//                                 + Adicionar
//                             </button>
//                         </div>
//                     </div>
//                 </div>