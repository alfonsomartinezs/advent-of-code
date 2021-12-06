//day 11!
//Copied for Part 2

const input = 
`L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`.split("\n")

let seats = input.map(function (v) {
  return v.split("")
});

// console.log(seats);

const seatEmpty = (row, col) =>{
  if (seats[row]) {
    if (seats[row][col]) {
      if (seats[row][col] === "#") {
        return false
      }
    }
  }
  return true
  
}


//so, need to keep track of the row coordinates and the rate of change
const recursiveSeatEmpty = (row, col) => {
  if (seats[row] && seats[row][col]) {
    return rec
  } else {
    return true
  }
}