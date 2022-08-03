import { TreeNodeWithNext } from "../utils/TreeNode"

const connect_all_siblings = function (root: TreeNodeWithNext | null): TreeNodeWithNext | null {
    if (root === null) return root;
    let queue: Array<TreeNodeWithNext> = [];
    queue.push(root);
    let previous: TreeNodeWithNext | null = null;
    while (queue.length !== 0) {
        let currentNode = queue.shift() || null;
        currentNode && currentNode.left !== null && queue.push(currentNode.left);
        currentNode && currentNode.right !== null && queue.push(currentNode.right);
        if (previous !== null) {
            previous.next = currentNode;
        }
        previous = currentNode;
    }
    return root;
};