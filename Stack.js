
// const stack = Stack();

//stack.push("Andre");
//stack.push("Busi");

// console.log(stack.pop())   -- Busi
// console.log(stack.pop())   -- Andre

// how would u implement this using a linked list

function Stack() {
	let stack = [];

	function push(value) {
		stack.push(value);
	}

	function pop() {
		if (stack.length === 0) {
			return null; // or throw an error if you prefer
		}
		return stack.pop();
	}

	function peek() {
		if (stack.length === 0) {
			return null; // or throw an error if you prefer
		}
		return stack[stack.length - 1];
	}

	function isEmpty() {
		return stack.length === 0;
	}

	function size() {
		return stack.length;
	}

	return {
		push,
		pop,
		peek,
		isEmpty,
		size
	}
}

export default Stack;
