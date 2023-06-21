import { Coordinate, Column, Row } from "./Coordinate"
import { knightMoves } from "./knightMoves"

const startCoordinates = process.argv[2]
const goalCoordinates = process.argv[3]

const startColumn = startCoordinates.split('')[0]
const startRow = parseInt(startCoordinates.split('')[1])
const goalColumn = goalCoordinates.split('')[0]
const goalRow = parseInt(goalCoordinates.split('')[1])

if (!isValidInput(startColumn, startRow) || !isValidInput(goalColumn, goalRow)) {
    console.log('Invalid input')
} else {
    const start =  new Coordinate(startColumn as Column, startRow as Row)
    const goal =  new Coordinate(goalColumn as Column, goalRow as Row)

    console.log(`Shortest path from ${start} to ${goal}:`)
    console.log(knightMoves(start, goal).toString())
}


function isValidInput(column: string, row: number) {
    return column.length === 1
        && Coordinate.isValid(column.charCodeAt(0), row)
}