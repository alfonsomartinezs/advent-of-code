import fs from 'fs';


const input = fs.readFileSync("input.txt",'utf8').split("\n").map(item => parseInt(item));
const sample = fs.readFileSync("sample.txt",'utf8').split("\n").map(item => parseInt(item));

const countIncreases = (array) =>{
    let increases = 0
    for (let i = 1; i < array.length; i++){
        if(array[i] > array[i-1]){
            increases += 1
        }
    }
    return increases
}

const countWindowIncreases = (array) =>{

    let increases = 0
    for (let i = 1; i < array.length; i++){
        if(!array[i+1] || !array[i+2]) break

        const currentWindow = array[i] + array[i+1] + array[i+2]
        const previousWindow = array[i-1] + array[i] + array[i+1]
        if (currentWindow > previousWindow){
            increases += 1
        }
    }
    return increases
}

console.log(countWindowIncreases(sample))
console.log(countWindowIncreases(input))