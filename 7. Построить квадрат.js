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
	const points = [];
	const objPoints = {};
	const H_DIV = n;
	for (let i = 0; i < n; i++) {
		const [a, b] = input[i + 1].trim().split(' ');
		points.push([+a, +b]);
		if (!objPoints.hasOwnProperty(+a % H_DIV)) {
			objPoints[+a % H_DIV] = [];
		}
		objPoints[+a % H_DIV].push([+a, +b]);
	}
	// console.log(points);

	// const formula = () => {
	// 	// (a, c) => b и d
	// 	const xb = (xa + xc) / 2 + (ya + yc) / 2 - ya;
	// 	const yb = (ya + yc) / 2 - (xa + xc) / 2 + xa;
	// 	const xd = (xa + xc) / 2 - (ya + yc) / 2 + ya;
	// 	const yd = (ya + yc) / 2 + (xa + xc) / 2 - xa;
	// 	// (a, b) => c и d
	// 	const xc = xb + ya - yb;
	// 	const yc = xb + yb - xa;
	// 	const xd = xa + ya - yb;
	// 	const yd = ya - xa + xb;

	// 	// (a, d) => c и b
	// 	const xc = xd + yd - ya;
	// 	const yc = xa + yd - xd;
	// 	const xb = xa - ya + yd;
	// 	const yb = xa + ya - xd;
	// }
	const MAX_COORDINATE = 1000000000;
	const checkCoordinates = (arr) => {
		const result = [];
		for (let i = 0; i < arr.length; i++) {
			if (Number.isInteger(arr[i]) && Math.abs(arr[i]) <= MAX_COORDINATE) {
				result.push(arr[i]);
			}
		}
		return result;
	}
	const ac = (xa, ya, xc, yc) => checkCoordinates([(xa + xc) / 2 + (ya + yc) / 2 - ya, (ya + yc) / 2 - (xa + xc) / 2 + xa, (xa + xc) / 2 - (ya + yc) / 2 + ya, (ya + yc) / 2 + (xa + xc) / 2 - xa]);
	const ab = (xa, ya, xb, yb) => checkCoordinates([xb + ya - yb, xb + yb - xa, xa + ya - yb, ya - xa + xb]);
	const ad = (xa, ya, xd, yd) => checkCoordinates([xd + yd - ya, xa + yd - xd, xa - ya + yd, xa + ya - xd]);

	const makeSquare3 = (x1, y1, x2, y2, x3, y3) => {
		// console.log('Делаю квадрат по трём точкам:', x1, y1, x2, y2, x3, y3);
		const tempAC = ac(x1, y1, x2, y2);
		if (x3 === tempAC[0] && y3 === tempAC[1]) {
			return [tempAC[2], tempAC[3]];
		}
		if (x3 === tempAC[2] && y3 === tempAC[3]) {
			return [tempAC[0], tempAC[1]];
		}
		const tempAB = ab(x1, y1, x2, y2)
		if (x3 === tempAB[0] && y3 === tempAB[1]) {
			return [tempAB[2], tempAB[3]];
		}
		if (x3 === tempAB[2] && y3 === tempAB[3]) {
			return [tempAB[0], tempAB[1]];
		}
		const tempAD = ad(x1, y1, x2, y2)
		if (x3 === tempAD[0] && y3 === tempAD[1]) {
			return [tempAD[2], tempAD[3]];
		}
		if (x3 === tempAD[2] && y3 === tempAD[3]) {
			return [tempAD[0], tempAD[1]];
		}
		// console.log('Ошибка. Не удалось построить квадрат.');
		return 'Ошибка. Не удалось построить квадрат.'
	};
	const makeSquare2 = (x1, y1, x2, y2) => {
		// console.log('Делаю квадрат по двум точкам:', x1, y1, x2, y2);
		const tempAC = ac(x1, y1, x2, y2);
		if (tempAC.length === 4) {
			return tempAC;
		}
		const tempAB = ab(x1, y1, x2, y2)
		if (tempAB.length === 4) {
			return tempAB;
		}
		const tempAD = ad(x1, y1, x2, y2)
		if (tempAD.length === 4) {
			return tempAD;
		}
		return -1;
	};
	const makeSquare1 = (x1, y1) => {
		// console.log('Делаю квадрат по одной точке:', x1, y1);
		if (x1 === 0 && y1 === 0) {
			return [1, 1].concat(makeSquare2(x1, y1, 1, 1));
		}
		return [0, 0].concat(makeSquare2(x1, y1, 0, 0));
	};

	const check3 = () => {
		for (let i = 0; i < points.length - 1; i++) {
			for (let j = i + 1; j < points.length; j++) {
				const tempAC = ac(...points[i], ...points[j]);
				for (let k = 0; k < tempAC.length; k = k + 2) {
					if (objPoints.hasOwnProperty(tempAC[k] % H_DIV) &&
						objPoints[tempAC[k] % H_DIV].findIndex(el => el[0] === tempAC[k] && el[1] === tempAC[k + 1]) !== -1) {
						return '1\n' + makeSquare3(...points[i], ...points[j], tempAC[k], tempAC[k + 1]).join(' ');
					}
				}
			}
		}
		return -1;
	}
	const check4 = () => {
		for (let i = 0; i < points.length - 1; i++) {
			for (let j = i + 1; j < points.length; j++) {
				const tempAC = ac(...points[i], ...points[j]);
				if (tempAC.length === 4 &&
					objPoints.hasOwnProperty(tempAC[0] % H_DIV) &&
					objPoints[tempAC[0] % H_DIV].findIndex(el => el[0] === tempAC[0] && el[1] === tempAC[1]) !== -1 &&
					objPoints.hasOwnProperty(tempAC[2] % H_DIV) &&
					objPoints[tempAC[2] % H_DIV].findIndex(el => el[0] === tempAC[2] && el[1] === tempAC[3]) !== -1) {
					return 0;
				}
			}
		}
		return -1;
	}
	// console.timeEnd('read');
	// console.time('3points');
	function foo() {
		if (points.length === 1) {
			const result = makeSquare1(...points[0]);
			// console.log('3\n' + result.slice(0, 2).join(' ') + '\n' + result.slice(2, 4).join(' ') + '\n' + result.slice(4).join(' '));
			return '3\n' + result.slice(0, 2).join(' ') + '\n' + result.slice(2, 4).join(' ') + '\n' + result.slice(4).join(' ');
		}
		const result3 = check3();
		if (result3 !== -1) {
			const result4 = check4();
			if (result4 !== -1) {
				return result4;
			}
			return result3;
		}
		// console.timeEnd('3points');
		// console.time('2points');
		for (let i = 0; i < points.length - 1; i++) {
			for (let j = 1; j < points.length; j++) {
				const temp = makeSquare2(...points[i], ...points[j]);
				if (temp !== -1) {
					// console.log('2\n' + temp.slice(0, 2).join(' ') + '\n' + temp.slice(2).join(' '));
					return '2\n' + temp.slice(0, 2).join(' ') + '\n' + temp.slice(2).join(' ');
				}
			}
		}
		// console.timeEnd('2points');
	}

	console.log(foo());
	rl.close();
});