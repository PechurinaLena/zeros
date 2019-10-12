module.exports = function zeros(expression) {
	// your solution

	let result = 0;

	if (expression % 5 === 0) {
		while (expression) {
			result *= expression++;
		}
	} else if (expression % 2 === 0) {
		result *= expression % 2;
	}

	for (let i = 5; i < expression; i *= 5) {
		result += Math.floor(expression / i);
	}
	return result;
};
