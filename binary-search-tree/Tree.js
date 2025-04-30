const { Node } = require("./Node.js")
const { sort } = require("../mergesort/sort.js")

class Tree {
    #root

    static #build(array, start, end) {
        if (start > end) {
            return null
        }

        const middle = Math.floor((start + end) / 2)

        return new Node(
            array[middle],
            Tree.#build(array, start, middle - 1),
            Tree.#build(array, middle + 1, end))
    }

    static preprocess(values) {
        return sort(Array.from(new Set(values)))
    }

    constructor(...values) {
        values = Tree.preprocess(values)
        this.#root = Tree.#build(values, 0, values.length - 1)
    }

    get root() {
        return this.#root
    }

    get height() {
        if (!this.#root)
            return 0

        console.log(this.#root)
        return this.#root.height
    }

    get isBalanced() {
        if (!this.#root)
            return true

        return this.#root.isBalanced
    }

    depth(key) {
        if (!this.#root)
            return null

        return this.#root.depth(key)
    }

    find(key) {
        if (!this.#root)
            return null

        return this.#root.find(key).target
    }

    insert(key) {
        return this.#root.insert(key)
    }

    delete(key) {
        const { target, parent } = this.#root.find(key)

        if (target && parent) {
            parent.deleteChild(target)
        } else if (target) {
            this.#root.delete()
        }
    }

    rebalance() {
        const values = this.inorder()
        this.#root = Tree.#build(values, 0, values.length - 1)
    }

    levelOrder(callback = (node) => node.data) {
        if (!this.#root) {
            return []
        }

        return this.#root.levelOrder().toArray().map(callback)
    }

    inorder(callback = (node) => node.data) {
        if (!this.#root) {
            return []
        }

        return this.#root.inorder().toArray().map(callback)
    }

    preorder(callback = (node) => node.data) {
        if (!this.#root) {
            return []
        }

        return this.#root.preorder().toArray().map(callback)
    }

    postorder(callback = (node) => node.data) {
        if (!this.#root) {
            return []
        }

        return this.#root.postorder().toArray().map(callback)
    }
}

module.exports = { Tree }
