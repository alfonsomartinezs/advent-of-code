import { importArray } from "../../helpers.mjs";

const input = importArray("input.txt")
const instructions = input.map( line =>{

    const direction = line.split(' ')[0]
    const distance = parseInt(line.split(' ')[1])

    return {direction,distance}

})

class Submarine{
    constructor(){
        this.y = 0
        this.x = 0 
    }

    print(){
        console.log("depth: ",this.y," x-coordinate: ",this.x)
    }

    move(instruction){
        const {direction,distance} = instruction
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


class improvedSubmarine extends Submarine{
    constructor(){
        super()
        this.aim = 0
    }

    print(){
        console.log("depth: ",this.y," x-coordinate: ",this.x," aim: ",this.aim)
    }
    move(instruction){
        const {direction,distance} = instruction
        switch(direction){
            case "forward":
                this.x += distance
                this.y += distance * this.aim
                break
            case "up":
                this.aim -= distance
                break
            case "down":
                this.aim += distance
                break
            default:
                console.log(`unsure on this one: ${direction}`)
        }
    }
}

const newSub = new improvedSubmarine

newSub.travel(instructions)