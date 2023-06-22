import { Coordinate } from "./Coordinate"
import { findShortestPaths } from "./ShortestPath"

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
    const shortestPaths = findShortestPaths(start, goal)
    const length = shortestPaths.length

    console.log(`There ${length > 1 ? "are" : "is"} ${length} shortest path${length > 1 ? "s" : ""} from ${start} to ${goal}:`)

    for (let i = 0; i < length; i++) {
        const number = String(i + 1).padStart(String(length).length)
        console.log(`${number}: ${shortestPaths[i].toString()}`)
    }
}

function handle(error: any) {
    if (error instanceof Error) {
        console.log(error.message)
    } else {
        console.log(String(error))
    }
}