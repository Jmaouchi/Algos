// Write code to create a function that returns the factorial of `num`
// factorial of 5 is 120 => 5*4*3*2*1 
 
var factorial = function(num) {
  var result = 1;

  for (var i = num; i > 1; i--) {
    result = result * i;
  }

  return result;
};
