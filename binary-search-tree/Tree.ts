import { Node } from "./Node.ts"
import { sort } from "../mergesort/sort.ts"

export class Tree {
    #root: any

    constructor(...values: any[]) {
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

    depth(key: any) {
        return this.#root?.depth(key) ?? null
    }

    find(key: any) {
        return this.#root?.find(key).target ?? null
    }

    insert(key: any) {
        return this.#root.insert(key)
    }

    delete(key: any) {
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

    levelOrder(callback = (node: Node) => node.data) {
        if (this.#root === null) {
            return []
        }

        return this.#root.levelOrder().toArray().map(callback)
    }

    inorder(callback = (node: Node) => node.data) {
        if (this.#root === null) {
            return []
        }

        return this.#root.inorder().toArray().map(callback)
    }

    preorder(callback = (node: Node) => node.data) {
        if (this.#root === null) {
            return []
        }

        return this.#root.preorder().toArray().map(callback)
    }

    postorder(callback = (node: Node) => node.data) {
        if (this.#root === null) {
            return []
        }

        return this.#root.postorder().toArray().map(callback)
    }
}

function buildTree(array: any[], start: number, end: number): Node | null {
    if (start > end) {
        return null
    }

    const middle = Math.floor((start + end) / 2)

    return new Node(
        array[middle],
        buildTree(array, start, middle - 1),
        buildTree(array, middle + 1, end))
}