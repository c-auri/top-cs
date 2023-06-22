import { Coordinate } from './Coordinate'
import { Path } from './Path'
import { LinkedList } from '../linked-list/LinkedList'

export function getShortestPath(start: Coordinate, goal: Coordinate) {
    if (start.equals(goal)) {
        return new Path(start)
    }

    const pathsToExpand = new LinkedList(new Path(start))

    while (true) {
        const pathToExpand = pathsToExpand.shift() as Path

        for (const path of addAllowedMoves(pathToExpand)) {
            if (path.target.equals(goal)) {
                return path
            }

            pathsToExpand.append(path)
        }
    }
}

function addAllowedMoves(fromPath: Path) {
    const result: Path[] = []

    for (const move of moveSet) {
        const path = fromPath.target.tryAdd(move.columns, move.rows)

        if (path) {
            result.push(new Path(path, fromPath))
        }
    }

    return result
}

const moveSet = [
    { columns: 1, rows: -2 },
    { columns: 1, rows: 2 },
    { columns: 2, rows: -1 },
    { columns: 2, rows: 1 },
    { columns: -1, rows: -2 },
    { columns: -1, rows: 2 },
    { columns: -2, rows: -1 },
    { columns: -2, rows: 1 }
]