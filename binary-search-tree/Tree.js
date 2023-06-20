import { Node } from "./Node"
import { LinkedList } from "../linked-list/LinkedList"
import { sort } from "../mergesort/sort.js"

export class Tree {
    #root

    constructor(...values) {
        this.#root = buildTree(sort(values), 0, values.length - 1)
    }

    get root() {
        return this.#root
    }

    get height() {
        return this.#root?.height ?? 0
    }

    get isBalanced() {
        return this.#root?.isBalanced ?? true
    }

    depth(key) {
        return this.#root?.depth(key) ?? null
    }

    find(key) {
        return this.#root?.find(key).target ?? null
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
        this.#root = buildTree(values, 0, values.length - 1)
    }

    levelOrder(callback = (node) => node.data) {
        if (this.#root === null) {
            return []
        }

        return this.#root.levelOrder().toArray().map(callback)
    }

    inorder(callback = (node) => node.data) {
        if (this.#root === null) {
            return []
        }

        return this.#root.inorder().toArray().map(callback)
    }

    preorder(callback = (node) => node.data) {
        if (this.#root === null) {
            return []
        }

        return this.#root.preorder().toArray().map(callback)
    }

    postorder(callback = (node) => node.data) {
        if (this.#root === null) {
            return []
        }

        return this.#root.postorder().toArray().map(callback)
    }
}

function buildTree(array, start, end) {
    if (start > end) {
        return null
    }

    const middle = parseInt((start + end) / 2)

    return new Node(
        array[middle],
        buildTree(array, start, middle - 1),
        buildTree(array, middle + 1, end))
}