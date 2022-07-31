import { TreeNode } from "../utils/TreeNode";

const levelOrderTraversal = (root: TreeNode | null): Array<Array<number>> => {
    if (root === null) return [];
    const result: Array<Array<number>> = [];
    const queue: Array<TreeNode> = [];
    queue.push(root);
    while (queue.length !== 0) {
        const size = queue.length;
        const current: Array<number> = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node) {
                current.push(node.val);
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }
        }
        result.push([...current]);
    }

    return result;
}