// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,i="win32"===e.platform,o=e.env;return t=i?/[^:]\\$/:/.\/$/,function(){var e;return e=i?o.TEMP||o.TMP||(o.SystemRoot||o.windir||"")+"\\temp":o.TMPDIR||o.TMP||o.TEMP||"/tmp",t.test(e)&&(e=e.slice(0,-1)),e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("process")):"function"==typeof define&&define.amd?define(["process"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).tmpdir=t(e.require$$0);
//# sourceMappingURL=index.js.map
