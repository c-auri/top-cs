import { Node } from './Node.js'
import { Tree } from './Tree.js'

const values = Array.from({length: 7}, (_, i) => i + 1)
const tree = new Tree(...values)
tree.delete(6)
tree.insert(6)
tree.rebalance()
print(tree)

function print(tree: Tree) {
    printNode(tree.root)
}

function printNode(node: Node, prefix = "", isLeft = true) {
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