
const findKeyByValue = function(genre , show) {
let genreKeys = Object.keys(genre)

for (const type of genreKeys){
  if (genre[type] === show){
    return type
  }
}
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"))