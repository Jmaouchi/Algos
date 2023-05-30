let str = "How can mirrors be real if our eyes aren't real";

function uperCaseLetter (string) {
  var capital = string
  // this will spilt the string into words
  .split(' ')
  // map thru the every word and transfor every first letter
  .map(word => word[0].toUpperCase() 
  // then add the whole word to that uppercase letter 
  + word 
  // then take of the first letter, if not it will be duplicate (like How = HHow)
  .slice(1))
  // this will join the words to a string 
  .join(' ')
  
  console.log(capital)
};

uperCaseLetter(str)

