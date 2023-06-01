// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@esm/index.mjs";var e;function i(){var i;return i=s?t.TEMP||t.TMP||(t.SystemRoot||t.windir||"")+"\\temp":t.TMPDIR||t.TMP||t.TEMP||"/tmp",e.test(i)&&(i=i.slice(0,-1)),i}e=s?/[^:]\\$/:/.\/$/;export{i as default};
//# sourceMappingURL=index.mjs.map
