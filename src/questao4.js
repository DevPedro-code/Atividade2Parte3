const dadosSensiveis = {
 usuarios: [
 {
 cpf: "123.456.789-00",
 cartaoCredito: "5555-6666-7777-8888",
 telefone: "(11) 99999-9999",
 nome: "Fulano de Tal"
 }
 ],
 metadata: {
 ip: "192.168.1.100",
 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 }
};
function sanitizarDados(dados) {
    const usuario = dados.usuarios[0];

    //Vai mascarar o CPF: ***.***.***-00
    usuario.cpf = "***.***.***-" + usuario.cpf.slice(-2);

    // vai mascarar o cartão: ****-****-****-8888
    usuario.cartaoCredito = "****.****.****-" + usuario.cartaoCredito.slice(-2);

    //vai mascarar o teleforne: (**) ****-9999
    const ddd = usuario.telefone.slice(0,4);
    const finalTel = usuario.telefone.slice(-4);
    usuario.telefone = ddd + "*****-" + finalTel;


    //vai mascarar o token
    dados.metadata.token = dados.metadata.token.slice(0, 10) + "...";

return dados; // vai retonar o objetos com os  dados mascarados

}
console.log(sanitizarDados(dadosSensiveis));