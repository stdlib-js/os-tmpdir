"use strict";var p=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(m){throw (t=0, m)}};};var a=p(function(M,u){
var s=require('@stdlib/assert-is-windows/dist'),r=require('@stdlib/process-env/dist'),i;s?i=/[^:]\\$/:i=/.\/$/;function n(){var e;return s?e=r.TEMP||r.TMP||(r.SystemRoot||r.windir||"")+"\\temp":e=r.TMPDIR||r.TMP||r.TEMP||"/tmp",i.test(e)&&(e=e.slice(0,-1)),e}u.exports=n
});var o=a();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
