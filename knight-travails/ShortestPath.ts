import { Coordinate } from './Coordinate'
import { Path } from './Path'
import { LinkedList } from '../linked-list/LinkedList'

export function findShortestPaths(start: Coordinate, goal: Coordinate) {
    if (start.equals(goal)) {
        return [new Path(start)]
    }

    const results = new LinkedList()
    let currentLevel = new LinkedList()
    let nextLevel = new LinkedList(new Path(start))

    while(results.size === 0) {
        currentLevel = nextLevel
        nextLevel = new LinkedList()

        while (currentLevel.size > 0) {
            const currentPath = currentLevel.shift() as Path

            for (const path of addAllowedMoves(currentPath)) {
                if (path.target.equals(goal)) {
                    results.append(path)
                } else {
                    nextLevel.append(path)
                }
            }
        }
    }

    return results.toArray()
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