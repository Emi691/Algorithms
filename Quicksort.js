function quicksort(array) {
    if(array.length < 2){
        return array
    }else{
        let pivot = array[0]
        let less = array.filter(n => n < pivot)
        let more = array.filter(n => n > pivot)
        return quicksort(less).concat(pivot).concat(quicksort(more))   
    }
}