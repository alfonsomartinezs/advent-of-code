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

const [numbers,boards] = importBingoData("input.txt")

//part one

const markBoard = (board,number) =>{
    for (const row of board){
        for (const box of row){
            if (box[0] === number){
                box[1] = true
            }
        }
    }
}

const isWinning = (board) =>{
    //winning combinations are
    const winningCombos = 
    [
        //rows
        [[0,0],[0,1],[0,2],[0,3],[0,4]],
        [[1,0],[1,1],[1,2],[1,3],[1,4]],
        [[2,0],[2,1],[2,2],[2,3],[2,4]],
        [[3,0],[3,1],[3,2],[3,3],[3,4]],
        [[4,0],[4,1],[4,2],[4,3],[4,4]],
        //columns
        [[0,0],[1,0],[2,0],[3,0],[4,0]],
        [[0,1],[1,1],[2,1],[3,1],[4,1]],
        [[0,2],[1,2],[2,2],[3,2],[4,2]],
        [[0,3],[1,3],[2,3],[3,3],[4,3]],
        [[0,4],[1,4],[2,4],[3,4],[4,4]],
    ]

    for(const combo of winningCombos){
        const values = [
            board[combo[0][0]][combo[0][1]][1],
            board[combo[1][0]][combo[1][1]][1],
            board[combo[2][0]][combo[2][1]][1],
            board[combo[3][0]][combo[3][1]][1],
            board[combo[4][0]][combo[4][1]][1]
        ]
        if(values.every(val => val === true)){
            return true
        } 
    }
    return false

}



const playBingo = (boards,numbers) =>{
    const winners = []
    for(const number of numbers){

        for(let i = 0; i < boards.length; i++){
            markBoard(boards[i],number)
            if(isWinning(boards[i])){
                return sumUnmarked(boards[i]) * number
            }
        }
    } 
    return winners   
}

const sumUnmarked = (board) =>{
    // console.log("board tp be marked",board)
    return board.reduce((total, currentRow) =>{
        // console.log("row: ",currentRow)
        const row = currentRow.reduce((rowTotal,currentItem) =>{
            return currentItem[1] === false ? rowTotal + currentItem[0] : rowTotal
        },0)
        // console.log("total: ",total," row: ",row)
        return total + row
    },0)
}

const shallowCopyBoard = (board) =>{
    const result = board.map (r =>{
        r.slice()
    })
    console.log(board)
}

const playSmartBingo = (boards,numbers) =>{
    const winners = []
    for(const number of numbers){
        for(let i = 0; i < boards.length; i++){
            markBoard(boards[i],number)
            if(number === 16){
            }
            if(isWinning(boards[i])){
                if (winners.filter(o => o.boardNum === i) < 1){
                    const boardObject = {
                        boardNum: i,
                        board: 
                        JSON.parse(JSON.stringify(boards[i])),
                        num: number
                    }
                    winners.push(boardObject)
                }

            }
        }
    } 
    return sumUnmarked(winners[winners.length-1].board,winners[winners.length-1]) * winners[winners.length-1].num
}
console.log("=============================================")
console.log("=============================================")
console.log("=============================================")
console.log("=============================================")
console.log("=============================================")
console.log(playSmartBingo(boards,numbers))
// console.log(boards[0])
// console.log(boards[1])
// console.log(boards[2])