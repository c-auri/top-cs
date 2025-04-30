const { Coordinate } = require('./Coordinate')
const { Path } = require('./Path')
const { LinkedList } = require('../linked-list/LinkedList')

function findShortestPaths(start, goal) {
    if (start.equals(goal)) {
        return [new Path(start)]
    }

    const results = new LinkedList()
    let currentLevel = new LinkedList()
    let nextLevel = new LinkedList(new Path(start))

    while (results.size === 0) {
        currentLevel = nextLevel
        nextLevel = new LinkedList()

        while (currentLevel.size > 0) {
            const currentPath = currentLevel.shift()

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

function addAllowedMoves(fromPath) {
    const result = []

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

module.exports = { findShortestPaths }
