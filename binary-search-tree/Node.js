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
            currentLevel = nextLevel
            nextLevel = new LinkedList()

            while (currentLevel.size > 0) {
                const node = currentLevel.shift()
                node.appendChildrenTo(nextLevel)
            }

            height++
        }

        return height
    }

    get isBalanced() {
        return this.isLeaf
            || !this.hasLeft && this.right.height === 1
            || !this.hasRight && this.left.height === 1
            || this.hasLeft && this.hasRight && this.left.isBalanced && this.right.isBalanced
    }

    depth(key) {
        let depth = 0
        let currentLevel = new LinkedList()
        let nextLevel = new LinkedList(this)

        while (nextLevel.size > 0) {
            currentLevel = nextLevel
            nextLevel = new LinkedList()

            while(currentLevel.size > 0) {
                const node = currentLevel.shift()
                node.appendChildrenTo(nextLevel)

                if (node.data === key) {
                    return depth
                }
            }

            depth++
        }

        return null
    }

    appendChildrenTo(list) {
        if (this.hasLeft) {
            list.append(this.left)
        }

        if (this.hasRight) {
            list.append(this.right)
        }
    }

    find(key, parent = null) {
        if (this.data === key) {
            return { target: this, parent: parent }
        } else if (this.data < key && this.hasRight) {
            return this.right.find(key, this)
        } else if (this.data > key && this.hasLeft) {
            return this.left.find(key, this)
        } else {
            return { target: null, parent: null }
        }
    }

    insert(key) {
        if (this.data > key) {
            this.hasLeft ? this.left.insert(key) : this.left = new Node(key)
        }

        if (this.data < key) {
            this.hasRight ? this.right.insert(key) : this.right = new Node(key)
        }
    }

    delete() {
        const { successor, successorParent } = this.#findInorderSuccessor()

        if (successorParent.data === this.data) {
            this.right = successor.right
        } else {
            successorParent.left = successor.right
        }

        this.data = successor.data
    }

    deleteChild(child) {
        const isLeftChild = this.left?.data === child.data

        if (!isLeftChild && this.right?.data !== child.data) {
            return
        }

        if (child.isLeaf) {
            isLeftChild ? this.left = null : this.right = null
        } else if (!child.hasRight) {
            isLeftChild ? this.left = child.left : this.right = child.left
        } else if (!child.hasLeft) {
            isLeftChild ? this.left = child.right : this.right = child.right
        } else {
            child.delete()
        }
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

    #findInorderSuccessor() {
        if (!this.hasRight) {
            return { successor: null, successorParent: null }
        }

        let parent = this
        let result = this.right

        while (result.hasLeft) {
            parent = result
            result = result.left
        }

        return { successor: result, successorParent: parent }
    }
}