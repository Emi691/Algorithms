function sum(array){
  if(array === []) return 0
  return array[0] + sum(array.slice(1))
}

function count(array){
  if(array === []) return 0
  return 1 + items(array.slice(1))
}

function max1(array){
  if(array.length < 2) return array[0]
  if(array.length < 1) return 0
  return array[0] > max(array.slice(1)) ? array[0] : max(array.slice(1))
}

function max2(array){
  
}
