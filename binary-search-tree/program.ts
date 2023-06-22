import { Node } from './Node.ts'
import { Tree } from './Tree.ts'

const values: number[] = []

for (let i = 0; i < getRandomIntInclusive(25, 50); i++) {
    let value = getRandomIntInclusive(10, 99)
    while (values.includes(value)) {
        value = getRandomIntInclusive(10, 99)
    }
    values.push(value)
}

const tree = new Tree(...values)
console.log(`Here's a${tree.isBalanced ? " balanced" : "n unbalanced"} tree of some random two-digit numbers:`)
console.log()

print(tree)
console.log()

console.log("Now, let's add some tree-digit numbers: ")
console.log()

for (let i = 0; i < getRandomIntInclusive(5, 15); i++) {
    let value = getRandomIntInclusive(100, 999)
    while (tree.find(value)) {
        value = getRandomIntInclusive(100, 999)
    }
    tree.insert(value)
}

print(tree)
console.log()
console.log(`The tree is now ${tree.isBalanced ? "balanced" : "unbalanced"}. Let's rebalance it:`)
console.log()

tree.rebalance()
print(tree)
console.log()

console.log('These are the tree values in different orders:')
console.log()
console.log(`level-order: ${tree.levelOrder()}`)
console.log(`in-order: ${tree.inorder()}`)
console.log(`pre-order: ${tree.preorder()}`)
console.log(`post-order: ${tree.postorder()}`)

function print(tree: Tree) {
    printNode(tree.root)
}

function printNode(node: Node, prefix = "", isLeft = true) {
    if (!node) {
        return
    }

    if (node.right) {
        printNode(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)

    if (node.left) {
        printNode(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
    }
}

function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
