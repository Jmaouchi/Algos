const string =  'hello'
let  newString = []

function reverse(s) {
  // you can do it easy like this with some js build_in functions
  const newS = string.split('').reverse().join('') // and thats all
  console.log(newS);

  // or like this with a for loop
  for(let i = s.length - 1; i >= 0 ; i--){ 
    newString.push(s[i])
  }

  // transform the array into a string
  newString = newString.join('')

  return newString;
} 

reverse(string)


