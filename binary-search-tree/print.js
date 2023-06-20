import { Tree } from './Tree'

const values = Array.from({length: 31}, (_, i) => i + 1)
const tree = new Tree(...values)
tree.delete(10)
tree.delete(11)
tree.insert(10)
tree.insert(11)
print(tree)
tree.delete(8)
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