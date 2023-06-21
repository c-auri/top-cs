export type Column = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
export type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export class Coordinate {
    column: Column
    row: Row

    static isValid(columnCode: number, row: number) {
        return columnCode >= 65
            && columnCode <= 72
            && row >= 1
            && row <= 8
    }

    constructor(column: Column, row: Row) {
        this.column = column
        this.row = row
    }

    tryAdd(numberOfColumns: number, numberOfRows: number) {
        const columnCode = this.column.charCodeAt(0) + numberOfColumns
        const row = this.row + numberOfRows

        if (Coordinate.isValid(columnCode, row)) {
            return new Coordinate(String.fromCharCode(columnCode) as Column, row as Row)
        } else {
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

