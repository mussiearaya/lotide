
const middle = function(array){
  let newArray = []
if (array.length  === 1 || array.length === 2 ) {
  return newArray
} else if (array.length % 2 === 0){
  
  let mid2 = Math.floor(array.length / 2)
  let mid1 = Math.floor((array.length - 1) / 2)
  let value1 = array[mid1]
  let value2 = array[mid2]
  newArray.push(value1 , value2)
  
} else if(array.length % 2 !== 0){
  
  let value3 = array[Math.floor(array.length / 2)]
  newArray.push(value3)
}
return newArray
}


console.log(middle([1, 2 ,3 ,4 ,5, 6, 7]))



