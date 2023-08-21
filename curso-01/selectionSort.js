const livros = require("./listaLivros");
const menorValor = require("./menorValor");

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    
    console.log("Posição atual:", atual)
    console.log("Livro atual:", livroAtual)

    let livroMenorPreco = livros[menor];

    console.log("Livro menor preço:", livroMenorPreco)

    // trocando os objetos de indice/lugar
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);