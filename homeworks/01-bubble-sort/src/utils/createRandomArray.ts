type CreateRandomArray = (size: number) => number[]

export const createRandomArray: CreateRandomArray = size =>
  Array.from({ length: size }, () => Math.trunc(Math.random() * 200))