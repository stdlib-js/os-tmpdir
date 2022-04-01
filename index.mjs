// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@esm/index.mjs";var e,r=s,i=t;e=r?/[^:]\\$/:/.\/$/;var n=function(){var s;return s=r?i.TEMP||i.TMP||(i.SystemRoot||i.windir||"")+"\\temp":i.TMPDIR||i.TMP||i.TEMP||"/tmp",e.test(s)&&(s=s.slice(0,-1)),s};export{n as default};
//# sourceMappingURL=index.mjs.map
