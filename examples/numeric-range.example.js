import NumericRange from '../src/numeric-range'

const range = new NumericRange(1, 10)

range.isInside(4)
//=> true
range.isInside(0)
//=> false

range.isOutside(4)
//=> false
range.isOutside(0)
//=> true
