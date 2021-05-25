type MergeSort = <T>(array: T[], compareFunction: CompareFunction<T>) => T[]
export type CompareFunction<T> = (a: T, b: T) => number

export const mergeSort: MergeSort = <T>(array: T[], compareFunction: CompareFunction<T>) => {

  if (array.length < 2) {
    return array
  }

  const middle = Math.ceil(array.length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(
    mergeSort(left, compareFunction),
    mergeSort(right, compareFunction),
    compareFunction
  )
}

function merge<T>(left: T[], right: T[], compareFunction: CompareFunction<T>): T[] {
  const result: T[] = []
  let leftIndex = 0
  let rightIndex = 0


  while (leftIndex < left.length && rightIndex < right.length) {

    if (compareFunction(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex++])
    } else {
      result.push(right[rightIndex++])
    }
  }
  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}