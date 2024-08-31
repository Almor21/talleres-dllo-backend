function findMax(numbers) {
	return numbers.reduce((prev, current) => {
		return prev < current ? current : prev;
	}, -Infinity);
}

function includes(numbers, target) {
	return numbers.some((n) => n === target);
}

function sum(numbers) {
	return numbers.reduce((prev, current) => {
		return prev + current;
	}, 0);
}

function missingNumbers(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    const result = Array.from({length: max-min-1}, (v, i) => i+min+1)
    return result.filter((v) => !numbers.includes(v));
}
