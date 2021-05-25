import { BinarySearchTree } from "../binary-tree/BinarySearchTree"
import { TreeNode } from "../binary-tree/TreeNode"

const testTree = require('./testTree')

describe("BinarySearchTree Module:", () => {
  let tree: TreeNode<number> = null
  let binaryTree: BinarySearchTree = null

  beforeEach(() => {
    tree = testTree
    binaryTree = new BinarySearchTree(tree)
  })

  it("testing method has, to be true", () => {
    expect(binaryTree.has(66)).toBe(true)
  })

  it("testing method has, to be false", () => {
    expect(binaryTree.has(32)).toBe(false)
  })

  it("testing method has, to be true", () => {
    expect(binaryTree.has(0)).toBe(true)
  })

  it("testing method has, to be false", () => {
    expect(binaryTree.has(Infinity)).toBe(false)
  })

  it("testing method has, to be false", () => {
    expect(binaryTree.has(NaN)).toBe(false)
  })

  it("testing search function", () => {
    expect(binaryTree['search'](66, tree).value).toBe(66)
  })
})