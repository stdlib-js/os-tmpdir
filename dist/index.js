"use strict";var m=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var a=m(function(v,u){
var s=require('@stdlib/assert-is-windows/dist'),r=require('@stdlib/process-env/dist'),i;s?i=/[^:]\\$/:i=/.\/$/;function p(){var e;return s?e=r.TEMP||r.TMP||(r.SystemRoot||r.windir||"")+"\\temp":e=r.TMPDIR||r.TMP||r.TEMP||"/tmp",i.test(e)&&(e=e.slice(0,-1)),e}u.exports=p
});var n=a();module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
