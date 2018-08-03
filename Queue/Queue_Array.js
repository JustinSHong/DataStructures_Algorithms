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
		let head = this.collection[0];
		console.log(head);
		return head;
	}

	enqueue() {}

	dequeue() {}

	size() {}
}
