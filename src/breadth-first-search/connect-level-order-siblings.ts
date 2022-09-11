import { TreeNodeWithNext } from "../utils/TreeNode";

const connectLevelOrderSiblings = (root: TreeNodeWithNext): TreeNodeWithNext | null => {
    if (root === null) return null;
    const queue: Array<TreeNodeWithNext> = [];
    queue.push(root);
    while (queue.length) {
        const size = queue.length;
        const currentLevel: Array<TreeNodeWithNext> = [];
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                currentLevel.push(currentNode);
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
        for (let j = 0; j < currentLevel.length - 1; j++) {
            currentLevel[j].next = currentLevel[j + 1];
        }
    }
    return root;
}