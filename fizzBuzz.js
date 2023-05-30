/* Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

*/

let array = [1,2,3,4,5,6,7,8,9,10]
let copy = []

const fizzbuzz = arr => {
  for(let i = 1; i <= arr.length ; i++){
    // if i is a devid by 15 then push that i as 'fizzBuzz into the array'
    if(i % 15 == 0 ){
      copy.push('FizzBuzz')
    // if i is a devid by 3 then push that i as 'fizzBuzz into the array'
    }else if(i % 3 == 0 ){
      copy.push('Fizz')
    // if i is a devid by 15 then push that i as 'fizzBuzz into the array'
    }else if(i % 5 == 0 ){
      copy.push('Buzz')
    }
    // if i is a devid by 15 then push that i as 'fizzBuzz into the array'
    else{
      copy.push(i)
    } 
  }
//   console.log(copy)
  return copy
}

fizzbuzz(array)
