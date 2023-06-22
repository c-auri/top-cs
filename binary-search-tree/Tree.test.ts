import { Node } from "./Node.ts"
import { Tree } from "./Tree.ts"

describe('height', () => {
    describe('returns 0 for empty tree', () => {
        const tree = new Tree()
        expect(tree.height).toBe(0)
    })
    describe('returns 1 for a tree with just the root', () => {
        const tree = new Tree(4)
        expect(tree.height).toBe(1)
    })
    describe('returns correct height for a tree with two equal sized subtrees', () => {
        const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
        expect(tree.height).toBe(3)
    })
})

describe('isBalanced', () => {
    describe('is true', () => {
        test('for empty tree', () => {
            const tree = new Tree()
            expect(tree.isBalanced).toBe(true)
        })
        test('for tree of height 1', () => {
            const tree = new Tree(1)
            expect(tree.isBalanced).toBe(true)
        })
        test('for non-trivial balanced tree with equally shaped subtrees', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.isBalanced).toBe(true)
        })
        test('for non-trivial balanced tree with differently shaped subtrees', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            tree.delete(1)
            tree.delete(7)
            expect(tree.isBalanced).toBe(true)
        })
    })
    describe('is false', () => {
        test('for non-trivial unbalanced tree', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            tree.delete(6)
            tree.insert(6)
            expect(tree.isBalanced).toBe(false)
        })
    })
})

describe('rebalance', () => {
    test('balances unbalanced tree', () => {
        const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
        tree.delete(6)
        tree.insert(6)
        expect(tree.isBalanced).toBe(false)
        tree.rebalance()
        expect(tree.isBalanced).toBe(true)
    })
})

describe('depth', () => {
    describe('is falsy', () => {
        test('for value that does not exist in tree', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.depth(8)).toBeFalsy()
        })
        test('for empty tree', () => {
            const tree = new Tree()
            expect(tree.depth(1)).toBeFalsy()
        })
    })
    describe('returns null', () => {
        test('for value that does not exist in tree', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.depth(8)).toBe(null)
        })
        test('for empty tree', () => {
            const tree = new Tree()
            expect(tree.depth(1)).toBe(null)
        })
    })
    describe('returns correct depth', () => {
        test('for root value', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.depth(4)).toBe(0)
        })
        test('for middle value', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.depth(2)).toBe(1)
        })
        test('for leaf value', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.depth(1)).toBe(2)
        })
    })
})

describe('find', () => {
    describe('in empty tree', () => {
        test('is falsy', () => {
            const tree = new Tree()
            expect(tree.find(1)).toBeFalsy()
        })
        test('returns null', () => {
            const tree = new Tree()
            expect(tree.find(1)).toBe(null)
        })
    })
    describe('existing value', () => {
        test('is truthy', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.find(1).data).toBeTruthy()
        })
        test('returns node with that value', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.find(1).data).toBe(1)
        })
    })
    describe('non-existing value', () => {
        test('is falsy', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.find(8)).toBeFalsy()
        })
        test('returns null', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.find(8)).toBe(null)
        })
    })
})

describe('insert', () => {
    describe('existing value', () => {
        test('does nothing', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6, 7]
            const tree = new Tree(...inorderValues)
            tree.insert(3)
            expect(tree.inorder()).toEqual(inorderValues)
        })
    })
    describe('new value', () => {
        test('inserts the value', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6, 7]
            const tree = new Tree(...inorderValues)
            tree.insert(8)
            expect(tree.inorder()).toEqual([...inorderValues, 8])
        })
    })
})

