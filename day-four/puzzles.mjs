import fs from 'fs';

const importBingoData = (fileLocation) =>{

    const parseBoardRow = (row) =>{
        const rowArray = row.split("")
        const result = [
            parseInt(rowArray.slice(0,2).join("")),
            parseInt(rowArray.slice(3,5).join("")),
            parseInt(rowArray.slice(6,8).join("")),
            parseInt(rowArray.slice(9,11).join(""))
        ]
        return result
    }


    let data = fs.readFileSync(fileLocation,'utf8').split("\n\n")    
    const numbers = (data.shift()).split(",").map( n => parseInt(n))
    const boards = data.map(b => b.split("\n").map(r => parseBoardRow(r)))
    return [numbers,boards]
}

const [numbers,boards] = importBingoData("sample.txt")

console.log(boards)
console.log(numbers)

