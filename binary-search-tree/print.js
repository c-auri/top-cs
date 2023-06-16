import { Tree } from './Tree'

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
        return
    }

    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)

    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
}

const tree = new Tree([ 3, 1, 7, 5 ])
prettyPrint(tree.root)
tree.insert(2)
prettyPrint(tree.root)
tree.insert(6)
prettyPrint(tree.root)
tree.insert(4)
prettyPrint(tree.root)