import { importArray } from "../../helpers.mjs"

const heightMap = importArray("sample.txt").map(row =>{
    return row.split("").map(digit => parseInt(digit))
})

console.log(heightMap.length)
console.log(heightMap[0].length)
const isLowPoint = (x,y) =>{
    const current = heightMap[y][x]
    //check left
    if(x > 0 && heightMap[y][x-1] <= current) return false
    //find lower
    if(y < heightMap.length-1 && heightMap[y+1][x] <= current) return false
    //find right
    if(x < heightMap[0].length-1 && heightMap[y][x+1] <= current) return false
    //find upper
    if(y > 0 && heightMap[y-1][x] <= current) return false


    return true
}

const lowPoints = []
for(let y = 0; y < heightMap.length; y++){
    for(let x = 0; x < heightMap[0].length; x++){
        if(isLowPoint(x,y)){
            lowPoints.push(heightMap[y][x])
        }
    }
}

console.log(lowPoints)

const partOneAnswer = lowPoints.reduce((runningTotal, point) =>{
    return runningTotal = runningTotal + (point + 1)
}, 0)

console.log(partOneAnswer)