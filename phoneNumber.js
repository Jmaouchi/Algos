// easy way to do it is 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const array2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(numbers){
  return
  "("
  + numbers[0] 
  + numbers[1] 
  + numbers[2]
  + ")" 
  + " " 
  + numbers[3]  
  + numbers[4]
  + numbers[5]
  + "-"
  + numbers[6]
  + numbers[7]
  + numbers[8]
  + numbers[9]
}

createPhoneNumber(array)
createPhoneNumber(array2)
createPhoneNumber(array3)



// complicated way 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let part1 = "(";
let part2 = ") "
let part3 = "-"
let part4 = ""

function createPhoneNumber(arr){
  for(let i=0 ; i<array.length; i++){
    if(i>0 && i<4){
      part1 += i
    }
    if(i>3 && i<8){
      part2 += i
    }
    if(i>7){
      part3 += i
    }
    if(i===0){
      part4 += i
    }
  }
  part1 += part2
  part1 += part3
  part1 += part4

  console.log(part1);
}


createPhoneNumber(array)
