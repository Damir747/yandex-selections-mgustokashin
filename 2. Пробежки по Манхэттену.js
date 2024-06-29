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
	const [t, d, n] = input[0].split(' ').map(Number);
	const messages = input.slice(1).map(line => line.split(' ').map(Number));

	// Set of possible points, initially containing all points
	let possiblePoints = new Set();

	// Add all possible points from the first message
	const addPointsFromMessage = (x, y) => {
		const points = new Set();
		for (let dx = -d; dx <= d; dx++) {
			for (let dy = -d; dy <= d; dy++) {
				if (Math.abs(dx) + Math.abs(dy) <= d) {
					points.add(`${x + dx} ${y + dy}`);
				}
			}
		}
		return points;
	}

	possiblePoints = addPointsFromMessage(messages[0][0], messages[0][1]);

	// Intersect possible points with each subsequent message
	for (let i = 1; i < n; i++) {
		const [x, y] = messages[i];
		const newPoints = addPointsFromMessage(x, y);
		possiblePoints = new Set([...possiblePoints].filter(p => newPoints.has(p)));
	}

	// Convert set to output format
	const result = [...possiblePoints].map(p => p.split(' ').map(Number));

	// Output the result
	console.log(result.length);
	result.forEach(([x, y]) => console.log(x, y));
});
