
const eqArrays = function(actual ,expected) {
  if (actual.length !== expected.length) {
    console.log('assertion failed: ' + actual + " !== " + expected)
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        console.log('assertion failed: ' + actual + " !== " + expected)
      }
    }
    console.log('Assertion passed: ' + actual + " === " + expected);
  }
};


  

const assertObjectsEqual = function(actual , expected) {
  
  key1 = Object.keys(actual)
  key2 = Object.keys(expected)
  
  if (key1.length !== key2.length){
    console.log('assertion failed: ' + actual + " !== " + expected)
  } else {
    for (let key of key1){
      
    if (actual[key] !== expected[key]){
      if (Array.isArray(actual[key])){
        return eqArrays(actual[key], expected[key])
      }
      return console.log('assertion failed: ' + actual + " !== " + expected)
    } 

    
    
    }
  } 
  
  
  console.log('Assertion passed: ' + actual + " === " + expected)
}
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log((assertObjectsEqual(cd, cd2)));