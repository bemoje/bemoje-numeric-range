import NumericRange from '../src/numeric-range'

describe('NumericRange class', () => {
	test('can instantiate instances', () => {
		expect(!!new NumericRange(1, 10)).toBe(true)
	})
	test('can identify when numbers are inside a range', () => {
		const range = new NumericRange(1, 10)
		expect(range.isInside(1)).toBe(true)
		expect(range.isInside(4)).toBe(true)
		expect(range.isInside(6.42)).toBe(true)
		expect(range.isInside(10)).toBe(true)
		expect(range.isInside(0)).toBe(false)
		expect(range.isInside(42)).toBe(false)
		expect(range.isInside(-6.42)).toBe(false)
	})
	test('can identify when numbers are outside a range', () => {
		const range = new NumericRange(1, 10)
		expect(range.isOutside(1)).toBe(false)
		expect(range.isOutside(4)).toBe(false)
		expect(range.isOutside(6.42)).toBe(false)
		expect(range.isOutside(10)).toBe(false)
		expect(range.isOutside(0)).toBe(true)
		expect(range.isOutside(42)).toBe(true)
		expect(range.isOutside(-6.42)).toBe(true)
	})
})
