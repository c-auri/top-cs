import { Coordinate } from './Coordinate'
import { Node } from './Node'
import { LinkedList } from '../linked-list/LinkedList'

export function knightMoves(start: Coordinate, goal: Coordinate) {
    if (start.equals(goal)) {
        return start.toString()
    }

    const queue = new LinkedList(new Node(start))

    while (true) {
        const previousMove = queue.shift() as Node

        for (const move of getPossibleMoves(previousMove)) {
            if (move.coordinate.equals(goal)) {
                return move.toString()
            }

            queue.append(move)
        }
    }
}

function getPossibleMoves(source: Node) {
    const result: Node[] = []

    for (const direction of directions) {
        const target = source.coordinate.tryAdd(direction.columns, direction.rows)

        if (target) {
            result.push(new Node(target, source))
        }
    }

    return result
}

const directions = [
    { columns: 1, rows: -2 },
    { columns: 1, rows: 2 },
    { columns: 2, rows: -1 },
    { columns: 2, rows: 1 },
    { columns: -1, rows: -2 },
    { columns: -1, rows: 2 },
    { columns: -2, rows: -1 },
    { columns: -2, rows: 1 }
]