(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=window,tt=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),ot=new WeakMap;let gt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ot.set(e,t))}return t}toString(){return this.cssText}};const Pt=s=>new gt(typeof s=="string"?s:s+"",void 0,et),Nt=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[r+1],s[0]);return new gt(e,s,et)},Tt=(s,t)=>{tt?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=B.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},rt=tt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Pt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;const z=window,nt=z.trustedTypes,Ot=nt?nt.emptyScript:"",lt=z.reactiveElementPolyfillSupport,G={toAttribute(s,t){switch(t){case Boolean:s=s?Ot:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},yt=(s,t)=>t!==s&&(t==t||s==s),F={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:yt},X="finalized";let P=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||F}static finalize(){if(this.hasOwnProperty(X))return!1;this[X]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(rt(o))}else t!==void 0&&e.push(rt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Tt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=F){var o;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:G).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,r=o._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=o.getPropertyOptions(r),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:G;this._$El=r,this[r]=c.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||yt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,r)=>this[r]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var r;return(r=o.hostUpdate)===null||r===void 0?void 0:r.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};P[X]=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},lt==null||lt({ReactiveElement:P}),((V=z.reactiveElementVersions)!==null&&V!==void 0?V:z.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const I=window,N=I.trustedTypes,at=N?N.createPolicy("lit-html",{createHTML:s=>s}):void 0,D="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,it="?"+b,Mt=`<${it}>`,E=document,H=()=>E.createComment(""),L=s=>s===null||typeof s!="object"&&typeof s!="function",_t=Array.isArray,bt=s=>_t(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",J=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ct=/>/g,A=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,pt=/"/g,At=/^(?:script|style|textarea|title)$/i,Ut=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),k=Ut(1),S=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ut=new WeakMap,x=E.createTreeWalker(E,129,null,!1),wt=(s,t)=>{const e=s.length-1,i=[];let o,r=t===2?"<svg>":"",n=O;for(let a=0;a<e;a++){const l=s[a];let y,h,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===O?h[1]==="!--"?n=dt:h[1]!==void 0?n=ct:h[2]!==void 0?(At.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=A):h[3]!==void 0&&(n=A):n===A?h[0]===">"?(n=o??O,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,y=h[1],n=h[3]===void 0?A:h[3]==='"'?pt:ht):n===pt||n===ht?n=A:n===dt||n===ct?n=O:(n=A,o=void 0);const u=n===A&&s[a+1].startsWith("/>")?" ":"";r+=n===O?l+Mt:d>=0?(i.push(y),l.slice(0,d)+D+l.slice(d)+b+u):l+b+(d===-2?(i.push(void 0),a):u)}const c=r+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[at!==void 0?at.createHTML(c):c,i]};class R{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,n=0;const c=t.length-1,a=this.parts,[l,y]=wt(t,e);if(this.el=R.createElement(l,i),x.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(o=x.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const d of o.getAttributeNames())if(d.endsWith(D)||d.startsWith(b)){const p=y[n++];if(h.push(d),p!==void 0){const u=o.getAttribute(p.toLowerCase()+D).split(b),$=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:$[2],strings:u,ctor:$[1]==="."?Et:$[1]==="?"?St:$[1]==="@"?Ct:j})}else a.push({type:6,index:r})}for(const d of h)o.removeAttribute(d)}if(At.test(o.tagName)){const h=o.textContent.split(b),d=h.length-1;if(d>0){o.textContent=N?N.emptyScript:"";for(let p=0;p<d;p++)o.append(h[p],H()),x.nextNode(),a.push({type:2,index:++r});o.append(h[d],H())}}}else if(o.nodeType===8)if(o.data===it)a.push({type:2,index:r});else{let h=-1;for(;(h=o.data.indexOf(b,h+1))!==-1;)a.push({type:7,index:r}),h+=b.length-1}r++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function C(s,t,e=s,i){var o,r,n,c;if(t===S)return t;let a=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const l=L(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,e,i)),i!==void 0?((n=(c=e)._$Co)!==null&&n!==void 0?n:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=C(s,a._$AS(s,t.values),a,i)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(i,!0);x.currentNode=r;let n=x.nextNode(),c=0,a=0,l=o[0];for(;l!==void 0;){if(c===l.index){let y;l.type===2?y=new T(n,n.nextSibling,this,t):l.type===1?y=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(y=new kt(n,this,t)),this._$AV.push(y),l=o[++a]}c!==(l==null?void 0:l.index)&&(n=x.nextNode(),c++)}return x.currentNode=E,r}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{constructor(t,e,i,o){var r;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=(r=o==null?void 0:o.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),L(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):bt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==g&&L(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=R.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(i);else{const n=new xt(r,this),c=n.u(this.options);n.v(i),this.$(c),this._$AH=n}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new R(t)),e}T(t){_t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new T(this.k(H()),this.k(H()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class j{constructor(t,e,i,o,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let n=!1;if(r===void 0)t=C(this,t,e,0),n=!L(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const c=t;let a,l;for(t=r[0],a=0;a<r.length-1;a++)l=C(this,c[i+a],e,a),l===S&&(l=this._$AH[a]),n||(n=!L(l)||l!==this._$AH[a]),l===g?t=g:t!==g&&(t+=(l??"")+r[a+1]),this._$AH[a]=l}n&&!o&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}const Ht=N?N.emptyScript:"";class St extends j{constructor(){super(...arguments),this.type=4}j(t){t&&t!==g?this.element.setAttribute(this.name,Ht):this.element.removeAttribute(this.name)}}class Ct extends j{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=C(this,t,e,0))!==null&&i!==void 0?i:g)===S)return;const o=this._$AH,r=t===g&&o!==g||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==g&&(o===g||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const Lt={O:D,P:b,A:it,C:1,M:wt,L:xt,D:bt,R:C,I:T,V:j,H:St,N:Ct,U:Et,F:kt},mt=I.litHtmlPolyfillSupport;mt==null||mt(R,T),((W=I.litHtmlVersions)!==null&&W!==void 0?W:I.litHtmlVersions=[]).push("2.7.4");const Rt=(s,t,e)=>{var i,o;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=r._$litPart$;if(n===void 0){const c=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;r._$litPart$=n=new T(t.insertBefore(H(),c),c,void 0,e??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,Y;let U=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}};U.finalized=!0,U._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:U});const vt=globalThis.litElementPolyfillSupport;vt==null||vt({LitElement:U});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:o,elements:r}=i;return{kind:o,elements:r,finisher(n){customElements.define(e,n)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}},zt=(s,t,e)=>{t.constructor.createProperty(e,s)};function f(s){return(t,e)=>e!==void 0?zt(s,t,e):Bt(s,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;((Z=window.HTMLSlotElement)===null||Z===void 0?void 0:Z.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=s=>(...t)=>({_$litDirective$:s,values:t});class qt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Vt}=Lt,ft=()=>document.createComment(""),M=(s,t,e)=>{var i;const o=s._$AA.parentNode,r=t===void 0?s._$AB:t._$AA;if(e===void 0){const n=o.insertBefore(ft(),r),c=o.insertBefore(ft(),r);e=new Vt(n,c,s,s.options)}else{const n=e._$AB.nextSibling,c=e._$AM,a=c!==s;if(a){let l;(i=e._$AQ)===null||i===void 0||i.call(e,s),e._$AM=s,e._$AP!==void 0&&(l=s._$AU)!==c._$AU&&e._$AP(l)}if(n!==r||a){let l=e._$AA;for(;l!==n;){const y=l.nextSibling;o.insertBefore(l,r),l=y}}}return e},w=(s,t,e=s)=>(s._$AI(t,e),s),Ft={},Wt=(s,t=Ft)=>s._$AH=t,Jt=s=>s._$AH,Q=s=>{var t;(t=s._$AP)===null||t===void 0||t.call(s,!1,!0);let e=s._$AA;const i=s._$AB.nextSibling;for(;e!==i;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=(s,t,e)=>{const i=new Map;for(let o=t;o<=e;o++)i.set(s[o],o);return i},Kt=Dt(class extends qt{constructor(s){if(super(s),s.type!==It.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const o=[],r=[];let n=0;for(const c of s)o[n]=i?i(c,n):n,r[n]=e(c,n),n++;return{values:r,keys:o}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){var o;const r=Jt(s),{values:n,keys:c}=this.dt(t,e,i);if(!Array.isArray(r))return this.ht=c,n;const a=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],l=[];let y,h,d=0,p=r.length-1,u=0,$=n.length-1;for(;d<=p&&u<=$;)if(r[d]===null)d++;else if(r[p]===null)p--;else if(a[d]===c[u])l[u]=w(r[d],n[u]),d++,u++;else if(a[p]===c[$])l[$]=w(r[p],n[$]),p--,$--;else if(a[d]===c[$])l[$]=w(r[d],n[$]),M(s,l[$+1],r[d]),d++,$--;else if(a[p]===c[u])l[u]=w(r[p],n[u]),M(s,r[d],r[p]),p--,u++;else if(y===void 0&&(y=$t(c,u,$),h=$t(a,d,p)),y.has(a[d]))if(y.has(a[p])){const _=h.get(c[u]),q=_!==void 0?r[_]:null;if(q===null){const st=M(s,r[d]);w(st,n[u]),l[u]=st}else l[u]=w(q,n[u]),M(s,r[d],q),r[_]=null;u++}else Q(r[p]),p--;else Q(r[d]),d++;for(;u<=$;){const _=M(s,l[$+1]);w(_,n[u]),l[u++]=_}for(;d<=p;){const _=r[d++];_!==null&&Q(_)}return this.ht=c,Wt(s,l),S}});var Yt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,v=(s,t,e,i)=>{for(var o=i>1?void 0:i?Zt(t,e):t,r=s.length-1,n;r>=0;r--)(n=s[r])&&(o=(i?n(t,e,o):n(o))||o);return i&&o&&Yt(t,e,o),o};let m=class extends U{constructor(){super(...arguments),this.internalservice=[],this.internalToEmails=[],this.server="https://emailsp.herokuapp.com/email",this.img="",this.estilo="",this.emailcolor="",this.tname="Name",this.tlname="Last Name",this.temail="Email",this.tphone="Phone",this.taddress="Address",this.ttypeservice="Select The Service You Need",this.tbestway="Best Way To Contact You",this.tcheckphone="Phone",this.tcheckcorreo="Email",this.tchecksms="SMS",this.tmessage="Message",this.tbutton="Send A Message",this.showLoader=!1,this.showModal=!1}get to(){return this.internalToEmails}set to(s){if(typeof s=="string"){const t=s.split(",");this.internalToEmails=t}else this.internalToEmails=s}get services(){return this.internalservice}set services(s){if(typeof s=="string"){const t=s.split(",");this.internalservice=t}else this.internalservice=s}get isenglish(){return this.internalboolean}set isenglish(s){if(typeof s=="string"){const t=s==="true";this.internalboolean=t}else this.internalboolean=s}closeModal(){this.showModal=!1}async handlesubmit(s){s.preventDefault(),this.showLoader=!0;const t=this.isenglish?"New Service Request":"Nueva Solicitud",e=new FormData(s.target),i=JSON.parse(JSON.stringify(Object.fromEntries(e))),o=this.to.map(r=>{const n={toEmail:r.trim(),nombre:i.name,lastname:i.lastName,email:i.email,asunto:`${t} From ${i.name} ${i.lastName}`,phone:i.phone,address:i.address,service:i.services,mensaje:i.message.length>0?i.message:"No Extra Info",img:this.img,color:this.emailcolor,waytocontact:i.contact};return fetch(this.server,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})});try{await Promise.all(o),this.showLoader=!1,this.showModal=!0,this.shadowRoot.querySelector("form").reset()}catch{this.showLoader=!1}}render(){return k`
      <div class="contentForm">
        <form @submit=${this.handlesubmit} class="form_styles">
          <div class="form-row">
            <div class="input-group">
              <input
                id="name"
                type="text"
                name="name"
                placeholder=${this.tname}
                required
                class="form-input"
                aria-label="${this.tname}"
              />
            </div>
            <div class="input-group">
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder=${this.tlname}
                class="form-input"
                required
                aria-label="${this.tlname}"
              />
            </div>
          </div>
          
          <div class="form-row">
            <div class="input-group">
              <input
                id="email"
                type="email"
                name="email"
                placeholder=${this.temail}
                class="form-input"
                required
                aria-label="${this.temail}"
              />
            </div>
            <div class="input-group">
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder=${this.tphone}
                class="form-input"
                required
                aria-label="${this.tphone}"
              />
            </div>
          </div>
          
          <div class="form-row">
            <div class="input-group full-width">
              <input
                id="address"
                type="text"
                name="address"
                placeholder=${this.taddress}
                class="form-input"
                required
                aria-label="${this.taddress}"
              />
            </div>
          </div>
          
          <div class="form-row">
            <div class="input-group full-width">
              <label for="services" class="form-label">${this.ttypeservice}</label>
              <select
                name="services"
                id="services"
                class="form-input"
                required
                aria-label="${this.ttypeservice}"
              >
                <option value="">${this.ttypeservice}</option>
                ${Kt(this.services,(s,t)=>s+t,s=>k`<option value=${s}>${s}</option>`)}
              </select>
            </div>
          </div>
          
          <div class="form-row">
            <div class="input-group full-width">
              <p class="form-label">${this.tbestway}</p>
              <div class="radio-container">
                <div class="radio-group">
                  <label class="radio-option">
                    <input type="radio" name="contact" value="email" required aria-label="${this.tcheckcorreo}"/>
                    <span class="radio-custom"></span>
                    <span class="radio-label">${this.tcheckcorreo}</span>
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="contact" value="phone" required aria-label="${this.tcheckphone}"/>
                    <span class="radio-custom"></span>
                    <span class="radio-label">${this.tcheckphone}</span>
                  </label>
                  <label class="radio-option">
                    <input type="radio" name="contact" value="sms" required aria-label="${this.tchecksms}"/>
                    <span class="radio-custom"></span>
                    <span class="radio-label">${this.tchecksms}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div class="form-row">
            <div class="input-group full-width">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder=${this.tmessage}
                class="form-input"
                aria-label="${this.tmessage}"
              ></textarea>
            </div>
          </div>
          
          <div class="form-row">
            <button type="submit" class="submit-button">
              ${this.showLoader?k`<div class="button-loader"></div>`:k`<span>${this.tbutton}</span>`}
            </button>
          </div>
        </form>
      </div>

      ${this.showLoader?k`<div class="loader-overlay"><div class="loader-spinner"></div></div>`:""}
      ${this.showModal?k`
        <div class="modal">
          <div class="modal-content">
            <span class="close" @click=${this.closeModal}>&times;</span>
            <div class="modal-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="modal-title">Success!</h3>
            <p class="modal-message">Your message has been sent successfully.</p>
            <button class="modal-button" @click=${this.closeModal}>OK</button>
          </div>
        </div>
      `:""}
    `}};m.styles=Nt`
    :host {
      --primary-color: #4361ee;
      --primary-hover: #3a56d4;
      --input-bg: #ffffff;
      --input-border: #e2e8f0;
      --input-focus: #a5b4fc;
      --text-color: #2d3748;
      --placeholder-color: #a0aec0;
      --radius: 8px;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --transition: all 0.2s ease;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
    }

    .contentForm {
      width: 100%;
      margin: 0 auto;
    }

    .form_styles {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
    }

    .form-row {
      display: flex;
      gap: 1.5rem;
      width: 100%;
    }

    .input-group {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      min-width: 0; /* Prevent overflow */
    }

    .input-group.full-width {
      flex: 0 0 100%;
    }

    .form-input {
      width: 100%;
      padding: 0.875rem 1rem;
      font-size: 1rem;
      border-radius: var(--radius);
      border: 1px solid var(--input-border);
      background-color: var(--input-bg);
      color: var(--text-color);
      transition: var(--transition);
      box-shadow: var(--shadow-sm);
      box-sizing: border-box;
    }

    .form-input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
    }

    .form-input::placeholder {
      color: var(--placeholder-color);
      opacity: 0.8;
    }

    select.form-input {
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 1rem;
      padding-right: 2.5rem;
    }

    textarea.form-input {
      min-height: 120px;
      resize: vertical;
    }

    .form-label {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-color);
      margin-bottom: 0.25rem;
      display: block;
    }

    .center-label {
      text-align: center;
    }

    .radio-container {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .radio-group {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
    }

    .radio-option {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .radio-custom {
      width: 1.125rem;
      height: 1.125rem;
      border: 1px solid var(--input-border);
      border-radius: 50%;
      position: relative;
      transition: var(--transition);
    }

    .radio-option input {
      position: absolute;
      opacity: 0;
    }

    .radio-option input:checked + .radio-custom {
      border-color: var(--primary-color);
      background-color: var(--primary-color);
    }

    .radio-option input:checked + .radio-custom::after {
      content: "";
      position: absolute;
      width: 0.5rem;
      height: 0.5rem;
      background: white;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .submit-button {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 500;
      color: white;
      background-color: var(--primary-color);
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
      box-shadow: var(--shadow-md);
      margin-top: 0.5rem;
    }

    .submit-button:hover {
      background-color: var(--primary-hover);
      transform: translateY(-1px);
    }

    .button-loader {
      width: 1.25rem;
      height: 1.25rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: white;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Loader and Modal styles remain the same as before */
    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .loader-spinner {
      width: 3rem;
      height: 3rem;
      border: 4px solid rgba(67, 97, 238, 0.1);
      border-radius: 50%;
      border-top-color: var(--primary-color);
      animation: spin 1s linear infinite;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal-content {
      background-color: white;
      padding: 2rem;
      border-radius: var(--radius);
      box-shadow: var(--shadow-md);
      text-align: center;
      max-width: 400px;
      width: 90%;
      position: relative;
    }

    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.5rem;
      color: #6b7280;
      cursor: pointer;
    }

    .modal-icon {
      width: 3rem;
      height: 3rem;
      margin: 0 auto 1rem;
      background-color: rgba(67, 97, 238, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
    }

    .modal-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .modal-message {
      margin-bottom: 1.5rem;
    }

    .modal-button {
      padding: 0.75rem 1.5rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
      width: 100%;
    }

    @media (max-width: 768px) {
      .form-row {
        flex-direction: column;
        gap: 1rem;
      }

      .input-group {
        width: 100%;
      }

      .radio-group {
        flex-direction: column;
        gap: 0.75rem;
        align-items: flex-start;
      }

      .radio-container {
        justify-content: flex-start;
      }
    }
  `;v([f()],m.prototype,"server",2);v([f()],m.prototype,"img",2);v([f()],m.prototype,"estilo",2);v([f()],m.prototype,"emailcolor",2);v([f()],m.prototype,"tname",2);v([f()],m.prototype,"tlname",2);v([f()],m.prototype,"temail",2);v([f()],m.prototype,"tphone",2);v([f()],m.prototype,"taddress",2);v([f()],m.prototype,"ttypeservice",2);v([f()],m.prototype,"tbestway",2);v([f()],m.prototype,"tcheckphone",2);v([f()],m.prototype,"tcheckcorreo",2);v([f()],m.prototype,"tchecksms",2);v([f()],m.prototype,"tmessage",2);v([f()],m.prototype,"tbutton",2);v([f({type:Boolean})],m.prototype,"showLoader",2);v([f({type:Boolean})],m.prototype,"showModal",2);v([f()],m.prototype,"to",1);v([f()],m.prototype,"services",1);v([f()],m.prototype,"isenglish",1);m=v([jt("form-contact")],m);
