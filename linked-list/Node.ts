export class Node {
    value
    nextNode

    constructor(value: any | null = null, nextNode: Node | null = null) {
        this.value = value
        this.nextNode = nextNode
    }

    get hasNext() {
        return this.nextNode !== null
    }
}