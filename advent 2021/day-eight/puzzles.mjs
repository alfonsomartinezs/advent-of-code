import { importArray } from "../../helpers.mjs"

// const outputs = importArray("sample.txt").map(line => line.split("|")[1].trim().split(" "))

// //part one
// //we really only need to count the lengths of the output since we know each of the four numbers has a unique length.

// const countSpecialNums = (outputArray) =>{
//     let counter = 0
//     for(const output of outputArray){
//         for(const num of output){
//             if ([2,3,4,7].includes(num.length)){
//                 counter += 1
//             }
//         }
//     }
//     return counter
// }

// // console.log(outputs)
// console.log(countSpecialNums(outputs))


//for part 2 we actually need to differentiate between the numbers...

//we know 1 is 1 because length = 2
//we know 7 is 7 because length = 3
//we know 4 is 4 because length = 4
//we know 8 is 8 because length = 7

//remaining numbers: 0,2,3,5,6,9

//first we need to figure out which segment combinations map to which number
//use a map to store them
//use map to get numbers from output


const lines = importArray("sample.txt").map(line => line.split("|"))

const solvePuzzle = (lines) =>{
    for(const line of lines){
        const signals = line[0].trim().split(" ").sort((a,b) => a.length - b.length)
        const outputs = line[1].trim().split(" ")
    
        const numberMap = {}

        //first fill map with known numbers
        const one = signals.shift()
        const seven = signals.shift()
        const four = signals.shift()
        const eight = signals.pop()
        numberMap[one] = 1
        numberMap[seven] = 7
        numberMap[four] = 4
        numberMap[eight] = 8


        console.log(signals)
        console.log(numberMap)
    
    
    
    
    
    }
}

solvePuzzle(lines)
