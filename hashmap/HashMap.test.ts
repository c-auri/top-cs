import { HashMap } from "./HashMap.ts"

describe('A newly constructed HashMap', () => {
  test(`has ${HashMap.initSize} buckets`, () => {
    expect(new HashMap().numberOfBuckets).toBe(16)
  })
  test('has 0 entries.', () => {
    expect(new HashMap().numberOfEntries).toBe(0)
  })
})

describe('Inserting a key value pair', () => {
  describe('without collision', () => {
    test('increases numberOfEntries by 1', () => {
      const map = new HashMap()
      map.set("key", "value")
      expect(map.numberOfEntries).toBe(1)
    })
    test('makes the value retrievable with get', () => {
      const map = new HashMap()
      map.set("key", "value")
      expect(map.get("key")).toBe("value")
    })
  })
  describe('with collision', () => {
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

describe('Trying to get a value', () => {
  describe('of a previously inserted key', () => {
    test('returns that value', () => {
      const map = new HashMap()
      map.set("key", "value")
      expect(map.get("key")).toBe("value")
    })
  })
  describe('of a key that does not exist', () => {
    test('returns null', () => {
      const map = new HashMap()
      expect(map.get("key")).toBe(null)
    })
  })
})
