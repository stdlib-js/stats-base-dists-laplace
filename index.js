// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return t({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,u=Object.prototype,i=u.toString,o=u.__defineGetter__,f=u.__defineSetter__,c=u.__lookupGetter__,a=u.__lookupSetter__,l=e,y=function(n,t,r){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(n,t)||a.call(n,t)?(e=n.__proto__,n.__proto__=u,delete n[t],n[t]=r.value,n.__proto__=e):n[t]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(n,t,r.get),p&&f&&f.call(n,t,r.set),n},p=r()?l:y,s=p,b=function(n,t,r){s(n,t,{configurable:!1,enumerable:!0,writable:!1,value:r})},m=p,v=function(n,t,r){m(n,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},N=function(n){return n!=n},h=Math.floor,d=Math.ceil,w=h,g=d,A=function(n){return n<0?g(n):w(n)},_=Number,j=_.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,O=U,E=j,S=function(n){return n===O||n===E},T="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),I=function(){return T&&"symbol"==typeof Symbol.toStringTag},P=Object.prototype.toString,F=P,H=function(n){return F.call(n)},V=Object.prototype.hasOwnProperty,G=function(n,t){return null!=n&&V.call(n,t)},k="function"==typeof Symbol?Symbol.toStringTag:"",L=G,M=k,x=P,W=H,q=function(n){var t,r,e;if(null==n)return x.call(n);r=n[M],t=L(n,M);try{n[M]=void 0}catch(t){return x.call(n)}return e=x.call(n),t?n[M]=r:delete n[M],e},Y=I()?q:W,C=Y,z="function"==typeof Uint32Array,B="function"==typeof Uint32Array?Uint32Array:null,D=function(n){return z&&n instanceof Uint32Array||"[object Uint32Array]"===C(n)},J=B,K=function(){var n,t;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,4294967296,4294967297]),n=D(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Q="function"==typeof Uint32Array?Uint32Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=Y,$="function"==typeof Float64Array,nn="function"==typeof Float64Array?Float64Array:null,tn=function(n){return $&&n instanceof Float64Array||"[object Float64Array]"===Z(n)},rn=nn,en=function(){var n,t;if("function"!=typeof rn)return!1;try{t=new rn([1,3.14,-3.14,NaN]),n=tn(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},un="function"==typeof Float64Array?Float64Array:void 0,on=function(){throw new Error("not implemented")},fn=en()?un:on,cn=Y,an="function"==typeof Uint8Array,ln="function"==typeof Uint8Array?Uint8Array:null,yn=function(n){return an&&n instanceof Uint8Array||"[object Uint8Array]"===cn(n)},pn=ln,sn=function(){var n,t;if("function"!=typeof pn)return!1;try{t=new pn(t=[1,3.14,-3.14,256,257]),n=yn(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},bn="function"==typeof Uint8Array?Uint8Array:void 0,mn=function(){throw new Error("not implemented")},vn=sn()?bn:mn,Nn=Y,hn="function"==typeof Uint16Array,dn="function"==typeof Uint16Array?Uint16Array:null,wn=function(n){return hn&&n instanceof Uint16Array||"[object Uint16Array]"===Nn(n)},gn=dn,An=function(){var n,t;if("function"!=typeof gn)return!1;try{t=new gn(t=[1,3.14,-3.14,65536,65537]),n=wn(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},_n="function"==typeof Uint16Array?Uint16Array:void 0,jn=function(){throw new Error("not implemented")},Un={uint16:An()?_n:jn,uint8:vn};(n=new Un.uint16(1))[0]=4660;var On,En,Sn=52===new Un.uint8(n.buffer)[0];!0===Sn?(On=1,En=0):(On=0,En=1);var Tn,In,Pn=X,Fn={HIGH:On,LOW:En},Hn=new fn(1),Vn=new Pn(Hn.buffer),Gn=Fn.HIGH,kn=Fn.LOW,Ln=function(n,t){return Hn[0]=t,n[0]=Vn[Gn],n[1]=Vn[kn],n},Mn=function(n,t){return 1===arguments.length?Ln([0,0],n):Ln(n,t)},xn=Mn,Wn=X,qn=!0===Sn?1:0,Yn=new fn(1),Cn=new Wn(Yn.buffer),zn=function(n){return Yn[0]=n,Cn[qn]};!0===Sn?(Tn=1,In=0):(Tn=0,In=1);var Bn=X,Dn={HIGH:Tn,LOW:In},Jn=new fn(1),Kn=new Bn(Jn.buffer),Qn=Dn.HIGH,Rn=Dn.LOW,Xn=function(n,t){return Kn[Qn]=n,Kn[Rn]=t,Jn[0]},Zn=xn,$n=zn,nt=Xn,tt=[0,0],rt=function(n,t){var r,e;return Zn(tt,n),r=tt[0],r&=2147483647,e=$n(t),nt(r|=e&=2147483648,tt[1])},et=function(n){return Math.abs(n)},ut=S,it=N,ot=et,ft=function(n,t){return it(t)||ut(t)?(n[0]=t,n[1]=0,n):0!==t&&ot(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)},ct=function(n,t){return 1===arguments.length?ft([0,0],n):ft(n,t)},at=zn,lt=function(n){var t=at(n);return(t=(2146435072&t)>>>20)-1023|0},yt=U,pt=j,st=N,bt=S,mt=rt,vt=ct,Nt=lt,ht=xn,dt=Xn,wt=[0,0],gt=[0,0],At=function(n,t){var r,e;return 0===t||0===n||st(n)||bt(n)?n:(vt(wt,n),t+=wt[1],(t+=Nt(n=wt[0]))<-1074?mt(0,n):t>1023?n<0?pt:yt:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ht(gt,n),r=gt[0],r&=2148532223,e*dt(r|=t+1023<<20,gt[1])))},_t=At,jt=_t,Ut=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Ot=N,Et=A,St=j,Tt=U,It=function(n,t,r){var e,u,i;return i=(e=n-t)-(u=e*e)*Ut(u),jt(1-(t-e*i/(2-i)-n),r)},Pt=1.4426950408889634,Ft=1/(1<<28),Ht=function(n){var t;return Ot(n)||n===Tt?n:n===St?0:n>709.782712893384?Tt:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Ft?1+n:(t=Et(n<0?Pt*n-.5:Pt*n+.5),It(n-.6931471803691238*t,1.9082149292705877e-10*t,t))},Vt=N,Gt=Ht,kt=function(n){return function(){return n}},Lt=kt,Mt=N,xt=Ht,Wt=function(n,t,r){var e;return Vt(n)||Vt(t)||Vt(r)||r<=0?NaN:(e=(n-t)/r,n<t?.5*Gt(e):1-.5*Gt(-e))};v(Wt,"factory",(function(n,t){return Mt(n)||Mt(t)||t<=0?Lt(NaN):function(r){var e;return Mt(r)?NaN:(e=(r-n)/t,r<n?.5*xt(e):1-.5*xt(-e))}}));var qt=Wt,Yt=p,Ct=function(n,t,r){Yt(n,t,{configurable:!1,enumerable:!1,get:r})},zt=function(n){return"number"==typeof n},Bt=_.prototype.toString,Dt=Y,Jt=_,Kt=function(n){try{return Bt.call(n),!0}catch(n){return!1}},Qt=I(),Rt=function(n){return"object"==typeof n&&(n instanceof Jt||(Qt?Kt(n):"[object Number]"===Dt(n)))},Xt=zt,Zt=Rt,$t=v,nr=function(n){return Xt(n)||Zt(n)},tr=Rt;$t(nr,"isPrimitive",zt),$t(nr,"isObject",tr);var rr=nr,er=rr.isPrimitive,ur=function(n){return er(n)&&n>0},ir=rr.isObject,or=function(n){return ir(n)&&n.valueOf()>0},fr=ur,cr=or,ar=v,lr=function(n){return fr(n)||cr(n)},yr=or;ar(lr,"isPrimitive",ur),ar(lr,"isObject",yr);var pr=lr,sr=rr.isPrimitive,br=N,mr=function(n){return sr(n)&&br(n)},vr=rr.isObject,Nr=N,hr=function(n){return vr(n)&&Nr(n.valueOf())},dr=mr,wr=hr,gr=v,Ar=function(n){return dr(n)||wr(n)},_r=hr;gr(Ar,"isPrimitive",mr),gr(Ar,"isObject",_r);var jr=Ar,Ur=X,Or=!0===Sn?1:0,Er=new fn(1),Sr=new Ur(Er.buffer),Tr=function(n,t){return Er[0]=n,Sr[Or]=t>>>0,Er[0]},Ir=Tr,Pr=zn,Fr=Ir,Hr=N,Vr=j,Gr=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},kr=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},Lr=.6931471803691238,Mr=1.9082149292705877e-10,xr=1048575,Wr=function(n){var t,r,e,u,i,o,f,c,a,l,y;return 0===n?Vr:Hr(n)||n<0?NaN:(u=0,(r=Pr(n))<1048576&&(u-=54,r=Pr(n*=0x40000000000000)),r>=2146435072?n+n:(u+=(r>>20)-1023|0,u+=(f=614244+(r&=xr)&1048576|0)>>20|0,o=(n=Fr(n,r|1072693248^f))-1,(xr&2+r)<3?0===o?0===u?0:u*Lr+u*Mr:(i=o*o*(.5-.3333333333333333*o),0===u?o-i:u*Lr-(i-u*Mr-o)):(f=r-398458|0,c=440401-r|0,e=(l=(y=(a=o/(2+o))*a)*y)*Gr(l),i=y*kr(l)+e,(f|=c)>0?(t=.5*o*o,0===u?o-(t-a*(t+i)):u*Lr-(t-(a*(t+i)+u*Mr)-o)):0===u?o-a*(o-i):u*Lr-(a*(o-i)-u*Mr-o))))},qr=N,Yr=Wr,Cr=function(n,t){return qr(n)||qr(t)||t<=0?NaN:Yr(2*t*2.718281828459045)},zr=N,Br=function(n,t){return zr(n)||zr(t)||t<=0?NaN:3},Dr=N,Jr=function(n,t){return Dr(n)||Dr(t)||t<=0?NaN:n},Kr=N,Qr=function(n,t){return Kr(n)||Kr(t)||t<=0?NaN:n},Rr=N,Xr=function(n,t){return Rr(n)||Rr(t)||t<=0?NaN:n},Zr=N,$r=function(n,t){return Zr(n)||Zr(t)||t<=0?NaN:0},ne=N,te=function(n,t){return ne(n)||ne(t)||t<=0?NaN:1.4142135623730951*t},re=N,ee=function(n,t){return re(n)||re(t)||t<=0?NaN:2*t*t},ue=N,ie=zn,oe=Ir,fe=U,ce=j,ae=function(n){return 0===n?-.03333333333333313:n*(.0015873015872548146+n*(n*(4008217827329362e-21+-2.0109921818362437e-7*n)-793650757867488e-19))-.03333333333333313},le=.6931471803691238,ye=1.9082149292705877e-10,pe=1.4426950408889634,se=function(n){var t,r,e,u,i,o,f,c,a,l,y,p;if(n===fe||ue(n))return n;if(n===ce)return-1;if(0===n)return n;if(n<0?(r=!0,f=-n):(r=!1,f=n),f>=38.816242111356935){if(r)return-1;if(f>=709.782712893384)return fe}if(i=0|ie(f),f>.34657359027997264)f<1.0397207708399179?r?(e=n+le,u=-ye,p=-1):(e=n-le,u=ye,p=1):(p=r?pe*n-.5:pe*n+.5,e=n-(l=p|=0)*le,u=l*ye),a=e-(n=e-u)-u;else{if(i<1016070144)return n;p=0}return y=(c=n*(t=.5*n))*(((o=1+c*ae(c))-(l=3-o*t))/(6-n*l)),0===p?n-(n*y-c):(y=n*(y-a)-a,y-=c,-1===p?.5*(n-y)-.5:1===p?n<-.25?-2*(y-(n+.5)):1+2*(n-y):p<=-2||p>56?(e=ie(f=1-(y-n))+(p<<20)|0,(f=oe(f,e))-1):(l=1,p<20?f=(l=oe(l,e=1072693248-(2097152>>p)|0))-(y-n):(f=n-(y+(l=oe(l,e=1023-p<<20|0))),f+=1),e=ie(f)+(p<<20)|0,oe(f,e)))},be=N,me=zn,ve=Ir,Ne=U,he=j,de=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))},we=.6931471803691238,ge=1.9082149292705877e-10,Ae=function(n){var t,r,e,u,i,o,f,c,a,l;if(n<-1||be(n))return NaN;if(-1===n)return he;if(n===Ne)return n;if(0===n)return n;if(l=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(l=0,u=n,r=1)}return 0!==l&&(e<9007199254740992?(i=(l=((r=me(a=1+n))>>20)-1023)>0?1-(a-n):n-(a-1),i/=a):(l=((r=me(a=n))>>20)-1023,i=0),(r&=1048575)<434334?a=ve(a,1072693248|r):(l+=1,a=ve(a,1071644672|r),r=1048576-r>>2),u=a-1),t=.5*u*u,0===r?0===u?l*we+(i+=l*ge):l*we-((c=t*(1-.6666666666666666*u))-(l*ge+i)-u):(c=(f=(o=u/(2+u))*o)*de(f),0===l?u-(t-o*(t+c)):l*we-(t-(o*(t+c)+(l*ge+i))-u))},_e=-.6931471805599453,je=N,Ue=se,Oe=Ae,Ee=_e,Se=kt,Te=N,Ie=se,Pe=Ae,Fe=_e,He=function(n,t,r){var e;return je(n)||je(t)||je(r)||r<=0?NaN:(e=(n-t)/r,n<t?Ee+e:Ee+Oe(-Ue(-e)))};v(He,"factory",(function(n,t){return Te(n)||Te(t)||t<=0?Se(NaN):function(r){var e;return Te(r)?NaN:(e=(r-n)/t,r<n?Fe+e:Fe+Pe(-Ie(-e)))}}));var Ve=He,Ge=N,ke=et,Le=Wr,Me=kt,xe=N,We=et,qe=Wr,Ye=function(n,t,r){return Ge(n)||Ge(t)||Ge(r)||r<=0?NaN:-(ke((n-t)/r)+Le(2*r))};v(Ye,"factory",(function(n,t){return xe(n)||xe(t)||t<=0?Me(NaN):function(r){return xe(r)?NaN:-(We((r-n)/t)+qe(2*t))}}));var Ce=Ye,ze=h,Be=function(n){return ze(n)===n},De=Be,Je=function(n){return De(n/2)},Ke=function(n){return Je(n>0?n-1:n+1)},Qe=Math.sqrt,Re=X,Xe=!0===Sn?0:1,Ze=new fn(1),$e=new Re(Ze.buffer),nu=function(n,t){return Ze[0]=n,$e[Xe]=t>>>0,Ze[0]},tu=function(n){return 0|n},ru=Ke,eu=rt,uu=j,iu=U,ou=zn,fu=et,cu=U,au=zn,lu=nu,yu=Ir,pu=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},su=1048576,bu=[1,1.5],mu=[0,.5849624872207642],vu=[0,1.350039202129749e-8],Nu=nu,hu=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},du=zn,wu=Ir,gu=nu,Au=tu,_u=_t,ju=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Uu=2147483647,Ou=1048575,Eu=1048576,Su=N,Tu=Ke,Iu=S,Pu=Be,Fu=Qe,Hu=et,Vu=xn,Gu=nu,ku=tu,Lu=j,Mu=U,xu=function(n,t){return t===uu?iu:t===iu?0:t>0?ru(t)?n:0:ru(t)?eu(iu,n):iu},Wu=function(n,t){return(2147483647&ou(n))<=1072693247?t<0?1/0:0:t>0?1/0:0},qu=function(n,t){return-1===n?(n-n)/(n-n):1===n?1:fu(n)<1==(t===cu)?0:cu},Yu=function(n,t,r){var e,u,i,o,f,c,a,l,y,p,s,b,m,v,N,h,d,w,g,A;return w=0,r<su&&(w-=53,r=au(t*=9007199254740992)),w+=(r>>20)-1023|0,r=1072693248|(g=1048575&r|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,r-=su),e=524288+(r>>1|536870912),f=(d=1/((t=yu(t,r))+(a=bu[A])))*((h=t-a)-(o=lu(u=h*d,0))*(c=yu(0,e+=A<<18))-o*(t-(c-a))),N=(i=u*u)*i*pu(i),c=lu(c=3+(i=o*o)+(N+=f*(o+u)),0),m=(s=-7.028461650952758e-9*(y=lu(y=(h=o*c)+(d=f*c+(N-(c-3-i))*u),0))+.9617966939259756*(d-(y-h))+vu[A])-((b=lu(b=(p=.9617967009544373*y)+s+(l=mu[A])+(v=w),0))-v-l-p),n[0]=b,n[1]=m,n},Cu=function(n,t){var r,e,u,i,o;return r=(o=1.9259629911266175e-8*(u=t-1)-u*u*hu(u)*1.4426950408889634)-((e=Nu(e=(i=1.4426950216293335*u)+o,0))-i),n[0]=e,n[1]=r,n},zu=function(n,t,r){var e,u,i,o,f,c,a,l,y;return y=((l=n&Uu|0)>>20)-1023|0,a=0,l>1071644672&&(u=wu(0,((a=n+(Eu>>y+1)>>>0)&~(Ou>>(y=((a&Uu)>>20)-1023|0)))>>>0),a=(a&Ou|Eu)>>20-y>>>0,n<0&&(a=-a),t-=u),f=(o=.6931471805599453*(r-((u=gu(u=r+t,0))-t))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+o)-i),e=c-(u=c*c)*ju(u),n=du(c=1-(c*e/(e-2)-(f+c*f)-c)),n=Au(n),c=(n+=a<<20>>>0)>>20<=0?_u(c,a):wu(c,n)},Bu=2147483647,Du=1083179008,Ju=1e300,Ku=1e-300,Qu=[0,0],Ru=[0,0],Xu=function n(t,r){var e,u,i,o,f,c,a,l,y,p,s,b,m,v;if(Su(t)||Su(r))return NaN;if(Vu(Qu,r),f=Qu[0],0===Qu[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return Fu(t);if(-.5===r)return 1/Fu(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(Iu(r))return qu(t,r)}if(Vu(Qu,t),o=Qu[0],0===Qu[1]){if(0===o)return xu(t,r);if(1===t)return 1;if(-1===t&&Tu(r))return-1;if(Iu(t))return t===Lu?n(-0,-r):r<0?0:Mu}if(t<0&&!1===Pu(r))return(t-t)/(t-t);if(i=Hu(t),e=o&Bu|0,u=f&Bu|0,a=f>>>31|0,c=(c=o>>>31|0)&&Tu(r)?-1:1,u>1105199104){if(u>1139802112)return Wu(t,r);if(e<1072693247)return 1===a?c*Ju*Ju:c*Ku*Ku;if(e>1072693248)return 0===a?c*Ju*Ju:c*Ku*Ku;s=Cu(Ru,i)}else s=Yu(Ru,i,e);if(p=(r-(l=Gu(r,0)))*s[0]+r*s[1],y=l*s[0],Vu(Qu,b=p+y),m=ku(Qu[0]),v=ku(Qu[1]),m>=Du){if(0!=(m-Du|v))return c*Ju*Ju;if(p+8008566259537294e-32>b-y)return c*Ju*Ju}else if((m&Bu)>=1083231232){if(0!=(m-3230714880|v))return c*Ku*Ku;if(p<=b-y)return c*Ku*Ku}return c*(b=zu(m,y,p))},Zu=N,$u=et,ni=Ht,ti=Xu,ri=kt,ei=N,ui=et,ii=Ht,oi=Xu,fi=function(n,t,r){var e;return Zu(n)||Zu(t)||Zu(r)||r<=0||$u(n)>=1/r?NaN:(e=r*n,ni(t*n)/(1-ti(e,2)))};v(fi,"factory",(function(n,t){return ei(n)||ei(t)||t<=0?ri(NaN):function(r){var e;return ui(r)>=1/t?NaN:(e=t*r,ii(n*r)/(1-oi(e,2)))}}));var ci=fi,ai=N,li=et,yi=Ht,pi=kt,si=N,bi=et,mi=Ht,vi=function(n,t,r){return ai(n)||ai(t)||ai(r)||r<=0?NaN:.5*yi(-li((n-t)/r))/r};v(vi,"factory",(function(n,t){return si(n)||si(t)||t<=0?pi(NaN):function(r){return si(r)?NaN:.5*mi(-bi((r-n)/t))/t}}));var Ni=vi,hi=N,di=function(n){return 0===n||hi(n)?n:n<0?-1:1},wi=di,gi=N,Ai=et,_i=Wr,ji=kt,Ui=di,Oi=N,Ei=et,Si=Wr,Ti=function(n,t,r){return gi(t)||gi(r)||gi(n)||r<=0||n<0||n>1?NaN:t-r*wi(n-.5)*_i(1-2*Ai(n-.5))};v(Ti,"factory",(function(n,t){return Oi(n)||Oi(t)||t<=0?ji(NaN):function(r){return Oi(r)||r<0||r>1?NaN:n-t*Ui(r-.5)*Si(1-2*Ei(r-.5))}}));var Ii=Ti,Pi=p,Fi=v,Hi=Ct,Vi=pr.isPrimitive,Gi=rr.isPrimitive,ki=jr,Li=Cr,Mi=Br,xi=Jr,Wi=Qr,qi=Xr,Yi=$r,Ci=te,zi=ee,Bi=qt,Di=Ve,Ji=Ce,Ki=ci,Qi=Ni,Ri=Ii;function Xi(){var n,t;if(!(this instanceof Xi))return 0===arguments.length?new Xi:new Xi(arguments[0],arguments[1]);if(arguments.length){if(t=arguments[1],!Gi(n=arguments[0])||ki(n))throw new TypeError("invalid argument. Location parameter `mu` must be a number primitive. Value: `"+n+"`");if(!Vi(t))throw new TypeError("invalid argument. Scale parameter `b` must be a positive number. Value: `"+t+"`")}else n=0,t=1;return Pi(this,"mu",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!Gi(t)||ki(t))throw new TypeError("invalid value. Must be a number primitive. Value: `"+t+"`");n=t}}),Pi(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(n){if(!Vi(n))throw new TypeError("invalid value. Must be a positive number. Value: `"+n+"`");t=n}}),this}Hi(Xi.prototype,"entropy",(function(){return Li(this.mu,this.b)})),Hi(Xi.prototype,"kurtosis",(function(){return Mi(this.mu,this.b)})),Hi(Xi.prototype,"mean",(function(){return xi(this.mu,this.b)})),Hi(Xi.prototype,"median",(function(){return Wi(this.mu,this.b)})),Hi(Xi.prototype,"mode",(function(){return qi(this.mu,this.b)})),Hi(Xi.prototype,"skewness",(function(){return Yi(this.mu,this.b)})),Hi(Xi.prototype,"stdev",(function(){return Ci(this.mu,this.b)})),Hi(Xi.prototype,"variance",(function(){return zi(this.mu,this.b)})),Fi(Xi.prototype,"cdf",(function(n){return Bi(n,this.mu,this.b)})),Fi(Xi.prototype,"logcdf",(function(n){return Di(n,this.mu,this.b)})),Fi(Xi.prototype,"logpdf",(function(n){return Ji(n,this.mu,this.b)})),Fi(Xi.prototype,"mgf",(function(n){return Ki(n,this.mu,this.b)})),Fi(Xi.prototype,"pdf",(function(n){return Qi(n,this.mu,this.b)})),Fi(Xi.prototype,"quantile",(function(n){return Ri(n,this.mu,this.b)}));var Zi=Xi,$i={};return b($i,"cdf",qt),b($i,"Laplace",Zi),b($i,"entropy",Cr),b($i,"kurtosis",Br),b($i,"logcdf",Ve),b($i,"logpdf",Ce),b($i,"mean",Jr),b($i,"median",Qr),b($i,"mgf",ci),b($i,"mode",Xr),b($i,"pdf",Ni),b($i,"quantile",Ii),b($i,"skewness",$r),b($i,"stdev",te),b($i,"variance",ee),$i},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).laplace=t();
//# sourceMappingURL=index.js.map
