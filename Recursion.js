function recursive(i){
    console.log(`recursive loop #${i}`)
    if(i <= 0) return
    recursive(i - 1)
}


recursive(5)