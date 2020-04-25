# @bemoje/numeric-range

A class with min and max properties and exposes methods for determining if a value is inside or outside the range between the min and max values.

#### Version

<span><a href="https://npmjs.org/@bemoje/numeric-range" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/numeric-range" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/numeric-range" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-numeric-range.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/numeric-range" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-numeric-range.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/numeric-range" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/numeric-range" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-numeric-range/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-numeric-range" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/numeric-range
npm install --save @bemoje/numeric-range
npm install --save-dev @bemoje/numeric-range
```

## Usage

```javascript
import NumericRange from '@bemoje/numeric-range'

const range = new NumericRange(1, 10)

range.isInside(4)
//=> true
range.isInside(0)
//=> false

range.isOutside(4)
//=> false
range.isOutside(0)
//=> true

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### NumericRange

A class with min and max properties and exposes methods for determining if a value is inside or outside the range between the min and max values.

##### Parameters

-   `min` **[number][7]** The minimum value of the range

-   `max` **[number][7]** The maximum value of the range

#### isInside

##### Parameters

-   `value` **[number][7]** The numeric value to determine whether or not is inside the range.

##### Returns
**[boolean][8]** boolean

#### isOutside

##### Parameters

-   `value` **[number][7]** The numeric value to determine whether or not is outside the range.

##### Returns
**[boolean][8]** boolean

[1]: #numericrange

[2]: #parameters

[3]: #isinside

[4]: #parameters-1

[5]: #isoutside

[6]: #parameters-2

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean