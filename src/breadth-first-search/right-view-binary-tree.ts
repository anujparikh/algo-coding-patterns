import { TreeNode } from "../utils/TreeNode";

const rightViewBinaryTree = (root: TreeNode): Array<number> => {
    if (root === null) return [];
    const queue: Array<TreeNode> = [];
    const rightSideView: Array<number> = [];
    queue.push(root);
    while (queue.length !== 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                if (i === size - 1) rightSideView.push(currentNode.val);
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
    }
    return rightSideView;
}