function wholeIntegerNumbers(maxLengthOfNumbers = 100) {
    let arr = []
    for(let i=1; i<= maxLengthOfNumbers; i++){
        
        if(i % 15 === 0){
            console.log('Visual Nuts')
            arr.push('Visual Nuts')
        }else if(i % 5 === 0){
            console.log('Nuts');
            arr.push('Nuts')
        }else if(i % 3 === 0){
            console.log('Visual');
            arr.push('Visual')
        }else {
            console.log(i)
            arr.push(i)
        }
    }
    return arr
}

function listToMatix(list, noOfCol= 2){
    let matrix = [], i, k;
    for(i=0, k=-1; i< list.length; i++){
        if(i%noOfCol === 0){
            ++k;
            matrix[k] = []
        }
        matrix[k].push(list[i])
    }
    return matrix
}

module.exports = {
    wholeIntegerNumbers,
    listToMatix
}