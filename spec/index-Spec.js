const Calculator = require('../src/index.js');

describe('Calculator test', () => {
	it('Calculator should be a class', () => {
		expect(Calculator instanceof Object).toBe(true);
	});

	it('average should be a valid method', () => {
		expect(typeof Calculator.average).toBe('function');
	});
});
