// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,v,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,h,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function w(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function S(r){var n,t,e,o,a,f,c,s,p,l,y,h,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,h=e.padRight,g=void 0,(g=y-l.length)<0?l:l=h?l+w(g):w(g)+l)),f+=e.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function k(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(j(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function I(r){var n,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[k(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return S.apply(null,n)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,P=x.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,n,t.get),a&&O&&O.call(r,n,t.set),r};function G(r,n,t){$(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return r!=r}var W=Math.floor,C=Math.ceil;function M(r){return r<0?C(r):W(r)}var R=Number,Z=R.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,X=1023,Y=1023,z=-1023,B=-1074;function D(r){return r===q||r===Z}var J=2147483648,K=2147483647,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var nr,tr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,or="function"==typeof ir?ir.toStringTag:"",ar=rr()?function(r){var n,t,e,i,o;if(null==r)return tr.call(r);t=r[or],o=or,n=null!=(i=r)&&er.call(i,o);try{r[or]=void 0}catch(n){return tr.call(r)}return e=tr.call(r),n?r[or]=t:delete r[or],e}:function(r){return tr.call(r)},ur="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,n,t;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===ar(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,pr=nr,lr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,hr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===ar(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var gr,dr=sr,vr="function"==typeof Uint8Array,br="function"==typeof Uint8Array?Uint8Array:null,mr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,n,t;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,256,257]),t=n,r=(vr&&t instanceof Uint8Array||"[object Uint8Array]"===ar(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var wr,Nr=gr,Ar="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,Er="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,n,t;if("function"!=typeof _r)return!1;try{n=new _r(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===ar(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var Sr,Ur={uint16:wr,uint8:Nr};(Sr=new Ur.uint16(1))[0]=4660;var jr,kr,Ir=52===new Ur.uint8(Sr.buffer)[0];!0===Ir?(jr=1,kr=0):(jr=0,kr=1);var xr={HIGH:jr,LOW:kr},Tr=new dr(1),Fr=new pr(Tr.buffer),Or=xr.HIGH,Vr=xr.LOW;function Pr(r,n,t,e){return Tr[0]=r,n[e]=Fr[Or],n[e+t]=Fr[Vr],n}function $r(r){return Pr(r,[0,0],1,0)}L($r,"assign",Pr);var Gr,Lr,Hr=!0===Ir?1:0,Wr=new dr(1),Cr=new pr(Wr.buffer);function Mr(r){return Wr[0]=r,Cr[Hr]}!0===Ir?(Gr=1,Lr=0):(Gr=0,Lr=1);var Rr={HIGH:Gr,LOW:Lr},Zr=new dr(1),qr=new pr(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,n){return qr[Xr]=r,qr[Yr]=n,Zr[0]}var Br=[0,0];function Dr(r,n){var t,e;return $r.assign(r,Br,1,0),t=Br[0],t&=K,e=Mr(n),zr(t|=e&=J,Br[1])}var Jr=22250738585072014e-324;function Kr(r){return Math.abs(r)}var Qr=4503599627370496;function rn(r,n,t,e){return H(r)||D(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Kr(r)<Jr?(n[e]=r*Qr,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}L((function(r){return rn(r,[0,0],1,0)}),"assign",rn);var nn=2146435072,tn=2220446049250313e-31,en=2148532223,on=[0,0],an=[0,0];function un(r,n){var t,e;return 0===n||0===r||H(r)||D(r)?r:(rn(r,on,1,0),r=on[0],n+=on[1],n+=function(r){var n=Mr(r);return(n=(n&nn)>>>20)-X|0}(r),n<B?Dr(0,r):n>Y?r<0?Z:q:(n<=z?(n+=52,e=tn):e=1,$r.assign(r,an,1,0),t=an[0],t&=en,e*zr(t|=n+X<<20,an[1])))}var fn=.6931471803691238,cn=1.9082149292705877e-10,sn=1.4426950408889634,pn=709.782712893384,ln=-745.1332191019411,yn=1/(1<<28),hn=-yn;function gn(r){var n;return H(r)||r===q?r:r===Z?0:r>pn?q:r<ln?0:r>hn&&r<yn?1+r:function(r,n,t){var e,i,o,a;return un(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(n=M(r<0?sn*r-.5:sn*r+.5))*fn,n*cn,n)}function dn(r,n,t){var e;return H(r)||H(n)||H(t)||t<=0?NaN:(e=(r-n)/t,r<n?.5*gn(e):1-.5*gn(-e))}function vn(r){return function(){return r}}function bn(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function mn(r){return"number"==typeof r}L(dn,"factory",(function(r,n){return H(r)||H(n)||n<=0?vn(NaN):function(t){var e;return H(t)?NaN:(e=(t-r)/n,t<r?.5*gn(e):1-.5*gn(-e))}}));var wn=R.prototype.toString,Nn=rr();function An(r){return"object"==typeof r&&(r instanceof R||(Nn?function(r){try{return wn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ar(r)))}function _n(r){return mn(r)||An(r)}function En(r){return mn(r)&&r>0}function Sn(r){return An(r)&&r.valueOf()>0}function Un(r){return En(r)||Sn(r)}function jn(r){return mn(r)&&H(r)}function kn(r){return An(r)&&H(r.valueOf())}function In(r){return jn(r)||kn(r)}L(_n,"isPrimitive",mn),L(_n,"isObject",An),L(Un,"isPrimitive",En),L(Un,"isObject",Sn),L(In,"isPrimitive",jn),L(In,"isObject",kn);var xn=!0===Ir?1:0,Tn=new dr(1),Fn=new pr(Tn.buffer);function On(r,n){return Tn[0]=r,Fn[xn]=n>>>0,Tn[0]}var Vn=.6931471803691238,Pn=1.9082149292705877e-10,$n=0x40000000000000,Gn=.3333333333333333,Ln=1048575,Hn=2146435072,Wn=1048576,Cn=1072693248;function Mn(r){var n,t,e,i,o,a,u,f,c,s,p,l;return 0===r?Z:H(r)||r<0?NaN:(o=0,(t=Mr(r))<Wn&&(o-=54,t=Mr(r*=$n)),t>=Hn?r+r:(o+=(t>>20)-X|0,o+=(f=614244+(t&=Ln)&1048576|0)>>20|0,u=(r=On(r,t|f^Cn))-1,(Ln&2+t)<3?0===u?0===o?0:o*Vn+o*Pn:(a=u*u*(.5-Gn*u),0===o?u-a:o*Vn-(a-o*Pn-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*Vn-(n-(s*(n+a)+o*Pn)-u)):0===o?u-s*(u-a):o*Vn-(s*(u-a)-o*Pn-u))))}function Rn(r,n){return H(r)||H(n)||n<=0?NaN:Mn(2*n*2.718281828459045)}function Zn(r,n){return H(r)||H(n)||n<=0?NaN:3}function qn(r,n){return H(r)||H(n)||n<=0?NaN:r}function Xn(r,n){return H(r)||H(n)||n<=0?NaN:r}function Yn(r,n){return H(r)||H(n)||n<=0?NaN:r}function zn(r,n){return H(r)||H(n)||n<=0?NaN:0}function Bn(r,n){return H(r)||H(n)||n<=0?NaN:1.4142135623730951*n}function Dn(r,n){return H(r)||H(n)||n<=0?NaN:2*n*n}var Jn=.34657359027997264,Kn=709.782712893384,Qn=.6931471803691238,rt=1.9082149292705877e-10,nt=1.4426950408889634,tt=38.816242111356935,et=1.0397207708399179;function it(r){var n,t,e,i,o,a,u,f,c,s,p,l,y;if(r===q||H(r))return r;if(r===Z)return-1;if(0===r)return r;if(r<0?(e=!0,f=-r):(e=!1,f=r),f>=tt){if(e)return-1;if(f>=Kn)return q}if(a=0|Mr(f),f>Jn)f<et?e?(i=r+Qn,o=-rt,y=-1):(i=r-Qn,o=rt,y=1):(y=e?nt*r-.5:nt*r+.5,i=r-(p=y|=0)*Qn,o=p*rt),s=i-(r=i-o)-o;else{if(a<1016070144)return r;y=0}return u=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),l=c*((u-(p=3-u*n))/(6-r*p)),0===y?r-(r*l-c):(t=zr(X+y<<20,0),l=r*(l-s)-s,l-=c,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(f=1-(l-r),1024===y?f=On(f,i=Mr(f)+(y<<20)|0):f*=t,f-1):(p=1,y<20?f=(p=On(p,i=1072693248-(2097152>>y)|0))-(l-r):(f=r-(l+(p=On(p,i=X-y<<20|0))),f+=1),f*=t))}var ot=.6931471803691238,at=1.9082149292705877e-10,ut=.41421356237309503,ft=-.2928932188134525,ct=1.862645149230957e-9,st=5551115123125783e-32,pt=9007199254740992,lt=.6666666666666666;function yt(r){var n,t,e,i,o,a,u,f,c,s;if(r<-1||H(r))return NaN;if(-1===r)return Z;if(r===q)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<ut){if(e<ct)return e<st?r:r-r*r*.5;r>ft&&(s=0,i=r,t=1)}return 0!==s&&(e<pt?(o=(s=((t=Mr(c=1+r))>>20)-X)>0?1-(c-r):r-(c-1),o/=c):(s=((t=Mr(c=r))>>20)-X,o=0),(t&=1048575)<434334?c=On(c,1072693248|t):(s+=1,c=On(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*ot+(o+=s*at):s*ot-((f=n*(1-lt*i))-(s*at+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-a*(n+f)):s*ot-(n-(a*(n+f)+(s*at+o))-i))}var ht=-.6931471805599453;function gt(r,n,t){var e;return H(r)||H(n)||H(t)||t<=0?NaN:(e=(r-n)/t,r<n?ht+e:ht+yt(-it(-e)))}function dt(r,n,t){return H(r)||H(n)||H(t)||t<=0?NaN:-(Kr((r-n)/t)+Mn(2*t))}function vt(r){return W(r)===r}function bt(r){return vt(r/2)}function mt(r){return bt(r>0?r-1:r+1)}L(gt,"factory",(function(r,n){return H(r)||H(n)||n<=0?vn(NaN):function(t){var e;return H(t)?NaN:(e=(t-r)/n,t<r?ht+e:ht+yt(-it(-e)))}})),L(dt,"factory",(function(r,n){return H(r)||H(n)||n<=0?vn(NaN):function(t){return H(t)?NaN:-(Kr((t-r)/n)+Mn(2*n))}}));var wt=Math.sqrt,Nt=!0===Ir?0:1,At=new dr(1),_t=new pr(At.buffer);function Et(r,n){return At[0]=r,_t[Nt]=n>>>0,At[0]}function St(r){return 0|r}var Ut=1072693247,jt=1e300,kt=1e-300,It=1048575,xt=1048576,Tt=1072693248,Ft=536870912,Ot=524288,Vt=20,Pt=9007199254740992,$t=.9617966939259756,Gt=.9617967009544373,Lt=-7.028461650952758e-9,Ht=[1,1.5],Wt=[0,.5849624872207642],Ct=[0,1.350039202129749e-8],Mt=1.4426950408889634,Rt=1.4426950216293335,Zt=1.9259629911266175e-8,qt=.6931471805599453,Xt=1048575,Yt=1048576,zt=1071644672,Bt=20,Dt=.6931471824645996,Jt=-1.904654299957768e-9,Kt=1072693247,Qt=1105199104,re=1139802112,ne=1083179008,te=1072693248,ee=1083231232,ie=3230714880,oe=31,ae=1e300,ue=1e-300,fe=8008566259537294e-32,ce=[0,0],se=[0,0];function pe(r,n){var t,e,i,o,a,u,f,c,s,p,l,y,h,g;if(H(r)||H(n))return NaN;if($r.assign(n,ce,1,0),a=ce[0],0===ce[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return wt(r);if(-.5===n)return 1/wt(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(D(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Kr(r)<1==(n===q)?0:q}(r,n)}if($r.assign(r,ce,1,0),o=ce[0],0===ce[1]){if(0===o)return function(r,n){return n===Z?q:n===q?0:n>0?mt(n)?r:0:mt(n)?Dr(q,r):q}(r,n);if(1===r)return 1;if(-1===r&&mt(n))return-1;if(D(r))return r===Z?pe(-0,-n):n<0?0:q}if(r<0&&!1===vt(n))return(r-r)/(r-r);if(i=Kr(r),t=o&K|0,e=a&K|0,f=a>>>oe|0,u=(u=o>>>oe|0)&&mt(n)?-1:1,e>Qt){if(e>re)return function(r,n){return(Mr(r)&K)<=Ut?n<0?jt*jt:kt*kt:n>0?jt*jt:kt*kt}(r,n);if(t<Kt)return 1===f?u*ae*ae:u*ue*ue;if(t>te)return 0===f?u*ae*ae:u*ue*ue;l=function(r,n){var t,e,i,o,a,u,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*Zt-o*Mt)-((e=Et(e=(a=Rt*i)+u,0))-a),r[0]=e,r[1]=t,r}(se,i)}else l=function(r,n,t){var e,i,o,a,u,f,c,s,p,l,y,h,g,d,v,b,m,w,N,A,_;return w=0,t<xt&&(w-=53,t=Mr(n*=Pt)),w+=(t>>Vt)-X|0,t=(N=t&It|0)|Tt|0,N<=235662?A=0:N<767610?A=1:(A=0,w+=1,t-=xt),a=Et(i=(b=(n=On(n,t))-(c=Ht[A]))*(m=1/(n+c)),0),e=(t>>1|Ft)+Ot,f=On(0,e+=A<<18),v=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Et(f=3+(o=a*a)+(v+=(u=m*(b-a*f-a*(n-(f-c))))*(a+i)),0),p=Et(p=(b=a*f)+(m=u*f+(v-(f-3-o))*i),0),l=Gt*p,g=(y=Lt*p+(m-(p-b))*$t+Ct[A])-((h=Et(h=l+y+(s=Wt[A])+(d=w),0))-d-s-l),r[0]=h,r[1]=g,r}(se,i,t);if(y=(p=(n-(c=Et(n,0)))*l[0]+n*l[1])+(s=c*l[0]),$r.assign(y,ce,1,0),h=St(ce[0]),g=St(ce[1]),h>=ne){if(0!=(h-ne|g))return u*ae*ae;if(p+fe>y-s)return u*ae*ae}else if((h&K)>=ee){if(0!=(h-ie|g))return u*ue*ue;if(p<=y-s)return u*ue*ue}return y=function(r,n,t){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&K|0)>>Bt)-X|0,c=0,s>zt&&(i=On(0,((c=r+(Yt>>p+1)>>>0)&~(Xt>>(p=((c&K)>>Bt)-X|0)))>>>0),c=(c&Xt|Yt)>>Bt-p>>>0,r<0&&(c=-c),n-=i),r=St(r=Mr(f=1-((f=(o=(i=Et(i=t+n,0))*Dt)+(a=(t-(i-n))*qt+i*Jt))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Bt>>>0)>>Bt<=0?un(f,c):On(f,r)}(h,s,p),u*y}function le(r,n,t){var e;return H(r)||H(n)||H(t)||t<=0||Kr(r)>=1/t?NaN:(e=t*r,gn(n*r)/(1-pe(e,2)))}function ye(r,n,t){return H(r)||H(n)||H(t)||t<=0?NaN:.5*gn(-Kr((r-n)/t))/t}function he(r){return 0===r||H(r)?r:r<0?-1:1}function ge(r,n,t){return H(n)||H(t)||H(r)||t<=0||r<0||r>1?NaN:n-t*he(r-.5)*Mn(1-2*Kr(r-.5))}function de(){var r,n;if(!(this instanceof de))return 0===arguments.length?new de:new de(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!mn(r=arguments[0])||In(r))throw new TypeError(I("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!En(n))throw new TypeError(I("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return $(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!mn(n)||In(n))throw new TypeError(I("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),$(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!En(r))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}L(le,"factory",(function(r,n){return H(r)||H(n)||n<=0?vn(NaN):function(t){var e;return Kr(t)>=1/n?NaN:(e=n*t,gn(r*t)/(1-pe(e,2)))}})),L(ye,"factory",(function(r,n){return H(r)||H(n)||n<=0?vn(NaN):function(t){return H(t)?NaN:.5*gn(-Kr((t-r)/n))/n}})),L(ge,"factory",(function(r,n){return H(r)||H(n)||n<=0?vn(NaN):function(t){return H(t)||t<0||t>1?NaN:r-n*he(t-.5)*Mn(1-2*Kr(t-.5))}})),bn(de.prototype,"entropy",(function(){return Rn(this.mu,this.b)})),bn(de.prototype,"kurtosis",(function(){return Zn(this.mu,this.b)})),bn(de.prototype,"mean",(function(){return qn(this.mu,this.b)})),bn(de.prototype,"median",(function(){return Xn(this.mu,this.b)})),bn(de.prototype,"mode",(function(){return Yn(this.mu,this.b)})),bn(de.prototype,"skewness",(function(){return zn(this.mu,this.b)})),bn(de.prototype,"stdev",(function(){return Bn(this.mu,this.b)})),bn(de.prototype,"variance",(function(){return Dn(this.mu,this.b)})),L(de.prototype,"cdf",(function(r){return dn(r,this.mu,this.b)})),L(de.prototype,"logcdf",(function(r){return gt(r,this.mu,this.b)})),L(de.prototype,"logpdf",(function(r){return dt(r,this.mu,this.b)})),L(de.prototype,"mgf",(function(r){return le(r,this.mu,this.b)})),L(de.prototype,"pdf",(function(r){return ye(r,this.mu,this.b)})),L(de.prototype,"quantile",(function(r){return ge(r,this.mu,this.b)}));var ve={};return G(ve,"cdf",dn),G(ve,"Laplace",de),G(ve,"entropy",Rn),G(ve,"kurtosis",Zn),G(ve,"logcdf",gt),G(ve,"logpdf",dt),G(ve,"mean",qn),G(ve,"median",Xn),G(ve,"mgf",le),G(ve,"mode",Yn),G(ve,"pdf",ye),G(ve,"quantile",ge),G(ve,"skewness",zn),G(ve,"stdev",Bn),G(ve,"variance",Dn),ve},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).laplace=n();
//# sourceMappingURL=index.js.map
