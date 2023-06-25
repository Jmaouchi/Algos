const array = [1,2,2,3,3,3,4,3,3,3,2,2,1]
let odd = {}

function findOdd(A) {


  // check how many times a number repeats
  for(let i = 0; i<A.length; i++) {
    // if the odd object has a reference to the A array, then add 1 to its key (like: value : key or 2 : 1)
    if(odd[A[i]]) { // this is how we loop thru an object 
      odd[A[i]]++;
    // if the odd object doest have a reference to it, then create it and set it to 1
    }else{
      odd[A[i]] = 1
    }
  }

  // for in loop 
  for(let key in odd) { // if the key is in the odd object then call then =>
    // check if the that key % 2 is not equal to 0 and that means that the number is only repeated once 
    if(odd[key] % 2 !== 0) {
      console.log(Number(key));
    }
  }

  console.log(odd);
}

findOdd(array)

