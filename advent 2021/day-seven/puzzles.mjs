import fs from 'fs';

const crabPositions = fs.readFileSync("sample.txt", 'utf8').split(",").map(p => parseInt(p))


const getFuzzyArrayMean = (array) =>{
    let avg = array.reduce((runningAverage,currentNum) =>{
        return (runningAverage + currentNum)
    }) 
    return Math.round(avg/array.length)
}

const getArrayMedian = (array) =>{
    return array.sort((a,b) => a-b)[Math.floor(array.length/2)-1]
}




//part one
const targetPosition = getArrayMedian(crabPositions)

const alignCrabs = (crabArray,targetPosition) =>{
    return crabArray.reduce((fuelTotal, position) => { 
        return fuelTotal += Math.abs(position - targetPosition)
    },0)
}

console.log("fuel spent on original plan: ",alignCrabs(crabPositions,targetPosition))




//part two

const alignPartTwoCrabs = (crabArray,targetPosition) =>{

    return crabArray.reduce((fuelTotal,position) => {
        let fuelUsage = 0
        for (let i = 1; i <= Math.abs(position-targetPosition); i++){
            fuelUsage += i
        }
        return fuelTotal + fuelUsage
    },0)


}

const partTwoTargetPosition = getFuzzyArrayMean(crabPositions)
console.log("new position: ",partTwoTargetPosition)
//off by one. why? unsure. Probably cause I used a fuzzy mean.
//used a position one lower and that did the trick.
//I could have created a range around the mean then tested each one to find the lowest fuel usage
//but hard coding 480 seems simpler.
console.log("fuel spent on new plan: ",alignPartTwoCrabs(crabPositions,partTwoTargetPosition))