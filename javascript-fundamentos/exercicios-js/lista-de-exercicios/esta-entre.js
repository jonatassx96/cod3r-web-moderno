function estaEntre(numero, min, max, inclusivo = false) {
    if (numero >= min && numero <= max) {
        inclusivo = true
    }
    console.log(`${inclusivo}`)
}

estaEntre (10, 10, 200)