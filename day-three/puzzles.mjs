import { importArray } from "../helpers.mjs";


const diagnosticReport = importArray("input.txt")
//power consumption is product of gamma rate and epsilon rate
//gamma rate is 5 bit code, each bit is mode of all numbers in report
//epsilon rate is opposite of gamma


const bitCounts = {}
let gammaRate = [0,0,0,0,0]
let epsilonRate = [0,0,0,0,0]

for(let i = 0; i < diagnosticReport.length; i++){
    const num = diagnosticReport[i]
    for (let j = 0; j < 5; j++){
        num.charAt(j) === "1" ? gammaRate[j] += 1 : gammaRate[j] -= 1
    }
}

const translate = (num) =>{
    let gamma   = num.map(i => i > 0 ? 1 : 0).join("")
    let epsilon = num.map(i => i > 1 ? 0 : 1).join("")
    console.log(gamma,epsilon)
    return [parseInt(gamma,2),parseInt(epsilon,2)]
}

[gammaRate,epsilonRate] = translate(gammaRate)

console.log(gammaRate,epsilonRate,gammaRate * epsilonRate)