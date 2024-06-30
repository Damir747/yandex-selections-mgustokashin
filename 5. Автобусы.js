const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const events = [];
let cities;
let N, M;

rl.on('line', (line) => {
	if (!N) {
		[N, M] = line.split(' ').map(Number);
		cities = Array.from({ length: N + 1 }, () => 0);
	} else {
		const [from, startTimeStr, to, endTimeStr] = line.split(' ');
		const fromCity = Number(from);
		const startTime = timeToMinutes(startTimeStr);
		const toCity = Number(to);
		const endTime = timeToMinutes(endTimeStr);

		events.push({ time: startTime, direction: 'start', city: fromCity });
		// if (endTime > startTime) {
		events.push({ time: endTime, direction: 'end', city: toCity, midnight: endTime < startTime });
		// }
		// events.push({ time: startTime + 24 * 60, direction: 'start', city: fromCity });
		// events.push({ time: endTime + 24 * 60, direction: 'end', city: toCity });
		cities[fromCity]--;
		cities[toCity]++;
	}
});

rl.on('close', () => {
	events.sort((a, b) => a.time < b.time ? -1 :
		a.time > b.time ? 1 :
			a.direction === 'end' ? -1 : 1);

	function foo() {
		if (new Set(cities).size !== 1) {
			return -1;
		}
		let busCount = 0;
		for (let k = 0; k <= 1; k++) {
			for (let i = 0; i < events.length; i++) {
				if (events[i].direction === 'end') {
					if (k === 0 && !events[i].midnight || k === 1) {
						cities[events[i].city]++;
					}
				} else {
					if (cities[events[i].city] === 0) {
						busCount++;
					} else {
						cities[events[i].city]--;
					}
				}
			}
		}
		return busCount;
	}
	console.log(foo().toString());
	process.exit(0);
});

function timeToMinutes(time) {
	const [hours, minutes] = time.split(':').map(Number);
	return hours * 60 + minutes;
}
