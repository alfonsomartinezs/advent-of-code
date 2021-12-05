import fs from 'fs';


const importBingoData = (fileLocation) =>{

    const parseBoardRow = (row) =>{
        const rowArray = row.split("")
        //parse each row into an array of 'tuples', with the number and whether it's been matched, e.g. [9,false]
        const result = [
            [parseInt(rowArray.slice(0,2).join("")),false],
            [parseInt(rowArray.slice(3,5).join("")),false],
            [parseInt(rowArray.slice(6,8).join("")),false],
            [parseInt(rowArray.slice(9,11).join("")),false],
            [parseInt(rowArray.slice(12,14).join("")),false]
        ]
        return result
    }


    let data = fs.readFileSync(fileLocation,'utf8').split("\n\n")    
    const numbers = (data.shift()).split(",").map( n => parseInt(n))
    const boards = data.map(b => b.split("\n").map(r => parseBoardRow(r)))
    return [numbers,boards]
}

const [numbers,boards] = importBingoData("sample.txt")


console.log(boards[0])