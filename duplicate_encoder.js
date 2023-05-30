const str = "din"
let obj = {}

function duplicateEncode(word){
  // to lower case words, to be able to compare
  word = word.toLowerCase();
  // split to get every single charachter on that word
  word = word.split('')
  // for loop
  for(let i = 0; i<word.length; i++) {
    // if the object contains the word 
    if(obj[word[i]]) {
      obj[word[i]]++;
    }else{
      obj[word[i]] = 1
    }

    word = word.map((w) => {
      if(obj[w] && obj[w]>1){
        return ')'
      }else{
        return ('(')
      }
    })

  }

  console.log(word.join(''))
  // this should return ')))
  return word.join('')
}


duplicateEncode(str)