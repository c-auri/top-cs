export function sort(array: number[]): number[] {
    if (array.length <= 1)
        return array

    const middle = Math.round(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(sort(left), sort(right))
}

function merge(left: number[], right: number[]) {
    let result = []
    let i = 0
    let j = 0

    while (i < left.length || j < right.length) {
        if (j === right.length || left[i] <= right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }

    return result
}
