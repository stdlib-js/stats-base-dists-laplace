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

# Laplace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Laplace distribution.



<section class="usage">

## Usage

```javascript
import laplace from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { Laplace, cdf, entropy, kurtosis, logcdf, logpdf, mean, median, mgf, mode, pdf, quantile, skewness, stdev, variance } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace@deno/mod.js';
```

#### laplace

Laplace distribution.

```javascript
var dist = laplace;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, mu, b )`][@stdlib/stats/base/dists/laplace/cdf]</span><span class="delimiter">: </span><span class="description">Laplace distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, mu, b )`][@stdlib/stats/base/dists/laplace/logcdf]</span><span class="delimiter">: </span><span class="description">Laplace distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, mu, b )`][@stdlib/stats/base/dists/laplace/logpdf]</span><span class="delimiter">: </span><span class="description">Laplace distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`mgf( t, mu, b )`][@stdlib/stats/base/dists/laplace/mgf]</span><span class="delimiter">: </span><span class="description">Laplace distribution moment-generating function (MGF).</span>
-   <span class="signature">[`pdf( x, mu, b )`][@stdlib/stats/base/dists/laplace/pdf]</span><span class="delimiter">: </span><span class="description">Laplace distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, mu, b )`][@stdlib/stats/base/dists/laplace/quantile]</span><span class="delimiter">: </span><span class="description">Laplace distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( mu, b )`][@stdlib/stats/base/dists/laplace/entropy]</span><span class="delimiter">: </span><span class="description">Laplace distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( mu, b )`][@stdlib/stats/base/dists/laplace/kurtosis]</span><span class="delimiter">: </span><span class="description">Laplace distribution excess kurtosis.</span>
-   <span class="signature">[`mean( mu, b )`][@stdlib/stats/base/dists/laplace/mean]</span><span class="delimiter">: </span><span class="description">Laplace distribution expected value.</span>
-   <span class="signature">[`median( mu, b )`][@stdlib/stats/base/dists/laplace/median]</span><span class="delimiter">: </span><span class="description">Laplace distribution median.</span>
-   <span class="signature">[`mode( mu, b )`][@stdlib/stats/base/dists/laplace/mode]</span><span class="delimiter">: </span><span class="description">Laplace distribution mode.</span>
-   <span class="signature">[`skewness( mu, b )`][@stdlib/stats/base/dists/laplace/skewness]</span><span class="delimiter">: </span><span class="description">Laplace distribution skewness.</span>
-   <span class="signature">[`stdev( mu, b )`][@stdlib/stats/base/dists/laplace/stdev]</span><span class="delimiter">: </span><span class="description">Laplace distribution standard deviation.</span>
-   <span class="signature">[`variance( mu, b )`][@stdlib/stats/base/dists/laplace/variance]</span><span class="delimiter">: </span><span class="description">Laplace distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating a [Laplace][laplace-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Laplace( [mu, b] )`][@stdlib/stats/base/dists/laplace/ctor]</span><span class="delimiter">: </span><span class="description">Laplace distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Laplace = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace' ).Laplace;

var dist = new Laplace( 2.0, 4.0 );

var y = dist.cdf( 0.5 );
// returns ~0.344
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import laplace from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-laplace@deno/mod.js';

console.log( objectKeys( laplace ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-laplace.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-laplace

[test-image]: https://github.com/stdlib-js/stats-base-dists-laplace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-laplace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-laplace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-laplace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-laplace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-laplace/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-laplace/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-laplace/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-laplace/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-laplace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-laplace/main/LICENSE

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/laplace/ctor]: https://github.com/stdlib-js/stats-base-dists-laplace-ctor/tree/deno

[@stdlib/stats/base/dists/laplace/entropy]: https://github.com/stdlib-js/stats-base-dists-laplace-entropy/tree/deno

[@stdlib/stats/base/dists/laplace/kurtosis]: https://github.com/stdlib-js/stats-base-dists-laplace-kurtosis/tree/deno

[@stdlib/stats/base/dists/laplace/mean]: https://github.com/stdlib-js/stats-base-dists-laplace-mean/tree/deno

[@stdlib/stats/base/dists/laplace/median]: https://github.com/stdlib-js/stats-base-dists-laplace-median/tree/deno

[@stdlib/stats/base/dists/laplace/mode]: https://github.com/stdlib-js/stats-base-dists-laplace-mode/tree/deno

[@stdlib/stats/base/dists/laplace/skewness]: https://github.com/stdlib-js/stats-base-dists-laplace-skewness/tree/deno

[@stdlib/stats/base/dists/laplace/stdev]: https://github.com/stdlib-js/stats-base-dists-laplace-stdev/tree/deno

[@stdlib/stats/base/dists/laplace/variance]: https://github.com/stdlib-js/stats-base-dists-laplace-variance/tree/deno

[@stdlib/stats/base/dists/laplace/cdf]: https://github.com/stdlib-js/stats-base-dists-laplace-cdf/tree/deno

[@stdlib/stats/base/dists/laplace/logcdf]: https://github.com/stdlib-js/stats-base-dists-laplace-logcdf/tree/deno

[@stdlib/stats/base/dists/laplace/logpdf]: https://github.com/stdlib-js/stats-base-dists-laplace-logpdf/tree/deno

[@stdlib/stats/base/dists/laplace/mgf]: https://github.com/stdlib-js/stats-base-dists-laplace-mgf/tree/deno

[@stdlib/stats/base/dists/laplace/pdf]: https://github.com/stdlib-js/stats-base-dists-laplace-pdf/tree/deno

[@stdlib/stats/base/dists/laplace/quantile]: https://github.com/stdlib-js/stats-base-dists-laplace-quantile/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
