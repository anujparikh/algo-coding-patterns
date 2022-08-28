import { TreeNode } from "../utils/TreeNode";
import Deque from 'collections/heap'; //http://www.collectionsjs.com

const levelOrderTraversal = (root: TreeNode) => {
    if (root === null) return [];
    const order: Array<Array<number>> = [];
    const queue = new Deque();
    queue.push(root);
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevelOrder: Array<number> = [];
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                currentLevelOrder.push(currentNode.val);
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
        order.push(currentLevelOrder);
    }
    return order;
}

