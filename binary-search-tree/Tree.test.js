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

describe('inorder', () => {
    describe('without callback', () => {
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.inorder()).toEqual([])
        })
        test('returns an array containing the root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.inorder()).toEqual([1])
        })
        test('returns a sorted array with all values for a tree with multiple values', () => {
            const tree = new Tree(5, 3, 2, 4, 1, 7, 6)
            expect(tree.inorder()).toEqual([1, 2, 3, 4, 5, 6, 7])
        })
    })
    describe('with callback', () => {
        const callback = (node) => node.data * 2
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.inorder(callback)).toEqual([])
        })
        test('returns an array containing the callback value of root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.inorder(callback)).toEqual([2])
        })
        test('returns the inorder array with all callback values for a tree with multiple values', () => {
            const tree = new Tree(5, 3, 2, 4, 1, 7, 6)
            expect(tree.inorder(callback)).toEqual([2, 4, 6, 8, 10, 12, 14])
        })
    })
})

describe('preorder', () => {
    describe('without callback', () => {
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.preorder()).toEqual([])
        })
        test('returns an array containing the root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.preorder()).toEqual([1])
        })
        test('returns the preorder array with all values for a tree with multiple values', () => {
            const tree = new Tree(5, 3, 2, 4, 1, 7, 6)
            expect(tree.preorder()).toEqual([4, 2, 1, 3, 6, 5, 7])
        })
    })
    describe('with callback', () => {
        const callback = (node) => node.data * 2
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.preorder(callback)).toEqual([])
        })
        test('returns an array containing the callback value of root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.preorder(callback)).toEqual([2])
        })
        test('returns the preorder array with all callback values for a tree with multiple values', () => {
            const tree = new Tree(5, 3, 2, 4, 1, 7, 6)
            expect(tree.preorder(callback)).toEqual([8, 4, 2, 6, 12, 10, 14])
        })
    })
})

describe('postorder', () => {
    describe('without callback', () => {
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.postorder()).toEqual([])
        })
        test('returns an array containing the root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.postorder()).toEqual([1])
        })
        test('returns the postorder array with all values for a tree with multiple values', () => {
            const tree = new Tree(4, 3, 2, 5, 1, 7, 6)
            expect(tree.postorder()).toEqual([1, 3, 2, 5, 7, 6, 4])
        })
    })
    describe('with callback', () => {
        const callback = (node) => node.data * 2
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.postorder(callback)).toEqual([])
        })
        test('returns an array containing the callback value of root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.postorder(callback)).toEqual([2])
        })
        test('returns the postorder array with all callback values for a tree with multiple values', () => {
            const tree = new Tree(5, 3, 2, 4, 1, 7, 6)
            expect(tree.postorder(callback)).toEqual([2, 6, 4, 10, 14, 12, 8])
        })
    })
})