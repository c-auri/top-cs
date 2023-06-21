import { Coordinate } from "./Coordinate"
import { knightMoves } from "./knightMoves"

try {
    runProgram()
} catch (error) {
    handle(error)
}

function runProgram() {
    if (!process.argv[2] || !process.argv[3]) {
        throw new Error('Missing arguments')
    }

    if (process.argv[2].length !== 2 || process.argv[3].length !== 2) {
        throw new Error('Malformed arguments')
    }

    const [ startColumn, startRow ] = process.argv[2].split('')
    const [ goalColumn, goalRow ] = process.argv[3].split('')

    const start =  new Coordinate(startColumn, startRow)
    const goal =  new Coordinate(goalColumn, goalRow)

    console.log(`Shortest path from ${start} to ${goal}:`)
    console.log(knightMoves(start, goal))
}

function handle(error: any) {
    if (error instanceof Error) {
        console.log(error.message)
    } else {
        console.log(String(error))
    }
}