const { edFolha, edGalho } = require('./arrays')

function juntaListas(lista1, lista2) {
    let listaFinal = []
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0
    let atual = 0


    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1]
        let produtoAtualLista2 = lista2[posicaoAtualLista2]
        console.log(`Comparando ${produtoAtualLista1.titulo} com ${produtoAtualLista2.titulo}`)

        // se o produto da lista 1 for maior que o outro, adiciona no array e vice versa
        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[atual] = produtoAtualLista1
            posicaoAtualLista1++

        } else {
            listaFinal[atual] = produtoAtualLista2
            posicaoAtualLista2++
        }

        atual++
    }

    // depois que sair do primeiro WHILE, executa os de baixo:
    // se sobrou elementos na lista 1
    while (posicaoAtualLista1 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista1]
        posicaoAtualLista1++
        atual++
    }
    // se sobrou elementos na lista 2
    while (posicaoAtualLista2 < lista1.length) {
        listaFinal[atual] = lista1[posicaoAtualLista2]
        posicaoAtualLista2++
        atual++
    }

    return listaFinal
}

console.log(juntaListas(edFolha, edGalho))