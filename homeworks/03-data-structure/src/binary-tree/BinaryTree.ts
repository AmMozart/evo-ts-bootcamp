import { TreeNode } from './TreeNode'

export enum TraverseType {
  InOrder,
  PreOrder,
  PostOrder,
  Breadth
}

export interface IBinaryTree<T> {
  setTree(tree: TreeNode<T>): this

  traverse(traverseType: TraverseType): T[]

  getColumn(columnOrder: number): T[]
}

export class BinaryTree<T> implements IBinaryTree<T> {
  constructor(protected tree: TreeNode<T>) { }

  setTree(tree: TreeNode<T>): this {
    this.tree = tree
    return this
  }

  traverse(traverseType: TraverseType): T[] {
    switch (traverseType) {
      case TraverseType.Breadth:
        return this.traverseBFS(this.tree)

      case TraverseType.InOrder:
      case TraverseType.PostOrder:
      case TraverseType.PreOrder:
        return this.traverseDFS(this.tree, traverseType)

      default:
        throw new Error(`Not implemented traverse type: ${traverseType}`)
    }
  }

  getColumn(columnOrder: number): T[] {

    const values: T[] = []
    const treeNodeQueue = [this.tree]
    const columnNumberQueue = [0]

    while (treeNodeQueue.length) {
      const node = treeNodeQueue.shift()
      const columnNumber = columnNumberQueue.shift()

      if (columnNumber === columnOrder)
        values.push(node.value)

      if (node.left) {
        treeNodeQueue.push(node.left)
        columnNumberQueue.push(columnNumber - 1)
      }

      if (node.right) {
        treeNodeQueue.push(node.right)
        columnNumberQueue.push(columnNumber + 1)
      }
    }

    return values
  }

  private traverseDFS(treeNode: TreeNode<T>, traverseType: TraverseType): T[] {
    const values: T[] = []

    if (treeNode) {
      traverseType === TraverseType.PreOrder && values.push(treeNode.value)
      values.push(...this.traverseDFS(treeNode.left, traverseType))
      traverseType === TraverseType.InOrder && values.push(treeNode.value)
      values.push(...this.traverseDFS(treeNode.right, traverseType))
      traverseType === TraverseType.PostOrder && values.push(treeNode.value)
    }

    return values
  }

  private traverseBFS(treeNode: TreeNode<T>): T[] {
    const values: T[] = []
    const treeNodeQueue = [treeNode]

    while (treeNodeQueue.length) {
      const dot = treeNodeQueue.shift()
      values.push(dot.value)

      dot.left && treeNodeQueue.push(dot.left)
      dot.right && treeNodeQueue.push(dot.right)
    }

    return values
  }
}