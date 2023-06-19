import { Node } from "./Node"
import { LinkedList } from "../linked-list/LinkedList"
import { sort } from "../mergesort/sort.js"

export class Tree {
    #root

    constructor(array = []) {
        this.#root = buildTree(sort(array), 0, array.length - 1)
    }

    get root() {
        return this.#root
    }

    find(key) {
        return find(this.#root, key).target
    }

    insert(key) {
        insert(this.#root, key)
    }

    delete(key) {
        const { target, parent } = find(this.#root, key)

        if (target) {
            remove(target, parent)
        }
    }

    levelOrder(callback = (node) => node.data) {
        if (this.#root === null) {
            return []
        }

        const result = new LinkedList()
        result.append(this.root)
        let current = result.at(0)

        while (current !== null) {
            if (current.value.hasLeft) {
                result.append(current.value.left)
            }

            if (current.value.hasRight) {
                result.append(current.value.right)
            }

            current = current.nextNode
        }

        return result.toArray().map(callback)
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

function find(node, key, parent = null) {
    if (node === null || node.data === key) {
        return { target: node, parent: parent }
    }

    if (node.data > key) {
        return find(node.left, key, node)
    }

    if (node.data < key) {
        return find(node.right, key, node)
    }
}

function insert(node, key) {
    if (node === null) {
        return new Node(key)
    }

    if (node.data > key) {
        node.hasLeft ? insert(node.left, key) : node.left = new Node(key)
    }

    if (node.data < key) {
        node.hasRight ? insert(node.right, key) : node.right = new Node(key)
    }
}

function remove(target, parent) {
    const isLeftChild = parent?.left?.data === target.data

    if (target.isLeaf) {
        isLeftChild ? parent.removeLeft() : parent.removeRight()
    } else if (!target.hasRight) {
        isLeftChild ? parent.left = target.left : parent.right = target.left
    } else if (!target.hasLeft) {
        isLeftChild ? parent.left = target.right : parent.right = target.right
    } else {
        const { successor, successorParent } = findInorderSuccessor(target)
        successorParent.left = successor.right
        target.data = successor.data
    }
}

function findInorderSuccessor(node) {
    if (!node.hasRight) {
        return { successor: null, successorParent: null }
    }

    let parent = node
    let result = node.right

    while (result.hasLeft) {
        parent = result
        result = result.left
    }

    return { successor: result, successorParent: parent }
}