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

const levelOrderTraversalRecurrsive = (root: TreeNode | null): Array<Array<number>> => {
    const traverse = (root: TreeNode | null, level: number) => {
        if (root === null) return;
        if (level >= result.length) {
            result[level] = [];
        }
        result[level].push(root.val);
        root.left && traverse(root.left, level + 1);
        root.right && traverse(root.right, level + 1);
    }

    if (root === null) return [];
    const result: Array<Array<number>> = [];
    traverse(root, 0);
    return result;
}