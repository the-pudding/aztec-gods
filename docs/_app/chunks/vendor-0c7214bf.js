function m(){}const _t=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function mt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function U(t){return t()}function V(){return Object.create(null)}function x(t){t.forEach(U)}function O(t){return typeof t=="function"}function pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Yt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function yt(t){return Object.keys(t).length===0}function X(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Zt(t,e,n){t.$$.on_destroy.push(X(e,n))}function te(t,e,n,i){if(t){const r=Y(t,e,n,i);return t[0](r)}}function Y(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function ee(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function ne(t,e,n,i,r,l){if(r){const s=Y(e,n,i,l);t.p(s,r)}}function ie(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const Z=typeof window!="undefined";let gt=Z?()=>window.performance.now():()=>Date.now(),B=Z?t=>requestAnimationFrame(t):m;const $=new Set;function tt(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&B(tt)}function bt(t){let e;return $.size===0&&B(tt),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let T=!1;function xt(){T=!0}function wt(){T=!1}function $t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:$t(1,r,a=>e[n[a]].claim_order,u))-1;i[c]=n[d]+1;const f=d+1;n[f]=c,r=Math.max(f,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const d=u<l.length?l[u]:null;t.insertBefore(s[c],d)}}function et(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=j("style");return Et(nt(t),e),e}function Et(t,e){et(t.head||t,e)}function At(t,e){if(T){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function St(t,e,n){T&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function Ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function se(){return P(" ")}function ce(){return P("")}function it(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function le(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function oe(t,e){for(const n in e)Tt(t,n,e[n])}function jt(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,i,r=!1){rt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ct(t,e,n,i){return st(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ue(t,e,n){return ct(t,e,n,j)}function ae(t,e,n){return ct(t,e,n,Ct)}function Mt(t,e){return st(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(e),!0)}function fe(t){return Mt(t," ")}function lt(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function de(t){const e=lt(t,"HTML_TAG_START",0),n=lt(t,"HTML_TAG_END",e);if(e===n)return new ot;rt(t);const i=t.splice(e,n+1);k(i[0]),k(i[i.length-1]);const r=i.slice(1,i.length-1);for(const l of r)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ot(r)}function _e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function he(t,e){t.value=e==null?"":e}function me(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}let M;function zt(){if(M===void 0){M=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch{M=!0}}return M}function pe(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=j("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=zt();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=it(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=it(i.contentWindow,"resize",e)}),et(t,i),()=>{(r||l&&i.contentWindow)&&l(),k(i)}}function ye(t,e,n){t.classList[n?"add":"remove"](e)}function qt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function ge(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Ht{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=j(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}class ot extends Ht{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}}const W=new Set;let z=0;function Lt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ut(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let g=0;g<=1;g+=c){const w=e+(n-e)*l(g);u+=g*100+`%{${s(w,1-w)}}
`}const d=u+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Lt(d)}_${o}`,a=nt(t);W.add(a);const _=a.__svelte_stylesheet||(a.__svelte_stylesheet=kt(t).sheet),h=a.__svelte_rules||(a.__svelte_rules={});h[f]||(h[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${r}ms 1 both`,z+=1,f}function Rt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),z-=r,z||Dt())}function Dt(){B(()=>{z||(W.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),W.clear())})}let q;function b(t){q=t}function E(){if(!q)throw new Error("Function called outside component initialization");return q}function be(t){E().$$.on_mount.push(t)}function xe(t){E().$$.after_update.push(t)}function we(t,e){E().$$.context.set(t,e)}function $e(t){return E().$$.context.get(t)}const A=[],at=[],H=[],F=[],Ot=Promise.resolve();let G=!1;function Bt(){G||(G=!0,Ot.then(K))}function L(t){H.push(t)}function ve(t){F.push(t)}let I=!1;const J=new Set;function K(){if(!I){I=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];b(e),Pt(e.$$)}for(b(null),A.length=0;at.length;)at.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];J.has(e)||(J.add(e),e())}H.length=0}while(A.length);for(;F.length;)F.pop()();G=!1,I=!1,J.clear()}}function Pt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let N;function Wt(){return N||(N=Promise.resolve(),N.then(()=>{N=null})),N}function Q(t,e,n){t.dispatchEvent(qt(`${e?"intro":"outro"}${n}`))}const R=new Set;let p;function Ft(){p={r:0,c:[],p}}function Gt(){p.r||x(p.c),p=p.p}function ft(t,e){t&&t.i&&(R.delete(t),t.i(e))}function It(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),p.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Jt={duration:0};function ke(t,e,n,i){let r=e(t,n),l=i?0:1,s=null,o=null,c=null;function u(){c&&Rt(t,c)}function d(a,_){const h=a.b-l;return _*=Math.abs(h),{a:l,b:a.b,d:h,duration:_,start:a.start,end:a.start+_,group:a.group}}function f(a){const{delay:_=0,duration:h=300,easing:y=_t,tick:g=m,css:w}=r||Jt,D={start:gt()+_,b:a};a||(D.group=p,p.r+=1),s||o?o=D:(w&&(u(),c=ut(t,l,a,h,_,y,w)),a&&g(0,1),s=d(D,h),L(()=>Q(t,a,"start")),bt(S=>{if(o&&S>o.start&&(s=d(o,h),o=null,Q(t,s.b,"start"),w&&(u(),c=ut(t,l,s.b,s.duration,0,y,r.css))),s){if(S>=s.end)g(l=s.b,1-l),Q(t,s.b,"end"),o||(s.b?u():--s.group.r||x(s.group.c)),s=null;else if(S>=s.start){const dt=S-s.start;l=s.a+s.d*y(dt/s.duration),g(l,1-l)}}return!!(s||o)}))}return{run(a){O(r)?Wt().then(()=>{r=r(),f(a)}):f(a)},end(){u(),s=o=null}}}function Ee(t,e){const n=e.token={};function i(r,l,s,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;s!==void 0&&(c=c.slice(),c[s]=o);const u=r&&(e.current=r)(c);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,a)=>{a!==l&&f&&(Ft(),It(f,1,1,()=>{e.blocks[a]===f&&(e.blocks[a]=null)}),Gt())}):e.block.d(1),u.c(),ft(u,1),u.m(e.mount(),e.anchor),d=!0),e.block=u,e.blocks&&(e.blocks[l]=u),d&&K()}if(mt(t)){const r=E();if(t.then(l=>{b(r),i(e.then,1,e.value,l),b(null)},l=>{if(b(r),i(e.catch,2,e.error,l),b(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ae(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Ne(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Se(t){return typeof t=="object"&&t!==null?t:{}}function Ce(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Te(t){t&&t.c()}function je(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,n),i||L(()=>{const c=l.map(U).filter(O);s?s.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(L)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,e){t.$$.dirty[0]===-1&&(A.push(t),Bt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Me(t,e,n,i,r,l,s,o=[-1]){const c=q;b(t);const u=t.$$={fragment:null,ctx:null,props:l,update:m,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(f,a,..._)=>{const h=_.length?_[0]:a;return u.ctx&&r(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),d&&Ut(t,f)),a}):[],u.update(),d=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){xt();const f=jt(e.target);u.fragment&&u.fragment.l(f),f.forEach(k)}else u.fragment&&u.fragment.c();e.intro&&ft(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),wt(),K()}b(c)}class ze{$destroy(){Qt(this,1),this.$destroy=m}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const v=[];function Vt(t,e){return{subscribe:Xt(t,e).subscribe}}function Xt(t,e=m){let n;const i=new Set;function r(o){if(pt(t,o)&&(t=o,n)){const c=!v.length;for(const u of i)u[1](),v.push(u,t);if(c){for(let u=0;u<v.length;u+=2)v[u][0](v[u+1]);v.length=0}}}function l(o){r(o(t))}function s(o,c=m){const u=[o,c];return i.add(u),i.size===1&&(n=e(r)||m),o(t),()=>{i.delete(u),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:s}}function qe(t,e,n){const i=!Array.isArray(t),r=i?[t]:t,l=e.length<2;return Vt(n,s=>{let o=!1;const c=[];let u=0,d=m;const f=()=>{if(u)return;d();const _=e(i?c[0]:c,s);l?s(_):d=O(_)?_:m},a=r.map((_,h)=>X(_,y=>{c[h]=y,u&=~(1<<h),o&&f()},()=>{u|=1<<h}));return o=!0,f(),function(){x(a),d()}})}export{x as $,be as A,ht as B,Xt as C,At as D,m as E,te as F,ne as G,ie as H,ee as I,ge as J,me as K,ye as L,Ee as M,Ae as N,Yt as O,re as P,ot as Q,de as R,ze as S,Ct as T,ae as U,oe as V,it as W,O as X,$e as Y,Zt as Z,he as _,jt as a,le as a0,at as a1,Ce as a2,ve as a3,Vt as a4,L as a5,pe as a6,qe as a7,X as a8,_t as a9,ke as aa,Tt as b,ue as c,k as d,j as e,St as f,Mt as g,_e as h,Me as i,Te as j,se as k,ce as l,je as m,fe as n,Kt as o,Ne as p,Se as q,Ft as r,pt as s,P as t,It as u,Qt as v,Gt as w,ft as x,we as y,xe as z};
