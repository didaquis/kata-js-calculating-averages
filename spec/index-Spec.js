const Calculator = require('../src/index.js');

describe('First test', () => {
	it('foo return value', () => {
		let calculate = Calculator.average();
		expect(calculate).toBe(0);
	});
});
