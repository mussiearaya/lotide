
const eqArrays = function(a ,b){
  
  if (a === b) return true;
  
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;  
  
};



console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
