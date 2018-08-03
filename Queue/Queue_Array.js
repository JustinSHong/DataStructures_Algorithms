class Node {
	constructor(data) {
		this.data = data;
	}
}

class Queue {
	constructor(head, tail) {
		this.head = head;
		this.tail = tail;
		this.collection = [];
	}

	isEmpty() {
		console.log(this.collection.length);
		return this.collection.length === 0 ? true : false;
	}

	peek() {}

	enqueue() {}

	dequeue() {}

	size() {}
}
