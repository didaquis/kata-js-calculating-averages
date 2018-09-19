class Calculator {
	static average(...arg) {
		let sum = arg.reduce((accumulator, a) => {
			return accumulator += a;
		}, 0);

		return (sum / arg.length) || 0;
	}
}

module.exports = Calculator;