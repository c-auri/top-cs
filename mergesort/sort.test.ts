import { sort } from './sort.ts'

describe('sorts', () => {
    test('empty input', () => {
        expect(sort([])).toEqual([])
    })
    test('single elements', () => {
        expect(sort([ 1 ])).toEqual([ 1 ])
    })
    test('sorted elements', () => {
        expect(sort([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
    })
    test('backwards sorted elements', () => {
        expect(sort([ 3, 2, 1 ])).toEqual([ 1, 2, 3 ])
    })
    test('scrambled elements', () => {
        expect(sort([ 1, 3, 5, 4, 2 ])).toEqual([ 1, 2, 3, 4, 5 ])
    })
    test('scrambled elements with gaps', () => {
        expect(sort([ 1, 7, 5, 9, 3 ])).toEqual([ 1, 3, 5, 7, 9 ])
    })
    test('mixed sign elements', () => {
        expect(sort([ 1, -7, 5, -9, 3 ])).toEqual([ -9, -7, 1, 3, 5 ])
    })
})