// puxa a seção jogos
const jogosAlta = document.getElementById("jogos-alta");

const descubraGeneros = document.getElementById("descubra-generos");


// usa função
dados.jogos.filter(jogo => jogo.recomendado).slice(0, 15).forEach(jogo => {
    const capa = document.createElement("img");
    capa.src = jogo.capa;

    jogosAlta.appendChild(capa);
})


// impede que os gêneros repitam
const listaGeneros = dados.jogos.reduce((lista, jogo) => {
    if (!lista.includes(jogo.genero)) {
        lista.push(jogo.genero);
    }

    return lista;
}, []).slice(0, 10)
// ^^ valor incial, lista vazia

listaGeneros.forEach(item => {
    const genero = document.createElement("a")
    genero.href = "explorar.html";
    genero.textContent = item;

    descubraGeneros.appendChild(genero)
})

//  < a href = "" > Gênero 1</a >
//  <a href="">Gênero 2</a>
//  <a href="">Gênero 3</a>
//  <a href="">Gênero 4</a>
//  <a href="">Gênero 5</a>
//  <a href="">Gênero 6</a>
//  <a href="">Gênero 7</a>
//  <a href="">Gênero 8</a>
//  <a href="">Gênero 9</a>
//  <a href="">Gênero 10</a>