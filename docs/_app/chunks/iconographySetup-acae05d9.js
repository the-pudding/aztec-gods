import{a9 as ce,S as Q,i as J,s as O,l as q,f as H,x as E,T as S,U as B,a as b,d as v,b as u,a5 as G,aa as D,r as A,u as R,w as C,K as V,H as x,P as K,j as W,m as X,o as Y,v as Z,A as oe,e as I,k as j,c as L,n as z,L as $,t as N,Q as ue,g as F,R as he}from"./vendor-d753ef3a.js";import{l as _e,s as me}from"./linear-a465d416.js";import{a as ge}from"./index-cc637137.js";function U(r,{delay:e=0,duration:i=400,easing:l=ce}={}){const t=+getComputedStyle(r).opacity;return{delay:e,duration:i,easing:l,css:s=>`opacity: ${s*t}`}}function ee(r,e,i){const l=r.slice();return l[6]=e[i],l}function le(r,e,i){const l=r.slice();return l[6]=e[i],l}function te(r){let e,i,l,t,s,d,o;return{c(){e=S("ellipse"),this.h()},l(a){e=B(a,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,class:!0}),b(e).forEach(v),this.h()},h(){u(e,"cx",i=r[5](r[6].cx)),u(e,"cy",l=r[5](r[6].cy)),u(e,"rx",t=r[5](r[6].rx)),u(e,"ry",s=r[5](r[6].ry)),u(e,"fill","white"),u(e,"class","svelte-1a02lkq")},m(a,f){H(a,e,f),o=!0},p(a,f){(!o||f&44&&i!==(i=a[5](a[6].cx)))&&u(e,"cx",i),(!o||f&44&&l!==(l=a[5](a[6].cy)))&&u(e,"cy",l),(!o||f&44&&t!==(t=a[5](a[6].rx)))&&u(e,"rx",t),(!o||f&44&&s!==(s=a[5](a[6].ry)))&&u(e,"ry",s)},i(a){o||(G(()=>{d||(d=D(e,U,{},!0)),d.run(1)}),o=!0)},o(a){d||(d=D(e,U,{},!1)),d.run(0),o=!1},d(a){a&&v(e),a&&d&&d.end()}}}function ie(r){let e,i,l=r[6].rx>0&&te(r);return{c(){l&&l.c(),e=q()},l(t){l&&l.l(t),e=q()},m(t,s){l&&l.m(t,s),H(t,e,s),i=!0},p(t,s){t[6].rx>0?l?(l.p(t,s),s&12&&E(l,1)):(l=te(t),l.c(),E(l,1),l.m(e.parentNode,e)):l&&(A(),R(l,1,1,()=>{l=null}),C())},i(t){i||(E(l),i=!0)},o(t){R(l),i=!1},d(t){l&&l.d(t),t&&v(e)}}}function re(r){let e,i,l,t,s,d,o;return{c(){e=S("ellipse"),this.h()},l(a){e=B(a,"ellipse",{class:!0,cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,"stroke-width":!0}),b(e).forEach(v),this.h()},h(){u(e,"class","circle-overlay svelte-1a02lkq"),u(e,"cx",i=r[5](r[6].cx)),u(e,"cy",l=r[5](r[6].cy)),u(e,"rx",t=r[5](r[6].rx)),u(e,"ry",s=r[5](r[6].ry)),u(e,"fill","none"),u(e,"stroke-width","40")},m(a,f){H(a,e,f),o=!0},p(a,f){(!o||f&44&&i!==(i=a[5](a[6].cx)))&&u(e,"cx",i),(!o||f&44&&l!==(l=a[5](a[6].cy)))&&u(e,"cy",l),(!o||f&44&&t!==(t=a[5](a[6].rx)))&&u(e,"rx",t),(!o||f&44&&s!==(s=a[5](a[6].ry)))&&u(e,"ry",s)},i(a){o||(G(()=>{d||(d=D(e,U,{},!0)),d.run(1)}),o=!0)},o(a){d||(d=D(e,U,{},!1)),d.run(0),o=!1},d(a){a&&v(e),a&&d&&d.end()}}}function se(r){let e,i,l=r[6].rx>0&&re(r);return{c(){l&&l.c(),e=q()},l(t){l&&l.l(t),e=q()},m(t,s){l&&l.m(t,s),H(t,e,s),i=!0},p(t,s){t[6].rx>0?l?(l.p(t,s),s&12&&E(l,1)):(l=re(t),l.c(),E(l,1),l.m(e.parentNode,e)):l&&(A(),R(l,1,1,()=>{l=null}),C())},i(t){i||(E(l),i=!0)},o(t){R(l),i=!1},d(t){l&&l.d(t),t&&v(e)}}}function de(r){let e,i,l,t,s,d,o,a,f,k,p,w=r[3][r[2]],g=[];for(let n=0;n<w.length;n+=1)g[n]=ie(le(r,w,n));const T=n=>R(g[n],1,1,()=>{g[n]=null});let _=r[3][r[2]],c=[];for(let n=0;n<_.length;n+=1)c[n]=se(ee(r,_,n));const y=n=>R(c[n],1,1,()=>{c[n]=null});return{c(){e=S("svg"),i=S("g"),t=S("mask"),s=S("rect");for(let n=0;n<g.length;n+=1)g[n].c();for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){e=B(n,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,"xml:space":!0,style:!0});var h=b(e);i=B(h,"g",{mask:!0});var m=b(i);m.forEach(v),t=B(h,"mask",{id:!0});var M=b(t);s=B(M,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,"fill-opacity":!0}),b(s).forEach(v);for(let P=0;P<g.length;P+=1)g[P].l(M);M.forEach(v);for(let P=0;P<c.length;P+=1)c[P].l(h);h.forEach(v),this.h()},h(){u(i,"mask",l=`url(#mask-${r[0]})`),u(s,"x","0"),u(s,"y","0"),u(s,"width",d=r[4][1]),u(s,"height",o=r[4][1]),u(s,"fill","white"),u(s,"fill-opacity",.1),u(t,"id",a=`mask-${r[0]}`),u(e,"width","100%"),u(e,"height","100%"),u(e,"viewBox",k="0 0 "+r[4][1]+" "+r[4][1]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xml:space","preserve"),V(e,"fill-rule","evenodd"),V(e,"clip-rule","evenodd"),V(e,"stroke-linecap","round"),V(e,"stroke-linejoin","round"),V(e,"overflow","visible")},m(n,h){H(n,e,h),x(e,i),i.innerHTML=r[1],x(e,t),x(t,s);for(let m=0;m<g.length;m+=1)g[m].m(t,null);for(let m=0;m<c.length;m+=1)c[m].m(e,null);p=!0},p(n,[h]){if((!p||h&2)&&(i.innerHTML=n[1]),(!p||h&1&&l!==(l=`url(#mask-${n[0]})`))&&u(i,"mask",l),(!p||h&16&&d!==(d=n[4][1]))&&u(s,"width",d),(!p||h&16&&o!==(o=n[4][1]))&&u(s,"height",o),h&44){w=n[3][n[2]];let m;for(m=0;m<w.length;m+=1){const M=le(n,w,m);g[m]?(g[m].p(M,h),E(g[m],1)):(g[m]=ie(M),g[m].c(),E(g[m],1),g[m].m(t,null))}for(A(),m=w.length;m<g.length;m+=1)T(m);C()}if((!p||h&1&&a!==(a=`mask-${n[0]}`))&&u(t,"id",a),h&44){_=n[3][n[2]];let m;for(m=0;m<_.length;m+=1){const M=ee(n,_,m);c[m]?(c[m].p(M,h),E(c[m],1)):(c[m]=se(M),c[m].c(),E(c[m],1),c[m].m(e,null))}for(A(),m=_.length;m<c.length;m+=1)y(m);C()}(!p||h&16&&k!==(k="0 0 "+n[4][1]+" "+n[4][1]))&&u(e,"viewBox",k)},i(n){if(!p){for(let h=0;h<w.length;h+=1)E(g[h]);G(()=>{f||(f=D(t,U,{},!0)),f.run(1)});for(let h=0;h<_.length;h+=1)E(c[h]);p=!0}},o(n){g=g.filter(Boolean);for(let h=0;h<g.length;h+=1)R(g[h]);f||(f=D(t,U,{},!1)),f.run(0),c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)R(c[h]);p=!1},d(n){n&&v(e),K(g,n),n&&f&&f.end(),K(c,n)}}}function ve(r,e,i){let l,{name:t="mask-name"}=e,{imgPath:s=""}=e,{selected:d=""}=e,{positions:o=[]}=e,{imageRange:a=[0,1]}=e;return r.$$set=f=>{"name"in f&&i(0,t=f.name),"imgPath"in f&&i(1,s=f.imgPath),"selected"in f&&i(2,d=f.selected),"positions"in f&&i(3,o=f.positions),"imageRange"in f&&i(4,a=f.imageRange)},r.$$.update=()=>{r.$$.dirty&16&&i(5,l=_e().domain([0,1]).range(a))},[t,s,d,o,a,l]}class ye extends Q{constructor(e){super();J(this,e,ve,de,O,{name:0,imgPath:1,selected:2,positions:3,imageRange:4})}}function ne(r,e,i){const l=r.slice();return l[12]=e[i],l[14]=i,l}function ke(r){let e,i,l;return{c(){e=N("("),i=new ue,l=N(")"),this.h()},l(t){e=F(t,"("),i=he(t),l=F(t,")"),this.h()},h(){i.a=l},m(t,s){H(t,e,s),i.m(r[3],t,s),H(t,l,s)},p(t,s){s&8&&i.p(t[3])},d(t){t&&v(e),t&&i.d(),t&&v(l)}}}function pe(r){let e,i,l;return{c(){e=N("("),i=I("a"),l=N(")"),this.h()},l(t){e=F(t,"("),i=L(t,"A",{href:!0});var s=b(i);s.forEach(v),l=F(t,")"),this.h()},h(){u(i,"href",r[4])},m(t,s){H(t,e,s),H(t,i,s),i.innerHTML=r[3],H(t,l,s)},p(t,s){s&8&&(i.innerHTML=t[3]),s&16&&u(i,"href",t[4])},d(t){t&&v(e),t&&v(i),t&&v(l)}}}function ae(r){let e,i=r[12].title+"";return{c(){e=I("div"),this.h()},l(l){e=L(l,"DIV",{class:!0});var t=b(e);t.forEach(v),this.h()},h(){u(e,"class","step-title svelte-1ri3ff6")},m(l,t){H(l,e,t),e.innerHTML=i},p(l,t){t&64&&i!==(i=l[12].title+"")&&(e.innerHTML=i)},d(l){l&&v(e)}}}function fe(r){let e,i,l,t=r[12].text+"",s,d,o=r[12].title&&ae(r);return{c(){e=I("div"),o&&o.c(),i=j(),l=I("div"),s=j(),this.h()},l(a){e=L(a,"DIV",{class:!0});var f=b(e);o&&o.l(f),i=z(f),l=L(f,"DIV",{class:!0});var k=b(l);k.forEach(v),s=z(f),f.forEach(v),this.h()},h(){u(l,"class","step-text svelte-1ri3ff6"),u(e,"class",d="step step-"+r[1]+" svelte-1ri3ff6"),$(e,"selected",r[0]===r[14])},m(a,f){H(a,e,f),o&&o.m(e,null),x(e,i),x(e,l),l.innerHTML=t,x(e,s)},p(a,f){a[12].title?o?o.p(a,f):(o=ae(a),o.c(),o.m(e,i)):o&&(o.d(1),o=null),f&64&&t!==(t=a[12].text+"")&&(l.innerHTML=t),f&2&&d!==(d="step step-"+a[1]+" svelte-1ri3ff6")&&u(e,"class",d),f&3&&$(e,"selected",a[0]===a[14])},d(a){a&&v(e),o&&o.d()}}}function we(r){let e,i,l,t,s,d,o,a,f,k;function p(c,y){return c[4]?pe:ke}let w=p(r),g=w(r);o=new ye({props:{name:r[2],selected:r[9].id,imgPath:r[5],positions:r[7],imageRange:r[8]}});let T=r[6],_=[];for(let c=0;c<T.length;c+=1)_[c]=fe(ne(r,T,c));return{c(){e=I("div"),i=I("figure"),l=I("h3"),t=j(),s=I("div"),g.c(),d=j(),W(o.$$.fragment),a=j(),f=I("div");for(let c=0;c<_.length;c+=1)_[c].c();this.h()},l(c){e=L(c,"DIV",{id:!0,class:!0});var y=b(e);i=L(y,"FIGURE",{class:!0});var n=b(i);l=L(n,"H3",{class:!0});var h=b(l);h.forEach(v),t=z(n),s=L(n,"DIV",{class:!0});var m=b(s);g.l(m),m.forEach(v),d=z(n),X(o.$$.fragment,n),n.forEach(v),a=z(y),f=L(y,"DIV",{class:!0});var M=b(f);for(let P=0;P<_.length;P+=1)_[P].l(M);M.forEach(v),y.forEach(v),this.h()},h(){u(l,"class","svelte-1ri3ff6"),u(s,"class","illustration-source svelte-1ri3ff6"),u(i,"class","svelte-1ri3ff6"),u(f,"class","scroll-area svelte-1ri3ff6"),u(e,"id","scrolly"),u(e,"class","svelte-1ri3ff6")},m(c,y){H(c,e,y),x(e,i),x(i,l),l.innerHTML=r[1],x(i,t),x(i,s),g.m(s,null),x(i,d),Y(o,i,null),x(e,a),x(e,f);for(let n=0;n<_.length;n+=1)_[n].m(f,null);k=!0},p(c,y){(!k||y&2)&&(l.innerHTML=c[1]),w===(w=p(c))&&g?g.p(c,y):(g.d(1),g=w(c),g&&(g.c(),g.m(s,null)));const n={};if(y&4&&(n.name=c[2]),y&512&&(n.selected=c[9].id),y&32&&(n.imgPath=c[5]),y&128&&(n.positions=c[7]),y&256&&(n.imageRange=c[8]),o.$set(n),y&67){T=c[6];let h;for(h=0;h<T.length;h+=1){const m=ne(c,T,h);_[h]?_[h].p(m,y):(_[h]=fe(m),_[h].c(),_[h].m(f,null))}for(;h<_.length;h+=1)_[h].d(1);_.length=T.length}},i(c){k||(E(o.$$.fragment,c),k=!0)},o(c){R(o.$$.fragment,c),k=!1},d(c){c&&v(e),g.d(),Z(o),K(_,c)}}}function be(r){let e,i;return e=new ge({props:{id:"gods-iconography-"+r[1],fullBleed:!0,$$slots:{default:[we]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,t){Y(e,l,t),i=!0},p(l,[t]){const s={};t&2&&(s.id="gods-iconography-"+l[1]),t&33791&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){i||(E(e.$$.fragment,l),i=!0)},o(l){R(e.$$.fragment,l),i=!1},d(l){Z(e,l)}}}function Ee(r,e,i){const l=!1;let{title:t="Tezcatlipoca"}=e,{name:s="mask-name"}=e,{source:d="illustration source"}=e,{sourceUrl:o=void 0}=e,{imgPath:a=""}=e,{selected:f=""}=e,{steps:k=[]}=e,{positions:p=[]}=e,{imageRange:w=[0,1]}=e,g=k[0];const T=_=>{i(0,f=_.index),i(9,g=k[_.index])};return oe(()=>{me().setup({step:`div .step-${t}`,offset:.5}).onStepEnter(T)}),r.$$set=_=>{"title"in _&&i(1,t=_.title),"name"in _&&i(2,s=_.name),"source"in _&&i(3,d=_.source),"sourceUrl"in _&&i(4,o=_.sourceUrl),"imgPath"in _&&i(5,a=_.imgPath),"selected"in _&&i(0,f=_.selected),"steps"in _&&i(6,k=_.steps),"positions"in _&&i(7,p=_.positions),"imageRange"in _&&i(8,w=_.imageRange)},[f,t,s,d,o,a,k,p,w,g,l]}class Pe extends Q{constructor(e){super();J(this,e,Ee,be,O,{ssr:10,title:1,name:2,source:3,sourceUrl:4,imgPath:5,selected:0,steps:6,positions:7,imageRange:8})}get ssr(){return this.$$.ctx[10]}}const Te={intro:[{cx:.5,cy:.5,rx:.49,ry:.49}],colors:[{cx:.5,cy:.5,rx:.49,ry:.49}],face:[{cx:.3,cy:.4,rx:.112,ry:.112}],spear:[{cx:.74,cy:.25,rx:.085,ry:.085}],mirror:[{cx:.768,cy:.44,rx:.122,ry:.122}],headdress:[{cx:.338,cy:.31,rx:.33,ry:.17}],foot:[{cx:.3,cy:.83,rx:.085,ry:.085}],skin:[{cx:.17,cy:.73,rx:.11,ry:.11}],pectoral:[{cx:.424,cy:.594,rx:.082,ry:.082}],nose:[{cx:.267,cy:.48,rx:.038,ry:.038}],ezpitzal:[{cx:.5,cy:.5,rx:.49,ry:.49}]},Re={intro:[{cx:.5,cy:.5,rx:.49,ry:.49}],claws:[{cx:.89,cy:.25,rx:.1,ry:.1},{cx:.87,cy:.75,rx:.13,ry:.1}],hair:[{cx:.5,cy:.41,rx:.295,ry:.13}],mouth:[{cx:.5,cy:.26,rx:.3295,ry:.17}],extramouths:[{cx:.5,cy:.58,rx:.13,ry:.13},{cx:.26,cy:.68,rx:.07,ry:.07},{cx:.74,cy:.68,rx:.07,ry:.07},{cx:.1,cy:.5,rx:.12,ry:.12},{cx:.9,cy:.5,rx:.12,ry:.12}],crouch:[{cx:.5,cy:.653,rx:.485,ry:.285}]};export{Pe as S,Te as a,Re as t};
