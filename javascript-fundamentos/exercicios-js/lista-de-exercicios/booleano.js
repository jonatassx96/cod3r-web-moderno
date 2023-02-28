function booleano(params) {
    const typeParams = typeof params
    if (typeParams == "number" || typeParams == "boolean") {
        console.log(!params)
    }
    else {
        console.log(`Booleano ou número esperedo, mas o parametro é do tipo ${typeParams}!
        Insira um parametro valido.`)
        }
    }
    

booleano(-5)
