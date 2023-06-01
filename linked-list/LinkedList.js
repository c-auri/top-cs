import { Node } from './Node'

export class LinkedList {
    #head

    constructor() {
        this.#head = null
    }

    get head() {
        return this.#head
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

    append(value) {
        const newNode = new Node(value)

        if (this.#head === null) {
            this.#head = newNode
        } else {
            this.tail.nextNode = newNode
        }
    }

    prepend(value) {
        const newHead = new Node(value, this.#head)
        this.#head = newHead
    }

    at(index) {
        if (index < 0) {
            throw Error('index must be non-negative')
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

    pop() {
        if (this.#head === null) {
            throw Error('List is empty')
        }

        if (this.#head.nextNode === null) {
            const result = this.#head
            this.#head = null
            return result
        }

        let previous = this.#head
        let current = previous.nextNode

        while (current.nextNode !== null) {
            previous = current
            current = current.nextNode
        }

        const result = current
        previous.nextNode = null
        return result
    }

    contains(value) {
        let current = this.#head

        while (current !== null) {
            if (current.value === value) {
                return true
            }

            current = current.nextNode
        }

        return false
    }

    find(value) {
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
}