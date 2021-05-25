import { BinaryTree, IBinaryTree } from './BinaryTree'
import { TreeNode } from './TreeNode'

interface IBinarySearchTree extends IBinaryTree<number> {
  has(value: number): boolean
}

export class BinarySearchTree extends BinaryTree<number> implements IBinarySearchTree {

  has(value: number): boolean {
    return Boolean(this.search(value, this.tree))
  }

  private search(value: number, tree: TreeNode<number>): TreeNode<number> {
    if (tree === null || tree.value === value)
      return tree

    if (value < this.tree.value)
      return this.search(value, tree.left)

    return this.search(value, tree.right)
  }
}