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
	let x = +input[0].trim();	// у вас есть x солдат
	let y = +input[1].trim();	// казарма имеет y единиц здоровья
	const p = +input[2].trim();	// казарма производит p солдат за раунд
	let countP = 0;	// кол-во готовых солдат казармы

	let chance = -1;
	const check = (version, x, y, countP) => {
		result = 0;	// раунд
		// console.log(`Раунд ${result}: ${x}, ${y}, ${countP} / ${p}`);
		while (y > 0 || countP > 0) {		// разрушить казарму и убить всех солдат противника
			let tempX = x;	// ударная сила солдат x
			if (version === 0 && chance === -1 && y < tempX) {
				chance = result;
			}
			if (result === version && result !== 0) {	// удар по казарме
				tempX = tempX - y;
				y = 0;
				countP = countP - tempX;
			}
			else {
				// если готовых солдат казарм меньше солдат x, то обнулить
				if (countP < tempX) {
					tempX = tempX - countP;
					countP = 0;
				}
				// если мощность казарм меньше количества солдат x
				if (y < tempX) {
					tempX = tempX - y;	// потратить мощь солдат x на удаление казармы
					countP = countP - tempX;	// и снижение солдат казармы
					if (countP < 0) {	// не принципиально, можно не обнулять отрицательные
						countP = 0;
					}
					y = 0;
				} else {
					y = y - tempX;	// уменьшить мощность казармы
				}
				// tempX = 0;	// ударная сила солдат x закончилась - можно не занулять
			}
			x = x - countP;	// снижение солдат x в результате контратаки солдат казарм
			if (x <= 0) {
				return -1;
			}
			if (y > 0) {	// если казармы целы
				countP = countP + p;	// производство казармами солдат
			}
			result++;
			// console.log(`Раунд ${result}: ${x}, ${y}, ${countP}`);
		}
		return result;
	}

	let version = 0;
	let bestResult = check(version, x, y, countP);
	for (let i = chance; i <= bestResult; i++) {
		const temp = check(i, x, y, countP);
		if (temp >= 0 && temp < bestResult) {
			bestResult = temp;
		}
	}

	console.log(bestResult);
	rl.close();
});