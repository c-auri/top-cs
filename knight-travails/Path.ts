import { Coordinate } from "./Coordinate"

export class Path {
    target: Coordinate
    start: Path | null

    constructor(target: Coordinate, start: Path | null = null) {
        this.target = target
        this.start = start
    }

    toString() {
        let current = this as Path
        let result = current.target.toString()

        while (current.start) {
            result = `${current.start.target.toString()} -> ${result}`
            current = current.start
        }

        return result
    }
}