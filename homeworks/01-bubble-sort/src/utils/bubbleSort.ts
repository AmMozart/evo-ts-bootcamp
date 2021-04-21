function* bubbleSort(arr: number[]): Generator<number[]> {

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      const left: number = arr[j]
      const right: number = arr[j + 1]

      if (left > right) {
        arr[j] = right
        arr[j + 1] = left
        yield arr
      }
    }
  }
}

export default bubbleSort