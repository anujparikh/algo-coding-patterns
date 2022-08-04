import { TreeNode } from "../utils/TreeNode"

const populateNextPointer = (root: TreeNode | null): Array<number> => {
    const result: Array<number> = [];
    if (root === null) return result;
    const queue: Array<TreeNode> = [];
    queue.push(root);
    while (queue.length !== 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                if (i === size - 1) {
                    result.push(currentNode.val);
                }
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
    }
    return result;
}