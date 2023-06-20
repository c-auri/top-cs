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

    removeLeft() {
        this.left = null
    }

    removeRight() {
        this.right = null
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