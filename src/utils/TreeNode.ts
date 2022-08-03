export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export class TreeNodeWithNext {
    val: number
    left: TreeNodeWithNext | null
    right: TreeNodeWithNext | null
    next: TreeNodeWithNext | null
    constructor(val?: number, left?: TreeNodeWithNext, right?: TreeNodeWithNext, next?: TreeNodeWithNext) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}
