import { Coordinate } from './Coordinate'
import { Node } from './Node'
import { LinkedList } from '../linked-list/LinkedList'

export function knightMoves(start: Coordinate, goal: Coordinate) {
    if (start.equals(goal)) {
        return start.toString()
    }

    let finalNode: Node | undefined = undefined
    const queue = new LinkedList(new Node(start))

    while (!finalNode) {
        const sourceNode = queue.shift() as Node
        const targetCoordinates = getPossibleTargets(sourceNode.coordinate)

        for (const targetCoordinate of targetCoordinates) {
            const targetNode = new Node(targetCoordinate, sourceNode)

            if (targetCoordinate.equals(start)) {
                break
            } else if (targetCoordinate.equals(goal)) {
                finalNode = targetNode
                break
            } else {
                queue.append(targetNode)
            }
        }
    }

    return finalNode.toString()
}

function getPossibleTargets(source: Coordinate) {
    const result: Coordinate[] = []

    for (const move of possibleMoves) {
        const target = source.tryAdd(move[0], move[1])

        if (target) {
            result.push(target)
        }
    }

    return result
}

const possibleMoves = [
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
    [-1, -2],
    [-1, 2],
    [-2, -1],
    [-2, 1]
]