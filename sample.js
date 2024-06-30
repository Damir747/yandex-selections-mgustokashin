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
	const [K1, M, K2, P2, N2] = input[0].split(' ').map(Number);
	console.log(K1, M, K2, P2, N2);
	rl.close();
});
