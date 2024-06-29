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
	const n = Number(input[0].trim());

	let arr = [];
	for (let i = 0; i < n; i++) {
		const [a, b] = input[i + 1].trim().split(' ');
		arr.push([+a, +b]);
	}

	let maxBig = -Infinity;
	let iBig = -1;
	let maxEqual = -Infinity;
	let iEqual = -1;
	let maxSmall = -Infinity;
	let iSmall = -1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] - arr[i][1] > 0 && (arr[i][1] > maxBig)) {
			maxBig = arr[i][1];
			iBig = i;
		}
		if (arr[i][0] - arr[i][1] === 0 && arr[i][1] > maxEqual) {
			maxEqual = arr[i][1];
			iEqual = i;
		}
		if (arr[i][0] - arr[i][1] < 0 && arr[i][0] > maxSmall) {
			maxSmall = arr[i][0];
			iSmall = i;
		}
	}

	const result = [];
	let max = 0;
	let res = 0;

	const findMax = (index) => {
		res += arr[index][0];
		if (max < res) {
			max = res;
		}
		res -= arr[index][1];
	};

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] - arr[i][1] > 0 && i !== iBig) {
			result.push(i + 1);
			findMax(i);
		}
	}
	if (iBig > -1) {
		result.push(iBig + 1);
		findMax(iBig);
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] - arr[i][1] === 0 && i !== iEqual) {
			result.push(i + 1);
			findMax(i);
		}
	}
	if (iEqual > -1) {
		result.push(iEqual + 1);
		findMax(iEqual);
	}
	if (iSmall > -1) {
		result.push(iSmall + 1);
		findMax(iSmall);
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] - arr[i][1] < 0 && i !== iSmall) {
			result.push(i + 1);
			findMax(i);
		}
	}

	console.log(max + '\n' + result.join(' '));
	rl.close();
});