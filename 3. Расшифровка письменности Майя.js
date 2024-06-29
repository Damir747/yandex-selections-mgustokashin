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
	const [g, lenS] = input[0].split(' ').map(Number);
	const W = input[1];
	const S = input[2];

	// Function to create frequency map of a string
	const createFreqMap = (str) => {
		const freq = Array(52).fill(0); // 26 for 'a'-'z' and 26 for 'A'-'Z'
		for (const char of str) {
			if (char >= 'a' && char <= 'z') {
				freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
			} else {
				freq[26 + char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
			}
		}
		return freq;
	};

	const compareFreqMaps = (map1, map2) => {
		for (let i = 0; i < 52; i++) {
			if (map1[i] !== map2[i]) {
				return false;
			}
		}
		return true;
	};

	const wFreqMap = createFreqMap(W);
	let sFreqMap = createFreqMap(S.slice(0, g));

	let count = compareFreqMaps(wFreqMap, sFreqMap) ? 1 : 0;

	for (let i = g; i < lenS; i++) {
		// Remove the char going out of the window
		const outChar = S[i - g];
		if (outChar >= 'a' && outChar <= 'z') {
			sFreqMap[outChar.charCodeAt(0) - 'a'.charCodeAt(0)]--;
		} else {
			sFreqMap[26 + outChar.charCodeAt(0) - 'A'.charCodeAt(0)]--;
		}

		// Add the char coming into the window
		const inChar = S[i];
		if (inChar >= 'a' && inChar <= 'z') {
			sFreqMap[inChar.charCodeAt(0) - 'a'.charCodeAt(0)]++;
		} else {
			sFreqMap[26 + inChar.charCodeAt(0) - 'A'.charCodeAt(0)]++;
		}

		if (compareFreqMaps(wFreqMap, sFreqMap)) {
			count++;
		}
	}

	console.log(count);
});
