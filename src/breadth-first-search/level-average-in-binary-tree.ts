import { TreeNode } from "../utils/TreeNode";

const levelAverageBinaryTree = (root: TreeNode): Array<number> => {
    if (root === null) return [];
    const levelAverage: Array<number> = [];
    const queue: Array<TreeNode> = [];
    queue.push(root);
    while (queue.length !== 0) {
        let total = 0;
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            if (currentNode) {
                total += currentNode.val;
                currentNode.left && queue.push(currentNode.left);
                currentNode.right && queue.push(currentNode.right);
            }
        }
        levelAverage.push(total/size);
    }

    return levelAverage;
}