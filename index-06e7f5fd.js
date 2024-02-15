(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=window,ee=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),oe=new WeakMap;let _e=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ee&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=oe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&oe.set(t,e))}return e}toString(){return this.cssText}};const ke=i=>new _e(typeof i=="string"?i:i+"",void 0,te),Ne=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new _e(t,i,te)},Oe=(i,e)=>{ee?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),o=B.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=t.cssText,i.appendChild(s)})},ne=ee?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ke(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const j=window,re=j.trustedTypes,Te=re?re.emptyScript:"",le=j.reactiveElementPolyfillSupport,G={toAttribute(i,e){switch(e){case Boolean:i=i?Te:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ye=(i,e)=>e!==i&&(e==e||i==i),V={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:ye},X="finalized";let P=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const o=this._$Ep(s,t);o!==void 0&&(this._$Ev.set(o,s),e.push(o))}),e}static createProperty(e,t=V){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,s,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||V}static finalize(){if(this.hasOwnProperty(X))return!1;this[X]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of s)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const o of s)t.unshift(ne(o))}else e!==void 0&&t.push(ne(e));return t}static _$Ep(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Oe(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=V){var o;const n=this.constructor._$Ep(e,s);if(n!==void 0&&s.reflect===!0){const r=(((o=s.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?s.converter:G).toAttribute(t,s.type);this._$El=e,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var s;const o=this.constructor,n=o._$Ev.get(e);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:G;this._$El=n,this[n]=d.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,s){let o=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||ye)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(s)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdated)===null||o===void 0?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};P[X]=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},le==null||le({ReactiveElement:P}),((F=j.reactiveElementVersions)!==null&&F!==void 0?F:j.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const I=window,k=I.trustedTypes,ae=k?k.createPolicy("lit-html",{createHTML:i=>i}):void 0,D="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,se="?"+b,Me=`<${se}>`,E=document,H=()=>E.createComment(""),L=i=>i===null||typeof i!="object"&&typeof i!="function",ge=Array.isArray,be=i=>ge(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",J=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,de=/>/g,A=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,pe=/"/g,Ae=/^(?:script|style|textarea|title)$/i,Ue=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),T=Ue(1),S=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ue=new WeakMap,w=E.createTreeWalker(E,129,null,!1),xe=(i,e)=>{const t=i.length-1,s=[];let o,n=e===2?"<svg>":"",r=O;for(let a=0;a<t;a++){const l=i[a];let y,h,c=-1,p=0;for(;p<l.length&&(r.lastIndex=p,h=r.exec(l),h!==null);)p=r.lastIndex,r===O?h[1]==="!--"?r=ce:h[1]!==void 0?r=de:h[2]!==void 0?(Ae.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=A):h[3]!==void 0&&(r=A):r===A?h[0]===">"?(r=o??O,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,y=h[1],r=h[3]===void 0?A:h[3]==='"'?pe:he):r===pe||r===he?r=A:r===ce||r===de?r=O:(r=A,o=void 0);const u=r===A&&i[a+1].startsWith("/>")?" ":"";n+=r===O?l+Me:c>=0?(s.push(y),l.slice(0,c)+D+l.slice(c)+b+u):l+b+(c===-2?(s.push(void 0),a):u)}const d=n+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ae!==void 0?ae.createHTML(d):d,s]};class R{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let n=0,r=0;const d=e.length-1,a=this.parts,[l,y]=xe(e,t);if(this.el=R.createElement(l,s),w.currentNode=this.el.content,t===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(o=w.nextNode())!==null&&a.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const c of o.getAttributeNames())if(c.endsWith(D)||c.startsWith(b)){const p=y[r++];if(h.push(c),p!==void 0){const u=o.getAttribute(p.toLowerCase()+D).split(b),$=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:$[2],strings:u,ctor:$[1]==="."?Ee:$[1]==="?"?Se:$[1]==="@"?Ce:z})}else a.push({type:6,index:n})}for(const c of h)o.removeAttribute(c)}if(Ae.test(o.tagName)){const h=o.textContent.split(b),c=h.length-1;if(c>0){o.textContent=k?k.emptyScript:"";for(let p=0;p<c;p++)o.append(h[p],H()),w.nextNode(),a.push({type:2,index:++n});o.append(h[c],H())}}}else if(o.nodeType===8)if(o.data===se)a.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(b,h+1))!==-1;)a.push({type:7,index:n}),h+=b.length-1}n++}}static createElement(e,t){const s=E.createElement("template");return s.innerHTML=e,s}}function C(i,e,t=i,s){var o,n,r,d;if(e===S)return e;let a=s!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[s]:t._$Cl;const l=L(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,t,s)),s!==void 0?((r=(d=t)._$Co)!==null&&r!==void 0?r:d._$Co=[])[s]=a:t._$Cl=a),a!==void 0&&(e=C(i,a._$AS(i,e.values),a,s)),e}class we{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:s},parts:o}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:E).importNode(s,!0);w.currentNode=n;let r=w.nextNode(),d=0,a=0,l=o[0];for(;l!==void 0;){if(d===l.index){let y;l.type===2?y=new N(r,r.nextSibling,this,e):l.type===1?y=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(y=new Pe(r,this,e)),this._$AV.push(y),l=o[++a]}d!==(l==null?void 0:l.index)&&(r=w.nextNode(),d++)}return w.currentNode=E,n}v(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class N{constructor(e,t,s,o){var n;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),L(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):be(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==_&&L(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){var t;const{values:s,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=R.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(s);else{const r=new we(n,this),d=r.u(this.options);r.v(s),this.$(d),this._$AH=r}}_$AC(e){let t=ue.get(e.strings);return t===void 0&&ue.set(e.strings,t=new R(e)),t}T(e){ge(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const n of e)o===t.length?t.push(s=new N(this.k(H()),this.k(H()),this,this.options)):s=t[o],s._$AI(n),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class z{constructor(e,t,s,o,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,o){const n=this.strings;let r=!1;if(n===void 0)e=C(this,e,t,0),r=!L(e)||e!==this._$AH&&e!==S,r&&(this._$AH=e);else{const d=e;let a,l;for(e=n[0],a=0;a<n.length-1;a++)l=C(this,d[s+a],t,a),l===S&&(l=this._$AH[a]),r||(r=!L(l)||l!==this._$AH[a]),l===_?e=_:e!==_&&(e+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!o&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ee extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}const He=k?k.emptyScript:"";class Se extends z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==_?this.element.setAttribute(this.name,He):this.element.removeAttribute(this.name)}}class Ce extends z{constructor(e,t,s,o,n){super(e,t,s,o,n),this.type=5}_$AI(e,t=this){var s;if((e=(s=C(this,e,t,0))!==null&&s!==void 0?s:_)===S)return;const o=this._$AH,n=e===_&&o!==_||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==_&&(o===_||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class Pe{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const Le={O:D,P:b,A:se,C:1,M:xe,L:we,D:be,R:C,I:N,V:z,H:Se,N:Ce,U:Ee,F:Pe},fe=I.litHtmlPolyfillSupport;fe==null||fe(R,N),((W=I.litHtmlVersions)!==null&&W!==void 0?W:I.litHtmlVersions=[]).push("2.7.4");const Re=(i,e,t)=>{var s,o;const n=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let r=n._$litPart$;if(r===void 0){const d=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new N(e.insertBefore(H(),d),d,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,Y;let U=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return S}};U.finalized=!0,U._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:U});const ve=globalThis.litElementPolyfillSupport;ve==null||ve({LitElement:U});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=i=>e=>typeof e=="function"?((t,s)=>(customElements.define(t,s),s))(i,e):((t,s)=>{const{kind:o,elements:n}=s;return{kind:o,elements:n,finisher(r){customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},je=(i,e,t)=>{e.constructor.createProperty(t,i)};function m(i){return(e,t)=>t!==void 0?je(i,e,t):Be(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;((Z=window.HTMLSlotElement)===null||Z===void 0?void 0:Z.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=i=>(...e)=>({_$litDirective$:i,values:e});class qe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Fe}=Le,me=()=>document.createComment(""),M=(i,e,t)=>{var s;const o=i._$AA.parentNode,n=e===void 0?i._$AB:e._$AA;if(t===void 0){const r=o.insertBefore(me(),n),d=o.insertBefore(me(),n);t=new Fe(r,d,i,i.options)}else{const r=t._$AB.nextSibling,d=t._$AM,a=d!==i;if(a){let l;(s=t._$AQ)===null||s===void 0||s.call(t,i),t._$AM=i,t._$AP!==void 0&&(l=i._$AU)!==d._$AU&&t._$AP(l)}if(r!==n||a){let l=t._$AA;for(;l!==r;){const y=l.nextSibling;o.insertBefore(l,n),l=y}}}return t},x=(i,e,t=i)=>(i._$AI(e,t),i),Ve={},We=(i,e=Ve)=>i._$AH=e,Je=i=>i._$AH,Q=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA;const s=i._$AB.nextSibling;for(;t!==s;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(i,e,t)=>{const s=new Map;for(let o=e;o<=t;o++)s.set(i[o],o);return s},Ke=De(class extends qe{constructor(i){if(super(i),i.type!==Ie.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const o=[],n=[];let r=0;for(const d of i)o[r]=s?s(d,r):r,n[r]=t(d,r),r++;return{values:n,keys:o}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,s]){var o;const n=Je(i),{values:r,keys:d}=this.dt(e,t,s);if(!Array.isArray(n))return this.ht=d,r;const a=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],l=[];let y,h,c=0,p=n.length-1,u=0,$=r.length-1;for(;c<=p&&u<=$;)if(n[c]===null)c++;else if(n[p]===null)p--;else if(a[c]===d[u])l[u]=x(n[c],r[u]),c++,u++;else if(a[p]===d[$])l[$]=x(n[p],r[$]),p--,$--;else if(a[c]===d[$])l[$]=x(n[c],r[$]),M(i,l[$+1],n[c]),c++,$--;else if(a[p]===d[u])l[u]=x(n[p],r[u]),M(i,n[c],n[p]),p--,u++;else if(y===void 0&&(y=$e(d,u,$),h=$e(a,c,p)),y.has(a[c]))if(y.has(a[p])){const g=h.get(d[u]),q=g!==void 0?n[g]:null;if(q===null){const ie=M(i,n[c]);x(ie,r[u]),l[u]=ie}else l[u]=x(q,r[u]),M(i,n[c],q),n[g]=null;u++}else Q(n[p]),p--;else Q(n[c]),c++;for(;u<=$;){const g=M(i,l[$+1]);x(g,r[u]),l[u++]=g}for(;c<=p;){const g=n[c++];g!==null&&Q(g)}return this.ht=d,We(i,l),S}});var Ye=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,v=(i,e,t,s)=>{for(var o=s>1?void 0:s?Ze(e,t):e,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(e,t,o):r(o))||o);return s&&o&&Ye(e,t,o),o};let f=class extends U{constructor(){super(...arguments),this.internalservice=[],this.internalToEmails=[],this.server="https://emailsp.herokuapp.com/email",this.img="",this.estilo="",this.emailcolor="",this.tname="Name",this.tlname="Last Name",this.temail="Email",this.tphone="Phone",this.taddress="Address",this.ttypeservice="Select The Service You Need",this.tbestway="Best Way To Contact You",this.tcheckphone="Phone",this.tcheckcorreo="Email",this.tmessage="Message",this.tbutton="Send A Message",this.showLoader=!1,this.showModal=!1}get to(){return this.internalToEmails}set to(i){if(typeof i=="string"){const e=i.split(",");this.internalToEmails=e}else this.internalToEmails=i}get services(){return this.internalservice}set services(i){if(typeof i=="string"){const e=i.split(",");this.internalservice=e}else this.internalservice=i}get isenglish(){return this.internalboolean}set isenglish(i){if(typeof i=="string"){const e=i==="true";this.internalboolean=e}else this.internalboolean=i}closeModal(){this.showModal=!1}async handlesubmit(i){i.preventDefault(),this.showLoader=!0;const e=this.isenglish?"New Service Request":"Nueva Solicitud",t=new FormData(i.target),s=JSON.parse(JSON.stringify(Object.fromEntries(t))),o=this.to.map(n=>{const r={toEmail:n.trim(),nombre:s.name,lastname:s.lastName,email:s.email,asunto:`${e} From ${s.name} ${s.lastName}`,phone:s.phone,address:s.address,service:s.services,mensaje:s.message.length>0?s.message:"No Extra Info",img:this.img,color:this.emailcolor,waytocontact:s.contact};return fetch(this.server,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)})});try{await Promise.all(o),this.showLoader=!1,this.showModal=!0,this.shadowRoot.querySelector("form").reset()}catch{this.showLoader=!1}}render(){return T`
    <div class="contentForm">
    <form @submit=${this.handlesubmit} class="form_styles">
      <div class="content_inputs content_flex">
       <div class="input_wrap">
       <label for="name" class="visually-hidden span_tile_hidden">${this.tname} </label>
       <input
         id="name"
         type="text"
         name="name"
         placeholder=${this.tname}
         required
         class="input_style"
         aria-label="${this.tname}"
       />
       </div>
       
        <div class="input_wrap">
        <label for="lastName" class="visually-hidden span_tile_hidden">${this.tlname}</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder=${this.tlname}
          class="input_style"
          required
          aria-label="${this.tlname}"
        /></div>
        
      </div>
      <div class="content_inputs content_flex">
      <div class="input_wrap">
      <label for="email" class="visually-hidden span_tile_hidden">${this.temail} </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder=${this.temail}
          class="input_style"
          required
          aria-label="${this.temail}"
        />
       
      </div>
      <div class="input_wrap">
      <label for="phone" class="visually-hidden span_tile_hidden">${this.tphone} </label>
      <input
        id="phone"
        type="text"
        name="phone"
        placeholder=${this.tphone}
        class="input_style"
        required
        aria-label="${this.tphone}"
      />
     
      </div>
       
      </div>
      <div class="content_inputs content_flex">
      <div class="input_wrap_full">

        <label for="address" class="visually-hidden span_tile_hidden">${this.taddress}</label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder=${this.taddress}
          class="input_style"
          required
          aria-label="${this.taddress}"
        />
        
        </div>
      </div>
      <div class="content_inputs content_flex">
      <div class="input_wrap_full">
      <label for="services" class="span_tile">${this.ttypeservice}</label>
      <select name="services" id="services" class="input_style input_full" required aria-label="${this.ttypeservice}">
        <option value="">${this.ttypeservice}</option>
        ${Ke(this.services,(i,e)=>i+e,i=>T`
            <option value=${i}>${i}</option>
          `)}
      </select>
      
      </div>
       
      </div>
      <div class="content_inputs content_margin_checkbox">
        <span class="span_tile"> ${this.tbestway} </span>
        <div class="content_checkboxs">
          <div class="content_radio">
            <input
              id="contactEmail"
              type="radio"
              name="contact"
              value="email"
              class="input_style"
              required
              aria-label="${this.tcheckcorreo}"
            />
            <label for="contactEmail">${this.tcheckcorreo}</label>
          </div>
          <div class="content_radio">
            <input
              id="contactPhone"
              type="radio"
              name="contact"
              value="phone"
              class="input_style"
              required
              aria-label="${this.tcheckphone}"
            />
            <label for="contactPhone">${this.tcheckphone}</label>
          </div>
        </div>
      </div>
      <div class="content_inputs content_flex">
      <div class="input_wrap_full">
      <label for="message" class="visually-hidden span_tile">${this.tmessage}</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder=${this.tmessage}
        class="input_style input_full"
        aria-label="${this.tmessage}"
      ></textarea>
      
      </div>
       
      </div>
      <div class="content_inputs content_flex">
      <button type="submit" class="button_submit">
        ${this.showLoader?"":T`<span>${this.tbutton}</span>`}
      </button>
      </div>
      
    </form>
  </div>
  
      ${this.showLoader?T`
      <div class="loader-overlay" style="display: flex;">
        <span class="loader-send"></span>
      </div>
      `:""}
      ${this.showModal?T`
        <div class="modal">
          <div class="modal-content">
            <span class="close" @click=${this.closeModal}>&times;</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L7.03 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.071-1.05z"/>
            </svg>
            <p>Message sent successfully!</p>
            <button class="modal-button" @click=${this.closeModal}>OK</button>
          </div>
        </div>
      `:""}
      `}};f.styles=Ne`
    :host {
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    
    .form_styles {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .contentForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .content_flex {
      display: flex;
      text-align: start;
      flex-direction: row;
      gap: 20px;
    }

    .input_wrap {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .input_wrap_full {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .content_checkboxs {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      text-align: start;
      gap: 50px;
    }

    .content_margin_checkbox {
      margin: 20px 0;
      text-align: start;
    }

    .content_radio {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .input_style {
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 6px;
      border: none;
      background-color: #f9f9f9;
      transition: border 0.3s, box-shadow 0.3s; /* Agrega una transición suave para border y box-shadow */
    }
    
    .input_style:focus {
      outline: none; /* Remueve el outline predeterminado */
      border: 1px solid #b3e5fc; /* Cambia el color del borde a un celeste claro */
      box-shadow: 0 0 0 2px #b3e5fc; /* Opcional: agrega un box-shadow para reforzar el efecto visual */
    }
    


    .span_tile {
      font-size: 18px;
      font-weight: bold;
    }

    .input_full {
      width: 100%;
    }

    .span_tile_hidden {
      display: none;
    }

    .button_submit {
      margin: 20px 0;
      display: flex;
      flex-direction: row;
      align-self: center;
      justify-content: center;
      align-content: center;
      align-items: center;
      padding: 10px 30px;
      font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
      border-radius: 6px;
      border: none;
      font-size: 18px;
      color: #fff;
      background: linear-gradient(180deg, #4b91f7 0%, #367af6 100%);
      background-origin: border-box;
      box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
        inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      transition: transform 0.2s, background-color 0.2s; /* Suaviza la transición de transform y background-color */
    }
    
    .button_submit:hover {
      transform: scale(1.05); /* Hace el botón un poco más grande */
      background: linear-gradient(180deg, #3a79f7 0%, #2a68e6 100%); /* Color más oscuro para el hover */
      cursor: pointer;
    }
    
    .button_submit:focus {
      box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
        0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
        0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
      outline: 0;
    }
    
    .button_submit:active {
      transform: scale(0.95); /* Hace el botón un poco más pequeño al hacer clic */
    }
    

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button_submit {
        background-color: #f9f9f9;
      }
    }

    @media (max-width: 640px) {
      .contentForm {
        width: 100%;
      }
    }

    /* Ajustes en los estilos para el overlay del loader y el modal */
  .loader-overlay {
    display: none; /* Oculto por defecto */
    position: fixed; /* Se queda en su lugar */
    top: 0;
    left: 0;
    width: 100%; /* Ancho completo */
    height: 100%; /* Alto completo */
    background-color: rgba(255, 255, 255, 0.8); /* Overlay blanco con opacidad */
    z-index: 999; /* Asegura que esté sobre todo lo demás */
    justify-content: center;
    align-items: center;
  }
  .loader-send {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #FFF;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
  .loader-send::after {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #FF3D00;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
  .modal {
    display: flex;
    position: fixed;
    z-index: 1000; /* Asegurarse de que esté sobre otros elementos */
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4); /* Opacidad para oscurecer el fondo */
    animation: fadeIn 0.3s;
  }
  
  .modal-content {
    background-color: #fff;
    margin: auto;
    padding: 25px;
    border: none;
    width: auto;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: #333;
    animation: scaleIn 0.3s;
  }
  
  .close {
    position: absolute;
    right: 15px;
    top: 10px;
    color: #aaa;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover {
    color: #333;
  }
  
  .modal-button {
    padding: 10px 25px;
    font-size: 16px;
    cursor: pointer;
    background-color: #3085d6;
    color: white;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .modal-button:hover {
    background-color: #2574a9;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes scaleIn {
    from {
      transform: scale(0.7);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  `;v([m()],f.prototype,"server",2);v([m()],f.prototype,"img",2);v([m()],f.prototype,"estilo",2);v([m()],f.prototype,"emailcolor",2);v([m()],f.prototype,"tname",2);v([m()],f.prototype,"tlname",2);v([m()],f.prototype,"temail",2);v([m()],f.prototype,"tphone",2);v([m()],f.prototype,"taddress",2);v([m()],f.prototype,"ttypeservice",2);v([m()],f.prototype,"tbestway",2);v([m()],f.prototype,"tcheckphone",2);v([m()],f.prototype,"tcheckcorreo",2);v([m()],f.prototype,"tmessage",2);v([m()],f.prototype,"tbutton",2);v([m({type:Boolean})],f.prototype,"showLoader",2);v([m({type:Boolean})],f.prototype,"showModal",2);v([m()],f.prototype,"to",1);v([m()],f.prototype,"services",1);v([m()],f.prototype,"isenglish",1);f=v([ze("form-contact")],f);
