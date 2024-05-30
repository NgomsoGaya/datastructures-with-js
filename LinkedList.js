import Node from './node.js'

function LinkedList() {
	let startNode = null;
	let currentNode = null;

	function add(value) {
		if (startNode === null) {
			startNode = Node(value, null);
			currentNode = startNode;
		} else {
			const newNode = Node(value, null);
			currentNode.setNextNode(newNode);
			currentNode = newNode;
		}
	}

	function count() {
		let count = 0;
		let node = startNode;
		while (node !== null) {
			count++;
			node = node.getNextNode();
		}
		return count;
	}

	function clear() {
		startNode = null;
		currentNode = null;
	}

	function contains(value) {
		let node = startNode;
		while (node !== null) {
			if (node.getValue() === value) {
				return true;
			}
			node = node.getNextNode();
		}
		return false;
	}

	function forEach(fn) {
		let node = startNode;
		while (node !== null) {
			fn(node.getValue());
			node = node.getNextNode();
		}
	}

	function first() {
		return startNode ? startNode.getValue() : null;
	}

	function last() {
		return currentNode ? currentNode.getValue() : null;
	}

	return {
		add,
		clear,
		contains,
		count,
		first,
		last,
		forEach
	}
}

export default LinkedList;
