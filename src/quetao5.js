const queryString = "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";
function parseQueryString(query) {
    const objeto = {};

    const partes = query.split("&"); //vai dividir cada valor

    for (let i =0; i < partes.length; i++) {
        const pedaco = partes[i].split("="); //dividir as string "cateegoria" e "eletrônicos"

        const chave = pedaco[0];
        let valor = pedaco[1];

        //tenta converter para o número 
        if (!isNaN(valor)){
            valor = Number(valor);
        }

        objeto[chave] = valor; //coloca no objeto 
    }
    return objeto;
}

console.log(parseQueryString(queryString));