describe('delete', () => {
    describe('does nothing', () => {
        test('when passed non-existing value', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6, 7]
            const tree = new Tree(...inorderValues)
            tree.delete(8)
            expect(tree.inorder()).toEqual([...inorderValues])
        })
    })
    describe('deletes node with given value', () => {
        test('when passed root value', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6, 7]
            const tree = new Tree(...inorderValues)
            tree.delete(4)
            expect(tree.find(4)).toBeFalsy()
        })
        test('when passed value of leaf node', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6, 7]
            const tree = new Tree(...inorderValues)
            tree.delete(3)
            expect(tree.find(3)).toBeFalsy()
        })
        test('when passed value of node with one child', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6]
            const tree = new Tree(...inorderValues)
            tree.delete(1)
            expect(tree.find(1)).toBeFalsy()
        })
        test('when passed value of node with two children that are leafs', () => {
            const inorderValues = Array.from({length: 15}, (_, i) => i + 1)
            const tree = new Tree(...inorderValues)
            tree.delete(4)
            expect(tree.find(4)).toBeFalsy()
        })
        test('when passed value of node with two children that are not leafs', () => {
            const inorderValues = Array.from({length: 15}, (_, i) => i + 1)
            const tree = new Tree(...inorderValues)
            tree.delete(2)
            expect(tree.find(2)).toBeFalsy()
        })
        test('when passed value of node with two children and inorder successor has a child', () => {
            const inorderValues = Array.from({length: 31}, (_, i) => i + 1)
            const tree = new Tree(...inorderValues)
            tree.delete(10)
            tree.delete(11)
            tree.insert(10)
            tree.insert(11)
            tree.delete(8)
            expect(tree.find(8)).toBeFalsy()
        })
    })
    describe('keeps other nodes', () => {
        test('when passed root value', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6, 7]
            const tree = new Tree(...inorderValues)
            tree.delete(4)
            expect(tree.find(1)).toBeTruthy()
            expect(tree.find(2)).toBeTruthy()
            expect(tree.find(3)).toBeTruthy()
            expect(tree.find(5)).toBeTruthy()
            expect(tree.find(6)).toBeTruthy()
            expect(tree.find(7)).toBeTruthy()
        })
        test('when passed value of leaf node', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6, 7]
            const tree = new Tree(...inorderValues)
            tree.delete(3)
            expect(tree.find(1)).toBeTruthy()
            expect(tree.find(2)).toBeTruthy()
            expect(tree.find(4)).toBeTruthy()
            expect(tree.find(5)).toBeTruthy()
            expect(tree.find(6)).toBeTruthy()
            expect(tree.find(7)).toBeTruthy()
        })
        test('when passed value of node with one child', () => {
            const inorderValues = [1, 2, 3, 4, 5, 6]
            const tree = new Tree(...inorderValues)
            tree.delete(1)
            expect(tree.find(2)).toBeTruthy()
            expect(tree.find(3)).toBeTruthy()
            expect(tree.find(4)).toBeTruthy()
            expect(tree.find(5)).toBeTruthy()
            expect(tree.find(6)).toBeTruthy()
        })
        test('when passed value of node with two children that are leafs', () => {
            const inorderValues = Array.from({length: 15}, (_, i) => i + 1)
            const tree = new Tree(...inorderValues)
            tree.delete(4)

            for (const value of inorderValues) {
                if (value !== 4) {
                    expect(tree.find(value)).toBeTruthy()
                }
            }
        })
        test('when passed value of node with two children that are not leafs', () => {
            const inorderValues = Array.from({length: 15}, (_, i) => i + 1)
            const tree = new Tree(...inorderValues)
            tree.delete(2)

            for (const value of inorderValues) {
                if (value !== 2) {
                    expect(tree.find(value)).toBeTruthy()
                }
            }
        })
        test('when passed value of node with two children and inorder successor has a child', () => {
            const inorderValues = Array.from({length: 31}, (_, i) => i + 1)
            const tree = new Tree(...inorderValues)
            tree.delete(10)
            tree.delete(11)
            tree.insert(10)
            tree.insert(11)
            tree.delete(8)

            for (const value of inorderValues) {
                if (value !== 8) {
                    expect(tree.find(value)).toBeTruthy()
                }
            }
        })
    })
})

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
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.levelOrder(doubleValue)).toEqual([])
        })
        test('returns breadth-first sorted array with callback values', () => {
            const tree = new Tree(1, 2, 3, 4, 5, 6, 7)
            expect(tree.levelOrder(doubleValue)).toEqual([8, 4, 12, 2, 6, 10, 14])
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
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.inorder(doubleValue)).toEqual([])
        })
        test('returns an array containing the callback value of root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.inorder(doubleValue)).toEqual([2])
        })
        test('returns the inorder array with all callback values for a tree with multiple values', () => {
            const tree = new Tree(5, 3, 2, 4, 1, 7, 6)
            expect(tree.inorder(doubleValue)).toEqual([2, 4, 6, 8, 10, 12, 14])
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
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.preorder(doubleValue)).toEqual([])
        })
        test('returns an array containing the callback value of root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.preorder(doubleValue)).toEqual([2])
        })
        test('returns the preorder array with all callback values for a tree with multiple values', () => {
            const tree = new Tree(5, 3, 2, 4, 1, 7, 6)
            expect(tree.preorder(doubleValue)).toEqual([8, 4, 2, 6, 12, 10, 14])
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
        test('returns an empty array for the empty tree', () => {
            const tree = new Tree()
            expect(tree.postorder(doubleValue)).toEqual([])
        })
        test('returns an array containing the callback value of root for a tree with height 1', () => {
            const tree = new Tree(1)
            expect(tree.postorder(doubleValue)).toEqual([2])
        })
        test('returns the postorder array with all callback values for a tree with multiple values', () => {
            const tree = new Tree(5, 3, 2, 4, 1, 7, 6)
            expect(tree.postorder(doubleValue)).toEqual([2, 6, 4, 10, 14, 12, 8])
        })
    })
})

function doubleValue(node: Node) {
    return node.data as number * 2
}