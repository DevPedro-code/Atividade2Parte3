
const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";

function analisarTexto(texto) {
 

    const palavras = texto
        .replace(/[.,!?;:]/g, "") // Remove a pontuação
        .split(/\s+/);//separa as palavras
    
    const totalPalavras = palavras.length;
    
    //contas as frequênia das palavras
    const Frequencia = {};

    for(let i = 0; i < palavras.length; i++ ){
        var palavra = palavras[i];
        if(Frequencia[palavra]) {
            Frequencia[palavra] += 1;
        } else{
            Frequencia[palavra] = 1;
        }
    }

    // Vai transformar em array de objetos
    const frequenciaPalavras = Object.entries(Frequencia)
    .map(function(item){
        return {palavra: item[0], Frequencia: item[1] };
    })
    .sort(function(a, b){
        return b.Frequencia - a.Frequencia;
    });

    // Vai calcular o tamanho médio das palavras
    var totalcaracteres = 0;
    for(var j = 0; j < palavras.length; j++){
        totalcaracteres += palavras[j].length;
    }

    var mediaPalavras = totalcaracteres / totalPalavras;

    return {
        totalPalavras: totalPalavras,
        frequenciaPalavras: frequenciaPalavras,
        mediaPalavras: Number(mediaPalavras.toFixed(2))
    };
}

console.log(analisarTexto(texto));





