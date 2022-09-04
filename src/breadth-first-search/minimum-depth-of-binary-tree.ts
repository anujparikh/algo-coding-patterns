import { TreeNode } from "../utils/TreeNode";

const minimumDepthOfBinaryTree = (root: TreeNode): number => {
    if (root === null) return 0;
    let height = 0;
    const queue: Array<TreeNode> = [];
    queue.push(root);
    while (queue.length != 0) {
        let size = queue.length;
        height++;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                if (!currentNode.left && !currentNode.right) return height;
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
    }
    return height;
}