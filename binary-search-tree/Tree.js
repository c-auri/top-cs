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