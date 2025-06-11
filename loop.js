/*for(let i=0;i<10;i++){
    console.log(`value of outer loop is ${i}`)
    for(let j=0;j<10;j++){
        console.log(`inner loop value ${j}`)
    }
}*/
for (let index = 0; index < 10; index++) {
    if(index==5){
        console.log("5 is the best number")
        break
    }
    const element = index
    console.log(element)
    
}
for (let index = 0; index <= 10; index++) {
    if(index==5){
        console.log("5 is the best number")
        continue
    }
    const element = index
    console.log(element)
    
}