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

	it('Calculate.average with arguments 3,4,5,6,7 should return 5', () => {
		expect(Calculator.average(3,4,5,6,7)).toBe(5);
	});

	it('Calculate.average with arguments 8,8 should return 8', () => {
		expect(Calculator.average(8,8)).toBe(8);
	});

	it('Calculate.average with arguments -4,0 should return -2', () => {
		expect(Calculator.average(-4,0)).toBe(-2);
	});

	it('Calculate.average with arguments -4,-2 should return -3', () => {
		expect(Calculator.average(-4,-2)).toBe(-3);
	});
});
