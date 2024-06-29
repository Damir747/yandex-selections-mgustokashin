const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const triangles = [];

for (let i = 1; i <= K; i++) {
	const coords = input[i].split(' ').map(Number);
	triangles.push(coords);
}

function solve(N, M, K, triangles) {
	const box = new Array.from({ length: N }, () => new Array(M).fill(0));


	const output = [];

	// Запись результата в файл output.txt
	fs.writeFileSync('output.txt', output.join('\n'), 'utf8');
}

// Вызов функции решения задачи
solve(N, M, K, triangles);
