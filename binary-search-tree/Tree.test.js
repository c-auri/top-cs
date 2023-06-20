import { Tree } from "./Tree"

describe('levelOrder', () => {
    describe('without callback', () => {
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.levelOrder()).toEqual([])
        })
        test('returns breadth-first sorted values if no callback is given', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.levelOrder()).toEqual([4, 2, 6, 1, 3, 5, 7])
        })
    })
    describe('with callback', () => {
        const callback = (node) => node.data * 2
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.levelOrder(callback)).toEqual([])
        })
        test('returns breadth-first sorted array with callback values', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.levelOrder(callback)).toEqual([8, 4, 12, 2, 6, 10, 14])
        })
    })
})