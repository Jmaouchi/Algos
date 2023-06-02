const word = 'hello'

function vowels(a){
  // return the word hello and filter it with leaving only the vowel, then .join to transform the array back into a string
  const new1 =   [...a].filter(e => e.match(/[aeiou]/i)).join('')
  // this will replace all the vowels by an empty string and will return the word without this letters 
  const new2 =   a.replace(/[aeiou]/g, '')
  console.log(new1); // we will get 'eo' as a word
  console.log(new2); // we will get 'hll' as a word
  
}

vowels(word)
