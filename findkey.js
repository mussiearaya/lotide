const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion passed: ' + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log('assertion failed: ' + actual + " !== " + expected);
  }


};



const findKey = function(objects , callback){
  
  for(let item in objects){
    if (callback(objects[item])){
      return item

    }
  } 

}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) )