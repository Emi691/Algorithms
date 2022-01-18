// say an array is triangular if the elements when read l to r are strictly increasing up to some point and then decreasing. [2, 3, 4, 1]. find the top of the triangle index.

function vertex(array){
    //iterate through array
    //check if next entry is < current
    // return current index if true
    // return false if no index found

    for(let i=0; i<array.length-1; i++){
        if(array[i] > array[i+1]) return i
    }
    return 'no vertex'
}

// naive solution has time complexity O(n)

function vertexFast(array){
    let i = 0, j = array.length-1
    
    while(i<=j){
        let mid = Math.floor((j-i)/2) 
        if(array[mid] > array[mid+1] && array[mid] < array[mid-1]){
            return mid
        }else if(array[mid] > array[mid+1]){
            j = mid 
        }else if(array[mid] < array[mid+1]){
            i = mid
        }
    }

    return i
}

let array = [1, 2, 3, 4]

console.log(vertexFast(array))