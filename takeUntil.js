const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil = function (array , callback){
  let results = []
  for (let num of  array){
    if (callback(num) === false){
      results.push(num)

    }
    else { 
      break
    }
  }

  return results
}





const results1 = takeUntil(data1, x => x < 0);
console.log(results1);