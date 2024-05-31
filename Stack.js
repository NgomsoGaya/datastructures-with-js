
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

	return {
		push,
		pop,
	}
}

//export default Stack;
