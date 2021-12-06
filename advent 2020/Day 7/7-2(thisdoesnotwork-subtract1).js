let input =
`light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`

let lines = input.split("\n");
// console.log(lines.length)
//gonna put each line in a hash as a bag with a name and a hash of its contents
let bags = {}
const bagRegex = /([\w ]+) (?=bags contain)/
const contentsRegex = /\d+ ([ \w]+) bag?/g

const bagName = (line) => {
  let name = line.match(bagRegex)[1]
  return name
  
}

const bagContents = (line) => {
  let contents = line.match(contentsRegex);
  return contents
}



for (i = 0; i < lines.length; i++){
  let name = bagName(lines[i]);
  let content = {}
  let contents = bagContents(lines[i])
  if (contents) {
    contents.forEach(item => {
    let num = Number(item.match(/(\d+)/)[1])
    //regex isn't return the group for some reason so using a slice instead
    let color = item.slice(item.indexOf(" ")+1,item.indexOf(" bag"));
    content[color] = num
  });
  } else {
    //do nothing
  }
  //fillin' the bag hash
  bags[name] = content
}


// console.log(Object.keys(bags).length);



const countIn = (bagName) => {
  // console.log("====looking in ",bagName," ==========")
  let bag = bags[bagName]
  let count = 1
  // console.log(bagName);

  //if this is a dead end this time we return 0
  if (Object.keys(bag).length <= 0) {
        // console.log(bagName," is empty: ",bag);
    return count
  }
  //return results of looking in inner bags (and their inner bags...and their inner bags..)
  for (let innerBag in bag) {
    count += bag[innerBag] * countIn(innerBag)
  }
  return count
    
}



let num = 0
for (let bag in bags) {
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log(bag,bags[bag]);
  console.log(countIn(bag))
}
