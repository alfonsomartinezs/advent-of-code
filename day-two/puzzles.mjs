import { importArray } from "../helpers.mjs";

const input = importArray("input.txt")
const instructions = input.map( line =>{

    const direction = line.split(' ')[0]
    const distance = parseInt(line.split(' ')[1])

    return {direction,distance}

})
console.log(instructions)

class Submarine{
    constructor(){
        this.y = 0
        this.x = 0 
    }

    print(){
        console.log("depth: ",this.y," x-coordinate: ",this.x)
    }

    move({direction,distance}){
        switch(direction){
            case "forward":
                this.x += distance
                break
            case "up":
                this.y -= distance
                break
            case "down":
                this.y += distance
                break
            default:
                console.log(`unsure on this one: ${direction}`)
        }
    }

    travel(instructions){
        for (const instruction of instructions){
            this.move(instruction)
            this.print()
        }
        console.log(`${this.x} * ${this.y} = ${this.x * this.y}`)
    }

}

const sub = new Submarine

sub.travel(instructions)
