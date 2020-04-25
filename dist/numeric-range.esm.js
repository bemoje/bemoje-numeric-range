/**
 * A class with min and max properties and exposes methods for determining if a value is inside or outside the range between the min and max values.
 */
class NumericRange {
	/**
	 * @param {number} min - The minimum value of the range
	 * @param {number} max - The maximum value of the range
	 */
	constructor(min, max) {
		this.min = min;
		this.max = max;
	}

	/**
	 * @param {number} value - The numeric value to determine whether or not is inside the range.
	 * @returns {boolean} boolean
	 */
	isInside(value) {
		return value <= this.max && value >= this.min
	}

	/**
	 * @param {number} value - The numeric value to determine whether or not is outside the range.
	 * @returns {boolean} boolean
	 */
	isOutside(value) {
		return value > this.max || value < this.min
	}
}

export default NumericRange;
