import { Node } from './Node.ts'
import { Tree } from './Tree.ts'
import { recursiveFibs } from '../fibonacci/fibs.ts'

const fibs = recursiveFibs(23)
const tree = new Tree(...fibs.slice(3, 13))

console.log(`Here's a${tree.isBalanced ? " balanced" : "n unbalanced"} tree containing some fibonacci numbers:`)
console.log()
print(tree)
console.log()

console.log("Now, let's add some more: ")
console.log()

for (let i = 13; i < 18; i++) {
    tree.insert(fibs[i])
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
console.log(`level-order: ${tree.levelOrder().join(', ')}`)
console.log(`in-order: ${tree.inorder().join(', ')}`)
console.log(`pre-order: ${tree.preorder().join(', ')}`)
console.log(`post-order: ${tree.postorder().join(', ')}`)
console.log()

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
