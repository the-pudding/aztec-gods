import{a9 as oe,S as Q,i as J,s as O,l as q,f as E,x as b,T as S,U as B,a as w,d as v,b as u,a5 as G,aa as D,r as A,u as R,w as C,K as V,H,P as K,j as W,m as X,o as Y,v as Z,A as fe,e as I,k as j,c as L,n as z,L as $,t as N,Q as ue,g as F,R as he}from"./vendor-d753ef3a.js";import{l as _e,s as me}from"./linear-a465d416.js";import{S as ge}from"./index-587ce063.js";function U(r,{delay:e=0,duration:i=400,easing:l=oe}={}){const t=+getComputedStyle(r).opacity;return{delay:e,duration:i,easing:l,css:s=>`opacity: ${s*t}`}}function ee(r,e,i){const l=r.slice();return l[6]=e[i],l}function le(r,e,i){const l=r.slice();return l[6]=e[i],l}function te(r){let e,i,l,t,s,d,f;return{c(){e=S("ellipse"),this.h()},l(a){e=B(a,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,class:!0}),w(e).forEach(v),this.h()},h(){u(e,"cx",i=r[5](r[6].cx)),u(e,"cy",l=r[5](r[6].cy)),u(e,"rx",t=r[5](r[6].rx)),u(e,"ry",s=r[5](r[6].ry)),u(e,"fill","white"),u(e,"class","svelte-1a02lkq")},m(a,c){E(a,e,c),f=!0},p(a,c){(!f||c&44&&i!==(i=a[5](a[6].cx)))&&u(e,"cx",i),(!f||c&44&&l!==(l=a[5](a[6].cy)))&&u(e,"cy",l),(!f||c&44&&t!==(t=a[5](a[6].rx)))&&u(e,"rx",t),(!f||c&44&&s!==(s=a[5](a[6].ry)))&&u(e,"ry",s)},i(a){f||(G(()=>{d||(d=D(e,U,{},!0)),d.run(1)}),f=!0)},o(a){d||(d=D(e,U,{},!1)),d.run(0),f=!1},d(a){a&&v(e),a&&d&&d.end()}}}function ie(r){let e,i,l=r[6].rx>0&&te(r);return{c(){l&&l.c(),e=q()},l(t){l&&l.l(t),e=q()},m(t,s){l&&l.m(t,s),E(t,e,s),i=!0},p(t,s){t[6].rx>0?l?(l.p(t,s),s&12&&b(l,1)):(l=te(t),l.c(),b(l,1),l.m(e.parentNode,e)):l&&(A(),R(l,1,1,()=>{l=null}),C())},i(t){i||(b(l),i=!0)},o(t){R(l),i=!1},d(t){l&&l.d(t),t&&v(e)}}}function re(r){let e,i,l,t,s,d,f;return{c(){e=S("ellipse"),this.h()},l(a){e=B(a,"ellipse",{class:!0,cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,"stroke-width":!0}),w(e).forEach(v),this.h()},h(){u(e,"class","circle-overlay svelte-1a02lkq"),u(e,"cx",i=r[5](r[6].cx)),u(e,"cy",l=r[5](r[6].cy)),u(e,"rx",t=r[5](r[6].rx)),u(e,"ry",s=r[5](r[6].ry)),u(e,"fill","none"),u(e,"stroke-width","40")},m(a,c){E(a,e,c),f=!0},p(a,c){(!f||c&44&&i!==(i=a[5](a[6].cx)))&&u(e,"cx",i),(!f||c&44&&l!==(l=a[5](a[6].cy)))&&u(e,"cy",l),(!f||c&44&&t!==(t=a[5](a[6].rx)))&&u(e,"rx",t),(!f||c&44&&s!==(s=a[5](a[6].ry)))&&u(e,"ry",s)},i(a){f||(G(()=>{d||(d=D(e,U,{},!0)),d.run(1)}),f=!0)},o(a){d||(d=D(e,U,{},!1)),d.run(0),f=!1},d(a){a&&v(e),a&&d&&d.end()}}}function se(r){let e,i,l=r[6].rx>0&&re(r);return{c(){l&&l.c(),e=q()},l(t){l&&l.l(t),e=q()},m(t,s){l&&l.m(t,s),E(t,e,s),i=!0},p(t,s){t[6].rx>0?l?(l.p(t,s),s&12&&b(l,1)):(l=re(t),l.c(),b(l,1),l.m(e.parentNode,e)):l&&(A(),R(l,1,1,()=>{l=null}),C())},i(t){i||(b(l),i=!0)},o(t){R(l),i=!1},d(t){l&&l.d(t),t&&v(e)}}}function de(r){let e,i,l,t,s,d,f,a,c,k,p,x=r[3][r[2]],g=[];for(let n=0;n<x.length;n+=1)g[n]=ie(le(r,x,n));const T=n=>R(g[n],1,1,()=>{g[n]=null});let _=r[3][r[2]],o=[];for(let n=0;n<_.length;n+=1)o[n]=se(ee(r,_,n));const y=n=>R(o[n],1,1,()=>{o[n]=null});return{c(){e=S("svg"),i=S("g"),t=S("mask"),s=S("rect");for(let n=0;n<g.length;n+=1)g[n].c();for(let n=0;n<o.length;n+=1)o[n].c();this.h()},l(n){e=B(n,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,"xml:space":!0,style:!0});var h=w(e);i=B(h,"g",{mask:!0});var m=w(i);m.forEach(v),t=B(h,"mask",{id:!0});var M=w(t);s=B(M,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,"fill-opacity":!0}),w(s).forEach(v);for(let P=0;P<g.length;P+=1)g[P].l(M);M.forEach(v);for(let P=0;P<o.length;P+=1)o[P].l(h);h.forEach(v),this.h()},h(){u(i,"mask",l=`url(#mask-${r[0]})`),u(s,"x","0"),u(s,"y","0"),u(s,"width",d=r[4][1]),u(s,"height",f=r[4][1]),u(s,"fill","white"),u(s,"fill-opacity",.1),u(t,"id",a=`mask-${r[0]}`),u(e,"width","100%"),u(e,"height","100%"),u(e,"viewBox",k="0 0 "+r[4][1]+" "+r[4][1]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xml:space","preserve"),V(e,"fill-rule","evenodd"),V(e,"clip-rule","evenodd"),V(e,"stroke-linecap","round"),V(e,"stroke-linejoin","round"),V(e,"overflow","visible")},m(n,h){E(n,e,h),H(e,i),i.innerHTML=r[1],H(e,t),H(t,s);for(let m=0;m<g.length;m+=1)g[m].m(t,null);for(let m=0;m<o.length;m+=1)o[m].m(e,null);p=!0},p(n,[h]){if((!p||h&2)&&(i.innerHTML=n[1]),(!p||h&1&&l!==(l=`url(#mask-${n[0]})`))&&u(i,"mask",l),(!p||h&16&&d!==(d=n[4][1]))&&u(s,"width",d),(!p||h&16&&f!==(f=n[4][1]))&&u(s,"height",f),h&44){x=n[3][n[2]];let m;for(m=0;m<x.length;m+=1){const M=le(n,x,m);g[m]?(g[m].p(M,h),b(g[m],1)):(g[m]=ie(M),g[m].c(),b(g[m],1),g[m].m(t,null))}for(A(),m=x.length;m<g.length;m+=1)T(m);C()}if((!p||h&1&&a!==(a=`mask-${n[0]}`))&&u(t,"id",a),h&44){_=n[3][n[2]];let m;for(m=0;m<_.length;m+=1){const M=ee(n,_,m);o[m]?(o[m].p(M,h),b(o[m],1)):(o[m]=se(M),o[m].c(),b(o[m],1),o[m].m(e,null))}for(A(),m=_.length;m<o.length;m+=1)y(m);C()}(!p||h&16&&k!==(k="0 0 "+n[4][1]+" "+n[4][1]))&&u(e,"viewBox",k)},i(n){if(!p){for(let h=0;h<x.length;h+=1)b(g[h]);G(()=>{c||(c=D(t,U,{},!0)),c.run(1)});for(let h=0;h<_.length;h+=1)b(o[h]);p=!0}},o(n){g=g.filter(Boolean);for(let h=0;h<g.length;h+=1)R(g[h]);c||(c=D(t,U,{},!1)),c.run(0),o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)R(o[h]);p=!1},d(n){n&&v(e),K(g,n),n&&c&&c.end(),K(o,n)}}}function ve(r,e,i){let l,{name:t="mask-name"}=e,{imgPath:s=""}=e,{selected:d=""}=e,{positions:f=[]}=e,{imageRange:a=[0,1]}=e;return r.$$set=c=>{"name"in c&&i(0,t=c.name),"imgPath"in c&&i(1,s=c.imgPath),"selected"in c&&i(2,d=c.selected),"positions"in c&&i(3,f=c.positions),"imageRange"in c&&i(4,a=c.imageRange)},r.$$.update=()=>{r.$$.dirty&16&&i(5,l=_e().domain([0,1]).range(a))},[t,s,d,f,a,l]}class ye extends Q{constructor(e){super();J(this,e,ve,de,O,{name:0,imgPath:1,selected:2,positions:3,imageRange:4})}}function ne(r,e,i){const l=r.slice();return l[12]=e[i],l[14]=i,l}function ke(r){let e,i,l;return{c(){e=N("("),i=new ue,l=N(")"),this.h()},l(t){e=F(t,"("),i=he(t),l=F(t,")"),this.h()},h(){i.a=l},m(t,s){E(t,e,s),i.m(r[3],t,s),E(t,l,s)},p(t,s){s&8&&i.p(t[3])},d(t){t&&v(e),t&&i.d(),t&&v(l)}}}function pe(r){let e,i,l;return{c(){e=N("("),i=I("a"),l=N(")"),this.h()},l(t){e=F(t,"("),i=L(t,"A",{href:!0});var s=w(i);s.forEach(v),l=F(t,")"),this.h()},h(){u(i,"href",r[4])},m(t,s){E(t,e,s),E(t,i,s),i.innerHTML=r[3],E(t,l,s)},p(t,s){s&8&&(i.innerHTML=t[3]),s&16&&u(i,"href",t[4])},d(t){t&&v(e),t&&v(i),t&&v(l)}}}function ae(r){let e,i=r[12].title+"";return{c(){e=I("div"),this.h()},l(l){e=L(l,"DIV",{class:!0});var t=w(e);t.forEach(v),this.h()},h(){u(e,"class","step-title svelte-3rlxx8")},m(l,t){E(l,e,t),e.innerHTML=i},p(l,t){t&64&&i!==(i=l[12].title+"")&&(e.innerHTML=i)},d(l){l&&v(e)}}}function ce(r){let e,i,l,t=r[12].text+"",s,d,f=r[12].title&&ae(r);return{c(){e=I("div"),f&&f.c(),i=j(),l=I("div"),s=j(),this.h()},l(a){e=L(a,"DIV",{class:!0});var c=w(e);f&&f.l(c),i=z(c),l=L(c,"DIV",{class:!0});var k=w(l);k.forEach(v),s=z(c),c.forEach(v),this.h()},h(){u(l,"class","step-text svelte-3rlxx8"),u(e,"class",d="step step-"+r[1]+" svelte-3rlxx8"),$(e,"selected",r[0]===r[14])},m(a,c){E(a,e,c),f&&f.m(e,null),H(e,i),H(e,l),l.innerHTML=t,H(e,s)},p(a,c){a[12].title?f?f.p(a,c):(f=ae(a),f.c(),f.m(e,i)):f&&(f.d(1),f=null),c&64&&t!==(t=a[12].text+"")&&(l.innerHTML=t),c&2&&d!==(d="step step-"+a[1]+" svelte-3rlxx8")&&u(e,"class",d),c&3&&$(e,"selected",a[0]===a[14])},d(a){a&&v(e),f&&f.d()}}}function xe(r){let e,i,l,t,s,d,f,a,c,k;function p(o,y){return o[4]?pe:ke}let x=p(r),g=x(r);f=new ye({props:{name:r[2],selected:r[9].id,imgPath:r[5],positions:r[7],imageRange:r[8]}});let T=r[6],_=[];for(let o=0;o<T.length;o+=1)_[o]=ce(ne(r,T,o));return{c(){e=I("div"),i=I("figure"),l=I("h3"),t=j(),s=I("div"),g.c(),d=j(),W(f.$$.fragment),a=j(),c=I("div");for(let o=0;o<_.length;o+=1)_[o].c();this.h()},l(o){e=L(o,"DIV",{id:!0,class:!0});var y=w(e);i=L(y,"FIGURE",{class:!0});var n=w(i);l=L(n,"H3",{class:!0});var h=w(l);h.forEach(v),t=z(n),s=L(n,"DIV",{class:!0});var m=w(s);g.l(m),m.forEach(v),d=z(n),X(f.$$.fragment,n),n.forEach(v),a=z(y),c=L(y,"DIV",{class:!0});var M=w(c);for(let P=0;P<_.length;P+=1)_[P].l(M);M.forEach(v),y.forEach(v),this.h()},h(){u(l,"class","svelte-3rlxx8"),u(s,"class","illustration-source svelte-3rlxx8"),u(i,"class","svelte-3rlxx8"),u(c,"class","scroll-area svelte-3rlxx8"),u(e,"id","scrolly"),u(e,"class","svelte-3rlxx8")},m(o,y){E(o,e,y),H(e,i),H(i,l),l.innerHTML=r[1],H(i,t),H(i,s),g.m(s,null),H(i,d),Y(f,i,null),H(e,a),H(e,c);for(let n=0;n<_.length;n+=1)_[n].m(c,null);k=!0},p(o,y){(!k||y&2)&&(l.innerHTML=o[1]),x===(x=p(o))&&g?g.p(o,y):(g.d(1),g=x(o),g&&(g.c(),g.m(s,null)));const n={};if(y&4&&(n.name=o[2]),y&512&&(n.selected=o[9].id),y&32&&(n.imgPath=o[5]),y&128&&(n.positions=o[7]),y&256&&(n.imageRange=o[8]),f.$set(n),y&67){T=o[6];let h;for(h=0;h<T.length;h+=1){const m=ne(o,T,h);_[h]?_[h].p(m,y):(_[h]=ce(m),_[h].c(),_[h].m(c,null))}for(;h<_.length;h+=1)_[h].d(1);_.length=T.length}},i(o){k||(b(f.$$.fragment,o),k=!0)},o(o){R(f.$$.fragment,o),k=!1},d(o){o&&v(e),g.d(),Z(f),K(_,o)}}}function we(r){let e,i;return e=new ge({props:{id:"gods-iconography-"+r[1],fullBleed:!0,$$slots:{default:[xe]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,t){Y(e,l,t),i=!0},p(l,[t]){const s={};t&2&&(s.id="gods-iconography-"+l[1]),t&33791&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){i||(b(e.$$.fragment,l),i=!0)},o(l){R(e.$$.fragment,l),i=!1},d(l){Z(e,l)}}}function be(r,e,i){const l=!1;let{title:t="Tezcatlipoca"}=e,{name:s="mask-name"}=e,{source:d="illustration source"}=e,{sourceUrl:f=void 0}=e,{imgPath:a=""}=e,{selected:c=""}=e,{steps:k=[]}=e,{positions:p=[]}=e,{imageRange:x=[0,1]}=e,g=k[0];const T=_=>{i(0,c=_.index),i(9,g=k[_.index])};return fe(()=>{me().setup({step:`div .step-${t}`,offset:.5}).onStepEnter(T)}),r.$$set=_=>{"title"in _&&i(1,t=_.title),"name"in _&&i(2,s=_.name),"source"in _&&i(3,d=_.source),"sourceUrl"in _&&i(4,f=_.sourceUrl),"imgPath"in _&&i(5,a=_.imgPath),"selected"in _&&i(0,c=_.selected),"steps"in _&&i(6,k=_.steps),"positions"in _&&i(7,p=_.positions),"imageRange"in _&&i(8,x=_.imageRange)},[c,t,s,d,f,a,k,p,x,g,l]}class Pe extends Q{constructor(e){super();J(this,e,be,we,O,{ssr:10,title:1,name:2,source:3,sourceUrl:4,imgPath:5,selected:0,steps:6,positions:7,imageRange:8})}get ssr(){return this.$$.ctx[10]}}const Te={intro:[{cx:.5,cy:.5,rx:.49,ry:.49}],colors:[{cx:.5,cy:.5,rx:.49,ry:.49}],face:[{cx:.3,cy:.4,rx:.112,ry:.112}],spear:[{cx:.74,cy:.25,rx:.085,ry:.085}],mirror:[{cx:.768,cy:.44,rx:.122,ry:.122}],headdress:[{cx:.338,cy:.31,rx:.33,ry:.17}],foot:[{cx:.3,cy:.83,rx:.085,ry:.085}],skin:[{cx:.17,cy:.73,rx:.11,ry:.11}],pectoral:[{cx:.424,cy:.594,rx:.082,ry:.082}],nose:[{cx:.267,cy:.48,rx:.038,ry:.038}],ezpitzal:[{cx:.5,cy:.5,rx:.49,ry:.49}]},Re={intro:[{cx:.5,cy:.5,rx:.49,ry:.49}],claws:[{cx:.89,cy:.25,rx:.1,ry:.1},{cx:.87,cy:.75,rx:.13,ry:.1}],hair:[{cx:.5,cy:.41,rx:.295,ry:.13}],mouth:[{cx:.5,cy:.26,rx:.3295,ry:.17}],extramouths:[{cx:.5,cy:.58,rx:.13,ry:.13},{cx:.26,cy:.68,rx:.07,ry:.07},{cx:.74,cy:.68,rx:.07,ry:.07},{cx:.1,cy:.5,rx:.12,ry:.12},{cx:.9,cy:.5,rx:.12,ry:.12}],crouch:[{cx:.5,cy:.653,rx:.485,ry:.285}]};export{Pe as S,Te as a,Re as t};
