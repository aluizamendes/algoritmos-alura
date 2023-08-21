let numbers = [29, 72, 98, 13, 87, 66, 52, 51, 36]

function menorValor(arr, posicaoInicial) {
    let menor = posicaoInicial

    for (let i = posicaoInicial; i < arr.length; i++) {
        if (arr[i] < arr[menor]) {
            menor = i
        }
    }

    return menor
}


for (let atual = 0; atual < numbers.length; atual++) {

    let menorIndice = menorValor(numbers, atual)
    
    console.log("==============================================")
    console.log("iteracao atual:", atual)
    console.log("indice menor valor:", menorIndice)
    console.log("----")

    let valorAtual = numbers[atual]
    console.log("Primeiro numero:", valorAtual)

    let valorMenor = numbers[menorIndice]
    console.log("Menor numero:", valorMenor)

    numbers[atual] = valorMenor
    numbers[menorIndice] = valorAtual

    console.log(numbers)
}