console.log("====================")
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


const lines = importArray("input.txt").map(line => line.split("|"))

const solvePuzzle = (lines) =>{
    const outputArray = []
    for(const line of lines){
        const signals = line[0].trim().split(" ").sort((a,b) => a.length - b.length).map(signal =>{
            const sortedSignal = signal.split("").sort().join("")
            return sortedSignal
        })
        const outputs = line[1].trim().split(" ").map( signal =>{
            const sortedSignal = signal.split("").sort().join("")
            return sortedSignal
        })
    
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

        //signals are sorted by length, so we can tackle 2,3,5 (length 5)
        //thought process here is to check if there are any segments in common between the known numbers and the length=5 numbers

        //2 shares 2 segments with 7. 1 with 1. 1 with four. not sure there's enough there....
        //3 shares 3 segments with 7. 2 with 1. 3 with four. promising...?
        //5 shares 1 segment  with 7. 1 with 1. 3 with four.

        //it might be easiest to find 3 first (most with both 7 and 1), 
        // then 5 (most with 4 of the 2 remaining)
        // then 2 is left:

        //we know it's 3 if...
        //it contains all of 7

        //we know it's 5 if...
        //it shares 3 segments with 4 and doesn't contain all of 7

        //we know it's 2 if...
        // it's not 3 or 5

        for (let i = 0; i < 3; i++){
            const signal = signals.shift()
            const seven = Object.keys(numberMap)[1]
            const four =  Object.keys(numberMap)[2]
            if (signal.split("").filter(char => seven.includes(char)).length === 3){
                numberMap[signal] = 3
            }else if(signal.split("").filter(char => four.includes(char)).length === 3){
                numberMap[signal] = 5
            }else{
                numberMap[signal] = 2
            }
        }



        //then 6,9,0 (length 6)
        //might be easier to find out what they don't share at this point.

        //and....6 is the only one that doesn't share both 1 segments
        // 9 contains all of 4

        //we know it's 6 if...
        //if doesn't have both 2 segments

        //we know it's 9 if...
        //it contains all of 4

        //we know it's 0 if...
        //else stuff


        for (let i = 0; i < 3; i++){
            const signal = signals.shift()
            const one = Object.keys(numberMap)[0]
            const four =  Object.keys(numberMap)[2]
            if (signal.split("").filter(char => one.includes(char)).length < 2){
                numberMap[signal] = 6
            }else if(signal.split("").filter(char => four.includes(char)).length === 4){
                numberMap[signal] = 9
            }else{
                numberMap[signal] = 0
            }
        }


        // console.log(signals)
        // console.log(numberMap)
    
    
    
    
    outputArray.push(parseInt(outputs.map( o => numberMap[o]).join("")))
    }

    return outputArray
}

solvePuzzle(lines)

const a = solvePuzzle(lines)

const answer = a.reduce((total, num) =>{
    return total + num
})

console.log(answer)