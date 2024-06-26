function Queue() {
    let queue = [];

    function enqueue(value) {
        queue.push(value);
    }

    function dequeue() {
        if (queue.length === 0) {
            return null; // or throw an error if you prefer
        }
        return queue.shift();
    }
	function pop() {
		if (queue.length === 0) {
			return null; // or throw an error if you prefer
		}
		return queue.pop();
	}
    

    return {
        enqueue,
        dequeue,
		pop
    }
}

//export default Queue;


// const queue = Queue();

// queue.enqueue("Andre")
// queue.enqueue("Busi");

// console.log(queue.dequeue())  -- Andre
// console.log(queue.dequeue())  -- Busi