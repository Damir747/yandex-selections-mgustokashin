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
	const [H, W] = input[0].split(' ').map(Number);
	const field = input.slice(1, H + 1);
	const [sx, sy] = input[H + 1].split(' ').map(Number);
	const [tx, ty] = input[H + 2].split(' ').map(Number);

	const directions = [
		[1, 0], [-1, 0], [0, 1], [0, -1], // horizontal and vertical
		[1, 1], [-1, -1], [1, -1], [-1, 1] // diagonal
	];

	const start = [sy - 1, sx - 1];
	const end = [ty - 1, tx - 1];

	const queue = [];
	const visited = Array.from({ length: H }, () => Array.from({ length: W }, () => Array(8).fill(false)));
	for (let i = 0; i < 8; i++) {
		queue.push([...start, i, 0]); // [y, x, direction, turns]
		visited[start[0]][start[1]][i] = true;
	}

	let found = false;
	while (queue.length > 0 && !found) {
		const [y, x, dir, turns] = queue.shift();

		for (let newDir = 0; newDir < 8; newDir++) {
			const [dy, dx] = directions[newDir];
			const ny = y + dy, nx = x + dx;
			const newTurns = dir === newDir ? turns : turns + 1;

			if (ny === end[0] && nx === end[1]) {
				console.log(newTurns);
				found = true;
				break;
			}

			if (ny >= 0 && ny < H && nx >= 0 && nx < W && field[ny][nx] === '.' && !visited[ny][nx][newDir]) {
				visited[ny][nx][newDir] = true;
				queue.push([ny, nx, newDir, newTurns]);
			}
		}
	}

	if (!found) {
		console.log(-1);
	}
});
