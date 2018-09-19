class Calculator {
	static average() {

		if (!arguments.length) {
			return 0;
		}

		let sum = 0;
		for (let arg in arguments) {
			sum += arg;
		}

		return sum / arguments.length;
	}
}

module.exports = Calculator;