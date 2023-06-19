import { Tree } from "./Tree"

describe('levelOrder', () => {
    test('returns an empty array for the empty tree', () => {
        const tree = new Tree()
        expect(tree.levelOrder()).toEqual([])
    })
    test('returns breadth-first sorted values if no callback is given', () => {
        const array = [1, 2, 3, 4, 5, 6, 7]
        const tree = new Tree(array)
        expect(tree.levelOrder()).toEqual([4, 2, 6, 1, 3, 5, 7])
    })
    test('returns breadth-first sorted array with callback values', () => {
        const array = [1, 2, 3, 4, 5, 6, 7]
        const tree = new Tree(array)
        const callback = (node) => node.data * 2
        expect(tree.levelOrder(callback)).toEqual([8, 4, 12, 2, 6, 10, 14])
    })
})