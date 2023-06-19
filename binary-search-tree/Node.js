export class Node {
    #data
    left
    right

    constructor(data, left = null, right = null) {
        this.#data = data
        this.left = left
        this.right = right
    }

    get data() {
        return this.#data
    }

    get isLeaf() {
        return this.left === null && this.right === null
    }

    get hasLeft() {
        return this.left !== null
    }

    get hasRight() {
        return this.right !== null
    }

    removeLeft() {
        this.left = null
    }

    removeRight() {
        this.right = null
    }
}