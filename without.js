


const without = function (source, itemsToRemove) {
  let newArray = []
  for (let i = 0; i < itemsToRemove.length; i++) {
    let sourceElement = source.pop();
    
    if (!itemsToRemove.includes(sourceElement)) {
      newArray.push(sourceElement)
    }
  }
  return newArray
}

// Scenario

// sourceEl = "3", itemsToRemove: 1, not eq => push "3"
// sourceEl = "2", itemsToRemove: 2, not eq => push "2" ok
// sourceEl = "1", itemsToRemove: "3", not eq => push "1" ok
 

console.log(without([1, 2, 3], [1]))



// for (let y = 0 ; y < source.length ; y++){
//   console.log( "itemsToRemove" ,itemsToRemove[i] , "source " , source[y])
//   const itemToRemove = itemsToRemove[i] 
//   const sourceElement = source[y]
//   if (source !== itemToRemove) {
//     newArray.push(sourceElement)

//   }
//  }