import fs from 'fs';


export const importFishMap = (fileLocation) => {
    const fishes = fs.readFileSync(fileLocation, 'utf8').split(",")
    
    const fishMap = {
        8: 0,
        7: 0,
        6: 0,
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
        0: 0,
        "spawn":0,
        "newParents":0
    }

    for (const fish of fishes) {
        fishMap[fish] += 1
    }

    return fishMap
}

const fishMap = importFishMap("input.txt")

console.log(fishMap)

for(let i = 0; i <256; i++){

    //spawn!
    fishMap["spawn"] = fishMap[0]
    fishMap["newParents"] = fishMap[0]

    for(let i = 0; i < 9; i++){
        fishMap[i] = fishMap[i+1]
    }

    fishMap[8] = fishMap["spawn"]
    fishMap[6] += fishMap["newParents"]   

    fishMap["spawn"] = 0
    fishMap["newParents"] = 0

}


const sumFish = (fishMap) =>{
    return Object.values(fishMap).reduce((fishTotal, currentPop) =>{
     return fishTotal + currentPop   
    })
}

console.log(sumFish(fishMap))