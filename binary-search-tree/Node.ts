import { LinkedList } from "../linked-list/LinkedList.ts"

export class Node {
    data: any
    left: Node | null
    right: Node | null

    constructor(data: any, left: Node | null = null, right: Node | null = null) {
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

    get isBalanced(): boolean {
        return this.isLeaf
            || !this.hasLeft && this.right!.height === 1
            || !this.hasRight && this.left!.height === 1
            || this.hasLeft && this.hasRight && this.left!.isBalanced && this.right!.isBalanced
    }

    depth(key: any) {
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

    appendChildrenTo(list: LinkedList) {
        if (this.hasLeft) {
            list.append(this.left)
        }

        if (this.hasRight) {
            list.append(this.right)
        }
    }

    find(key: any, parent: Node | null = null): { target: Node | null, parent: Node | null } {
        if (this.data === key) {
            return { target: this, parent: parent }
        } else if (this.data < key && this.hasRight) {
            return this.right!.find(key, this)
        } else if (this.data > key && this.hasLeft) {
            return this.left!.find(key, this)
        } else {
            return { target: null, parent: null }
        }
    }

    insert(key: any) {
        if (this.data > key) {
            this.hasLeft ? this.left!.insert(key) : this.left = new Node(key)
        }

        if (this.data < key) {
            this.hasRight ? this.right!.insert(key) : this.right = new Node(key)
        }
    }

    delete() {
        const successor = this.#findInorderSuccessor()

        if (!successor) {
            return
        }

        if (successor.parent.data === this.data) {
            this.right = successor.node.right
        } else {
            successor.parent.left = successor.node.right
        }

        this.data = successor.node.data
    }

    deleteChild(child: Node) {
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
        let i = 0

        while (i < result.size) {
            const current = result.at(i)
            if (current.hasLeft) {
                result.append(current.left)
            }

            if (current.hasRight) {
                result.append(current.right)
            }

            i++
        }

        return result
    }

    inorder() {
        const result = new LinkedList()

        if (this.hasLeft) {
            result.concat(this.left!.inorder())
        }

        result.append(this)

        if (this.hasRight) {
            result.concat(this.right!.inorder())
        }

        return result
    }

    preorder() {
        const result = new LinkedList()

        result.append(this)

        if (this.hasLeft) {
            result.concat(this.left!.preorder())
        }

        if (this.hasRight) {
            result.concat(this.right!.preorder())
        }

        return result
    }

    postorder() {
        const result = new LinkedList()

        if (this.hasLeft) {
            result.concat(this.left!.postorder())
        }

        if (this.hasRight) {
            result.concat(this.right!.postorder())
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

    #findInorderSuccessor(): { node: Node , parent: Node } | null {
        if (!this.hasRight) {
            return null
        }

        let parent = this as Node
        let node = this.right!

        while (node.hasLeft) {
            parent = node
            node = node.left!
        }

        return { node, parent }
    }
}