import { buildTree, find, insert } from './Tree'

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

const tree = buildTree([ 3, 1, 7, 5 ], 0, 3)
prettyPrint(tree)
insert(tree, 2)
prettyPrint(tree)
insert(tree, 6)
prettyPrint(tree)
insert(tree, 4)
prettyPrint(tree)