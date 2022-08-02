import { TreeNode } from "../utils/TreeNode";

const calculateMinimumDepthBinaryTree = (root: TreeNode | null): number => {
    let depth = 0;
    if (root === null) return depth;
    const queue: Array<TreeNode> = [];
    queue.push(root);
    while (queue.length !== 0) {
        depth++;
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                if (!currentNode.left && !currentNode.right) {
                    return depth;
                }
                currentNode.left && queue.push(currentNode.left)
                currentNode.right && queue.push(currentNode.right)
            }
        }
    }
    return -1;
}