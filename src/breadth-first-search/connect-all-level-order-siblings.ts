import { TreeNodeWithNext } from "../utils/TreeNode";

const connectLevelOrderSiblings = (root: TreeNodeWithNext): TreeNodeWithNext | null => {
    if (root === null) return null;
    const queue: Array<TreeNodeWithNext> = [];
    const nodes: Array<TreeNodeWithNext> = [];
    queue.push(root);
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                nodes.push(currentNode);
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
    }
    for (let j = 0; j < nodes.length - 1; j++) {
        nodes[j].next = nodes[j + 1];
    }
    return root;
}