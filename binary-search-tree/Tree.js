import { Node } from "./Node"
import { sort } from "../mergesort/sort.js"

export function buildTree(array, start, end) {
    if (start === 0 && end === array.length - 1) {
        array = sort(array)
    }

    if (start > end) {
        return null
    }

    const middle = parseInt((start + end) / 2)

    return new Node(
        array[middle],
        buildTree(array, start, middle - 1),
        buildTree(array, middle + 1, end))
}

export function find(node, key) {
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

export function insert(node, key) {
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