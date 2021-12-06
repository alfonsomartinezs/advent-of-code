import { importArray } from "../../helpers.mjs";


const diagnosticReport = importArray("input.txt")
const sampleReport = importArray("sample.txt")
let gammaRate = []
let epsilonRate = []

// for(let i = 0; i < diagnosticReport.length; i++){
//     const num = diagnosticReport[i]
//     for (let j = 0; j < num.length; j++){
//         if(!gammaRate[j]){
//             gammaRate[j] = 0
//             epsilonRate[j] = 0
//         }
//         num.charAt(j) === "1" ? gammaRate[j] += 1 : gammaRate[j] -= 1
//     }
// }

// const translate = (num) =>{
//     console.log("translating num: ",num)
//     let gamma   = num.map(i => i > 0 ? 1 : 0)
//     let epsilon = num.map(i => i > 1 ? 0 : 1)
//     console.log("gamma: ",gamma)
//     return [gamma,epsilon]
// }

const translate = (num) =>{
    // console.log("translating num: ",num)
    let gamma   = num.map(i => i >= 0 ? 1 : 0)
    let epsilon = num.map(i => i >= 0 ? 0 : 1)
    // console.log("gamma: ",gamma)
    return [gamma,epsilon]
}

// [gammaRate,epsilonRate] = translate(gammaRate)

// console.log(gammaRate,epsilonRate,gammaRate * epsilonRate)


//PART TWO

const report = diagnosticReport

const getGammaAndEpsilon = (report) =>{

    const counts = []

    for(let i = 0; i < report.length; i++){
        const num = report[i]
        for (let j = 0; j < num.length; j++){
            if(!counts[j]){
                counts[j] = 0
            }
            num.charAt(j) === "1" ? counts[j] += 1 : counts[j] -= 1
        }
    }
    const [gammaResult,epsilonResult] = translate(counts)
    return [gammaResult,epsilonResult]
}

const [gamma,epsilon] = getGammaAndEpsilon(report)

console.log(gamma,epsilon)

const filterReport = (report,gOrA) =>{
    let filteredReport = [...report]
    // console.log(filteredReport)
    for(let i = 0; i < report[0].length; i++){
        const [gammaCriteria,epsilonCriteria] = getFirstGammaAndEpsilon(filteredReport,i)
        const criteria = gOrA === "gamma" ? gammaCriteria : epsilonCriteria 
        filteredReport = filteredReport.filter(num => num[i] == criteria[0])
        // console.log("~~~~~~~~~~~~~~~")
        // console.log("filtering for: ",criteria," at slot ",i+1)
        // console.log(`${filteredReport.length} passing reports: `,filteredReport)

        if (filteredReport.length ===1) return filteredReport[0]
    }
    return filteredReport
}

const getFirstGammaAndEpsilon = (report,idx) =>{
    let count = 0

    for(let i = 0; i < report.length; i++){
        const num = report[i]
        num.charAt(idx) === "1" ? count += 1 : count -= 1
    }
    const [gammaResult,epsilonResult] = translate([count])
    return [gammaResult,epsilonResult]
}

const oxygen = filterReport(report,"gamma")
const co2 = filterReport(report,"epsilon")

console.log(oxygen,co2,parseInt(oxygen,2)*parseInt(co2,2))
