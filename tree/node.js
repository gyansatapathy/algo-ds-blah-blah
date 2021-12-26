class Node {
    constructor(data, left, right) {
        this.data = data? data: null;
        this.leftChild = left? left: null;
        this.rightChild = right? right: null;
    }
}

module.exports = Node;