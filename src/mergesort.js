export function sort(array) {
    if (array.length <= 1)
        return array

    const { left, right } = split(array)

    return [...left, ...right]
}

function split(array) {
    const middleIndex = Math.round(array.length / 2)

    return {
        left: array.slice(0, middleIndex),
        right: array.slice(middleIndex)
    }
}