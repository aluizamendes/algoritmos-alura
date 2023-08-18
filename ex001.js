/*
 * Encontrar o menor valor em um array
*/

const livros = require("./listaLivros");

let maisBarato = 0; // 1

for (let atual = 0; atual < livros.length; atual++) {

    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual;
    }
}

console.log("O livro mais barato custa", livros[maisBarato].preco, "e o título é", livros[maisBarato].titulo)