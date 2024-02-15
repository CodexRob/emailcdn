(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=window,tt=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),ot=new WeakMap;let _t=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tt&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ot.set(e,t))}return t}toString(){return this.cssText}};const Nt=i=>new _t(typeof i=="string"?i:i+"",void 0,et),kt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,o,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new _t(e,i,et)},Ot=(i,t)=>{tt?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),o=j.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)})},nt=tt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Nt(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const z=window,rt=z.trustedTypes,Tt=rt?rt.emptyScript:"",lt=z.reactiveElementPolyfillSupport,G={toAttribute(i,t){switch(t){case Boolean:i=i?Tt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},yt=(i,t)=>t!==i&&(t==t||i==i),V={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:yt},X="finalized";let P=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const o=this._$Ep(s,e);o!==void 0&&(this._$Ev.set(o,s),t.push(o))}),t}static createProperty(t,e=V){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,s,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty(X))return!1;this[X]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of s)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)e.unshift(nt(o))}else t!==void 0&&e.push(nt(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ot(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=V){var o;const n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){const r=(((o=s.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?s.converter:G).toAttribute(e,s.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var s;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?r.converter:G;this._$El=n,this[n]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,s){let o=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||yt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(s)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdated)===null||o===void 0?void 0:o.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};P[X]=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},lt==null||lt({ReactiveElement:P}),((F=z.reactiveElementVersions)!==null&&F!==void 0?F:z.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const I=window,N=I.trustedTypes,at=N?N.createPolicy("lit-html",{createHTML:i=>i}):void 0,D="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,st="?"+b,Mt=`<${st}>`,E=document,H=()=>E.createComment(""),L=i=>i===null||typeof i!="object"&&typeof i!="function",gt=Array.isArray,bt=i=>gt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",J=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,dt=/>/g,A=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,pt=/"/g,At=/^(?:script|style|textarea|title)$/i,Ut=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),T=Ut(1),S=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ut=new WeakMap,w=E.createTreeWalker(E,129,null,!1),xt=(i,t)=>{const e=i.length-1,s=[];let o,n=t===2?"<svg>":"",r=O;for(let a=0;a<e;a++){const l=i[a];let y,h,c=-1,p=0;for(;p<l.length&&(r.lastIndex=p,h=r.exec(l),h!==null);)p=r.lastIndex,r===O?h[1]==="!--"?r=ct:h[1]!==void 0?r=dt:h[2]!==void 0?(At.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=A):h[3]!==void 0&&(r=A):r===A?h[0]===">"?(r=o??O,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,y=h[1],r=h[3]===void 0?A:h[3]==='"'?pt:ht):r===pt||r===ht?r=A:r===ct||r===dt?r=O:(r=A,o=void 0);const u=r===A&&i[a+1].startsWith("/>")?" ":"";n+=r===O?l+Mt:c>=0?(s.push(y),l.slice(0,c)+D+l.slice(c)+b+u):l+b+(c===-2?(s.push(void 0),a):u)}const d=n+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[at!==void 0?at.createHTML(d):d,s]};class R{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let n=0,r=0;const d=t.length-1,a=this.parts,[l,y]=xt(t,e);if(this.el=R.createElement(l,s),w.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(o=w.nextNode())!==null&&a.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const c of o.getAttributeNames())if(c.endsWith(D)||c.startsWith(b)){const p=y[r++];if(h.push(c),p!==void 0){const u=o.getAttribute(p.toLowerCase()+D).split(b),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:m[2],strings:u,ctor:m[1]==="."?Et:m[1]==="?"?St:m[1]==="@"?Ct:B})}else a.push({type:6,index:n})}for(const c of h)o.removeAttribute(c)}if(At.test(o.tagName)){const h=o.textContent.split(b),c=h.length-1;if(c>0){o.textContent=N?N.emptyScript:"";for(let p=0;p<c;p++)o.append(h[p],H()),w.nextNode(),a.push({type:2,index:++n});o.append(h[c],H())}}}else if(o.nodeType===8)if(o.data===st)a.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(b,h+1))!==-1;)a.push({type:7,index:n}),h+=b.length-1}n++}}static createElement(t,e){const s=E.createElement("template");return s.innerHTML=t,s}}function C(i,t,e=i,s){var o,n,r,d;if(t===S)return t;let a=s!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[s]:e._$Cl;const l=L(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,s)),s!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[s]=a:e._$Cl=a),a!==void 0&&(t=C(i,a._$AS(i,t.values),a,s)),t}class wt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:E).importNode(s,!0);w.currentNode=n;let r=w.nextNode(),d=0,a=0,l=o[0];for(;l!==void 0;){if(d===l.index){let y;l.type===2?y=new k(r,r.nextSibling,this,t):l.type===1?y=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(y=new Pt(r,this,t)),this._$AV.push(y),l=o[++a]}d!==(l==null?void 0:l.index)&&(r=w.nextNode(),d++)}return w.currentNode=E,n}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class k{constructor(t,e,s,o){var n;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),L(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):bt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==_&&L(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=R.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(s);else{const r=new wt(n,this),d=r.u(this.options);r.v(s),this.$(d),this._$AH=r}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new R(t)),e}T(t){gt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const n of t)o===e.length?e.push(s=new k(this.k(H()),this.k(H()),this,this.options)):s=e[o],s._$AI(n),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class B{constructor(t,e,s,o,n){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,o){const n=this.strings;let r=!1;if(n===void 0)t=C(this,t,e,0),r=!L(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const d=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=C(this,d[s+a],e,a),l===S&&(l=this._$AH[a]),r||(r=!L(l)||l!==this._$AH[a]),l===_?t=_:t!==_&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!o&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}}const Ht=N?N.emptyScript:"";class St extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==_?this.element.setAttribute(this.name,Ht):this.element.removeAttribute(this.name)}}class Ct extends B{constructor(t,e,s,o,n){super(t,e,s,o,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=C(this,t,e,0))!==null&&s!==void 0?s:_)===S)return;const o=this._$AH,n=t===_&&o!==_||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==_&&(o===_||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const Lt={O:D,P:b,A:st,C:1,M:xt,L:wt,D:bt,R:C,I:k,V:B,H:St,N:Ct,U:Et,F:Pt},vt=I.litHtmlPolyfillSupport;vt==null||vt(R,k),((W=I.litHtmlVersions)!==null&&W!==void 0?W:I.litHtmlVersions=[]).push("2.7.4");const Rt=(i,t,e)=>{var s,o;const n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=n._$litPart$;if(r===void 0){const d=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new k(t.insertBefore(H(),d),d,void 0,e??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,Y;let U=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}};U.finalized=!0,U._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:U});const ft=globalThis.litElementPolyfillSupport;ft==null||ft({LitElement:U});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=i=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(i,t):((e,s)=>{const{kind:o,elements:n}=s;return{kind:o,elements:n,finisher(r){customElements.define(e,r)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}},zt=(i,t,e)=>{t.constructor.createProperty(e,i)};function $(i){return(t,e)=>e!==void 0?zt(i,t,e):jt(i,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;((Z=window.HTMLSlotElement)===null||Z===void 0?void 0:Z.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=i=>(...t)=>({_$litDirective$:i,values:t});class qt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ft}=Lt,$t=()=>document.createComment(""),M=(i,t,e)=>{var s;const o=i._$AA.parentNode,n=t===void 0?i._$AB:t._$AA;if(e===void 0){const r=o.insertBefore($t(),n),d=o.insertBefore($t(),n);e=new Ft(r,d,i,i.options)}else{const r=e._$AB.nextSibling,d=e._$AM,a=d!==i;if(a){let l;(s=e._$AQ)===null||s===void 0||s.call(e,i),e._$AM=i,e._$AP!==void 0&&(l=i._$AU)!==d._$AU&&e._$AP(l)}if(r!==n||a){let l=e._$AA;for(;l!==r;){const y=l.nextSibling;o.insertBefore(l,n),l=y}}}return e},x=(i,t,e=i)=>(i._$AI(t,e),i),Vt={},Wt=(i,t=Vt)=>i._$AH=t,Jt=i=>i._$AH,Q=i=>{var t;(t=i._$AP)===null||t===void 0||t.call(i,!1,!0);let e=i._$AA;const s=i._$AB.nextSibling;for(;e!==s;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=(i,t,e)=>{const s=new Map;for(let o=t;o<=e;o++)s.set(i[o],o);return s},Kt=Dt(class extends qt{constructor(i){if(super(i),i.type!==It.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);const o=[],n=[];let r=0;for(const d of i)o[r]=s?s(d,r):r,n[r]=e(d,r),r++;return{values:n,keys:o}}render(i,t,e){return this.dt(i,t,e).values}update(i,[t,e,s]){var o;const n=Jt(i),{values:r,keys:d}=this.dt(t,e,s);if(!Array.isArray(n))return this.ht=d,r;const a=(o=this.ht)!==null&&o!==void 0?o:this.ht=[],l=[];let y,h,c=0,p=n.length-1,u=0,m=r.length-1;for(;c<=p&&u<=m;)if(n[c]===null)c++;else if(n[p]===null)p--;else if(a[c]===d[u])l[u]=x(n[c],r[u]),c++,u++;else if(a[p]===d[m])l[m]=x(n[p],r[m]),p--,m--;else if(a[c]===d[m])l[m]=x(n[c],r[m]),M(i,l[m+1],n[c]),c++,m--;else if(a[p]===d[u])l[u]=x(n[p],r[u]),M(i,n[c],n[p]),p--,u++;else if(y===void 0&&(y=mt(d,u,m),h=mt(a,c,p)),y.has(a[c]))if(y.has(a[p])){const g=h.get(d[u]),q=g!==void 0?n[g]:null;if(q===null){const it=M(i,n[c]);x(it,r[u]),l[u]=it}else l[u]=x(q,r[u]),M(i,n[c],q),n[g]=null;u++}else Q(n[p]),p--;else Q(n[c]),c++;for(;u<=m;){const g=M(i,l[m+1]);x(g,r[u]),l[u++]=g}for(;c<=p;){const g=n[c++];g!==null&&Q(g)}return this.ht=d,Wt(i,l),S}});var Yt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,f=(i,t,e,s)=>{for(var o=s>1?void 0:s?Zt(t,e):t,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(t,e,o):r(o))||o);return s&&o&&Yt(t,e,o),o};let v=class extends U{constructor(){super(...arguments),this.internalservice=[],this.internalToEmails=[],this.server="https://emailsp.herokuapp.com/email",this.img="",this.estilo="",this.emailcolor="",this.tname="Name",this.tlname="Last Name",this.temail="Email",this.tphone="Phone",this.taddress="Address",this.ttypeservice="Select The Service You Need",this.tbestway="Best Way To Contact You",this.tcheckphone="Phone",this.tcheckcorreo="Email",this.tmessage="Message",this.tbutton="Send A Message",this.showLoader=!1,this.showModal=!1}get to(){return this.internalToEmails}set to(i){if(typeof i=="string"){const t=i.split(",");this.internalToEmails=t}else this.internalToEmails=i}get services(){return this.internalservice}set services(i){if(typeof i=="string"){const t=i.split(",");this.internalservice=t}else this.internalservice=i}get isenglish(){return this.internalboolean}set isenglish(i){if(typeof i=="string"){const t=i==="true";this.internalboolean=t}else this.internalboolean=i}closeModal(){this.showModal=!1}async handlesubmit(i){i.preventDefault(),this.showLoader=!0;const t=this.isenglish?"New Service Request":"Nueva Solicitud",e=new FormData(i.target),s=JSON.parse(JSON.stringify(Object.fromEntries(e))),o=this.to.map(n=>{const r={toEmail:n.trim(),nombre:s.name,lastname:s.lastName,email:s.email,asunto:`${t} From ${s.name} ${s.lastName}`,phone:s.phone,address:s.address,service:s.services,mensaje:s.message.length>0?s.message:"No Extra Info",img:this.img,color:this.emailcolor,waytocontact:s.contact};return fetch(this.server,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)})});try{await Promise.all(o),this.showLoader=!1,this.showModal=!0,this.shadowRoot.querySelector("form").reset()}catch{this.showLoader=!1}}render(){return T`
    <div class="contentForm">
    <form @submit=${this.handlesubmit} class="form_styles">
      <div class="content_inputs content_flex">
       <div class="input_wrap">
       <label for="name" class="visually-hidden span_tile">${this.tname} </label>
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
        <label for="lastName" class="visually-hidden span_tile">${this.tlname}</label>
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
      <label for="email" class="visually-hidden span_tile">${this.temail} </label>
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
      <label for="phone" class="visually-hidden span_tile">${this.tphone} </label>
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

        <label for="address" class="visually-hidden span_tile">${this.taddress}</label>
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
        ${Kt(this.services,(i,t)=>i+t,i=>T`
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
      <label for="message" class="visually-hidden">${this.tmessage}</label>
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
      `}};v.styles=kt`
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
    }


    .span_tile {
      font-size: 18px;
      font-weight: bold;
    }

    .input_full {
      width: 100%;
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
    }

    .button_submit:focus {
      box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
        0px 0.5px 1.5px rgba(54, 122, 246, 0.25),
        0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
      outline: 0;
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
  
  `;f([$()],v.prototype,"server",2);f([$()],v.prototype,"img",2);f([$()],v.prototype,"estilo",2);f([$()],v.prototype,"emailcolor",2);f([$()],v.prototype,"tname",2);f([$()],v.prototype,"tlname",2);f([$()],v.prototype,"temail",2);f([$()],v.prototype,"tphone",2);f([$()],v.prototype,"taddress",2);f([$()],v.prototype,"ttypeservice",2);f([$()],v.prototype,"tbestway",2);f([$()],v.prototype,"tcheckphone",2);f([$()],v.prototype,"tcheckcorreo",2);f([$()],v.prototype,"tmessage",2);f([$()],v.prototype,"tbutton",2);f([$({type:Boolean})],v.prototype,"showLoader",2);f([$({type:Boolean})],v.prototype,"showModal",2);f([$()],v.prototype,"to",1);f([$()],v.prototype,"services",1);f([$()],v.prototype,"isenglish",1);v=f([Bt("form-contact")],v);
