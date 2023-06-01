const str = '1234565'

// const strN = []
// function reverseNumber(n){
  
//   for(let i = n.length -1; i >= 0; i--){
//     strN.push(n[i])
//   }
//   const app = strN.join('')
  
//   console.log(app)
//   return strN
// }


// reverseNumber(str)

// const str = '135246'

// Or this 
function reverseNumber(n){
  const reversedString = n
  .split("") // this will split every word on the string by '' => '1', '2', '3' and transfer the string to an array
  .reverse() // this will reverse the strings it will become => '3', '2', '1'
  .join("")  // this will transfer the array into a string again

  console.log(reversedString);
  return reversedString
}

reverseNumber(str)