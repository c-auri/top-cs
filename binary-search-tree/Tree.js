import { Node } from "./Node"
import { sort } from "../mergesort/sort.js"

export class Tree {
    #root

    constructor(array) {
        this.#root = buildTree(sort(array), 0, array.length - 1)
    }

    get root() {
        return this.#root
    }

    find(key) {
        return find(this.#root, key)
    }

    insert(key) {
        insert(this.#root, key)
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

function find(node, key) {
    if (node === null || node.data === key) {
        return node
    }

    if (node.data > key) {
        return find(node.left, key)
    }

    if (node.data < key) {
        return find(node.right, key)
    }
}

function insert(node, key) {
    if (node === null) {
        return new Node(key)
    }

    if (node.data === key) {
        return
    }

    if (node.data > key) {
        if (node.left === null) {
            node.left = new Node(key)
        } else {
            insert(node.left, key)
        }
    }

    if (node.data < key) {
        if (node.right === null) {
            node.right = new Node(key)
        } else {
            insert(node.right, key)
        }
    }
}