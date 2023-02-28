/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

const operadores = (number1 = 0, number2 = 0) => {
    console.log(`Soma: ${number1 + number2}`)
    console.log(`Subtração: ${number1 - number2}`)
    console.log(`Multiplicação: ${number1 * number2}`)
    console.log(`Divisão: ${number1 / number2}`)
}

operadores(5, 10)