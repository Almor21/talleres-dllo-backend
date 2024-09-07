function desglosarString(str, tp) {
	const vowels = 'aeiou'.split('');
	const chrs = str.split('');

	switch (tp) {
		case 'vocales':
			return chrs.filter((l) => vowels.includes(l)).length;
		case 'consonantes':
			return chrs.filter((l) => !vowels.includes(l)).length;
		default:
			return -1;
	}
}

function twoSum(numbers, num) {
	let comp = numbers.map((n) => num - n);
	comp = comp.filter((n, index) => index !== numbers.indexOf(n));

	const valid = comp.filter((n) => numbers.includes(n));
	return valid.map((n) => numbers.indexOf(n));
}

function conversionRomana(str) {
	const mapping = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	return str.split('').reduce((acc, current, index, array) => {
		const actual = mapping[current];
		const next = mapping[array[index + 1]];

		if (next && actual < next) {
			return acc + next - actual - next;
		}

		return acc + actual;
	}, 0);
}
