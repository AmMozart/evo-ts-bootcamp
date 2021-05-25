import { TreeNode } from "../binary-tree/TreeNode"

const testTree: TreeNode<number> = new TreeNode(
  10,
  {
    value: 2,
    left: { value: 0, left: null, right: null },
    right: { value: 4, left: null, right: null }
  },
  {
    value: 45,
    left: null,
    right: {
      value: 66,
      left: null,
      right: { value: 81, left: null, right: null }
    }
  }
)

module.exports = testTree