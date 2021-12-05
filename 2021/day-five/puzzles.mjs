import { importArray } from "../../helpers.mjs";

console.log("================================================================")

const getSegmentList = (fileLocation) =>{
    let highestX = 0
    let highestY = 0
    const segments = importArray(fileLocation).map (line =>{
        const segment = line.split(" -> ").map(point =>{
            const x = parseInt(point.split(",")[0])
            const y = parseInt(point.split(",")[1])
            x > highestX ? highestX = x : null
            y > highestY ? highestY = y : null
            return {x,y}
        })

        return {
            "a":segment[0],
            "b":segment[1]
        }
    })
    return {highestX,highestY,segments}
}

const {highestX,highestY,segments} = getSegmentList("sample.txt")


//make diagram with highest x and y coordinates
const diagram = []
for (let i = 0; i <= highestY; i++){
    const row = []
    for(let j = 0; j <= highestX; j++){
        row.push(0)
    }
    diagram.push(row)
}

const drawSegment = (diagram,segment) =>{
    // console.log(segment)
    if((segment.a.x === segment.b.x) && (segment.a.y !== segment.b.y)){
        console.log("segment ",segment," is vertical. walking...")
        for (let i = (segment.a.y > segment.b.y ? segment.b.y : segment.a.y); i <= (segment.a.y > segment.b.y ? segment.a.y : segment.b.y); i++){
            diagram[i][segment.a.x] += 1
        }
    }else if((segment.a.x !== segment.b.x) && (segment.a.y === segment.b.y)){
        console.log("segment ",segment," is horizontal. walking...")
        for (let i = (segment.a.x > segment.b.x ? segment.b.x : segment.a.x); i <= (segment.a.x > segment.b.x ? segment.a.x : segment.b.x); i++){
            diagram[segment.a.y][i] += 1
        }
    }else{
        console.log("segment ",segment," is diagonal. skipping...")
        const slope = 
        console.log("slope: ",slope)
    }
}

const printDiagram = (diagram) =>{
    for(const row of diagram){
        console.log(row.join(""))
    }
}

printDiagram(diagram)
for(const segment of segments){
    // console.log(segment)
    drawSegment(diagram,segment)
}

const countHotspots = (diagram) =>{
    let count = 0
    for(let i = 0; i < diagram.length; i ++){
        for(let j = 0 ;j < diagram[0].length; j++){
            if (diagram[i][j] > 1){
                count += 1
            }
        }
    }
    return count
}

console.log(countHotspots(diagram))