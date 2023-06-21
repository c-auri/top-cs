import { Coordinate } from "./Coordinate"
import { knightMoves } from "./knightMoves"

try {
    runProgram()
} catch (error) {
    handle(error)
}

function runProgram() {
    const [ startColumn, startRow ] = process.argv[2].split('')
    const [ goalColumn, goalRow ] = process.argv[3].split('')

    const start =  new Coordinate(startColumn, startRow)
    const goal =  new Coordinate(goalColumn, goalRow)

    console.log(`Shortest path from ${start} to ${goal}:`)
    console.log(knightMoves(start, goal))
}

function handle(error: any) {
    let message: string

    if (error instanceof Error) {
        message = error.message
    } else {
        message = String(error)
    }

    console.log(message)
}