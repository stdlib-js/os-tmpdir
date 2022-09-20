// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof e.setTimeout&&setTimeout,"function"==typeof e.clearTimeout&&clearTimeout;function t(e,t){this.fun=e,this.array=t}t.prototype.run=function(){this.fun.apply(null,this.array)};var o=e.performance||{};o.now||o.mozNow||o.msNow||o.oNow||o.webkitNow;new Date;var n,i="win32"==="browser",r={};function f(){var e;return e=i?r.TEMP||r.TMP||(r.SystemRoot||r.windir||"")+"\\temp":r.TMPDIR||r.TMP||r.TEMP||"/tmp",n.test(e)&&(e=e.slice(0,-1)),e}n=i?/[^:]\\$/:/.\/$/;export{f as default};
//# sourceMappingURL=mod.js.map
