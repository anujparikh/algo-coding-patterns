import { TreeNode } from "../utils/TreeNode";

const levelOrderSuccessor = (root: TreeNode, key: number): TreeNode | null => {
    if (root === null) return null;
    const queue: Array<TreeNode> = [];
    let isNext = false;
    queue.push(root);
    while (queue.length !== 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                if (isNext) return currentNode;
                if (currentNode.val === key) isNext = true;
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
    }
    return null;
}