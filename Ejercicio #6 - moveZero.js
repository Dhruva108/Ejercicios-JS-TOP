/*Dada una matriz de enteros [nums], mueva todos los 0 al final
mientras mantiene el orden relativo de los elementos distintos de cero.*/

function moveZero (nums) {
    
    nums.reverse()
    let aux2 = []
    
    for (i=0;i<nums.length;i++) {
        
        if (nums[i] === 0) {
           aux2.push(nums[i])
        } else if (nums[i] !== 0) {
            aux2.unshift(nums[i])
        }        
    }
   
    return aux2
}




console.log(moveZero([0,0,2,3,4,5,1]))
console.log(moveZero([1,2,5,4,6,0,0,2,6,5]))
console.log(moveZero([654,4,10,23,25,0,35]))
console.log(moveZero([5,0,2,3,64]))