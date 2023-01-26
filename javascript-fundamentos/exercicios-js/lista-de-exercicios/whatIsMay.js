function whatIsMay (firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(`Primeiro número ${firstNumber}.
        Segundo número ${secondNumber}.
        O primeiro número é o maior.`)
    } else if (firstNumber < secondNumber) {
        console.log(`Primeiro número ${firstNumber}.
        Segundo número ${secondNumber}.
        O segundo número é o maior.`)
    } else if (firstNumber === secondNumber) {
        console.log(`Primeiro número ${firstNumber}.
        Segundo número ${secondNumber}.
        Os dois números são iguais.`)
    }
    else {
        console.log('Por favor, insira números validos.')
    }
}

whatIsMay ('a', 10)