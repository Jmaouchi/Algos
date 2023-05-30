/* Take 2 strings s1 and s2 including only letters from a to z.
 Return a new sorted string, the longest possible, 
 containing distinct letters - each taken only once - coming from s1 or s2. 
*/

const s1 = 'aretheyhere'
const s2 = 'aehrsty'

function longest(s1, s2) { 
/* the ...new Set will create a new set of s1 + s2, and will take off all the duplicate words, then the sort method will sort them from A to Z, and joi
  will join them to a single string */ 
  /*  it is unique in the set's collection. You can iterate through the elements of a set in insertion order. 
  The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully 
  (that is, there wasn't an identical element already in the set when add() was called). */
  const mySet1 = [...new Set(s1 + s2)].sort().join(''); 
  console.log(mySet1); 
  
  return mySet1
}


longest(s1, s2)










