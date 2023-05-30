const pin = '1234'
// using regex
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)
  

// or we can do this
const validatePIN = num => {
  
  //return true or false
  if(num.length != 4 && num.length != 6){
    return false
  }
  
  for(i = 0; i<num.length; i++){
    // here we are using the rgex table
    if(num[i] > '9' || num[i] < '0'){
        return false
    }
  }
  return true
}

validatePIN(pin)