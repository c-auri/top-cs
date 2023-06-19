import { Tree } from './Tree'

const tree = new Tree([ 3, 1, 7, 5 ])
tree.insert(2)
tree.insert(6)
tree.insert(4)
print(tree)
const key = 5
console.log("About to delete: " + tree.find(key))
tree.delete(key)
print(tree)
console.log(tree.find(key) === null ? "Successfully deleted." : tree.find(key))


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