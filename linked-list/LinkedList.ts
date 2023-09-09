import { Node } from './Node'

export class LinkedList {
    #head: Node | null

    constructor(...values: any[]) {
        this.#head = null

        for (const value of values) {
            this.append(value)
        }
    }

    get head() {
        if (this.#head === null) {
            return null
        }

        return this.#head.value
    }

    get tail() {
        let current = this.#head

        while (current !== null && current.nextNode !== null) {
            current = current.nextNode
        }

        return current
    }

    get size() {
        if (this.#head === null) {
            return 0
        }

        let current = this.#head
        let size = 1

        while (current !== null && current.nextNode !== null) {
            current = current.nextNode
            size++
        }

        return size
    }

    contains(value: any) {
        let current = this.#head

        while (current !== null) {
            if (current.value === value) {
                return true
            }

            current = current.nextNode
        }

        return false
    }

    find(value: any) {
        let currentNode = this.#head
        let currentPosition = 0

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentPosition
            }

            currentNode = currentNode.nextNode
            currentPosition++
        }

        return null
    }

    at(index: number) {
        if (index < 0) {
            throw new Error('index must be non-negative')
        }

        if (index === 0) {
            return this.#head
        }

        let currentNode = this.#head
        let currentPosition = 0

        while (index !== currentPosition && currentNode !== null) {
            currentNode = currentNode.nextNode
            currentPosition++
        }

        return currentNode
    }

    insertAt(value: any, index: number) {
        if (index < 0 || index >= this.size) {
            throw new Error('index out of bounds')
        }

        if (index === 0) {
            this.prepend(value)
            return
        }

        if (index === this.size - 1) {
            this.append(value)
            return
        }

        const nodeToInsert = new Node(value)
        const nodeBefore = this.at(index - 1)
        const nodeAfter = nodeBefore!.nextNode

        nodeBefore!.nextNode = nodeToInsert
        nodeToInsert.nextNode = nodeAfter
    }

    append(value: any) {
        const newNode = new Node(value)

        if (this.#head === null) {
            this.#head = newNode
        } else {
            this.tail!.nextNode = newNode
        }
    }

    prepend(value: any) {
        const newHead = new Node(value, this.#head)
        this.#head = newHead
    }

    concat(other: LinkedList) {
        if (other.size === 0) {
            return
        }

        for (let i = 0; i < other.size; i++) {
            this.append(other.at(i)!.value)
        }
    }

    removeAt(index: number) {
        if (index < 0 || index >= this.size) {
            throw new Error('index out of bounds')
        }

        if (index === 0) {
            this.#head = this.#head!.nextNode
            return
        }

        if (index === this.size - 1) {
            this.pop()
            return
        }

        this.at(index - 1)!.nextNode = this.at(index + 1)
    }

    shift() {
        if (this.#head === null) {
            throw new Error('List is empty')
        }

        const head = this.#head
        this.removeAt(0)
        return head.value
    }

    pop() {
        if (this.#head === null) {
            throw new Error('List is empty')
        }

        if (this.#head.nextNode === null) {
            const result = this.#head
            this.#head = null
            return result
        }

        let previous = this.#head
        let current = previous.nextNode!

        while (current.nextNode !== null) {
            previous = current
            current = current.nextNode
        }

        const result = current
        previous.nextNode = null
        return result
    }

    toString() {
        let result = ''
        let current = this.#head

        while (current !== null) {
            result += `( ${current.value} ) -> `
            current = current.nextNode
        }

        result += 'null'

        return result
    }

    toArray() {
        const result = []
        let current = this.#head

        while (current !== null) {
            result.push(current.value)
            current = current.nextNode
        }

        return result
    }
}