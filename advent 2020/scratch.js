const input = 
`yrdneovzfghxalmspuckt
tqnikyerogxuhmfvpzla

ylckwbrtmsjv
tkjlvcqrfea

twjumlapesnz
pmeoazub
pmabuoez

xmgyd
xdymg
dxygm
dgymx
gxudcvmy

v
vw
pvd
vu
v

qwmfrncxb
drjqglsakpwtbi`


const groups = input.split("\n\n").map((group) => {
  g = group.split("\n")
  return g
})

groups.forEach(group => {
  numPassengers = group.length
  yesses = group.join("").match(/a/g)
  if (yesses && numPassengers == yesses.length) {
    console.log("matches")
  } else {
    console.log("no matches");
  }
  console.log("===========================")
})
console.log(groups.length);

// dic = {}
// console.log(!dic["dic"]);






// // hcl:f1aa8a

// // hcl:#fffffd 


// let regex = /^[0-9a-zA-Z]+$/

// console.log(regex);

// console.log(/^[0-9a-zA-Z]+$/.test("f1aaa"))

// let result = 8144 / (8171)
// console.log(result);