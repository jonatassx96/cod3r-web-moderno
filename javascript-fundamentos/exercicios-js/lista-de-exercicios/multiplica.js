//Multiplicar dois numeros interiros não negativos, sem o uso do operador de multiplicação

function multipliqueSemOperador(numberA, numberB) {
    let valorFinal = 0
    for (let i = 1; i <= numberB; i++) {
        valorFinal += numberA
    }
    console.log(valorFinal)
}

multipliqueSemOperador(5, 10)