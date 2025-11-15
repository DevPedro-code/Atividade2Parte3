const usuariosJSON = `[
 {"nome": " carlos silva ", "email": "CARLOS@EMAIL.COM", "idade": "25"}
,
 {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
 {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;
function normalizarUsuarios(json) {
 // - Trim nos nomes e capitalize
 // - Email em minúsculo
 // - Converter idade para number e verificar se é maior de 18 (adicione mais um campo no json).
 // - Retornar os dados normalizados.

 let usuarios = JSON.parse(json);

 let usuarioNormalizados = [];

 for (var i = 0; i < usuarios.length; i++){
    let usuario = usuarios[i];

    //Vai normalizar os nomes
    let nome = usuario.nome.trim(); //vai remover os espaços das pontas

    //vai deixar só a primeira letra de casa palavra maiúscula
    let partes = nome.split(" ");
    for (let j = 0; j < partes.length; j++){
        if (partes[j].length > 0){
            partes[j] = partes[j][0].toUpperCase() + partes[j].slice(1).toLowerCase();
        }
    }
    nome = partes.join(" ");

    // vai normalizar o email

    let email = usuario.email.toLowerCase();

    //vai validar o formato simples de email
    let emailvalido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // vai connverter a idade
    let idade = Number(usuario.idade);
    let maiorIdade = idade >= 18;

    // vai montar o novo objeto
    usuarioNormalizados.push({
        nome: nome,
        email: email,
        emailvalido: emailvalido,
        idade: idade,
        maiorIdade: maiorIdade
    });
 }
    return usuarioNormalizados;
}

console.log(normalizarUsuarios(usuariosJSON));
