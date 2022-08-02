import { TreeNode } from "../utils/TreeNode";

const findLevelOrderSuccessor = (root: TreeNode | null, key: number): TreeNode | null => {
    if (root === null) return null;
    const queue: Array<TreeNode> = [];
    let next = false;
    queue.push(root);
    while (queue.length !== 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (next) return null;
            if (currentNode) {
                if (currentNode.val === key) next = true;
                if (currentNode.left) {
                    queue.push(currentNode.left);
                }
                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }
        }
    }
    return null;
}