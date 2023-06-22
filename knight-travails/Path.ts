import { Coordinate } from "./Coordinate"

export class Path {
    target: Coordinate
    start: Path | null

    constructor(target: Coordinate, start: Path | null = null) {
        this.target = target
        this.start = start
    }

    toString(): string {
        if (!this.start) {
            return this.target.toString()
        }

        return `${this.start.toString()} -> ${this.target.toString()}`
    }
}