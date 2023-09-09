import { Node } from './Node'

export class LinkedList {
    #head: Node | null

    constructor(...values: any[]) {
        this.#head = null

        for (const value of values) {
            this.append(value)
        }
    }

    /**
     * Returns the first value in the list.
     */
    get head() {
        if (this.#head === null) {
            return null
        }

        return this.#head.value
    }

    /**
     * Returns the last value in the list.
     */
    get tail() {
        let current = this.#head

        while (current !== null && current.nextNode !== null) {
            current = current.nextNode
        }

        return current?.value ?? null
    }

    /**
     * Returns the number of values in the list.
     */
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

    /**
     * Returns whether the list contains the given value.
     */
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

    /**
     * Returns the index position of the given value.
     */
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

    /**
     * Returns the value at the given index position.
     */
    at(index: number) {
        return this.#nodeAt(index)?.value ?? null
    }

    /**
     * Adds the given value to the given index position.
     */
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
        const nodeBefore = this.#nodeAt(index - 1)
        const nodeAfter = nodeBefore!.nextNode

        nodeBefore!.nextNode = nodeToInsert
        nodeToInsert.nextNode = nodeAfter
    }

    /**
     * Adds the given value to the start of the list.
     */
    append(value: any) {
        const newNode = new Node(value)

        if (this.#head === null) {
            this.#head = newNode
        } else {
            this.#nodeAt(this.size - 1)!.nextNode = newNode
        }
    }

    /**
     * Adds the given value to the end of the list.
     */
    prepend(value: any) {
        const newHead = new Node(value, this.#head)
        this.#head = newHead
    }

    /**
     * Concatenates this list with another list. Does not change inputs.
     * @returns the concatenation.
     */
    concat(other: LinkedList) {
        const result = new LinkedList(...this.toArray())

        if (other.size > 0) {
            for (let i = 0; i < other.size; i++) {
                result.append(other.#nodeAt(i)!.value)
            }
        }

        return result
    }

    /**
     * Removes the value at the given index position.
     * @returns the removed value.
     */
    removeAt(index: number) {
        if (index < 0 || index >= this.size) {
            throw new Error('index out of bounds')
        }

        const value = this.at(index)

        if (index === 0) {
            this.#head = this.#head!.nextNode
        } else if (index === this.size - 1) {
            this.pop()
        } else {
            this.#nodeAt(index - 1)!.nextNode = this.#nodeAt(index + 1)
        }

        return value
    }

    /**
     * Removes the value at the start of the list.
     * @returns the removed value.
     */
    shift() {
        if (this.#head === null) {
            throw new Error('List is empty')
        }

        const head = this.#head
        this.removeAt(0)
        return head.value
    }

    /**
     * Removes the value at the end of the list.
     * @returns the removed value.
     */
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

    /**
     * Returns the string representation of the list.
     */
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

    /**
     * Returns an array containing all the values of the list in order.
     */
    toArray() {
        const result = []
        let current = this.#head

        while (current !== null) {
            result.push(current.value)
            current = current.nextNode
        }

        return result
    }

    /**
     * Returns the node at the given index position.
     */
    #nodeAt(index: number) {
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
}