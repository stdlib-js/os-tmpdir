// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).tmpdir=t()}(this,(function(){"use strict";var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};"function"==typeof e.setTimeout&&setTimeout,"function"==typeof e.clearTimeout&&clearTimeout;function t(e,t){this.fun=e,this.array=t}t.prototype.run=function(){this.fun.apply(null,this.array)};var o=e.performance||{};o.now||o.mozNow||o.msNow||o.oNow||o.webkitNow;new Date;var n,i="win32"==="browser",f={};return n=i?/[^:]\\$/:/.\/$/,function(){var e;return e=i?f.TEMP||f.TMP||(f.SystemRoot||f.windir||"")+"\\temp":f.TMPDIR||f.TMP||f.TEMP||"/tmp",n.test(e)&&(e=e.slice(0,-1)),e}}));
//# sourceMappingURL=index.js.map