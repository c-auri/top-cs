import { iterativeFibs, recursiveFibs } from './fibs.ts'

describe('iterativeFibs returns', () => {
    describe('the empty array', () => {
        test('for negative inputs', () => {
            expect(iterativeFibs(-1)).toEqual([])
        })
        test('for 0', () => expect(iterativeFibs(0)).toEqual([]))
    })
    describe('the defined starters', () => {
        expect(iterativeFibs(1)).toEqual([ 0 ])
        expect(iterativeFibs(2)).toEqual([ 0, 1 ])
    })
    describe('the full sequence', () => {
        expect(iterativeFibs(3)).toEqual([ 0, 1, 1 ])
        expect(iterativeFibs(4)).toEqual([ 0, 1, 1, 2 ])
        expect(iterativeFibs(5)).toEqual([ 0, 1, 1, 2, 3 ])
        expect(iterativeFibs(6)).toEqual([ 0, 1, 1, 2, 3, 5 ])
        expect(iterativeFibs(7)).toEqual([ 0, 1, 1, 2, 3, 5, 8 ])
        expect(iterativeFibs(8)).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13 ])
    })
})

describe('recursiveFibs returns', () => {
    describe('the empty array', () => {
        test('for negative inputs', () => {
            expect(recursiveFibs(-1)).toEqual([])
        })
        test('for 0', () => expect(recursiveFibs(0)).toEqual([]))
    })
    describe('the defined starters', () => {
        expect(recursiveFibs(1)).toEqual([ 0 ])
        expect(recursiveFibs(2)).toEqual([ 0, 1 ])
    })
    describe('the full sequence', () => {
        expect(recursiveFibs(3)).toEqual([ 0, 1, 1 ])
        expect(recursiveFibs(4)).toEqual([ 0, 1, 1, 2 ])
        expect(recursiveFibs(5)).toEqual([ 0, 1, 1, 2, 3 ])
        expect(recursiveFibs(6)).toEqual([ 0, 1, 1, 2, 3, 5 ])
        expect(recursiveFibs(7)).toEqual([ 0, 1, 1, 2, 3, 5, 8 ])
        expect(recursiveFibs(8)).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13 ])
    })
})