// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,u=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,p,l;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),p="get"in f,l="set"in f,s&&(p||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,n,f.get),l&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}var l=Math.floor,y=Math.ceil;function v(r){return r<0?y(r):l(r)}var g=Number,h=g.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY;function d(r){return r===b||r===h}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return m&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var E=w()?function(r){var n,t,e,i,a;if(null==r)return N.call(r);t=r[_],a=_,n=null!=(i=r)&&A.call(i,a);try{r[_]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[_]=t:delete r[_],e}:function(r){return N.call(r)},S="function"==typeof Uint32Array;var U="function"==typeof Uint32Array?Uint32Array:null;var k,j="function"==typeof Uint32Array?Uint32Array:void 0;k=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===E(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I=k,x="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var O,T="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),t=n,r=(x&&t instanceof Float64Array||"[object Float64Array]"===E(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var V=O,P="function"==typeof Uint8Array;var $="function"==typeof Uint8Array?Uint8Array:null;var G,L="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof $)return!1;try{n=new $(n=[1,3.14,-3.14,256,257]),t=n,r=(P&&t instanceof Uint8Array||"[object Uint8Array]"===E(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var H=G,W="function"==typeof Uint16Array;var C="function"==typeof Uint16Array?Uint16Array:null;var M,R="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),t=n,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===E(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?R:function(){throw new Error("not implemented")};var Z,q={uint16:M,uint8:H};(Z=new q.uint16(1))[0]=4660;var X,Y,z=52===new q.uint8(Z.buffer)[0];!0===z?(X=1,Y=0):(X=0,Y=1);var B={HIGH:X,LOW:Y},D=new V(1),J=new I(D.buffer),K=B.HIGH,Q=B.LOW;function rr(r,n,t,e){return D[0]=r,n[e]=J[K],n[e+t]=J[Q],n}function nr(r){return rr(r,[0,0],1,0)}s(nr,"assign",rr);var tr,er,ir=!0===z?1:0,ar=new V(1),or=new I(ar.buffer);function ur(r){return ar[0]=r,or[ir]}!0===z?(tr=1,er=0):(tr=0,er=1);var fr={HIGH:tr,LOW:er},cr=new V(1),sr=new I(cr.buffer),pr=fr.HIGH,lr=fr.LOW;function yr(r,n){return sr[pr]=r,sr[lr]=n,cr[0]}var vr=[0,0];function gr(r,n){var t,e;return nr.assign(r,vr,1,0),t=vr[0],t&=2147483647,e=ur(n),yr(t|=e&=2147483648,vr[1])}function hr(r){return Math.abs(r)}function br(r,n,t,e){return p(r)||d(r)?(n[e]=r,n[e+t]=0,n):0!==r&&hr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}s((function(r){return br(r,[0,0],1,0)}),"assign",br);var dr=[0,0],mr=[0,0];function wr(r,n){var t,e;return 0===n||0===r||p(r)||d(r)?r:(br(r,dr,1,0),n+=dr[1],n+=function(r){var n=ur(r);return(n=(2146435072&n)>>>20)-1023|0}(r=dr[0]),n<-1074?gr(0,r):n>1023?r<0?h:b:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr.assign(r,mr,1,0),t=mr[0],t&=2148532223,e*yr(t|=n+1023<<20,mr[1])))}function Nr(r){var n;return p(r)||r===b?r:r===h?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,i,a,o;return wr(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=v(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Ar(r,n,t){var e;return p(r)||p(n)||p(t)||t<=0?NaN:(e=(r-n)/t,r<n?.5*Nr(e):1-.5*Nr(-e))}function _r(r){return function(){return r}}function Er(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function Sr(r){return"number"==typeof r}s(Ar,"factory",(function(r,n){return p(r)||p(n)||n<=0?_r(NaN):function(t){var e;if(p(t))return NaN;if(e=(t-r)/n,t<r)return.5*Nr(e);return 1-.5*Nr(-e)}}));var Ur=g.prototype.toString;var kr=w();function jr(r){return"object"==typeof r&&(r instanceof g||(kr?function(r){try{return Ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===E(r)))}function Ir(r){return Sr(r)||jr(r)}function xr(r){return Sr(r)&&r>0}function Fr(r){return jr(r)&&r.valueOf()>0}function Or(r){return xr(r)||Fr(r)}function Tr(r){return Sr(r)&&p(r)}function Vr(r){return jr(r)&&p(r.valueOf())}function Pr(r){return Tr(r)||Vr(r)}s(Ir,"isPrimitive",Sr),s(Ir,"isObject",jr),s(Or,"isPrimitive",xr),s(Or,"isObject",Fr),s(Pr,"isPrimitive",Tr),s(Pr,"isObject",Vr);var $r=!0===z?1:0,Gr=new V(1),Lr=new I(Gr.buffer);function Hr(r,n){return Gr[0]=r,Lr[$r]=n>>>0,Gr[0]}var Wr=.6931471803691238,Cr=1.9082149292705877e-10;function Mr(r){var n,t,e,i,a,o,u,f,c,s,l,y;return 0===r?h:p(r)||r<0?NaN:(a=0,(t=ur(r))<1048576&&(a-=54,t=ur(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-1023|0,a+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=Hr(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===a?0:a*Wr+a*Cr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Wr-(o-a*Cr-u)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Wr-(n-(s*(n+o)+a*Cr)-u)):0===a?u-s*(u-o):a*Wr-(s*(u-o)-a*Cr-u))))}function Rr(r,n){return p(r)||p(n)||n<=0?NaN:Mr(2*n*2.718281828459045)}function Zr(r,n){return p(r)||p(n)||n<=0?NaN:3}function qr(r,n){return p(r)||p(n)||n<=0?NaN:r}function Xr(r,n){return p(r)||p(n)||n<=0?NaN:r}function Yr(r,n){return p(r)||p(n)||n<=0?NaN:r}function zr(r,n){return p(r)||p(n)||n<=0?NaN:0}function Br(r,n){return p(r)||p(n)||n<=0?NaN:1.4142135623730951*n}function Dr(r,n){return p(r)||p(n)||n<=0?NaN:2*n*n}var Jr=.6931471803691238,Kr=1.9082149292705877e-10;function Qr(r){var n,t,e,i,a,o,u,f,c,s,l,y;if(r===b||p(r))return r;if(r===h)return-1;if(0===r)return r;if(r<0?(t=!0,u=-r):(t=!1,u=r),u>=38.816242111356935){if(t)return-1;if(u>=709.782712893384)return b}if(a=0|ur(u),u>.34657359027997264)u<1.0397207708399179?t?(e=r+Jr,i=-Kr,y=-1):(e=r-Jr,i=Kr,y=1):(y=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,e=r-(s=y|=0)*Jr,i=s*Kr),c=e-(r=e-i)-i;else{if(a<1016070144)return r;y=0}return o=1+(f=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),l=f*((o-(s=3-o*n))/(6-r*s)),0===y?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(u=Hr(u=1-(l-r),e=ur(u)+(y<<20)|0))-1:(s=1,y<20?u=(s=Hr(s,e=1072693248-(2097152>>y)|0))-(l-r):(u=r-(l+(s=Hr(s,e=1023-y<<20|0))),u+=1),Hr(u,e=ur(u)+(y<<20)|0)))}var rn=.6931471803691238,nn=1.9082149292705877e-10;function tn(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||p(r))return NaN;if(-1===r)return h;if(r===b)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(a=(s=((t=ur(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(s=((t=ur(c=r))>>20)-1023,a=0),(t&=1048575)<434334?c=Hr(c,1072693248|t):(s+=1,c=Hr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*rn+(a+=s*nn):s*rn-((f=n*(1-.6666666666666666*i))-(s*nn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*rn-(n-(o*(n+f)+(s*nn+a))-i))}var en=-.6931471805599453;function an(r,n,t){var e;return p(r)||p(n)||p(t)||t<=0?NaN:(e=(r-n)/t,r<n?en+e:en+tn(-Qr(-e)))}function on(r,n,t){return p(r)||p(n)||p(t)||t<=0?NaN:-(hr((r-n)/t)+Mr(2*t))}function un(r){return l(r)===r}function fn(r){return un(r/2)}function cn(r){return fn(r>0?r-1:r+1)}s(an,"factory",(function(r,n){return p(r)||p(n)||n<=0?_r(NaN):function(t){var e;if(p(t))return NaN;if(e=(t-r)/n,t<r)return en+e;return en+tn(-Qr(-e))}})),s(on,"factory",(function(r,n){return p(r)||p(n)||n<=0?_r(NaN):function(t){if(p(t))return NaN;return-(hr((t-r)/n)+Mr(2*n))}}));var sn=Math.sqrt,pn=!0===z?0:1,ln=new V(1),yn=new I(ln.buffer);function vn(r,n){return ln[0]=r,yn[pn]=n>>>0,ln[0]}function gn(r){return 0|r}var hn=[1,1.5],bn=[0,.5849624872207642],dn=[0,1.350039202129749e-8];var mn=1e300,wn=1e-300,Nn=[0,0],An=[0,0];function _n(r,n){var t,e,i,a,o,u,f,c,s,l,y,v,g,m;if(p(r)||p(n))return NaN;if(nr.assign(n,Nn,1,0),o=Nn[0],0===Nn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return sn(r);if(-.5===n)return 1/sn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(d(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:hr(r)<1==(n===b)?0:b}(r,n)}if(nr.assign(r,Nn,1,0),a=Nn[0],0===Nn[1]){if(0===a)return function(r,n){return n===h?b:n===b?0:n>0?cn(n)?r:0:cn(n)?gr(b,r):b}(r,n);if(1===r)return 1;if(-1===r&&cn(n))return-1;if(d(r))return r===h?_n(-0,-n):n<0?0:b}if(r<0&&!1===un(n))return(r-r)/(r-r);if(i=hr(r),t=2147483647&a|0,e=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&cn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ur(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*mn*mn:u*wn*wn;if(t>1072693248)return 0===f?u*mn*mn:u*wn*wn;y=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=vn(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(An,i)}else y=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,y,v,g,h,b,d,m,w,N,A,_;return w=0,t<1048576&&(w-=53,t=ur(n*=9007199254740992)),w+=(t>>20)-1023|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,w+=1,t-=1048576),o=vn(i=(d=(n=Hr(n,t))-(c=hn[A]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=Hr(0,e+=A<<18),b=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=vn(f=3+(a=o*o)+(b+=(u=m*(d-o*f-o*(n-(f-c))))*(o+i)),0),g=(y=-7.028461650952758e-9*(p=vn(p=(d=o*f)+(m=u*f+(b-(f-3-a))*i),0))+.9617966939259756*(m-(p-d))+dn[A])-((v=vn(v=(l=.9617967009544373*p)+y+(s=bn[A])+(h=w),0))-h-s-l),r[0]=v,r[1]=g,r}(An,i,t);if(v=(l=(n-(c=vn(n,0)))*y[0]+n*y[1])+(s=c*y[0]),nr.assign(v,Nn,1,0),g=gn(Nn[0]),m=gn(Nn[1]),g>=1083179008){if(0!=(g-1083179008|m))return u*mn*mn;if(l+8008566259537294e-32>v-s)return u*mn*mn}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|m))return u*wn*wn;if(l<=v-s)return u*wn*wn}return v=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,y;return l=((p=2147483647&r|0)>>20)-1023|0,s=0,p>1071644672&&(e=((s=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-l>>>0,r<0&&(s=-s),n-=a=Hr(0,e)),r=gn(r=ur(c=1-((c=(o=.6931471824645996*(a=vn(a=t+n,0)))+(u=.6931471805599453*(t-(a-n))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(y=a)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?wr(c,s):Hr(c,r)}(g,s,l),u*v}function En(r,n,t){var e;return p(r)||p(n)||p(t)||t<=0||hr(r)>=1/t?NaN:(e=t*r,Nr(n*r)/(1-_n(e,2)))}function Sn(r,n,t){return p(r)||p(n)||p(t)||t<=0?NaN:.5*Nr(-hr((r-n)/t))/t}function Un(r){return 0===r||p(r)?r:r<0?-1:1}function kn(r,n,t){return p(n)||p(t)||p(r)||t<=0||r<0||r>1?NaN:n-t*Un(r-.5)*Mr(1-2*hr(r-.5))}function jn(r){return"number"==typeof r}function In(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function xn(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+In(i):In(i)+r,e&&(r="-"+r)),r}s(En,"factory",(function(r,n){return p(r)||p(n)||n<=0?_r(NaN):function(t){var e;if(hr(t)>=1/n)return NaN;return e=n*t,Nr(r*t)/(1-_n(e,2))}})),s(Sn,"factory",(function(r,n){return p(r)||p(n)||n<=0?_r(NaN):function(t){if(p(t))return NaN;return.5*Nr(-hr((t-r)/n))/n}})),s(kn,"factory",(function(r,n){return p(r)||p(n)||n<=0?_r(NaN):function(t){if(p(t)||t<0||t>1)return NaN;return r-n*Un(t-.5)*Mr(1-2*hr(t-.5))}}));var Fn=String.prototype.toLowerCase,On=String.prototype.toUpperCase;function Tn(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!jn(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=xn(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=xn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===On.call(r.specifier)?On.call(t):Fn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Vn(r){return"string"==typeof r}var Pn=Math.abs,$n=String.prototype.toLowerCase,Gn=String.prototype.toUpperCase,Ln=String.prototype.replace,Hn=/e\+(\d)$/,Wn=/e-(\d)$/,Cn=/^(\d+)$/,Mn=/^(\d+)e/,Rn=/\.0$/,Zn=/\.0*e/,qn=/(\..*[^0])0*e/;function Xn(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!jn(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":Pn(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Ln.call(t,qn,"$1e"),t=Ln.call(t,Zn,"e"),t=Ln.call(t,Rn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ln.call(t,Hn,"e+0$1"),t=Ln.call(t,Wn,"e-0$1"),r.alternate&&(t=Ln.call(t,Cn,"$1."),t=Ln.call(t,Mn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Gn.call(r.specifier)?Gn.call(t):$n.call(t)}function Yn(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function zn(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Yn(e):Yn(e)+r}var Bn=String.fromCharCode,Dn=isNaN,Jn=Array.isArray;function Kn(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Qn(r){var n,t,e,i,a,o,u,f,c;if(!Jn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(Vn(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=Kn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,Dn(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,Dn(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Tn(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Dn(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Dn(a)?String(e.arg):Bn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Xn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=xn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=zn(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var rt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function nt(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function tt(r){var n,t,e,i;for(t=[],i=0,e=rt.exec(r);e;)(n=r.slice(i,rt.lastIndex-e[0].length)).length&&t.push(n),t.push(nt(e)),i=rt.lastIndex,e=rt.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function et(r){return"string"==typeof r}function it(r){var n,t,e;if(!et(r))throw new TypeError(it("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=tt(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return Qn.apply(null,t)}function at(){var r,n;if(!(this instanceof at))return 0===arguments.length?new at:new at(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!Sr(r=arguments[0])||Pr(r))throw new TypeError(it("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!xr(n))throw new TypeError(it("invalid argument. Scale parameter must be a positive number. Value: `%s`.",n))}else r=0,n=1;return f(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Sr(n)||Pr(n))throw new TypeError(it("invalid assignment. Must be a number. Value: `%s`.",n));r=n}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!xr(r))throw new TypeError(it("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}Er(at.prototype,"entropy",(function(){return Rr(this.mu,this.b)})),Er(at.prototype,"kurtosis",(function(){return Zr(this.mu,this.b)})),Er(at.prototype,"mean",(function(){return qr(this.mu,this.b)})),Er(at.prototype,"median",(function(){return Xr(this.mu,this.b)})),Er(at.prototype,"mode",(function(){return Yr(this.mu,this.b)})),Er(at.prototype,"skewness",(function(){return zr(this.mu,this.b)})),Er(at.prototype,"stdev",(function(){return Br(this.mu,this.b)})),Er(at.prototype,"variance",(function(){return Dr(this.mu,this.b)})),s(at.prototype,"cdf",(function(r){return Ar(r,this.mu,this.b)})),s(at.prototype,"logcdf",(function(r){return an(r,this.mu,this.b)})),s(at.prototype,"logpdf",(function(r){return on(r,this.mu,this.b)})),s(at.prototype,"mgf",(function(r){return En(r,this.mu,this.b)})),s(at.prototype,"pdf",(function(r){return Sn(r,this.mu,this.b)})),s(at.prototype,"quantile",(function(r){return kn(r,this.mu,this.b)}));var ot={};c(ot,"cdf",Ar),c(ot,"Laplace",at),c(ot,"entropy",Rr),c(ot,"kurtosis",Zr),c(ot,"logcdf",an),c(ot,"logpdf",on),c(ot,"mean",qr),c(ot,"median",Xr),c(ot,"mgf",En),c(ot,"mode",Yr),c(ot,"pdf",Sn),c(ot,"quantile",kn),c(ot,"skewness",zr),c(ot,"stdev",Br),c(ot,"variance",Dr);export{at as Laplace,Ar as cdf,ot as default,Rr as entropy,Zr as kurtosis,an as logcdf,on as logpdf,qr as mean,Xr as median,En as mgf,Yr as mode,Sn as pdf,kn as quantile,zr as skewness,Br as stdev,Dr as variance};
//# sourceMappingURL=mod.js.map
