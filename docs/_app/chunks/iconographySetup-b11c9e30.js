import{a9 as _e,S as W,i as X,s as Y,l as V,f as x,x as M,T as B,U,a as E,d,b as u,a5 as Q,aa as j,r as F,u as L,w as G,K as C,E as I,P as J,j as Z,m as $,o as ee,v as le,A as me,e as T,k as z,c as R,n as q,L as te,Q as ge,R as ve}from"./vendor-72264d56.js";import{l as de,s as ye}from"./linear-a465d416.js";import{S as ke}from"./index-879a2c08.js";function A(i,{delay:e=0,duration:t=400,easing:l=_e}={}){const r=+getComputedStyle(i).opacity;return{delay:e,duration:t,easing:l,css:n=>`opacity: ${n*r}`}}function re(i,e,t){const l=i.slice();return l[6]=e[t],l}function ie(i,e,t){const l=i.slice();return l[6]=e[t],l}function se(i){let e,t,l,r,n,_,c;return{c(){e=B("ellipse"),this.h()},l(a){e=U(a,"ellipse",{cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,class:!0}),E(e).forEach(d),this.h()},h(){u(e,"cx",t=i[5](i[6].cx)),u(e,"cy",l=i[5](i[6].cy)),u(e,"rx",r=i[5](i[6].rx)),u(e,"ry",n=i[5](i[6].ry)),u(e,"fill","white"),u(e,"class","svelte-1a02lkq")},m(a,f){x(a,e,f),c=!0},p(a,f){(!c||f&44&&t!==(t=a[5](a[6].cx)))&&u(e,"cx",t),(!c||f&44&&l!==(l=a[5](a[6].cy)))&&u(e,"cy",l),(!c||f&44&&r!==(r=a[5](a[6].rx)))&&u(e,"rx",r),(!c||f&44&&n!==(n=a[5](a[6].ry)))&&u(e,"ry",n)},i(a){c||(Q(()=>{_||(_=j(e,A,{},!0)),_.run(1)}),c=!0)},o(a){_||(_=j(e,A,{},!1)),_.run(0),c=!1},d(a){a&&d(e),a&&_&&_.end()}}}function ae(i){let e,t,l=i[6].rx>0&&se(i);return{c(){l&&l.c(),e=V()},l(r){l&&l.l(r),e=V()},m(r,n){l&&l.m(r,n),x(r,e,n),t=!0},p(r,n){r[6].rx>0?l?(l.p(r,n),n&12&&M(l,1)):(l=se(r),l.c(),M(l,1),l.m(e.parentNode,e)):l&&(F(),L(l,1,1,()=>{l=null}),G())},i(r){t||(M(l),t=!0)},o(r){L(l),t=!1},d(r){l&&l.d(r),r&&d(e)}}}function ne(i){let e,t,l,r,n,_,c;return{c(){e=B("ellipse"),this.h()},l(a){e=U(a,"ellipse",{class:!0,cx:!0,cy:!0,rx:!0,ry:!0,fill:!0,"stroke-width":!0}),E(e).forEach(d),this.h()},h(){u(e,"class","circle-overlay svelte-1a02lkq"),u(e,"cx",t=i[5](i[6].cx)),u(e,"cy",l=i[5](i[6].cy)),u(e,"rx",r=i[5](i[6].rx)),u(e,"ry",n=i[5](i[6].ry)),u(e,"fill","none"),u(e,"stroke-width","40")},m(a,f){x(a,e,f),c=!0},p(a,f){(!c||f&44&&t!==(t=a[5](a[6].cx)))&&u(e,"cx",t),(!c||f&44&&l!==(l=a[5](a[6].cy)))&&u(e,"cy",l),(!c||f&44&&r!==(r=a[5](a[6].rx)))&&u(e,"rx",r),(!c||f&44&&n!==(n=a[5](a[6].ry)))&&u(e,"ry",n)},i(a){c||(Q(()=>{_||(_=j(e,A,{},!0)),_.run(1)}),c=!0)},o(a){_||(_=j(e,A,{},!1)),_.run(0),c=!1},d(a){a&&d(e),a&&_&&_.end()}}}function oe(i){let e,t,l=i[6].rx>0&&ne(i);return{c(){l&&l.c(),e=V()},l(r){l&&l.l(r),e=V()},m(r,n){l&&l.m(r,n),x(r,e,n),t=!0},p(r,n){r[6].rx>0?l?(l.p(r,n),n&12&&M(l,1)):(l=ne(r),l.c(),M(l,1),l.m(e.parentNode,e)):l&&(F(),L(l,1,1,()=>{l=null}),G())},i(r){t||(M(l),t=!0)},o(r){L(l),t=!1},d(r){l&&l.d(r),r&&d(e)}}}function pe(i){let e,t,l,r,n,_,c,a,f,p,w,b=i[3][i[2]],g=[];for(let o=0;o<b.length;o+=1)g[o]=ae(ie(i,b,o));const S=o=>L(g[o],1,1,()=>{g[o]=null});let m=i[3][i[2]],v=[];for(let o=0;o<m.length;o+=1)v[o]=oe(re(i,m,o));const P=o=>L(v[o],1,1,()=>{v[o]=null});return{c(){e=B("svg"),t=B("g"),r=B("mask"),n=B("rect");for(let o=0;o<g.length;o+=1)g[o].c();for(let o=0;o<v.length;o+=1)v[o].c();this.h()},l(o){e=U(o,"svg",{width:!0,height:!0,viewBox:!0,xmlns:!0,"xml:space":!0,style:!0});var h=E(e);t=U(h,"g",{mask:!0});var s=E(t);s.forEach(d),r=U(h,"mask",{id:!0});var y=E(r);n=U(y,"rect",{x:!0,y:!0,width:!0,height:!0,fill:!0,"fill-opacity":!0}),E(n).forEach(d);for(let k=0;k<g.length;k+=1)g[k].l(y);y.forEach(d);for(let k=0;k<v.length;k+=1)v[k].l(h);h.forEach(d),this.h()},h(){u(t,"mask",l=`url(#mask-${i[0]})`),u(n,"x","0"),u(n,"y","0"),u(n,"width",_=i[4][1]),u(n,"height",c=i[4][1]),u(n,"fill","white"),u(n,"fill-opacity",.1),u(r,"id",a=`mask-${i[0]}`),u(e,"width","100%"),u(e,"height","100%"),u(e,"viewBox",p="0 0 "+i[4][1]+" "+i[4][1]),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"xml:space","preserve"),C(e,"fill-rule","evenodd"),C(e,"clip-rule","evenodd"),C(e,"stroke-linecap","round"),C(e,"stroke-linejoin","round"),C(e,"overflow","visible")},m(o,h){x(o,e,h),I(e,t),t.innerHTML=i[1],I(e,r),I(r,n);for(let s=0;s<g.length;s+=1)g[s].m(r,null);for(let s=0;s<v.length;s+=1)v[s].m(e,null);w=!0},p(o,[h]){if((!w||h&2)&&(t.innerHTML=o[1]),(!w||h&1&&l!==(l=`url(#mask-${o[0]})`))&&u(t,"mask",l),(!w||h&16&&_!==(_=o[4][1]))&&u(n,"width",_),(!w||h&16&&c!==(c=o[4][1]))&&u(n,"height",c),h&44){b=o[3][o[2]];let s;for(s=0;s<b.length;s+=1){const y=ie(o,b,s);g[s]?(g[s].p(y,h),M(g[s],1)):(g[s]=ae(y),g[s].c(),M(g[s],1),g[s].m(r,null))}for(F(),s=b.length;s<g.length;s+=1)S(s);G()}if((!w||h&1&&a!==(a=`mask-${o[0]}`))&&u(r,"id",a),h&44){m=o[3][o[2]];let s;for(s=0;s<m.length;s+=1){const y=re(o,m,s);v[s]?(v[s].p(y,h),M(v[s],1)):(v[s]=oe(y),v[s].c(),M(v[s],1),v[s].m(e,null))}for(F(),s=m.length;s<v.length;s+=1)P(s);G()}(!w||h&16&&p!==(p="0 0 "+o[4][1]+" "+o[4][1]))&&u(e,"viewBox",p)},i(o){if(!w){for(let h=0;h<b.length;h+=1)M(g[h]);Q(()=>{f||(f=j(r,A,{},!0)),f.run(1)});for(let h=0;h<m.length;h+=1)M(v[h]);w=!0}},o(o){g=g.filter(Boolean);for(let h=0;h<g.length;h+=1)L(g[h]);f||(f=j(r,A,{},!1)),f.run(0),v=v.filter(Boolean);for(let h=0;h<v.length;h+=1)L(v[h]);w=!1},d(o){o&&d(e),J(g,o),o&&f&&f.end(),J(v,o)}}}function we(i,e,t){let l,{name:r="mask-name"}=e,{imgPath:n=""}=e,{selected:_=""}=e,{positions:c=[]}=e,{imageRange:a=[0,1]}=e;return i.$$set=f=>{"name"in f&&t(0,r=f.name),"imgPath"in f&&t(1,n=f.imgPath),"selected"in f&&t(2,_=f.selected),"positions"in f&&t(3,c=f.positions),"imageRange"in f&&t(4,a=f.imageRange)},i.$$.update=()=>{i.$$.dirty&16&&t(5,l=de().domain([0,1]).range(a))},[r,n,_,c,a,l]}class be extends W{constructor(e){super();X(this,e,we,pe,Y,{name:0,imgPath:1,selected:2,positions:3,imageRange:4})}}function ce(i,e,t){const l=i.slice();return l[12]=e[t],l[14]=t,l}function Ee(i){let e,t;return{c(){e=new ge,t=V(),this.h()},l(l){e=ve(l),t=V(),this.h()},h(){e.a=t},m(l,r){e.m(i[3],l,r),x(l,t,r)},p(l,r){r&8&&e.p(l[3])},d(l){l&&d(t),l&&e.d()}}}function Ie(i){let e;return{c(){e=T("a"),this.h()},l(t){e=R(t,"A",{href:!0});var l=E(e);l.forEach(d),this.h()},h(){u(e,"href",i[4])},m(t,l){x(t,e,l),e.innerHTML=i[3]},p(t,l){l&8&&(e.innerHTML=t[3]),l&16&&u(e,"href",t[4])},d(t){t&&d(e)}}}function fe(i){let e,t=i[12].title+"";return{c(){e=T("div"),this.h()},l(l){e=R(l,"DIV",{class:!0});var r=E(e);r.forEach(d),this.h()},h(){u(e,"class","step-title svelte-ryavol")},m(l,r){x(l,e,r),e.innerHTML=t},p(l,r){r&64&&t!==(t=l[12].title+"")&&(e.innerHTML=t)},d(l){l&&d(e)}}}function ue(i){let e,t,l,r=i[12].text+"",n,_,c=i[12].title&&fe(i);return{c(){e=T("div"),c&&c.c(),t=z(),l=T("div"),n=z(),this.h()},l(a){e=R(a,"DIV",{class:!0});var f=E(e);c&&c.l(f),t=q(f),l=R(f,"DIV",{class:!0});var p=E(l);p.forEach(d),n=q(f),f.forEach(d),this.h()},h(){u(l,"class","step-text svelte-ryavol"),u(e,"class",_="step step-"+i[1]+" svelte-ryavol"),te(e,"selected",i[0]===i[14])},m(a,f){x(a,e,f),c&&c.m(e,null),I(e,t),I(e,l),l.innerHTML=r,I(e,n)},p(a,f){a[12].title?c?c.p(a,f):(c=fe(a),c.c(),c.m(e,t)):c&&(c.d(1),c=null),f&64&&r!==(r=a[12].text+"")&&(l.innerHTML=r),f&2&&_!==(_="step step-"+a[1]+" svelte-ryavol")&&u(e,"class",_),f&3&&te(e,"selected",a[0]===a[14])},d(a){a&&d(e),c&&c.d()}}}function He(i){let e,t,l,r,n,_,c,a,f,p,w,b,g,S;l=new be({props:{name:i[2],selected:i[9].id,imgPath:i[5],positions:i[7],imageRange:i[8]}});function m(s,y){return s[4]?Ie:Ee}let v=m(i),P=v(i),o=i[6],h=[];for(let s=0;s<o.length;s+=1)h[s]=ue(ce(i,o,s));return{c(){e=T("div"),t=T("figure"),Z(l.$$.fragment),r=z(),n=T("div"),P.c(),_=z(),c=T("div"),a=T("div"),f=z(),p=T("div"),w=T("div"),b=T("h3"),g=z();for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){e=R(s,"DIV",{id:!0,class:!0});var y=E(e);t=R(y,"FIGURE",{class:!0});var k=E(t);$(l.$$.fragment,k),r=q(k),n=R(k,"DIV",{class:!0});var H=E(n);P.l(H),H.forEach(d),k.forEach(d),_=q(y),c=R(y,"DIV",{class:!0});var D=E(c);a=R(D,"DIV",{class:!0}),E(a).forEach(d),f=q(D),p=R(D,"DIV",{class:!0});var N=E(p);w=R(N,"DIV",{class:!0});var O=E(w);b=R(O,"H3",{class:!0});var he=E(b);he.forEach(d),O.forEach(d),g=q(N);for(let K=0;K<h.length;K+=1)h[K].l(N);N.forEach(d),D.forEach(d),y.forEach(d),this.h()},h(){u(n,"class","illustration-source svelte-ryavol"),u(t,"class","svelte-ryavol"),u(a,"class","on-top-of-viz"),u(b,"class","svelte-ryavol"),u(w,"class","god-name svelte-ryavol"),u(p,"class","scroll-area svelte-ryavol"),u(c,"class","scroll-wrapper svelte-ryavol"),u(e,"id","scrolly"),u(e,"class","svelte-ryavol")},m(s,y){x(s,e,y),I(e,t),ee(l,t,null),I(t,r),I(t,n),P.m(n,null),I(e,_),I(e,c),I(c,a),I(c,f),I(c,p),I(p,w),I(w,b),b.innerHTML=i[1],I(p,g);for(let k=0;k<h.length;k+=1)h[k].m(p,null);S=!0},p(s,y){const k={};if(y&4&&(k.name=s[2]),y&512&&(k.selected=s[9].id),y&32&&(k.imgPath=s[5]),y&128&&(k.positions=s[7]),y&256&&(k.imageRange=s[8]),l.$set(k),v===(v=m(s))&&P?P.p(s,y):(P.d(1),P=v(s),P&&(P.c(),P.m(n,null))),(!S||y&2)&&(b.innerHTML=s[1]),y&67){o=s[6];let H;for(H=0;H<o.length;H+=1){const D=ce(s,o,H);h[H]?h[H].p(D,y):(h[H]=ue(D),h[H].c(),h[H].m(p,null))}for(;H<h.length;H+=1)h[H].d(1);h.length=o.length}},i(s){S||(M(l.$$.fragment,s),S=!0)},o(s){L(l.$$.fragment,s),S=!1},d(s){s&&d(e),le(l),P.d(),J(h,s)}}}function Me(i){let e,t;return e=new ke({props:{id:"gods-iconography-"+i[1],fullBleed:!0,$$slots:{default:[He]},$$scope:{ctx:i}}}),{c(){Z(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,r){ee(e,l,r),t=!0},p(l,[r]){const n={};r&2&&(n.id="gods-iconography-"+l[1]),r&33791&&(n.$$scope={dirty:r,ctx:l}),e.$set(n)},i(l){t||(M(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){le(e,l)}}}function Pe(i,e,t){const l=!1;let{title:r="Tezcatlipoca"}=e,{name:n="mask-name"}=e,{source:_="illustration source"}=e,{sourceUrl:c=void 0}=e,{imgPath:a=""}=e,{selected:f=""}=e,{steps:p=[]}=e,{positions:w=[]}=e,{imageRange:b=[0,1]}=e,g=p[0];const S=m=>{t(0,f=m.index),t(9,g=p[m.index])};return me(()=>{ye().setup({step:`div .step-${r}`,offset:.5}).onStepEnter(S)}),i.$$set=m=>{"title"in m&&t(1,r=m.title),"name"in m&&t(2,n=m.name),"source"in m&&t(3,_=m.source),"sourceUrl"in m&&t(4,c=m.sourceUrl),"imgPath"in m&&t(5,a=m.imgPath),"selected"in m&&t(0,f=m.selected),"steps"in m&&t(6,p=m.steps),"positions"in m&&t(7,w=m.positions),"imageRange"in m&&t(8,b=m.imageRange)},[f,r,n,_,c,a,p,w,b,g,l]}class Le extends W{constructor(e){super();X(this,e,Pe,Me,Y,{ssr:10,title:1,name:2,source:3,sourceUrl:4,imgPath:5,selected:0,steps:6,positions:7,imageRange:8})}get ssr(){return this.$$.ctx[10]}}const Se={intro:[{cx:.5,cy:.5,rx:.49,ry:.49}],colors:[{cx:.5,cy:.5,rx:.49,ry:.49}],face:[{cx:.3,cy:.4,rx:.112,ry:.112}],spear:[{cx:.74,cy:.25,rx:.085,ry:.085}],mirror:[{cx:.768,cy:.44,rx:.122,ry:.122}],headdress:[{cx:.338,cy:.31,rx:.33,ry:.17}],foot:[{cx:.3,cy:.83,rx:.085,ry:.085}],skin:[{cx:.17,cy:.73,rx:.11,ry:.11}],pectoral:[{cx:.424,cy:.594,rx:.082,ry:.082}],nose:[{cx:.267,cy:.48,rx:.038,ry:.038}],ezpitzal:[{cx:.5,cy:.5,rx:.49,ry:.49}]},De={intro:[{cx:.5,cy:.5,rx:.49,ry:.49}],claws:[{cx:.89,cy:.25,rx:.1,ry:.1},{cx:.87,cy:.75,rx:.13,ry:.1}],hair:[{cx:.5,cy:.41,rx:.295,ry:.13}],mouth:[{cx:.5,cy:.26,rx:.3295,ry:.17}],extramouths:[{cx:.5,cy:.58,rx:.13,ry:.13},{cx:.26,cy:.68,rx:.07,ry:.07},{cx:.74,cy:.68,rx:.07,ry:.07},{cx:.1,cy:.5,rx:.12,ry:.12},{cx:.9,cy:.5,rx:.12,ry:.12}],crouch:[{cx:.5,cy:.653,rx:.485,ry:.285}]};export{Le as S,Se as a,De as t};