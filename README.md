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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# tmpdir

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the directory for storing temporary files.



<section class="usage">

## Usage

To use in Observable,

```javascript
tmpdir = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/os-tmpdir@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/os-tmpdir/tags). For example,

```javascript
tmpdir = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/os-tmpdir@v0.1.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var tmpdir = require( 'path/to/vendor/umd/os-tmpdir/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/os-tmpdir@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.tmpdir;
})();
</script>
```

#### tmpdir()

Returns the directory for storing temporary files.

```javascript
var dir = tmpdir();
// e.g., returns '/path/to/temporary/files/directory'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-path-sep@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/os-tmpdir@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var parts = tmpdir().split( PATH_SEP );
console.log( parts );

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

-   <span class="package-name">[`@stdlib/os-configdir`][@stdlib/os/configdir]</span><span class="delimiter">: </span><span class="description">return a directory for user-specific configuration files.</span>
-   <span class="package-name">[`@stdlib/os-homedir`][@stdlib/os/homedir]</span><span class="delimiter">: </span><span class="description">return the current user's home directory.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/os-tmpdir.svg
[npm-url]: https://npmjs.org/package/@stdlib/os-tmpdir

[test-image]: https://github.com/stdlib-js/os-tmpdir/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/os-tmpdir/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/os-tmpdir/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/os-tmpdir?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/os-tmpdir.svg
[dependencies-url]: https://david-dm.org/stdlib-js/os-tmpdir/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/os-tmpdir#cli
[cli-url]: https://github.com/stdlib-js/os-tmpdir/tree/cli
[@stdlib/os-tmpdir]: https://github.com/stdlib-js/os-tmpdir/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/os-tmpdir/tree/deno
[umd-url]: https://github.com/stdlib-js/os-tmpdir/tree/umd
[esm-url]: https://github.com/stdlib-js/os-tmpdir/tree/esm
[branches-url]: https://github.com/stdlib-js/os-tmpdir/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/os-tmpdir/main/LICENSE

<!-- <related-links> -->

[@stdlib/os/configdir]: https://github.com/stdlib-js/os-configdir/tree/umd

[@stdlib/os/homedir]: https://github.com/stdlib-js/os-homedir/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
