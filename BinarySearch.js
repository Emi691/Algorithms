
function binarySearch (array, target) {
  let min = 0
  let max = array.length - 1

  while(min <= max){
    med = Math.floor((min + max)/2)
    if(array[med] === target) return med
    if(array[med] > target){
      max = med - 1
    }else{
      min = med + 1
    }
  }

  return null
}
