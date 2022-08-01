import { TreeNode } from "../utils/TreeNode";

const zigzagLevelOrderTraversal = (root: TreeNode | null): Array<Array<number>> => {
    if (root === null) return [];
    const result: Array<Array<number>> = [];
    const queue: Array<TreeNode> = [];
    let normalTraverse = true;
    queue.push(root);
    while (queue.length !== 0) {
        const size = queue.length;
        const current: Array<number> = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node) {
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
                if (normalTraverse) {
                    current.push(node.val);
                } else {
                    current.unshift(node.val);
                }
            }
        }
        normalTraverse = !normalTraverse;
        result.push(current);
    }
    return result;
}