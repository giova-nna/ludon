// pegar formulário
const formulario = document.getElementById("formulario-login");

// verificar dados do login
function fazerLogin(usuario, senha) {
    // usa arrow function e .find() ao invés de funcao e metodo de busca convencional
    const usuarioEncontrado = dados.usuarios.find(
        user => user.email === usuario || user.nomeUsuario === usuario
    );

    // se algo falhar, retorna erro
    if ((!usuarioEncontrado || usuarioEncontrado.senha !== senha) || (senha.length < 8) || (usuario == null)) {
        alert("Usuário/e-mail ou senha incorretos!")
        return;
    }

    // senão, salva pra recuperar o usuario logado depois
    dados.usuarioLogadoId = usuarioEncontrado.id;

    salvarDados();

    // por fim, entra
    alert(`Bem-vindo(a) de volta ao jogo, ${usuarioEncontrado.nomeUsuario}.`)

    // redireciona pro perfil do usuario logado
    window.location.href = "perfil.html"

}

// puxa os valores ao tentar enviar
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // pra não ficar voltando DE NOVO

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    fazerLogin(usuario, senha);
})