/**
 * Recursively sorts an array of numbers.
 * @param {number[]} array
 */
function sort(array) {
    if (array.length <= 1)
        return array

    const { left, right } = split(array)
    return merge(sort(left), sort(right))
}

/**
 * Splits an array into halves.
 * @param {number[]} array
 */
function split(array) {
    const middle = Math.round(array.length / 2)
    return {
        left: array.slice(0, middle),
        right: array.slice(middle)
    }
}

/**
 * Merges two sorted arrays into one.
 * @param {number[]} left
 * @param {number[]} right
 */
function merge(left, right) {
    let result = []

    while (left.length || right.length)
        if (!right.length || left[0] <= right[0])
            result.push(left.shift())
        else
            result.push(right.shift())

    return result
}

module.exports = sort
