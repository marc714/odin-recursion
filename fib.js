// could not figure this out
// 8 returns [0,1,1,2,3,5,8,13]

function fibs(amount) {
    let start = [0, 1]
    
    if(amount == 0) return []
    if(amount == 1) return [0]
    if(amount == 2) return start
    
    for(let index=2; index<amount; index++){
      let nextNumber = start[index-1] + start[index-2]
      start.push(nextNumber)
    }
    return start;
  }
  
  console.log("array of 3 fib digits: " + fibs(3))
  
  // Index(3) returns 2 [0,1,1,2]
  // find the value at index 'n'
  function fibsRecNum(n) {
    if (n<2) return n; 
    return parseInt(fibsRec(n-1)) + parseInt(fibsRec(n-2))
  }
  
  console.log("Index at n is: " + fibsRecNum(3))
  
  
  // 4 returns [0,1,1,2]
  function fibsRec(n) {
    if (n<2) return n
    
    return fibsRec(n-1) + fibsRec(n-2)
    
  }
  
  console.log(fibsRec(3))
  
  //fibsRec(3-1) + fibsRec(3-2)
        //fibsRec(2) =>  fibsRec(2-1) + fibsRec(2-2)  => 1 + 0 = 1
                        //fibsRec(1) => 1
  //1 + 1 = 2
  
  function fibsReca(n){
      if (n === 1) return [0];
      if (n === 2) return [0,1];
  
      return [...fibsReca(n-1), fibsReca(n-1)[n - 2] + fibsReca(n-1)[n - 3]];
  }
  
  
  console.log(fibsReca(8));
  
  ////////////
  
  const init = [0, 1];
  
  function fibsB(num) {
    if (init.length === num) return;
    init[init.length] = init[init.length - 1] + init[init.length - 2];
    fibsB(num);
    
    return init;
  };
  
  console.log(fibsB(4));
  
  // init[2] = init[1] + init[0]  aka  init[2] = 1
  // he's using the fact that array is base zero. and length is not. this is the loop that adds a new number.