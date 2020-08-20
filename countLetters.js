const assertArraysEqual = function(a ,b){
  
  if (a === b){
  console.log ('Assertion passed: ' + a + " === " + b)
  } 
  
  if (a.length !== b.length){
   console.log( 'assertion failed: ' + a + " !== " + b)
  } 

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return console.log('assertion failed: ' + a + " !== " + b);
  }
  return console.log ('Assertion passed: ' + a + " === " + b);
   
  
};
console.log(assertArraysEqual(["1", "2", 3], ["1", "2", 3]))

const countLetters = function(string){
const result = {}
let newString = string.split('')
for (const letter of newString){
  if(result[letter]){
    result[letter] += 1
  } else {
    result[letter] = 1
  }


}
return result

}
console.log(countLetters('lighthouselabs'))