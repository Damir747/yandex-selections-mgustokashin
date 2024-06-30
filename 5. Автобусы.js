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
			endTime: timeToMinutes(endTime),
		};
	});

	const events = [];
	const cities = Array.from({ length: N + 1 }, () => 0);
	for (const trip of trips) {
		events.push({ time: trip.startTime, direction: 'start', city: trip.from });
		events.push({ time: trip.startTime + 24 * 60, direction: 'start', city: trip.from });
		if (trip.endTime > trip.startTime) {
			events.push({ time: trip.endTime, direction: 'end', city: trip.to });
		}
		events.push({ time: trip.endTime + 24 * 60, direction: 'end', city: trip.to });
		cities[trip.from]--;
		cities[trip.to]++;
	}

	events.sort((a, b) => a.time < b.time ? -1 :
		a.time > b.time ? 1 :
			a.direction === 'end' ? -1 : 1);

	function foo() {
		if (new Set(cities).size !== 1) {
			return -1;
		}
		let count = 0;
		for (let i = 0; i < events.length; i++) {
			if (events[i].direction === 'end') {
				cities[events[i].city]++;
			} else {
				if (cities[events[i].city] === 0) {
					count++;
				} else {
					cities[events[i].city]--;
				}
			}
		}
		return count;
	}
	console.log(foo().toString());
	rl.close();
});

function timeToMinutes(time) {
	const [hours, minutes] = time.split(':').map(Number);
	return hours * 60 + minutes;
}
