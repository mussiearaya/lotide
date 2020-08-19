const assertArraysEqual = function(a ,b){
  
  if (a === b){
  console.log ('Assertion passed: ' + a + " === " + b)
  } 
  
  if (a.length !== b.length){
   console.log( 'assertion failed: ' + a + " !== " + b)
  } 

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) {
      console.log ('Assertion failed: ' + a + " !== " + b)
    } else console.log( 'assertion passed: ' + a + " === " + b) 
  }
   
  
};
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]))