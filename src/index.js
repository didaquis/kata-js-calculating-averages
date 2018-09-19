class Calculator {
	static average() {

		if (!arguments.length) {
			return 0;
		}

		let sum = 0;
		for (let i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}

		return sum / arguments.length;
	}
}

module.exports = Calculator;