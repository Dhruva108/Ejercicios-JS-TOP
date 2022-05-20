/*Escribe una función llamada `numDuplicados` que
reciba un string y retorne el número de caracteres
que aparecen más de una vez.*/

function numDuplicados (str) {
    const srtChange = str.split('')
    
    let num = []
    let aux = [...srtChange].sort()
    

    for (let i = 0; i < aux.length; i++) {
        if (aux[i+1] === aux[i] )
        num.push (aux[i])
    }    
    num = [...new Set (num)]    
    return num.length
}

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0