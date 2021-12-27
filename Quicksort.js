function quicksort(array) {
    if(array.length < 2)return array

    let middle = Math.floor(array.length/2)
    let pivot = array[middle]
    let less = array.filter(n => n < pivot)
    let more = array.filter(n => n > pivot)
    return quicksort(less).concat(pivot).concat(quicksort(more))   
}


