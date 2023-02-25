let even = [4, 3, 2, 1]
let odd = [3, 2, 1]
let mid = [6, 5, 4, 3, 2, 1]

function mergeSort(array){
  if (array.length === 1) return array
  
  let split = Math.floor(array.length/2)
  let left = array.splice(0, split)
  let right = array.splice(0)
  return sortAndCombine(mergeSort(left), mergeSort(right))
};

                   // [3]              // [2, 1]
                                  //sort [2] vs [1]
                  //sort [3] vs [1, 2]

// initially, i thought it was single arrays. [2] vs [1]
// but then you need to sort([3], [1, 2])
// so you make a universal sort function below that can sort an array of any length
// shift() prevents infinite loop

function sortAndCombine(leftArray, rightArray){
  let results = []
  
  while(leftArray.length > 0 && rightArray.length > 0) {    
    if(leftArray[0] < rightArray[0]) results.push(leftArray.shift())
    if (leftArray[0] > rightArray[0]) results.push(rightArray.shift())
  }
  //once the while loop breaks, proceed below 
  if(leftArray.length === 0) results.push(...rightArray)
  if(rightArray.length === 0) results.push(...leftArray)
  
  return results    
};

console.log(mergeSort(mid))