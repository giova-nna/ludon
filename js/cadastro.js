// função pra adicionar novo usuario em dados
function cadastrarUsuario(nome, dataNascimento, email, nomeUsuario, senha) {
    const novoUsuario = {
        id: Date.now(), // ou usar math.random
        nome: nome,
        dataNascimento: dataNascimento,
        email: email,
        nomeUsuario: nomeUsuario,
        senha: senha,
        foto: "assets/foto_padrao_usuario.png",
        bio: "",
        biblioteca: []
    }

    dados.usuarios.push(novoUsuario);

    salvarDados();

    alert("Conta criada com sucesso!\nBem-vindo(a) ao Ludon.")
}

// pegar valores do formulario em cadastro.html
const formulario = document.getElementById("formulario-cadastro");

// validar email - slide da aula
function validarEmail(email) {
    var posArroba = email.indexOf("@");
    var posPonto = email.indexOf(".");

    if (posArroba < 1 || posPonto < posArroba + 2 || posPonto + 2 >= email.length) {
        alert("Digite um e-mail válido!");
        return false;
    }

    return true;
}

// validar senha
function validarSenha(senha) {
    if (senha.length < 8) {
        alert("Digite uma senha de pelo menos 8 dígitos!")
        return false;
    }

    return true;
}

// verificar usuario repetido
function verificarUsuario(email, nomeUsuario) {
    for (let usuario of dados.usuarios) {
        if (usuario.email === email) {
            alert("Esse e-mail já está em uso!");
            return false;
        }

        if (usuario.nomeUsuario === nomeUsuario) {
            alert("Esse usuario já está em uso!");
            return false;
        }
    }

    return true;
}

// puxa os valores quando o botão for pressionado
formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // pra parar de reiniciar a página

    // dados
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("nasc").value;
    const email = document.getElementById("email").value;
    const nomeUsuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // se uma das validações for falsa, retorna
    if (!validarEmail(email) || !validarSenha(senha)) {
        return;
    }

    // se senha e email estiverem corretos, valida se usuáiro ou e-mail estão em uso
    if (!verificarUsuario(email, nomeUsuario)) {
        return;
    }

    // se passar nas verificações, cadastra
    cadastrarUsuario(nome, dataNascimento, email, nomeUsuario, senha);
})

