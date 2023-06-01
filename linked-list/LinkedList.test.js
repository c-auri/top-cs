import { LinkedList } from "./LinkedList";

describe('A new list', () => {
    test('has size 0', () => {
        expect(new LinkedList().size).toBe(0)
    })
    test('has no head', () => {
        expect(new LinkedList().head).toBe(null)
    })
    test('has no tail', () => {
        expect(new LinkedList().tail).toBe(null)
    })
})

describe('Appending a value', () => {
    describe('to a non-empty list', () => {
        test('adds that value to the tail', () => {
            const value = 'new tail'
            const list = new LinkedList()
            list.append('head')
            list.append('tail')
            list.append(value)
            expect(list.tail.value).toBe(value)
        })
        test('increments the size', () => {
            const list = new LinkedList()
            list.append('head')
            list.append('tail')
            const previousSize = list.size
            list.append('new tail')
            expect(list.size).toBe(previousSize + 1)
        })
    })
    describe('to an empty list', () => {
        test('adds that value to the head', () => {
            const value = 'a new node'
            const list = new LinkedList()
            list.append(value)
            expect(list.head.value).toBe(value)
        })
        test('adds that value to the tail', () => {
            const value = 'a new node'
            const list = new LinkedList()
            list.append(value)
            expect(list.tail.value).toBe(value)
        })
        test('results in size 1', () => {
            const list = new LinkedList()
            list.append('a new node')
            expect(list.size).toBe(1)
        })
    })
})

describe('Prepending a value', () => {
    describe('to a non-empty list', () => {
        test('sets that value to the head', () => {
            const value = 'new head'
            const list = new LinkedList()
            list.append('head')
            list.append('tail')
            list.prepend(value)
            expect(list.head.value).toBe(value)
        })
        test('sets the old head as the next node of the new head', () => {
            const oldHead = 'old head'
            const list = new LinkedList()
            list.append(oldHead)
            list.append('tail')
            list.prepend('new head')
            expect(list.head.nextNode.value).toBe(oldHead)
        })
        test('increments the size', () => {
            const list = new LinkedList()
            list.append('head')
            list.append('tail')
            const previousSize = list.size
            list.prepend('new head')
            expect(list.size).toBe(previousSize + 1)
        })
    })
    describe('to an empty list', () => {
        test('sets that value to the head', () => {
            const value = 'a new node'
            const list = new LinkedList()
            list.append(value)
            expect(list.head.value).toBe(value)
        })
        test('sets that value to the tail', () => {
            const value = 'a new node'
            const list = new LinkedList()
            list.append(value)
            expect(list.tail.value).toBe(value)
        })
        test('results in size 1', () => {
            const list = new LinkedList()
            list.append('a new node')
            expect(list.size).toBe(1)
        })
    })
})

describe('Accessing a node at', () => {
    test('a negative index causes an error', () => {
        expect(() => new LinkedList().at(-1)).toThrow()
    })
    test('index 0 returns the head', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('tail')
        expect(list.at(0).value).toBe('head')
    })
    test('a middle index returns the node at that position', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('middle')
        list.append('tail')
        expect(list.at(1).value).toBe('middle')
    })
    test('the last index returns the tail', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('middle')
        list.append('tail')
        expect(list.at(2).value).toBe('tail')
    })
    test('an index larger than the size of the list returns null', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('tail')
        expect(list.at(3)).toBe(null)
    })
})

describe('Popping', () => {
    describe('from a non-empty list', () => {
        test('list returns the tail', () => {
            const list = new LinkedList()
            list.append('head')
            list.append('middle')
            list.append('tail')
            expect(list.pop().value).toBe('tail')
        })
        test('list removes the tail', () => {
            const list = new LinkedList()
            list.append('head')
            list.append('middle')
            list.append('tail')
            list.pop()
            expect(list.tail.value).toBe('middle')
        })
    })
    describe('from an empty list', () => {
        test('returns an error', () => {
            expect(() => new LinkedList().pop()).toThrow()
        })
    })
})

describe('Contains', () => {
    describe('returns true', () => {
        test('if the passed value is at the head of the list', () => {
            const list = new LinkedList()
            list.append('head')
            list.append('middle')
            list.append('tail')
            expect(list.contains('head')).toBe(true)
        })
        test('if the passed value is in the middle of the list', () => {
            const list = new LinkedList()
            list.append('head')
            list.append('middle')
            list.append('tail')
            expect(list.contains('middle')).toBe(true)
        })
        test('if the passed value is at the tail of list', () => {
            const list = new LinkedList()
            list.append('head')
            list.append('middle')
            list.append('tail')
            expect(list.contains('tail')).toBe(true)
        })
    })
    describe('returns false', () => {
        test('if the passed value is not in the list', () => {
            const list = new LinkedList()
            list.append('head')
            list.append('tail')
            expect(list.contains('middle')).toBe(false)
        })
        test('for an empty list', () => {
            const list = new LinkedList()
            expect(list.contains('middle')).toBe(false)
        })
    })
})

describe('Find', () => {
    test('returns null if the passed value is not in the list', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('tail')
        expect(list.find('middle')).toBe(null)
    })
    test('returns 0 if the head contains the value', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('middle')
        list.append('tail')
        expect(list.find('head')).toBe(0)
    })
    test('returns the correct index if a middle node contains the value', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('middle')
        list.append('tail')
        expect(list.find('middle')).toBe(1)
    })
    test('returns the last index if the tail contains the value', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('middle')
        list.append('tail')
        expect(list.find('tail')).toBe(2)
    })
})

describe('ToString', () => {
    test('contains all node values', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('middle')
        list.append('tail')
        expect(list.toString()).toContain('head')
        expect(list.toString()).toContain('middle')
        expect(list.toString()).toContain('tail')
    })
    test('ends with null', () => {
        const list = new LinkedList()
        list.append('head')
        list.append('middle')
        list.append('tail')
        expect(list.toString().slice(-4)).toBe('null')
    })
})