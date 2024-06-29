const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
rl.on('line', (line) => {
	input.push(line);
});

rl.on('close', () => {
	const n = Number(input.shift());
	const queue = [];
	const result = [];

	for (let i = 0; i < n; i++) {
		const command = input[i].split(' ');
		switch (command[0]) {
			case '+':
				queue.push(+command[1]);
				break;
			case '*':
				const middle = Math.floor((queue.length + 1) / 2);
				queue.splice(middle, 0, +command[1]);
				break;
			case '-':
				result.push(queue.shift());
				break;
			default:
				break;
		}
	}
	console.log(result.join('\n'));
	rl.close();
});