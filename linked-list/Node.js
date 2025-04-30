class Node {
    value
    nextNode

    constructor(value, nextNode) {
        this.value = value
        this.nextNode = nextNode
    }

    get hasNext() {
        return this.nextNode !== null
    }
}

module.exports = { Node }
