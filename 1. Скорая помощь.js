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

	// K1, M, K2, P2, N2
	// количество квартир на этаже
	const calcFlour = () => {
		const arr = [];
		for (let i = Math.max(K1 + 1, K2 + 1); i >= 1; i--) {
			for (let j = 1; j <= i; j++) {
				if ((P2 - 1) * M * i + (N2 - 1) * i + j === K2) {
					const P1 = Math.floor(K1 / (M * i));
					const N1 = Math.floor((K1 - (P1 * M * i)) / i);
					for (let k = 1; k <= i; k++) {
						if (P1 * M * i + N1 * i + k === K1) {
							arr.push(i);
						}
					}
				}
			}
		}
		return arr;
	}
	// const flour = Math.floor(K2 / ((P2 - 1) * M) + (N2 - 1));
	const flour = calcFlour();
	console.log(flour);
	if (flour.length === 0) {
		console.log(-1, -1);
		rl.close();
		return 'NO SOLUTION';
	}
	if (flour.length > 1) {
		for (i = 0; i < flour.length; i++) {
			const P1 = Math.floor(K1 / (M * flour[i]));
			const N1 = Math.floor((K1 - (P1 * M * flour[i])) / flour[i]);
			console.log(P1 + 1, N1 + 1);
		}
		const P1 = Math.floor(K1 / (M * flour[0]));
		const N1 = Math.floor((K1 - (P1 * M * flour[0])) / flour[0]);
		console.log(0, N1 + 1);
		rl.close();
		return 'YES';
	}
	const P1 = Math.floor(K1 / (M * flour[0]));
	const N1 = Math.floor((K1 - (P1 * M * flour[0])) / flour[0]);
	console.log(P1 + 1, N1 + 1);
	rl.close();
});
