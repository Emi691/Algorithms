
function selectionSort1 (array) {
  let ordered = []
  let run = array.length

  for(let i=0; i<run; i++){
    let smallest = selectionHelper(array)
    ordered.push(array[smallest])
    array.splice(smallest, 1)
  }

  return ordered
}

function selectionHelper1 (array) {
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

function selectionHelper2 (array) {
  let j = 0

  for(let i=0; i<array.length; i++){
    if(array[i] < array[j]) j = i
  }

  return j
}

function selectionSort2(array) {
	for(let i=0; i<array.length-1; i++){
		let index = i
		for(let j=i; j<array.length; j++){
			if(array[j] < array[index]){
				index = j
			}
		}
		if(i<index){
			[array[i], array[index]] = [array[index], array[i]]
		}
	}
	return array
}
