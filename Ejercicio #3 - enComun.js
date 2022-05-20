/*Crea una función llamada caracteresEnComun que
recibe dos argumentos: str1 y str2. La función debe retornar
un arreglo con todos los caracteres que las dos cadenas tienen en común.*/

function caracteresEnComun (str1, str2){
    const chg1 = str1.split('')
    const chg2 = str2.split('')
    let letters =[]
    for (let i=0;i<chg1.length;i++){
      
      if (chg2.includes(chg1[i])){
        letters.push(chg1[i])
      }     
    }  
    return letters
  }
  
  console.log(caracteresEnComun("Hola", "Mundo")) 
  console.log(caracteresEnComun("German", "Gabriela")) 
  console.log(caracteresEnComun("Hola", "Bye")) 