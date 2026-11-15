"use strict";var e=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(b){throw (r=0, b)}};};var t=e(function(y,v){
var a=require('@stdlib/assert-is-number/dist').isPrimitive;function q(i){return a(i)&&i>0}v.exports=q
});var s=e(function(R,c){
var P=require('@stdlib/assert-is-number/dist').isObject;function O(i){return P(i)&&i.valueOf()>0}c.exports=O
});var m=e(function(g,n){
var N=t(),f=s();function j(i){return N(i)||f(i)}n.exports=j
});var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=m(),p=t(),x=s();o(u,"isPrimitive",p);o(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
