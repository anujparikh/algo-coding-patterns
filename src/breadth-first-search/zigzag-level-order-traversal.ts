import { TreeNode } from "../utils/TreeNode";
import Deque from 'collections/deque'; //http://www.collectionsjs.com

const zigzagLevelOrderTraversal = (root: TreeNode) => {
    if (root === null) return [];
    let reverse = false;
    const order: Array<Array<number>> = [];
    const queue = new Deque();
    queue.push(root);
    while (queue.length !== 0) {
        const size = queue.length;
        const currentOrder: Array<number> = [];
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (reverse) {
                currentOrder.unshift(currentNode.val);
            } else {
                currentOrder.push(currentNode.val);
            }
            currentNode && currentNode.left && queue.push(currentNode.left);
            currentNode && currentNode.right && queue.push(currentNode.right);
        }
        reverse = !reverse;
        order.push(currentOrder);
    }
    return order;
}