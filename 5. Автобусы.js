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
	const [N, M] = input[0].split(' ').map(Number);
	const trips = input.slice(1, M + 1).map(line => {
		const [from, startTime, to, endTime] = line.split(' ');
		return {
			from: Number(from),
			startTime: timeToMinutes(startTime),
			to: Number(to),
			endTime: timeToMinutes(endTime)
		};
	});

	const cities = Array.from({ length: N + 1 }).fill(0);
	let count = 0;

	const obj = {};
	for (const trip of trips) {
		addToObj(obj, trip.startTime, { direction: 'start', city: trip.from });
		addToObj(obj, trip.startTime + 24 * 60, { direction: 'start', city: trip.from });
		if (trip.endTime > trip.startTime) {
			addToObj(obj, trip.endTime, { direction: 'end', city: trip.to });
		}
		addToObj(obj, trip.endTime + 24 * 60, { direction: 'end', city: trip.to });
	}

	const keyTime = Object.keys(obj).sort((a, b) => +a - +b);

	for (let i = 0; i < keyTime.length; i++) {
		obj[keyTime[i]].sort((a, b) => a.direction === 'end' ? -1 : 1);
	}

	for (let i = 0; i < keyTime.length; i++) {
		for (let j = 0; j < obj[keyTime[i]].length; j++) {
			if (obj[keyTime[i]][j].direction === 'end') {
				cities[obj[keyTime[i]][j].city]++;
			} else {
				if (cities[obj[keyTime[i]][j].city] === 0) {
					count++;
				} else {
					cities[obj[keyTime[i]][j].city]--;
				}
			}
		}
	}
	if (count > 100_000) {
		console.log(-1);
	} else {
		console.log(count);
	}
	rl.close();
});

function timeToMinutes(time) {
	const [hours, minutes] = time.split(':').map(Number);
	return hours * 60 + minutes;
}

function addToObj(obj, key, value) {
	if (!obj.hasOwnProperty(key)) {
		obj[key] = [];
	}
	obj[key].push(value);
}
