import { importArray } from "../../helpers.mjs"

const heightMap = importArray("input.txt").map(row =>{
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

// //part 1
// const lowPoints = []
// for(let y = 0; y < heightMap.length; y++){
//     for(let x = 0; x < heightMap[0].length; x++){
//         if(isLowPoint(x,y)){
//             lowPoints.push(heightMap[y][x])
//         }
//     }
// }

// console.log(lowPoints)

// const partOneAnswer = lowPoints.reduce((runningTotal, point) =>{
//     return runningTotal = runningTotal + (point + 1)
// }, 0)

// console.log(partOneAnswer)

//part 2

const basins = []

const createBasin = (x,y) =>{
    const current = heightMap[y][x]
    if (current === 9) return []
    const basin = [{"x":x,"y":y}]
    if(x > 0 && (heightMap[y][x-1] - current > 0)) basin.push([...createBasin(x-1,y)])
    //find lower
    if(y < heightMap.length-1 && heightMap[y+1][x] - current > 0) basin.push([...createBasin(x,y+1)])
    //find right
    if(x < heightMap[0].length-1 && heightMap[y][x+1] - current > 0) basin.push([...createBasin(x+1,y)])
    //find upper
    if(y > 0 && heightMap[y-1][x] - current > 0) basin.push([...createBasin(x,y-1)])
    // console.log(basin)
    return basin.flat()
}


for(let y = 0; y < heightMap.length; y++){
    for(let x = 0; x < heightMap[0].length; x++){
        if(isLowPoint(x,y)){
            const basin = createBasin(x,y).filter((value,index,array)=>array.findIndex(t=>(t.x === value.x && t.y===value.y))===index)
            console.log("basin: ",basin.length)
            basins.push(basin)
        }
    }
}
basins.sort((a,b) => b.length - a.length)
console.log(basins.map( b => b.length)) 
console.log(basins.shift().length * basins.shift().length * basins.shift().length)