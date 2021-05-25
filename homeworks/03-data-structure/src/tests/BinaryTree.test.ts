import { BinaryTree, TraverseType } from "../binary-tree/BinaryTree"
import { TreeNode } from "../binary-tree/TreeNode"

const testTree = require('./testTree')

describe("BinaryTree Module:", () => {
  let tree: TreeNode<number> = testTree
  let binaryTree: BinaryTree<number> = new BinaryTree(tree)

  beforeEach(() => {
    tree = testTree
    binaryTree = new BinaryTree(tree)
  })

  it("testing method setTree", () => {
    const newTree: BinaryTree<number> = binaryTree.setTree(tree)
    expect(newTree['tree']).toEqual(tree)
  })

  it("testing TraverseType.InOrder", () => {
    const nums: number[] = [0, 2, 4, 10, 45, 66, 81]
    expect(binaryTree.traverse(TraverseType.InOrder)).toEqual(nums)
  })

  it("testing TraverseType.PreOrder", () => {
    const nums: number[] = [10, 2, 0, 4, 45, 66, 81]
    expect(binaryTree.traverse(TraverseType.PreOrder)).toEqual(nums)
  })

  it("testing TraverseType.PostOrder", () => {
    const nums: number[] = [0, 4, 2, 81, 66, 45, 10]
    expect(binaryTree.traverse(TraverseType.PostOrder)).toEqual(nums)
  })

  it("testing TraverseType.Breadth", () => {
    const nums: number[] = [10, 2, 45, 0, 4, 66, 81]
    expect(binaryTree.traverse(TraverseType.Breadth)).toEqual(nums)
  })

  it("testing method getColumn 0", () => {
    const nums: number[] = [10, 4]
    expect(binaryTree.getColumn(0)).toEqual(nums)
  })

  it("testing method getColumn -1", () => {
    const nums: number[] = [2]
    expect(binaryTree.getColumn(-1)).toEqual(nums)
  })

  it("testing method getColumn 3", () => {
    const nums: number[] = [81]
    expect(binaryTree.getColumn(3)).toEqual(nums)
  })

  it("testing method getColumn -5", () => {
    expect(binaryTree.getColumn(-5)).toEqual([])
  })

  it("testing wrong type TraverseType case", () => {
    const wrongType: TraverseType = 42 as TraverseType
    expect(() => { binaryTree.traverse(wrongType) }).toThrowError(`Not implemented traverse type: ${42}`)
  })
})

