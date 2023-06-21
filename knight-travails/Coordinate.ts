export class Coordinate {
    column: string
    row: string

    static isValid(column: string, row: string) {
        return column.length === 1
            && row.length === 1
            && column.charCodeAt(0) >= 65
            && column.charCodeAt(0) <= 72
            && row.charCodeAt(0) >= 49
            && row.charCodeAt(0) <= 56
    }

    constructor(column: string, row: string) {
        if (!Coordinate.isValid(column, row)) {
            throw Error('Invalid coordinate')
        }

        this.column = column
        this.row = row
    }

    get columnCode() {
        return this.column.charCodeAt(0)
    }

    get rowCode() {
        return this.row.charCodeAt(0)
    }

    tryAdd(numberOfColumns: number, numberOfRows: number) {
        const newColumn = String.fromCharCode(this.columnCode + numberOfColumns)
        const newRow = String.fromCharCode(this.rowCode + numberOfRows)

        try {
            return new Coordinate(newColumn, newRow)
        } catch {
            return null
        }
    }

    equals(other: Coordinate) {
        return this.column === other.column
            && this.row === other.row
    }

    toString() {
        return this.column + this.row
    }
}

