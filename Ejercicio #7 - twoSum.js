/*Dada una matriz de números enteros nums y un
número entero target, devuelva los índices de los
dos números de modo que sumentarget.*/



function twoSum (nums, target) {

    for(let i=0;i<nums.length;i++){

        for(let j = i+1;j<nums.length;j++){

            if(nums[i]+nums[j] === target){

                return [i,j]
            }
        }
    }
}


console.log(twoSum([3,4,5,1,2,3], 9))
console.log(twoSum([2,3,4,1,3,8], 6))
console.log(twoSum([1,4,2,3,6,7], 3))
console.log(twoSum([3,4,7,6,3,5], 8))
console.log(twoSum([3,4,5,1,2,6], 5))
console.log(twoSum([4,5,6,1,6,1], 2))