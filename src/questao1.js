const produtosJSON = `{
 "itens": [
 {
 "id": 1,
 "nome": "Notebook Gamer",
 "preco": 2999.99,
 "categoria": "eletronicos",
 "tags": ["tecnologia", "computacao", "gamer"]
 },
 {
 "id": 2, 
 "nome": "Mesa Escritório",
 "preco": 450.50,
 "categoria": "moveis",
 "tags": ["escritorio", "madeira", "profissional"]
 }
 ]
}`;

function array (a) {
    let textoJS = JSON.parse(a);
    let arrayvazia = [];
    for (let i = 0; i < 2; i++){
        let produto = textoJS.itens[i].nome;
        let dinheiro = textoJS.itens[i].preco;
        let categoria = textoJS.itens[i].categoria;

        arrayvazia[i] = `${produto}, ${dinheiro} reais, ${categoria}`;
    }
    

    return arrayvazia
}



console.log(array(produtosJSON));
