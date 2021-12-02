import fs from 'fs';


export const importArray = (fileLocation) =>{
    const array = fs.readFileSync(fileLocation,'utf8').split("\n")    
    return array
}


export const importArrayAsNumbers = (fileLocation) =>{
    const array = fs.readFileSync(fileLocation,'utf8').split("\n").map(item => parseInt(item));    
    return array
}