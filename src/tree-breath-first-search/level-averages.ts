import { TreeNode } from "../utils/TreeNode";

const findLevelAverages = (root: TreeNode | null): Array<number> => {
    if (root === null) return []
    const result: Array<number> = [];
    const queue: Array<TreeNode> = [];
    queue.push(root);
    while (queue.length !== 0) {
        let size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node) {
                sum += node.val;
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }
        }
        result.push(sum / size);
    }
    return result;
}