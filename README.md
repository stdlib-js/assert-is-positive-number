<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isPositiveNumber

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a number having a positive value.



<section class="usage">

## Usage

To use in Observable,

```javascript
isPositiveNumber = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isPositiveNumber = require( 'path/to/vendor/umd/assert-is-positive-number/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isPositiveNumber;
})();
</script>
```

#### isPositiveNumber( value )

Tests if a `value` is a `number` having a positive value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPositiveNumber( 5.0 );
// returns true

bool = isPositiveNumber( new Number( 5.0 ) );
// returns true

bool = isPositiveNumber( 3.14 );
// returns true

bool = isPositiveNumber( -5.0 );
// returns false

bool = isPositiveNumber( null );
// returns false
```

#### isPositiveNumber.isPrimitive( value )

Tests if a `value` is a primitive `number` having a positive value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPositiveNumber.isPrimitive( 3.0 );
// returns true

bool = isPositiveNumber.isPrimitive( new Number( 3.0 ) );
// returns false
```

#### isPositiveNumber.isObject( value )

Tests if a `value` is a `Number` object having a positive value.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPositiveNumber.isObject( 3.0 );
// returns false

bool = isPositiveNumber.isObject( new Number( 3.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isPositiveNumber( 5.0 );
// returns true

bool = isPositiveNumber( new Number( 5.0 ) );
// returns true

bool = isPositiveNumber( 3.14 );
// returns true

bool = isPositiveNumber( 0.0 );
// returns false

bool = isPositiveNumber( -5.0 );
// returns false

bool = isPositiveNumber( '5' );
// returns false

bool = isPositiveNumber( null );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-positive-number.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-positive-number

[test-image]: https://github.com/stdlib-js/assert-is-positive-number/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-positive-number/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-positive-number/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-positive-number?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-positive-number.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-positive-number/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-positive-number/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-positive-number/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-positive-number/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-positive-number/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-positive-number/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
