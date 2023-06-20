import { LinkedList } from "../linked-list/LinkedList"

export class Node {
    data
    left
    right

    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }

    get hasLeft() {
        return this.left !== null
    }

    get hasRight() {
        return this.right !== null
    }

    get isLeaf() {
        return !this.hasLeft && !this.hasRight
    }

    get height() {
        let height = 0

        let currentLevel = new LinkedList()
        let nextLevel = new LinkedList(this)

        while (nextLevel.size > 0) {
            height++
            currentLevel = nextLevel
            nextLevel = new LinkedList()

            while (currentLevel.size > 0) {
                const node = currentLevel.shift()

                if (node.hasLeft) {
                    nextLevel.append(node.left)
                }

                if (node.hasRight) {
                    nextLevel.append(node.right)
                }
            }
        }

        return height
    }

    removeLeft() {
        this.left = null
    }

    removeRight() {
        this.right = null
    }

    levelOrder() {
        const result = new LinkedList()
        result.append(this)
        let current = result.at(0)

        while (current !== null) {
            if (current.value.hasLeft) {
                result.append(current.value.left)
            }

            if (current.value.hasRight) {
                result.append(current.value.right)
            }

            current = current.nextNode
        }

        return result
    }

    inorder() {
        const result = new LinkedList()

        if (this.hasLeft) {
            result.concat(this.left.inorder())
        }

        result.append(this)

        if (this.hasRight) {
            result.concat(this.right.inorder())
        }

        return result
    }

    preorder() {
        const result = new LinkedList()

        result.append(this)

        if (this.hasLeft) {
            result.concat(this.left.preorder())
        }

        if (this.hasRight) {
            result.concat(this.right.preorder())
        }

        return result
    }

    postorder() {
        const result = new LinkedList()

        if (this.hasLeft) {
            result.concat(this.left.postorder())
        }

        if (this.hasRight) {
            result.concat(this.right.postorder())
        }

        result.append(this)

        return result
    }

    toString() {
        return "{ " +
            `data: ${this.data}, ` +
            `left: ${this.left?.data ?? "null"}, ` +
            `right: ${this.right?.data ?? "null"}` +
        " }"
    }
}