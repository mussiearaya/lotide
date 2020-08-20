const letterPositions = function(sentence){
  const results= {}
  newString = sentence.split('')
  
  for (i = 0 ; i < newString.length ; i++){
    if (results[newString[i]]){
     results[newString[i]].push(i)
    } else {
      results[newString[i]] = [i]
    }

  
}
return results;
}
console.log("results of letter position",letterPositions('helllo'))