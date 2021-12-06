import fs from 'fs';


export const importFishMap = (fileLocation) =>{
    const fishes = fs.readFileSync(fileLocation,'utf8').split(",")    
    const fishMap = {
        8:0,
        7:0,
        6:0,
        5:0,
        4:0,
        3:0,
        2:0,
        1:0,
        0:0
    }
    for(const fish of fishes){
        fishMap[fish] += 1
    }
    return fishMap
}

const fishMap = importFishMap("sample.txt")

console.log(fishMap)