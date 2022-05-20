//Dadas dos cadenas s y t, devuelve true si t es un anagrama de s, y false si no .

function anagram (s, t) {
    let chg1 = s.toLowerCase().replaceAll(' ', '').split('').sort().join('')
    let chg2 = t.toLowerCase().replaceAll(' ', '').split('').sort().join('')

     if (chg1 === chg2) {
         return true
     }
     return false
}



console.log(anagram('Anagrama', 'Nagarama'))
console.log(anagram('Anagrama', 'Nanagaram'))
console.log(anagram('Lazo', 'Loza'))
console.log(anagram('Amor bien', 'Roma nieb'))
console.log(anagram('Papaya', 'Carambolo'))