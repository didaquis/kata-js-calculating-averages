const Calculator = require('../src/index.js');

describe('Calculator test', () => {
	it('Calculator should be a class', () => {
		expect(Calculator instanceof Object).toBe(true);
	});

	it('average should be a valid method', () => {
		expect(typeof Calculator.average).toBe('function');
	});

	it('Calculate.average without arguments should return 0', () => {
		expect(Calculator.average()).toBe(0);
	});

	it('Calculate.average with arguments 3,4,5 should return 4', () => {
		expect(Calculator.average(3,4,5)).toBe(4);
	});
});
