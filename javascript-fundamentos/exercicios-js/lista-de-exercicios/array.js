function newArray (elemento, repetição) {
    let newArray = []
    for (let i = 1; i <= repetição; i++ ) {
        newArray.push(elemento)
    }
    console.log(newArray)
}

newArray(1, 3)