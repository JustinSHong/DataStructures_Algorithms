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
		console.log(this.collection.length);
		return this.collection.length === 0 ? true : false;
	}

	// return node at the start of the queue
	peek() {
		const head = this.collection[0];
		console.log(head);
		return head;
	}

	// add node to end of queue
	enqueue(node) {
		this.collection.push(node);
		console.log(node);
		return node; // show node that was added
	}

	// remove node at the start of queue
	dequeue() {
		const removed = this.collection.shift();
		console.log(removed);
		return removed; // show node that was removed
	}

	// show size of the queue
	size() {
		console.log(this.collection.length);
		return this.collection.length;
	}
}
