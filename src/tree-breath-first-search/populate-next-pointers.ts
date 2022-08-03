import { TreeNodeWithNext } from "../utils/TreeNode"

const populateNextPointer = (root: TreeNodeWithNext | null): TreeNodeWithNext | null => {
    if (root === null) return root;
    let queue: Array<TreeNodeWithNext> = [];
    queue.push(root);
    while (queue.length !== 0) {
        let size = queue.length;
        let previous = queue.shift();
        for (let i = 0; i < size; i++) {
            previous?.left && queue.push(previous.left);
            previous?.right && queue.push(previous.right);
            const next = i === size - 1 ? undefined : queue.shift();
            if (previous) {
                previous.next = next || null;
            }
            previous = next;
        }
    }
    return root;
}