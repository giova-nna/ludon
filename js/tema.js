// acha formulario
const formulario = document.getElementById("form-tema");

const botaoTema = document.getElementById("botao-tema");
const temaMenu = document.getElementById("tema-menu");

botaoTema.addEventListener("click", function () {
    temaMenu.classList.toggle("ativo");
});

function aplicarTema(tema) {
    let cor, logo;

    switch (tema) {
        case "azul":
            cor = "#0048FF";
            logo = "assets/logos/logo.svg";
            break;
        case "roxo":
            cor = "#9500ff";
            logo = "assets/logos/logo-purple.svg";
            break;
        case "ciano":
            cor = "#00e5ff";
            logo = "assets/logos/logo-cyan.svg";
            break;

        case "verde":
            cor = "#00ff4c";
            logo = "assets/logos/logo-green.svg";
            break;

        case "rosa":
            cor = "#ff00aa";
            logo = "assets/logos/logo-pink.svg";
            break;

        case "vermelho":
            cor = "#ff0048";
            logo = "assets/logos/logo-red.svg";
            break;

        case "amarelo":
            cor = "#ffd500";
            logo = "assets/logos/logo-yellow.svg";
            break;

        case "laranja":
            cor = "#ff8c00";
            logo = "assets/logos/logo-orange.svg";
            break;

        default:
            cor = "#0048FF";
            logo = "assets/logos/logo.svg";
            break;
    }

    // altera o css
    document.documentElement.style.setProperty("--cor-interface", cor);

    // altera no nav
    document.getElementById("logo-ludon").src = logo;
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // para de reiniciar a pagina

    // pega o valor do select
    const tema = document.getElementById("tema").value;

    aplicarTema(tema);

    localStorage.setItem("ludon-tema", tema)
})

const temaSalvo = localStorage.getItem("ludon-tema");

aplicarTema(temaSalvo);