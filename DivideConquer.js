let array = [2, 3, 5, 1, 6, 4]

function sum(array){
  if(array.length < 1) return 0
  return array[0] + sum(array.splice(1))
}

function items(array){
  if(array.length < 1) return 0
  return 1 + items(array.splice(1))
}

function maxValue(array){
  if(array.length < 2) return array[0]
  // if(array.length < 1) return 0
  if(array[0] > maxValue(array.splice(1))){
    return array[0]
  }else{
    console.log(array)
    return maxValue(array.splice(1))
  }
}

console.log(maxValue(array))
