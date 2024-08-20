import { LinkedList } from "../linked-list/LinkedList"

export class Entry {
  #key: string
  #value: string

  constructor(key: string, value: string) {
    this.#key = key
    this.#value = value
  }

  get key() {
    return this.#key
  }

  get value() {
    return this.#value
  }
}

export class HashMap {
  #initSize: number
  #loadThreshold: number 
  #buckets: Array<LinkedList>

  constructor(initSize: number = 16, loadThreshold: number = 0.75) {
    this.#initSize = initSize
    this.#loadThreshold = loadThreshold
    this.#buckets = new Array<LinkedList>()
    this.clear()
  }

  get numberOfBuckets() {
    return this.#buckets.length
  }

  get numberOfEntries() {
    return this.keys.length
  }

  get entries() {
    return this.#buckets
      .filter(Boolean)
      .reduce(
        (result, bucket) => result.concat(bucket!.toArray()), 
        new Array<Entry>())
  }

  get keys() {
    return this.entries.map(entry => entry.key)
  }

  get values() {
    return this.entries.map(entry => entry.value)
  }

  set(key: string, value: string) {
    const hash = this.#hash(key)

    console.assert(hash >= 0 && hash < this.#buckets.length, hash)

    if (this.has(key)) {
      this.remove(key)
    }

    if (this.#buckets[hash].size > 0) {
      console.log(`Collision for ${key}.`)
    }

    this.#buckets[hash].append(new Entry(key, value))

    if (this.numberOfEntries / this.numberOfBuckets > this.#loadThreshold) {
      const entries = this.entries
      this.clear(2 * this.#buckets.length)
      for (const entry of entries) {
        this.set(entry.key, entry.value)
      }
    }
  }

  has(key: string) {
    return this.#buckets[this.#hash(key)].toArray().map(entry => entry.key).includes(key)
  }

  get(key: string) {
    if (!this.has(key)) {
      return null
    }

    return this.#buckets[this.#hash(key)]!.tail.value
  }

  remove(key: string) {
    const hash = this.#hash(key)
    const index = this.#buckets[hash].toArray().map(entry => entry.key).indexOf(key)

    if (index < 0) {
      return false
    } else {
      this.#buckets[hash].removeAt(index)
      return true
    }
  }

  clear(size = this.#initSize) {
    this.#buckets = new Array<LinkedList>()

    for (let i = 0; i < size; i++) {
      this.#buckets[i] = new LinkedList()
    }
  }

  #hash(key: string) {
    let result = 0
    const prime = 31

    for (let i = 0; i < key.length; i++) {
      result = prime * result + key.charCodeAt(i)
      result %= this.numberOfBuckets
    }

    return result;
  }
}
