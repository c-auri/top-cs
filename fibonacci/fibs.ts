export function iterativeFibs(n: number) {
    if (n <= 0) return []
    if (n === 1) return [ 0 ]

    const result = [ 0, 1 ]

    for (let i = 2; i < n; i++) {
        result.push(result[i - 2] + result[i - 1])
    }

    return result
}

export function recursiveFibs(n: number): number[] {
    if (n <= 0) return [ ]
    if (n === 1) return [ 0 ]
    if (n === 2) return [ 0, 1 ]

    let previous = recursiveFibs(n - 1)
    return [...previous, previous.at(-1)! + previous.at(-2)!]
}