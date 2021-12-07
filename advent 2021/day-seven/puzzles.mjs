import fs from 'fs';

const crabPositions = fs.readFileSync("input.txt", 'utf8').split(",").map(p => parseInt(p))

console.log(crabPositions)


//well, it's not the average.
const getArrayMean = (array) =>{
    let avg = array.reduce((runningAverage,currentNum) =>{
        return (runningAverage + currentNum)
    }) 
    return avg/array.length
}
//avg of sample is ~5, answer is 2.

//let's try the median.
const getArrayMedian = (array) =>{
    return array.sort((a,b) => a-b)[Math.floor(array.length/2)-1]
}

//part one
const targetPosition = getArrayMedian(crabPositions)

const alignCrabs = (crabArray,targetPosition) =>{
    const sortedCrabArray = crabArray.sort((a,b) => a-b)

    let fuelTotal = 0

    for(let i = 0 ; i < sortedCrabArray.length; i++){
        fuelTotal += Math.abs(sortedCrabArray[i] - targetPosition)
    }
    return fuelTotal
}

console.log(alignCrabs(crabPositions,targetPosition))
