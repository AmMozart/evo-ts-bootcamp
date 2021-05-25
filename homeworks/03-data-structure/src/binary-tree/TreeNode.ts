interface ITreeNode<T> {
  value: T
  left: ITreeNode<T>
  right: ITreeNode<T>
}

export class TreeNode<T> implements ITreeNode<T> {
  constructor(
    public value: T,
    public left: ITreeNode<T>,
    public right: ITreeNode<T>) {
  }
}