const { Coordinate } = require("./Coordinate")

class Path {
    target
    start

    constructor(target, start) {
        this.target = target
        this.start = start
    }

    toString() {
        if (!this.start) {
            return this.target.toString()
        }

        return `${this.start.toString()} -> ${this.target.toString()}`
    }
}

module.exports = { Path }
