import { HashMap } from "./HashMap.ts"

describe('A newly constructed HashMap', () => {
  test(`has ${HashMap.initSize} buckets`, () => {
    expect(new HashMap().numberOfBuckets).toBe(16)
  })
  test('has 0 entries.', () => {
    expect(new HashMap().numberOfEntries).toBe(0)
  })
})

describe('Setting a key value pair', () => {
  describe('without collision', () => {
    test('increases numberOfEntries by 1', () => {
      const map = new HashMap()
      const previous = map.numberOfEntries
      map.set("key", "value")
      expect(map.numberOfEntries).toBe(previous + 1)
    })
    test('makes the value retrievable with get', () => {
      const map = new HashMap()
      map.set("key", "value")
      expect(map.get("key")).toBe("value")
    })
  })
  describe('with a key that already exists', () => {
    test('does not increase numberOfEntries', () => {
      const map = new HashMap()
      map.set("key", "old value")
      map.set("key", "new value")
      expect(map.numberOfEntries).toBe(1)
    })
    test('overwrites the old value', () => {
      const map = new HashMap()
      map.set("key", "old value")
      map.set("key", "new value")
      expect(map.get("key")).toBe("new value")
    })
  })
})

describe('Has returns', () => {
  test('true if the given key exists', () => {
    const map = new HashMap()
    map.set("key", "value")
    expect(map.has("key")).toBe(true)
  })
  test('false if the given key does not exist', () => {
    const map = new HashMap()
    expect(map.has("key")).toBe(false)
  })
})

describe('Trying to get a value of a key', () => {
  describe('that does not exist', () => {
    test('returns null', () => {
      const map = new HashMap()
      expect(map.get("key")).toBe(null)
    })
  })
  describe('that exists', () => {
    test('returns that value', () => {
      const map = new HashMap()
      map.set("key", "value")
      expect(map.get("key")).toBe("value")
    })
  })
})

describe('Trying to remove a key', () => {
  test('returns false when the given key does not exist', () => {
    const map = new HashMap()
    expect(map.remove("key")).toBe(false)
  })
  test('does not change numberOfEntries when the given key does not exist', () => {
    const map = new HashMap()
    map.set("key1", "value")
    const previous = map.numberOfEntries
    map.remove("key2")
    expect(map.numberOfEntries).toBe(previous)
  })
  test('returns true when the given key exists', () => {
    const map = new HashMap()
    map.set("key", "value")
    expect(map.remove("key")).toBe(true)
  })
  test('removes the entry when the given key exists', () => {
    const map = new HashMap()
    map.set("key", "value")
    map.remove("key")
    expect(map.has("key")).toBe(false)
  })
  test('reduces numberOfEntries by 1 when the key exists', () => {
    const map = new HashMap()
    map.set("key", "value")
    const previous = map.numberOfEntries
    map.remove("key")
    expect(map.numberOfEntries).toBe(previous - 1)
  })
  test('does not change other entries', () => {
    const map = new HashMap()
    map.set("key1", "value1")
    map.set("key2", "value2")
    map.remove("key1")
    map.remove("key3")
    expect(map.has("key2")).toBe(true)
  })
  test('does not change numberOfBuckets when the given key does not exist', () => {
    const map = new HashMap()
    map.set("key1", "value")
    const previous = map.numberOfBuckets
    map.remove("key2")
    expect(map.numberOfBuckets).toBe(previous)
  })
  test('does not change numberOfBuckets when the given key exists', () => {
    const map = new HashMap()
    map.set("key", "value")
    const previous = map.numberOfBuckets
    map.remove("key")
    expect(map.numberOfBuckets).toBe(previous)
  })
})

describe('Clear', () => {
  test('removes all entries', () => {
    const map = new HashMap()
    map.set("key1", "value1")
    map.set("key2", "value2")
    map.set("key3", "value3")
    map.clear()
    expect(map.has("key1")).toBe(false)
    expect(map.has("key2")).toBe(false)
    expect(map.has("key3")).toBe(false)
  })
  test('resets numberOfEntries to 0', () => {
    const map = new HashMap()
    map.set("key1", "value1")
    map.set("key2", "value2")
    map.set("key3", "value3")
    map.clear()
    expect(map.numberOfEntries).toBe(0)
  })
  test(`resets numberOfBuckets to ${HashMap.initSize}`, () => {
    const map = new HashMap()
    for (let i = 0; i <= HashMap.initSize; i++) map.set("key" + i, "value" + 1)
    map.clear()
    expect(map.numberOfBuckets).toBe(HashMap.initSize)
  })
})
