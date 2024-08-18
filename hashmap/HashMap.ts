export class HashMap {
  static initSize = 16
  #buckets: string[]

  constructor() {
    this.#buckets = new Array<string>(16)
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

  set(key: string, value: string) {
    const hash = this.#hash(key)

    console.assert(hash > 0 && hash < this.#buckets.length)

    const oldValue = this.#buckets[hash]

    if (oldValue === undefined) {
      console.log(`Collision for key ${key}, overwriting \"${oldValue}\".`)
    }

    this.#buckets[hash] = value
  }

  has(key: string) {
    return this.#buckets[this.#hash(key)] !== undefined
  }

  get(key: string) {
    const result = this.#buckets[this.#hash(key)]
    return result === undefined ? null : result
  }

  remove(key: string) {
    if (!this.has(key))
      return false

    delete this.#buckets[this.#hash(key)]
    return true
  }
}
