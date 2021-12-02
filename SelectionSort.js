
function selectionSort (array) {
  let ordered = []
  let run = array.length

  for(let i=0; i<run; i++){
    let smallest = selectionHelper(array)
    ordered.push(array[smallest])
    array.splice(smallest, 1)
  }

  return ordered
}

function selectionHelper (array) {
  let least = array[0]
  let index = 0

  for(let i=0; i<array.length; i++){
    if(array[i] < least){
      least = array[i]
      index = i
    }
  }

  return index
}
