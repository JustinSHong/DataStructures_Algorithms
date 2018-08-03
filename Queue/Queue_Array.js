class Node {
	constructor(data) {
		this.data = data;
	}
}

class Queue {
	constructor() {
		this.collection = [];
	}

	// check if queue is empty
	isEmpty() {
		console.log(`isEmpty ${this.collection.length}`);
		return this.collection.length === 0 ? true : false;
	}

	// return node at the start of the queue
	peek() {
		const head = this.collection[0];
		console.log(`peek: ${head.data}`);
		return head;
	}

	// add node to end of queue
	enqueue(node) {
		this.collection.push(node);
		console.log(`enqueue: ${node.data}`);
		return node; // show node that was added
	}

	// remove node at the start of queue
	dequeue() {
		const removed = this.collection.shift();
		console.log(`dequeue: ${removed.data}`);
		return removed; // show node that was removed
	}

	// show size of the queue
	size() {
		console.log(`size: ${this.collection.length}`);
		return this.collection.length;
	}

	// print all nodes in the queue
	show() {
		console.log(`collection: ${this.collection}`);
	}
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node("Fred");

const queue = new Queue();

queue.show();
queue.size();
queue.isEmpty();

queue.enqueue(node1);
queue.enqueue(node2);
queue.enqueue(node3);
queue.enqueue(node4);
queue.enqueue(node5);

queue.show();
queue.size();
queue.isEmpty();
queue.peek();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.peek();
queue.show();
queue.size();
queue.isEmpty();

