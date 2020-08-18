const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion passed: ' + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log('assertion failed: ' + actual + " !== " + expected);
  }


};



const tail = function(array) {
  
  array.shift();
  return array;
  

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);

