import { sort } from '../src/mergesort'

describe('mergesort sorts', () => {
    test('empty input', () => {
        expect(sort([])).toEqual([])
    })
    test('single elements', () => {
        expect(sort([ 1 ])).toEqual([ 1 ])
    })
    test('sorted elements', () => {
        expect(sort([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
    })
    test('sorted elements', () => {
        expect(sort([ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
    })
})