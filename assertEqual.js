const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('Assertion passed: ' + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log('assertion failed: ' + actual + " !== " + expected);
  }


};


