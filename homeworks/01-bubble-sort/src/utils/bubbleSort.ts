function* bubbleSort(arr: number[]): Generator<number[]> {

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      let left: number = arr[j]
      let right: number = arr[j + 1]

      if (left > right) {
        arr[j] = right
        arr[j + 1] = left
        yield arr
      }
    }
  }
}

export default bubbleSort