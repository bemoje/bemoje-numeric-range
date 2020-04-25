(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['numeric-range'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && assertArgs.hasOwnProperty('default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && assertType.hasOwnProperty('default') ? assertType['default'] : assertType;

	/**
	 * A class with min and max properties and exposes methods for determining if a value is inside or outside the range between the min and max values.
	 */
	class NumericRange {
		/**
		 * @param {number} [min=Number.MIN_SAFE_INTEGER] - The minimum value of the range
		 * @param {number} [max=Number.MAX_SAFE_INTEGER] - The maximum value of the range
		 */
		constructor(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
			// try corce to number
			min = Number(min);
			max = Number(max);

			// check type
			assertType(Number, min);
			assertType(Number, max);

			// set properties
			this.min = min;
			this.max = max;
		}

		/**
		 * @param {number} value - The numeric value to determine whether or not is inside the range.
		 * @returns {boolean} boolean
		 */
		isInside(value) {
			assertArgs(value);
			assertType(Number, value);
			return value <= this.max && value >= this.min
		}

		/**
		 * @param {number} value - The numeric value to determine whether or not is outside the range.
		 * @returns {boolean} boolean
		 */
		isOutside(value) {
			assertArgs(value);
			assertType(Number, value);
			return value > this.max || value < this.min
		}
	}

	return NumericRange;

})));
