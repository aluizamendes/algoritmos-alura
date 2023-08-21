/*
 * Encontrar o menor valor em um array
*/

const livros = require("./listaLivros");

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial; 

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
    
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }

    return maisBarato;
}

//console.log("O livro mais barato custa", livros[maisBarato].preco, "e o título é", livros[maisBarato].titulo)

module.exports = menorValor;