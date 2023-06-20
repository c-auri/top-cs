import { Tree } from './Tree'

const values = Array.from({length: 15}, (_, i) => i + 1)
const tree = new Tree(...values)
print(tree)
tree.delete(2)
print(tree)

function print(tree) {
    printNode(tree.root)
}

function printNode(node, prefix = "", isLeft = true) {
    if (node === null) {
        return
    }

    if (node.right !== null) {
        printNode(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)

    if (node.left !== null) {
        printNode(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
}