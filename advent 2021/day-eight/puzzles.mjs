import { importArray } from "../../helpers.mjs"

const outputs = importArray("input.txt").map(line => line.split("|")[1].trim().split(" "))

//part one
//we really only need to count the lengths of the output since we know each of the four numbers has a unique length.

const countSpecialNums = (outputArray) =>{
    let counter = 0
    for(const output of outputArray){
        for(const num of output){
            if ([2,3,4,7].includes(num.length)){
                counter += 1
            }
        }
    }
    return counter
}

// console.log(outputs)
console.log(countSpecialNums(outputs))