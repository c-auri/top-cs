import { Coordinate } from "./Coordinate"

export class Node {
    coordinate: Coordinate
    parent: Node | null

    constructor(coordinate: Coordinate, parent: Node | null = null) {
        this.coordinate = coordinate
        this.parent = parent
    }

    toString() {
        let current = this as Node
        let result = current.coordinate.toString()

        while (current.parent) {
            result = `${current.parent.coordinate.toString()} -> ${result}`
            current = current.parent
        }

        return result
    }
}