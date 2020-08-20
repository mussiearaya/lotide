const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion passed: ' + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log('assertion failed: ' + actual + " !== " + expected);
  }


};
const eqArrays = function(a ,b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

const eqObjects = function(object1, object2){
  key1 = Object.keys(object1)
  key2 = Object.keys(object2)
  
  if (key1.length !== key2.length){
    return false 
  } else {
    for (let key of key1){
      
    if (object1[key] !== object2[key]){
      if (Array.isArray(object1[key])){
        return eqArrays(object1[key], object2[key])
      }
      return false 
    } 

    
    
    }
  } 
  
  
  return true
  
}

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log((eqObjects(cd, cd2))); // => true

// const abc = { a: "1", b: "2", c: "3" };
// (eqObjects(ab, abc)); // => false


