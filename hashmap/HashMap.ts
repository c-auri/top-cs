import { LinkedList } from "../linked-list/LinkedList"

class KeyValuePair {
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
  static initSize = 16
  #buckets: Array<LinkedList>

  constructor() {
    this.#buckets = new Array<LinkedList>()

    for (let i = 0; i < HashMap.initSize; i++) {
      this.#buckets.push(new LinkedList())
    }
  }

  #hash(key: string) {
    let result = 0
    const prime = 31

    for (let i = 0; i < key.length; i++) {
      result = prime * result + key.charCodeAt(i)
      result %= this.#buckets.length
    }

    return result;
  }

  get numberOfBuckets() {
    return this.#buckets.length
  }

  get numberOfEntries() {
    return this.#buckets.filter(Boolean).length
  }

  get keys() {
    return this.#buckets
      .filter(Boolean)
      .reduce(
        (result, list) => result.concat(list!.toArray().map(kvp=> (kvp as KeyValuePair).key)),
        new Array<string>())
  }

  set(key: string, value: string) {
    const hash = this.#hash(key)
    const kvp = new KeyValuePair(key, value)

    console.assert(hash >= 0 && hash < this.#buckets.length, hash)

    if (this.has(key)) {
      console.log(`Collision for ${key}.`)
      this.#buckets[hash]!.append(kvp)
    }

    this.#buckets[hash] = new LinkedList(kvp)
  }

  has(key: string) {
    return this.#buckets[this.#hash(key)].toArray().map(kvp => kvp.key).includes(key)
  }

  get(key: string) {
    if (!this.has(key)) {
      return null
    }

    return this.#buckets[this.#hash(key)]!.tail.value
  }

  remove(key: string) {
    const hash = this.#hash(key)
    const index = this.#buckets[hash].toArray().map(kvp => kvp.key).indexOf(key)
    
    if (index < 0) {
      return false
    } else {
      this.#buckets[hash].removeAt(index)
      return true
    }
  }

  clear() {
    for (const key in this.#buckets) {
      this.#buckets[key] = new LinkedList()
    }
  }
}
