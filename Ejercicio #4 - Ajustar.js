/*Escribir una función llamada ajustarTexto que reciba dos argumentos: 
un string y un número (que representa una longitud). 
La función debe retornar la cadena ajustada a la longitud recibida.
Si la longitud de la cadena es mayor al número, debes recortar la cadena.
De lo contrario agrega espacios en blanco hasta completar la longitud.*/

function ajustarTexto (str, num) {
    let str1 = str.split('')
    let aux = []

    for (let i=0; i < str1.length; i++){
        if (num < str1.length ) {
            str1.splice(num)
        } else if (num > str1.length) {
            str1.push (' ')
        }
    }
    aux = str1.join('')
    return aux
}



console.log(ajustarTexto("Narayanaya", 4)) //<-- Este fue un ejemplo propio
console.log(ajustarTexto("", 3)) // " " 
console.log(ajustarTexto("hola", 2)) // "ho" 
console.log(ajustarTexto("Hola", 0)) // "" 
console.log(ajustarTexto("Hola", 5)) // "Hola "