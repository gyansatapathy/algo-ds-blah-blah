const Node = require('./node.js')

const maxHeight = (node) => {
    if (!node) return 0;

    const leftHeight = 1 + maxHeight(node.leftChild);
    const rightHeight = 1 + maxHeight(node.rightChild);

    return Math.max(leftHeight, rightHeight);
};

console.log(maxHeight(new Node(1, new Node(2, new Node(1)), new Node(3))));

