/*Escribe una función llamada `frecuencias` que reciba
una cadena de texto y retorne un objeto con el número de
veces que aparece cada caracter (exceptuando el espacio en blanco)*/


function frecuencias (str) {
    let strChange = str.replaceAll(" ", "").toLowerCase().split('')
    
    let objeto = {}
    for (let i = 0; i < strChange.length; i++) {      
  
      if (objeto[strChange[i]] === undefined) {
          objeto[strChange[i]] = 1
        } else {
          objeto[strChange[i]] += 1
        } 
    }
    
    return objeto
  }

  console.log(frecuencias("hola mundo"))
  console.log(frecuencias("anita lava la tina"))
