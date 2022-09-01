// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,i=e.toString,o=e.__defineGetter__,a=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__,c=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((s="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,p="set"in n,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r};function s(r,t,n){c(r,t,{configurable:!1,enumerable:!0,writable:!1,value:n})}function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function p(r){return r!=r}var y=Math.floor,h=Math.ceil;function d(r){return r<0?h(r):y(r)}var g=Number,v=g.NEGATIVE_INFINITY,b=Number.POSITIVE_INFINITY,m=1023;function w(r){return r===b||r===v}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function A(){return N&&"symbol"==typeof Symbol.toStringTag}var _,E=Object.prototype.toString,k=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",S=A()?function(r){var t,n,e,i,o;if(null==r)return E.call(r);n=r[j],o=j,t=null!=(i=r)&&k.call(i,o);try{r[j]=void 0}catch(t){return E.call(r)}return e=E.call(r),t?r[j]=n:delete r[j],e}:function(r){return E.call(r)},U="function"==typeof Uint32Array,x="function"==typeof Uint32Array?Uint32Array:null,I="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,t,n;if("function"!=typeof x)return!1;try{t=new x(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(U&&n instanceof Uint32Array||"[object Uint32Array]"===S(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var T,O=_,F="function"==typeof Float64Array,V="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V([1,3.14,-3.14,NaN]),n=t,r=(F&&n instanceof Float64Array||"[object Float64Array]"===S(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,$=T,G="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,M="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,t,n;if("function"!=typeof H)return!1;try{t=new H(t=[1,3.14,-3.14,256,257]),n=t,r=(G&&n instanceof Uint8Array||"[object Uint8Array]"===S(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?M:function(){throw new Error("not implemented")};var W,C=L,R="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,t,n;if("function"!=typeof Z)return!1;try{t=new Z(t=[1,3.14,-3.14,65536,65537]),n=t,r=(R&&n instanceof Uint16Array||"[object Uint16Array]"===S(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?q:function(){throw new Error("not implemented")};var X,Y={uint16:W,uint8:C};(X=new Y.uint16(1))[0]=4660;var z,B,D=52===new Y.uint8(X.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new $(1),Q=new O(K.buffer),rr=J.HIGH,tr=J.LOW;function nr(r,t){return K[0]=t,r[0]=Q[rr],r[1]=Q[tr],r}function er(r,t){return 1===arguments.length?nr([0,0],r):nr(r,t)}var ir,or,ar=!0===D?1:0,ur=new $(1),fr=new O(ur.buffer);function cr(r){return ur[0]=r,fr[ar]}!0===D?(ir=1,or=0):(ir=0,or=1);var sr={HIGH:ir,LOW:or},lr=new $(1),pr=new O(lr.buffer),yr=sr.HIGH,hr=sr.LOW;function dr(r,t){return pr[yr]=r,pr[hr]=t,lr[0]}var gr=[0,0];function vr(r,t){var n,e;return er(gr,r),n=gr[0],n&=2147483647,e=cr(t),dr(n|=e&=2147483648,gr[1])}function br(r){return Math.abs(r)}function mr(r,t){return p(t)||w(t)?(r[0]=t,r[1]=0,r):0!==t&&br(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var wr=[0,0],Nr=[0,0];function Ar(r,t){var n,e;return 0===t||0===r||p(r)||w(r)?r:(function(r,t){1===arguments.length?mr([0,0],r):mr(r,t)}(wr,r),t+=wr[1],t+=function(r){var t=cr(r);return(t=(2146435072&t)>>>20)-m|0}(r=wr[0]),t<-1074?vr(0,r):t>1023?r<0?v:b:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,er(Nr,r),n=Nr[0],n&=2148532223,e*dr(n|=t+m<<20,Nr[1])))}var _r=1.4426950408889634,Er=1/(1<<28);function kr(r){var t;return p(r)||r===b?r:r===v?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Er?1+r:function(r,t,n){var e,i,o,a;return Ar(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=d(r<0?_r*r-.5:_r*r+.5)),1.9082149292705877e-10*t,t)}function jr(r,t,n){var e;return p(r)||p(t)||p(n)||n<=0?NaN:(e=(r-t)/n,r<t?.5*kr(e):1-.5*kr(-e))}function Sr(r){return function(){return r}}function Ur(r,t,n){c(r,t,{configurable:!1,enumerable:!1,get:n})}function xr(r){return"number"==typeof r}l(jr,"factory",(function(r,t){return p(r)||p(t)||t<=0?Sr(NaN):function(n){var e;return p(n)?NaN:(e=(n-r)/t,n<r?.5*kr(e):1-.5*kr(-e))}}));var Ir=g.prototype.toString,Tr=A();function Or(r){return"object"==typeof r&&(r instanceof g||(Tr?function(r){try{return Ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===S(r)))}function Fr(r){return xr(r)||Or(r)}function Vr(r){return xr(r)&&r>0}function Pr(r){return Or(r)&&r.valueOf()>0}function Lr(r){return Vr(r)||Pr(r)}function $r(r){return xr(r)&&p(r)}function Gr(r){return Or(r)&&p(r.valueOf())}function Hr(r){return $r(r)||Gr(r)}l(Fr,"isPrimitive",xr),l(Fr,"isObject",Or),l(Lr,"isPrimitive",Vr),l(Lr,"isObject",Pr),l(Hr,"isPrimitive",$r),l(Hr,"isObject",Gr);var Mr=!0===D?1:0,Wr=new $(1),Cr=new O(Wr.buffer);function Rr(r,t){return Wr[0]=r,Cr[Mr]=t>>>0,Wr[0]}var Zr=.6931471803691238,qr=1.9082149292705877e-10,Xr=1048575;function Yr(r){var t,n,e,i,o,a,u,f,c,s,l,y;return 0===r?v:p(r)||r<0?NaN:(o=0,(n=cr(r))<1048576&&(o-=54,n=cr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-m|0,o+=(f=614244+(n&=Xr)&1048576|0)>>20|0,u=(r=Rr(r,n|1072693248^f))-1,(Xr&2+n)<3?0===u?0===o?0:o*Zr+o*qr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Zr-(a-o*qr-u)):(f=n-398458|0,c=440401-n|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(t=.5*u*u,0===o?u-(t-s*(t+a)):o*Zr-(t-(s*(t+a)+o*qr)-u)):0===o?u-s*(u-a):o*Zr-(s*(u-a)-o*qr-u))))}function zr(r,t){return p(r)||p(t)||t<=0?NaN:Yr(2*t*2.718281828459045)}function Br(r,t){return p(r)||p(t)||t<=0?NaN:3}function Dr(r,t){return p(r)||p(t)||t<=0?NaN:r}function Jr(r,t){return p(r)||p(t)||t<=0?NaN:r}function Kr(r,t){return p(r)||p(t)||t<=0?NaN:r}function Qr(r,t){return p(r)||p(t)||t<=0?NaN:0}function rt(r,t){return p(r)||p(t)||t<=0?NaN:1.4142135623730951*t}function tt(r,t){return p(r)||p(t)||t<=0?NaN:2*t*t}var nt=.6931471803691238,et=1.9082149292705877e-10,it=1.4426950408889634;function ot(r){var t,n,e,i,o,a,u,f,c,s,l,y;if(r===b||p(r))return r;if(r===v)return-1;if(0===r)return r;if(r<0?(n=!0,u=-r):(n=!1,u=r),u>=38.816242111356935){if(n)return-1;if(u>=709.782712893384)return b}if(o=0|cr(u),u>.34657359027997264)u<1.0397207708399179?n?(e=r+nt,i=-et,y=-1):(e=r-nt,i=et,y=1):(y=n?it*r-.5:it*r+.5,e=r-(s=y|=0)*nt,i=s*et),c=e-(r=e-i)-i;else{if(o<1016070144)return r;y=0}return a=1+(f=r*(t=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(f),l=f*((a-(s=3-a*t))/(6-r*s)),0===y?r-(r*l-f):(l=r*(l-c)-c,l-=f,-1===y?.5*(r-l)-.5:1===y?r<-.25?-2*(l-(r+.5)):1+2*(r-l):y<=-2||y>56?(u=Rr(u=1-(l-r),e=cr(u)+(y<<20)|0))-1:(s=1,y<20?u=(s=Rr(s,e=1072693248-(2097152>>y)|0))-(l-r):(u=r-(l+(s=Rr(s,e=m-y<<20|0))),u+=1),Rr(u,e=cr(u)+(y<<20)|0)))}var at=.6931471803691238,ut=1.9082149292705877e-10;function ft(r){var t,n,e,i,o,a,u,f,c,s;if(r<-1||p(r))return NaN;if(-1===r)return v;if(r===b)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(e<9007199254740992?(o=(s=((n=cr(c=1+r))>>20)-m)>0?1-(c-r):r-(c-1),o/=c):(s=((n=cr(c=r))>>20)-m,o=0),(n&=1048575)<434334?c=Rr(c,1072693248|n):(s+=1,c=Rr(c,1071644672|n),n=1048576-n>>2),i=c-1),t=.5*i*i,0===n?0===i?s*at+(o+=s*ut):s*at-((f=t*(1-.6666666666666666*i))-(s*ut+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-a*(t+f)):s*at-(t-(a*(t+f)+(s*ut+o))-i))}var ct=-.6931471805599453;function st(r,t,n){var e;return p(r)||p(t)||p(n)||n<=0?NaN:(e=(r-t)/n,r<t?ct+e:ct+ft(-ot(-e)))}function lt(r,t,n){return p(r)||p(t)||p(n)||n<=0?NaN:-(br((r-t)/n)+Yr(2*n))}function pt(r){return y(r)===r}function yt(r){return pt(r/2)}function ht(r){return yt(r>0?r-1:r+1)}l(st,"factory",(function(r,t){return p(r)||p(t)||t<=0?Sr(NaN):function(n){var e;return p(n)?NaN:(e=(n-r)/t,n<r?ct+e:ct+ft(-ot(-e)))}})),l(lt,"factory",(function(r,t){return p(r)||p(t)||t<=0?Sr(NaN):function(n){return p(n)?NaN:-(br((n-r)/t)+Yr(2*t))}}));var dt=Math.sqrt,gt=!0===D?0:1,vt=new $(1),bt=new O(vt.buffer);function mt(r,t){return vt[0]=r,bt[gt]=t>>>0,vt[0]}function wt(r){return 0|r}var Nt=1048576,At=[1,1.5],_t=[0,.5849624872207642],Et=[0,1.350039202129749e-8],kt=2147483647,jt=1048575,St=1048576,Ut=2147483647,xt=1083179008,It=1e300,Tt=1e-300,Ot=[0,0],Ft=[0,0];function Vt(r,t){var n,e,i,o,a,u,f,c,s,l,y,h,d,g;if(p(r)||p(t))return NaN;if(er(Ot,t),a=Ot[0],0===Ot[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return dt(r);if(-.5===t)return 1/dt(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(w(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:br(r)<1==(t===b)?0:b}(r,t)}if(er(Ot,r),o=Ot[0],0===Ot[1]){if(0===o)return function(r,t){return t===v?b:t===b?0:t>0?ht(t)?r:0:ht(t)?vr(b,r):b}(r,t);if(1===r)return 1;if(-1===r&&ht(t))return-1;if(w(r))return r===v?Vt(-0,-t):t<0?0:b}if(r<0&&!1===pt(t))return(r-r)/(r-r);if(i=br(r),n=o&Ut|0,e=a&Ut|0,f=a>>>31|0,u=(u=o>>>31|0)&&ht(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&cr(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*It*It:u*Tt*Tt;if(n>1072693248)return 0===f?u*It*It:u*Tt*Tt;y=function(r,t){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=mt(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(Ft,i)}else y=function(r,t,n){var e,i,o,a,u,f,c,s,l,p,y,h,d,g,v,b,w,N,A,_,E;return N=0,n<Nt&&(N-=53,n=cr(t*=9007199254740992)),N+=(n>>20)-m|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,N+=1,n-=Nt),a=mt(i=(b=(t=Rr(t,n))-(c=At[_]))*(w=1/(t+c)),0),e=524288+(n>>1|536870912),f=Rr(0,e+=_<<18),v=(o=i*i)*o*(0===(E=o)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=mt(f=3+(o=a*a)+(v+=(u=w*(b-a*f-a*(t-(f-c))))*(a+i)),0),d=(y=-7.028461650952758e-9*(l=mt(l=(b=a*f)+(w=u*f+(v-(f-3-o))*i),0))+.9617966939259756*(w-(l-b))+Et[_])-((h=mt(h=(p=.9617967009544373*l)+y+(s=_t[_])+(g=N),0))-g-s-p),r[0]=h,r[1]=d,r}(Ft,i,n);if(l=(t-(c=mt(t,0)))*y[0]+t*y[1],s=c*y[0],er(Ot,h=l+s),d=wt(Ot[0]),g=wt(Ot[1]),d>=xt){if(0!=(d-xt|g))return u*It*It;if(l+8008566259537294e-32>h-s)return u*It*It}else if((d&Ut)>=1083231232){if(0!=(d-3230714880|g))return u*Tt*Tt;if(l<=h-s)return u*Tt*Tt}return h=function(r,t,n){var e,i,o,a,u,f,c,s,l,p;return l=((s=r&kt|0)>>20)-m|0,c=0,s>1071644672&&(i=Rr(0,((c=r+(St>>l+1)>>>0)&~(jt>>(l=((c&kt)>>20)-m|0)))>>>0),c=(c&jt|St)>>20-l>>>0,r<0&&(c=-c),t-=i),r=wt(r=cr(f=1-((f=(o=.6931471824645996*(i=mt(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Ar(f,c):Rr(f,r)}(d,s,l),u*h}function Pt(r,t,n){var e;return p(r)||p(t)||p(n)||n<=0||br(r)>=1/n?NaN:(e=n*r,kr(t*r)/(1-Vt(e,2)))}function Lt(r,t,n){return p(r)||p(t)||p(n)||n<=0?NaN:.5*kr(-br((r-t)/n))/n}function $t(r){return 0===r||p(r)?r:r<0?-1:1}function Gt(r,t,n){return p(t)||p(n)||p(r)||n<=0||r<0||r>1?NaN:t-n*$t(r-.5)*Yr(1-2*br(r-.5))}function Ht(r){return"number"==typeof r}function Mt(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function Wt(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+Mt(i):Mt(i)+r,e&&(r="-"+r)),r}l(Pt,"factory",(function(r,t){return p(r)||p(t)||t<=0?Sr(NaN):function(n){var e;return br(n)>=1/t?NaN:(e=t*n,kr(r*n)/(1-Vt(e,2)))}})),l(Lt,"factory",(function(r,t){return p(r)||p(t)||t<=0?Sr(NaN):function(n){return p(n)?NaN:.5*kr(-br((n-r)/t))/t}})),l(Gt,"factory",(function(r,t){return p(r)||p(t)||t<=0?Sr(NaN):function(n){return p(n)||n<0||n>1?NaN:r-t*$t(n-.5)*Yr(1-2*br(n-.5))}}));var Ct=String.prototype.toLowerCase,Rt=String.prototype.toUpperCase;function Zt(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!Ht(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=Wt(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=Wt(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===Rt.call(r.specifier)?Rt.call(n):Ct.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function qt(r){return"string"==typeof r}var Xt=Math.abs,Yt=String.prototype.toLowerCase,zt=String.prototype.toUpperCase,Bt=String.prototype.replace,Dt=/e\+(\d)$/,Jt=/e-(\d)$/,Kt=/^(\d+)$/,Qt=/^(\d+)e/,rn=/\.0$/,tn=/\.0*e/,nn=/(\..*[^0])0*e/;function en(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!Ht(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Xt(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=Bt.call(n,nn,"$1e"),n=Bt.call(n,tn,"e"),n=Bt.call(n,rn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Bt.call(n,Dt,"e+0$1"),n=Bt.call(n,Jt,"e-0$1"),r.alternate&&(n=Bt.call(n,Kt,"$1."),n=Bt.call(n,Qt,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===zt.call(r.specifier)?zt.call(n):Yt.call(n)}function on(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function an(r,t,n){var e=t-r.length;return e<0?r:r=n?r+on(e):on(e)+r}var un=String.fromCharCode,fn=isNaN,cn=Array.isArray;function sn(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function ln(r){var t,n,e,i,o,a,u,f,c;if(!cn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(qt(e=r[f]))a+=e;else{if(t=void 0!==e.precision,!(e=sn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,fn(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,fn(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=Zt(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!fn(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=fn(o)?String(e.arg):un(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=en(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Wt(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=an(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var pn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function yn(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function hn(r){var t,n,e,i;for(n=[],i=0,e=pn.exec(r);e;)(t=r.slice(i,pn.lastIndex-e[0].length)).length&&n.push(t),n.push(yn(e)),i=pn.lastIndex,e=pn.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function dn(r){return"string"==typeof r}function gn(r){var t,n,e;if(!dn(r))throw new TypeError(gn("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=hn(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return ln.apply(null,n)}function vn(){var r,t;if(!(this instanceof vn))return 0===arguments.length?new vn:new vn(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!xr(r=arguments[0])||Hr(r))throw new TypeError(gn("invalid argument. Location parameter must be a number. Value: `%s`.",r));if(!Vr(t))throw new TypeError(gn("invalid argument. Scale parameter must be a positive number. Value: `%s`.",t))}else r=0,t=1;return c(this,"mu",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!xr(t)||Hr(t))throw new TypeError(gn("invalid assignment. Must be a number. Value: `%s`.",t));r=t}}),c(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!Vr(r))throw new TypeError(gn("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}Ur(vn.prototype,"entropy",(function(){return zr(this.mu,this.b)})),Ur(vn.prototype,"kurtosis",(function(){return Br(this.mu,this.b)})),Ur(vn.prototype,"mean",(function(){return Dr(this.mu,this.b)})),Ur(vn.prototype,"median",(function(){return Jr(this.mu,this.b)})),Ur(vn.prototype,"mode",(function(){return Kr(this.mu,this.b)})),Ur(vn.prototype,"skewness",(function(){return Qr(this.mu,this.b)})),Ur(vn.prototype,"stdev",(function(){return rt(this.mu,this.b)})),Ur(vn.prototype,"variance",(function(){return tt(this.mu,this.b)})),l(vn.prototype,"cdf",(function(r){return jr(r,this.mu,this.b)})),l(vn.prototype,"logcdf",(function(r){return st(r,this.mu,this.b)})),l(vn.prototype,"logpdf",(function(r){return lt(r,this.mu,this.b)})),l(vn.prototype,"mgf",(function(r){return Pt(r,this.mu,this.b)})),l(vn.prototype,"pdf",(function(r){return Lt(r,this.mu,this.b)})),l(vn.prototype,"quantile",(function(r){return Gt(r,this.mu,this.b)}));var bn={};s(bn,"cdf",jr),s(bn,"Laplace",vn),s(bn,"entropy",zr),s(bn,"kurtosis",Br),s(bn,"logcdf",st),s(bn,"logpdf",lt),s(bn,"mean",Dr),s(bn,"median",Jr),s(bn,"mgf",Pt),s(bn,"mode",Kr),s(bn,"pdf",Lt),s(bn,"quantile",Gt),s(bn,"skewness",Qr),s(bn,"stdev",rt),s(bn,"variance",tt),r.Laplace=vn,r.cdf=jr,r.default=bn,r.entropy=zr,r.kurtosis=Br,r.logcdf=st,r.logpdf=lt,r.mean=Dr,r.median=Jr,r.mgf=Pt,r.mode=Kr,r.pdf=Lt,r.quantile=Gt,r.skewness=Qr,r.stdev=rt,r.variance=tt,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).laplace={});
//# sourceMappingURL=index.js.map
