import { mergeSort, CompareFunction } from '../merge-sort/mergeSort'

describe("mergeSort Module:", () => {
  it("should sort the array of positive numbers value", () => {
    const array = [1, 2, 16, 9, 1, 3, 9, 4, 8, 20, 11]
    const sortedArray = [...array].sort((x, y) => x - y)

    expect(mergeSort(array, (x, y) => x - y)).toEqual(sortedArray)
  })

  it("should sort the array of negative numbers value", () => {
    const array = [-1, -2, -16, -9, -1, -3, -9, -4, -8, -20, -11]
    const sortedArray = [...array].sort((x, y) => x - y)

    expect(mergeSort(array, (x, y) => x - y)).toEqual(sortedArray)
  })

  it("should sort the array of random numbers value", () => {
    const array = [-1, 0, -16, 9, -1, -3, -9, 0, -8, 34, -11]
    const sortedArray = [...array].sort((x, y) => x - y)

    expect(mergeSort(array, (x, y) => x - y)).toEqual(sortedArray)
  })

  it("should sort the array of numbers with Infinity value", () => {
    const array = [Infinity, 0, -16, -1, -3, -9, 0, -Infinity, 34, -11]
    const sortedArray = [...array].sort((x, y) => x - y)

    expect(mergeSort(array, (x, y) => x - y)).toEqual(sortedArray)
  })

  it("should sort the array of numbers with NaN value", () => {
    const cmp = (a: number, b: number) => (a - b || Number(isNaN(a)) - Number(isNaN(b)))
    const array = [NaN, 0, -16, -1, -3, -9, 0, NaN, 34, -11]
    const sortedArray = [...array].sort(cmp)

    expect(mergeSort(array, cmp)).toEqual(sortedArray)
  })

  it("should sort the empty array", () => {
    const array = []

    expect(mergeSort(array, (x, y) => x - y)).toEqual([])
  })

  it("should sorted string array", () => {
    const array = ['Z', 'd', 'A', 'B', 'c', 'd', 'C', 'D', 'a', 'b']

    const compare: CompareFunction<string> = (x, y) => {
      let result = 0

      if (x > y)
        result = 1
      if (x < y)
        result = -1
      return result
    }

    const sortedArray = [...array].sort(compare)
    const result = mergeSort(array, compare)
    expect(result).toEqual(sortedArray)
  })

  it("callback arg is called", () => {
    const fn = jest.fn((x, y) => x - y)
    const array = [1, 2, 16, 9, 1, 3, 9, 4, 8, 20, 11]
    mergeSort(array, fn)
    expect(fn).toBeCalled()
  })
})