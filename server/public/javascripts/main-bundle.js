!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,i=t=>"function"==typeof t&&o.has(t),s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,n=null)=>{let o=e;for(;o!==n;){const e=o.nextSibling;t.removeChild(o),o=e}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,h=new RegExp(`${c}|${d}`),u="$lit$";class p{constructor(t,e){this.parts=[],this.element=e;let n=-1,o=0;const i=[],s=e=>{const r=e.content,a=document.createTreeWalker(r,133,null,!1);let l=0;for(;a.nextNode();){n++;const e=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const i=e.attributes;let s=0;for(let t=0;t<i.length;t++)i[t].value.indexOf(c)>=0&&s++;for(;s-- >0;){const i=t.strings[o],s=w.exec(i)[2],r=s.toLowerCase()+u,a=e.getAttribute(r).split(h);this.parts.push({type:"attribute",index:n,name:s,strings:a}),e.removeAttribute(r),o+=a.length-1}}"TEMPLATE"===e.tagName&&s(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const s=e.parentNode,r=t.split(h),a=r.length-1;for(let t=0;t<a;t++)s.insertBefore(""===r[t]?g():document.createTextNode(r[t]),e),this.parts.push({type:"node",index:++n});""===r[a]?(s.insertBefore(g(),e),i.push(e)):e.data=r[a],o+=a}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&n!==l||(n++,t.insertBefore(g(),e)),l=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(i.push(e),n--),o++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1})}}};s(e);for(const t of i)t.parentNode.removeChild(t)}}const m=t=>-1!==t.index,g=()=>document.createComment(""),w=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,o=0;const i=t=>{const s=document.createTreeWalker(t,133,null,!1);let r=s.nextNode();for(;n<e.length&&null!==r;){const t=e[n];if(m(t))if(o===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(r,t.name,t.strings,this.options));n++}else o++,"TEMPLATE"===r.nodeName&&i(r.content),r=s.nextNode();else this._parts.push(void 0),n++}};return i(t),s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class b{constructor(t,e,n,o){this.strings=t,this.values=e,this.type=n,this.processor=o}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n],o=w.exec(t);e+=o?t.substr(0,o.index)+o[1]+o[2]+u+o[3]+c:t+d}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const x=t=>null===t||!("object"==typeof t||"function"==typeof t);class f{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new y(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let o=0;o<e;o++){n+=t[o];const e=this.parts[o];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class y{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||x(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(g()),this.endNode=t.appendChild(g())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=g()),t._insert(this.endNode=g())}insertAfterPart(t){t._insert(this.startNode=g()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(x(t)?t!==this.value&&this._commitText(t):t instanceof b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===l?(this.value=l,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const n=new v(e,t.processor,this.options),o=n._clone();n.update(t.values),this._commitNode(o),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,o=0;for(const i of t)void 0===(n=e[o])&&(n=new C(this.options),e.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(e[o-1])),n.setValue(i),n.commit(),o++;o<e.length&&(e.length=o,this.clear(n&&n.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class k{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class S extends f{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends y{}let _=!1;try{const t={get capture(){return _=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;i(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),o=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),o&&(this._options=M(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const M=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const L=new class{handleAttributeExpressions(t,e,n,o){const i=e[0];return"."===i?new S(t,e.slice(1),n).parts:"@"===i?[new T(t,e.slice(1),o.eventContext)]:"?"===i?[new k(t,e.slice(1),n)]:new f(t,e,n).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function R(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(c);return void 0===(n=e.keyString.get(o))&&(n=new p(t,t.getTemplateElement()),e.keyString.set(o,n)),e.stringsArray.set(t.strings,n),n}const N=new Map,q=new WeakMap,z=(t,e,n)=>{let o=q.get(e);void 0===o&&(r(e,e.firstChild),q.set(e,o=new C(Object.assign({templateFactory:R},n))),o.appendInto(e)),o.setValue(t),o.commit()};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const A=(t,...e)=>new b(t,e,"html",L);const V=A`
<style scoped>
	.menu::before {
		content: '';
		position: absolute;
		top: -57px;
		right: -5px;
		width: 100vw;
		height: 100vh;
		z-index: -1;
	}

	.menu {
		background-color: white;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: max-content;
		list-style: none;
		border-radius: 2px;
	}

	.menu li {
		padding: 10px 15px 10px 15px;
		margin: 0 1px 0 1px;
		box-sizing: border-box;
		max-width: 200px;
		font-size: 12px;
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.menu li:not(:last-child) {
		border-bottom: 1px solid #F0F0F0;
	}

	.menu li:hover {
		background-color: #F0F0F0;
	}
</style>
`;customElements.define("chat-window-menu",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot),this.menuState="hide",this.eventClickBotSetting=this.onClickBotSetting.bind(this)}connectedCallback(){this.shadowRoot.querySelector(".menu .bot-setting").addEventListener("click",this.eventClickBotSetting),this.shadowRoot.querySelector(".menu").addEventListener("click",t=>this.onClickOutOfMenu(t))}disconnectedCallback(){this.shadowRoot.querySelector(".menu .bot-setting").removeEventListener("click",this.eventClickBotSetting)}onClickOutOfMenu(t){t.target.classList.contains("menu")&&this.hide()}onClickBotSetting(){this.hide(),this.openBotSetting()}openBotSetting(){j.loadingDOM(),j.renderBotSettingWindow()}show(){this.style.display="block",this.menuState="show"}hide(){this.style.display="none",this.menuState="hide"}render(){return A`
			${V}
			<ul class='menu'>
				<li class='bot-setting' title='${i18next.t("MENU_BOT_SETTING")}'>${i18next.t("MENU_BOT_SETTING")}</li>
			</ul>
		`}});const B=A`
<style scoped>
	* {
		user-select: none;
	}

	main {
		width: 100%;
		height: 100%;
		box-sizing: border-box;		
		display: grid;
		grid-template-columns: 80px 1fr 100px;
		grid-template-rows: 1fr;
	}

	.bot-profile {
		position: relative;
		padding: 15px;
	}
	
	.bot-profile-img {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-image: url('/images/hi-lion.png');
		background-repeat: no-repeat;
    	background-position: center;
    	background-size: contain;
	}

	.name-submenu {
		display:grid;
		grid-template-rows: 1fr 1fr;
	}

	.name {
		padding-top: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #4A4C4E;
	}

	.submenu > button {
		vertical-align: middle;	
		padding-left: 2px;
		cursor: pointer;
		border: 0;
		background-color: transparent;
		padding: 10px;
	}

	.submenu > button:first-child {
		padding-left: 0;
	}

	.submenu-search svg {
		color: #65717C;
	}

	.submenu svg:hover, .menu svg:hover {
		color: black;
	}

	.menu {
		text-align: center;
	}

	.menu > * {
		vertical-align: middle;	
		cursor: pointer;		
		position:relative;
		top: 50%;
		transform: translateY(-50%);		
	}

	.menu-alarm:not(.on) {
		left: -4px;
	}

	.menu-alarm svg {
		color: #65717C;
	}

	.menu-alarm, .menu-button {
		vertical-align: middle;				
		position:relative;
		top: 50%;
		transform: translateY(-50%);
		z-index: 20;
		border: 0;
		background-color: transparent;
		padding: 0;
	}

	.menu-button > svg {
		color: #65717C;
		cursor: pointer;
	}

	chat-window-menu {
		display: none;			
		position: absolute;
		top: 24px;
		right: -10px;
	}
</style>
`;customElements.define("chat-window-header",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot),this.eventClickAlarm=this.onClickAlarm.bind(this),this.eventClickMenu=this.onClickMenu.bind(this)}connectedCallback(){this.shadowRoot.querySelector(".submenu-search").addEventListener("click",this.onClickSubmenuSearch,!0),this.shadowRoot.querySelector(".menu-button").addEventListener("click",this.eventClickMenu,!0),this.shadowRoot.querySelector(".menu-alarm").addEventListener("click",this.eventClickAlarm,!0)}disconnectedCallback(){this.shadowRoot.querySelector(".submenu-search").removeEventListener("click",this.onClickSubmenuSearch,!0),this.shadowRoot.querySelector(".menu-button").removeEventListener("click",this.eventClickMenu,!0),this.shadowRoot.querySelector(".menu-alarm").removeEventListener("click",this.eventClickAlarm,!0)}onClickSubmenuPicture(){alert(i18next.t("NO_IMPLEMENT"))}onClickSubmenuSearch(){alert(i18next.t("NO_IMPLEMENT"))}onClickMenu(){const t=this.shadowRoot.querySelector("chat-window-menu");"hide"===t.menuState?t.show():t.hide()}onClickAlarm(){this.toggleAlarmIcon()}toggleAlarmIcon(){const t=this.shadowRoot.querySelector(".menu-alarm");if(t.classList.contains("on"))return t.classList.remove("on"),void(t.innerHTML='\n\t\t\t<svg height=\'20\' width=\'32\' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06.05-7.55-2.61-15.27-8.61-21.71-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45zM157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h241.92L157.23 251.54zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z"></path></svg>\n\t\t\t');t.classList.add("on"),t.innerHTML='\n\t\t<svg height=\'20\' width=\'32\' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>\n\t\t'}render(){return A`
			${B}
			<main>
				<div class='bot-profile'>
					<span class='bot-profile-img'></span>
				</div>
				<div class='name-submenu'>
					<div class='name'>${i18next.t("BOT_NAME")}</div>
					<div class='submenu'>
						<button class='submenu-search'>
							<svg height='14' width='14' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
						</button>						
					</div>
				</div>
				<div class='menu'>
					<button class='menu-alarm on' title='${i18next.t("MENU_ALARM_TITLE")}'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
					</button>					
					<button class='menu-button' title='${i18next.t("MENU_TITLE")}'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
						<chat-window-menu></chat-window-menu>
					</button>
				</div>
			</main>
		`}});const H=A`
<style scoped>
	main {
		display: grid;
		grid-template-columns: min-content 1fr;
		grid-template-rows: min-content 1fr;
		grid-template-areas: 
			"a b"
			"a c";
		min-height: 70px;
	}	

	.profile {
		padding: 15px 10px 15px 15px;
		grid-area: a;
		z-index: 10;
	}

	.profile-img {
		width: 40px;
		height: 40px;
		border-radius: 25px;
		background-image: url('/images/hi-lion.png');
		background-repeat: no-repeat;
    	background-position: center;
    	background-size: contain;
	}
	
	.name {
		grid-area: b;
		font-size: 12px;
		color: #4A4C4E;
		padding-top: 12px;
	}

	.chat-wrap {
		grid-area: c;
		padding-top: 5px;
		padding-bottom: 5px;
		z-index: 5;

		display: grid;
		grid-template-rows: 1fr;
		grid-row-gap: 5px;
	}

	.chat-content, .chat-content-continue {
		display: inline-block;
		position: relative;
		min-height: 28px;
		min-width: 20px;
		width: fit-content;
		max-width: calc(80vw - 65px);
		background: white;
		border-radius: 5px;
		padding: 5px 10px 5px 10px;
		box-sizing: border-box;
		font-size: 13px;
		color: #4A4C4E;
	}

	.chat-content:before {
		left: -10px;
		top: 5px;
		content: " ";
		height: 20px;
		width: 20px;
		position: absolute;
		pointer-events: none;
		border-radius: 25px;
		background: white;
		z-index: -1;
	}

	.chat-content:after {
		left: -15px;
		top: 0px;
		content: " ";
		height: 20px;
		width: 20px;
		position: absolute;
		pointer-events: none;
		border-radius: 25px;
		background: #B2C7D9;
		z-index: -1;
	}	
</style>
`;customElements.define("bot-chat-balloon",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot),this.chatWindow=document.querySelector("chat-window")}chat(t){if(0===this.shadowRoot.querySelector(".chat-wrap").childElementCount)return this.newChat(t),void(this.shadowRoot.querySelector(".chat-content").textContent=t);this.continueChat(t)}newChat(t){const e=document.createElement("div");e.classList.add("chat-content"),e.textContent=t,this.shadowRoot.querySelector(".chat-wrap").appendChild(e)}continueChat(t){const e=document.createElement("div");e.classList.add("chat-content-continue"),e.textContent=t,this.shadowRoot.querySelector(".chat-wrap").appendChild(e)}render(){return A`
			${H}
			<main>
				<div class='profile'>
					<div class='profile-img'></div>
				</div>
				<div class='name'>${i18next.t("BOT_NAME")}</div>
				<div class='chat-wrap'>
					<!-- <div class='chat-content'></div> -->
					<!-- <div class='chat-content-continue'></div> -->
				</div>
			</main>
		`}});const O=A`
<style scoped>
	main {
		width: 100%;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		min-height: 30px;
		box-sizing: border-box;
		float: right;
	}	

	.chat-wrap {
		padding-top: 5px;
		padding-bottom: 5px;
		z-index: 5;

		display: grid;
		grid-template-rows: 1fr;
		grid-row-gap: 5px;
	}

	.chat-content, .chat-content-continue {
		display: inline-block;
		position: relative;
		min-height: 28px;
		min-width: 20px;
		width: fit-content;
		max-width: calc(80vw - 65px);
		background: #FFEB33;
		border-radius: 5px;
		padding: 5px 10px 5px 10px;
		box-sizing: border-box;
		font-size: 13px;
		color: #4A4C4E;
		margin-right: 20px;
		margin-left: auto;
	}

	.chat-content:before {
		right: -10px;
		top: 5px;
		content: " ";
		height: 20px;
		width: 20px;
		position: absolute;
		pointer-events: none;
		border-radius: 25px;
		background: #FFEB33;
		z-index: -1;
	}

	.chat-content:after {
		right: -15px;
		top: 0px;
		content: " ";
		height: 20px;
		width: 20px;
		position: absolute;
		pointer-events: none;
		border-radius: 25px;
		background: #B2C7D9;
		z-index: -1;
	}	
</style>
`;customElements.define("my-chat-balloon",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot)}chat(t){if(0===this.shadowRoot.querySelector(".chat-wrap").childElementCount)return this.newChat(t),void(this.shadowRoot.querySelector(".chat-content").textContent=t);this.continueChat(t)}newChat(t){const e=document.createElement("div");e.classList.add("chat-content"),e.textContent=t,this.shadowRoot.querySelector(".chat-wrap").appendChild(e)}continueChat(t){const e=document.createElement("div");e.classList.add("chat-content-continue"),e.textContent=t,this.shadowRoot.querySelector(".chat-wrap").appendChild(e)}render(){return A`
			${O}
			<main>
				<div class='chat-wrap'>
					<!-- <div class='chat-content'></div> -->
					<!-- <div class='chat-content-continue'></div> -->
				</div>
			</main>
		`}});const $=A`
<style scoped>
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: min-content;
		width: 100%;
		height: 100%;		
	}

	bot-chat-balloon, my-chat-balloon {
		width: 100%;
		min-height: min-content;
	}
</style>
`;customElements.define("chat-window-body",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot)}connectedCallback(){this.chatWindow=document.querySelector("chat-window"),this.bot=new RiveScript}loading_done(){this.bot.sortReplies(),this.send("hello"),this.bot.reply("hy-lion","hello").then(t=>{this.reply(t)})}loading_error(t){throw new Error(`Error when loading files: ${t}`)}reply(t){const e=this.shadowRoot.querySelector("main"),n=e.children.length-1,o=e.children[n];if(0==(e.children.length&&"bot-chat-balloon"===e.children[n].localName)){const n=document.createElement("bot-chat-balloon");return e.appendChild(n),n.chat(t),void this.chatWindow.scrollToLast()}o.chat(t),this.chatWindow.scrollToLast()}send(t){const e=this.shadowRoot.querySelector("main"),n=e.children.length-1,o=e.children[n];if(0==(e.children.length&&"my-chat-balloon"===e.children[n].localName)){const n=document.createElement("my-chat-balloon");return e.appendChild(n),n.chat(t),void this.chatWindow.scrollToLast()}o.chat(t),this.chatWindow.scrollToLast()}render(){return A`
			${$}
			<main>				
				<!-- <my-chat-balloon></my-chat-balloon>
				<bot-chat-balloon></bot-chat-balloon> -->
			</main>
		`}});const W=A`
<style scoped>
	main {
		display: grid;
		grid-template-columns: 1fr 70px;
		grid-template-rows: 1fr;
		width: 100%;
		height: 100%;
	}

	.send_text {
		border: 0;
		resize: none;
		margin: 10px;
		font-size: 14px;
	}

	.send_text:focus {
		outline: none;
	}

	.send_button {
		background-color: #FFEC42;
		border: 0.5px solid #DFCE3D;
		box-sizing: border-box;
		padding-top: 5px;
		padding-bottom: 5px;
		width: 50px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 2px;
		font-size: 12px;
		position: relative;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		color: rgba(0, 0, 0, 0.4);
	}

	.send_button:hover {
		background-color: #F5E340;
		color: rgba(0, 0, 0, 0.8);
	}
</style>
`;customElements.define("chat-window-footer",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot),this.eventKeydownTextarea=this.onkeydownTextarea.bind(this),this.eventClickSendButton=this.onClickSendButton.bind(this)}connectedCallback(){this.shadowRoot.querySelector(".send_text").addEventListener("keypress",this.eventKeydownTextarea),this.shadowRoot.querySelector(".send_button").addEventListener("click",this.eventClickSendButton)}disconnectedCallback(){this.shadowRoot.querySelector(".send_text").removeEventListener("keypress",this.eventKeydownTextarea),this.shadowRoot.querySelector(".send_button").removeEventListener("click",this.eventClickSendButton)}onkeydownTextarea(t){const e="Enter"===t.code,n=document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body"),o=this.shadowRoot.querySelector(".send_text");e&&(t.preventDefault(),n.send(o.value),this.replyByPingpongAPI(o.value),o.value="")}onClickSendButton(){const t=document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body"),e=this.shadowRoot.querySelector(".send_text");t.send(e.value),this.replyByPingpongAPI(e.value),e.value=""}replyByPingpongAPI(t){const e=new XMLHttpRequest,n=document.querySelector("chat-window").shadowRoot.querySelector("chat-window-body");if(!e)throw new Error("XHR 호출 불가");e.open("GET",`https://cors-anywhere.herokuapp.com/https://pingpong.us/api/reaction.php?custom=basic&query=${encodeURIComponent(t)}`),e.addEventListener("readystatechange",()=>{if(4===e.readyState){if(200!==e.status)throw new Error("No XHR");{const t=JSON.parse(e.responseText),o=t[Math.floor(Math.random()*t.length)].message.split("(")[0];n.reply(o)}}}),e.send()}render(){return A`
			${W}
			<main>
				<textarea class='send_text'></textarea>
				<div class='send_button_wrap'>
					<button class='send_button' type='button'>${i18next.t("SEND_MESSAGE")}</button>
				</div>
			</main>
		`}});const F=A`
<style scoped>
	main {
		position: absolute;		
		top: 0;
		left: 0;		
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 80px 1fr 100px;
	}

	chat-window-header {
		background-color: #A9BDCE;
	}

	chat-window-footer {
		background-color: white;		
	}

	chat-window-body {
		background-color: #B2C7D9;
		overflow: scroll;
	}
</style>
`;customElements.define("chat-window",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot)}connectedCallback(){this.scrollToLast()}scrollToLast(){const t=this.shadowRoot.querySelector("chat-window-body");t.scrollTop=t.scrollHeight}render(){return A`
			${F}
			<main>
				<chat-window-header></chat-window-header>
				<chat-window-body></chat-window-body>
				<chat-window-footer></chat-window-footer>				
			</main>
		`}});const I=A`
<style scoped>
	.menu::before {
		content: '';
		position: absolute;
		top: -57px;
		right: -5px;
		width: 100vw;
		height: 100vh;
		z-index: -1;
	}

	.menu {
		background-color: white;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: max-content;
		list-style: none;
		border-radius: 2px;
	}

	.menu li {
		padding: 10px 15px 10px 15px;
		margin: 0 1px 0 1px;
		box-sizing: border-box;
		max-width: 200px;
		font-size: 12px;
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.menu li:not(:last-child) {
		border-bottom: 1px solid #F0F0F0;
	}

	.menu li:hover {
		background-color: #F0F0F0;
	}
</style>
`;customElements.define("bot-setting-menu",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot),this.menuState="hide",this.eventClickChatWindow=this.onClickChatWindow.bind(this)}connectedCallback(){this.shadowRoot.querySelector(".menu .chat-window").addEventListener("click",this.eventClickChatWindow),this.shadowRoot.querySelector(".menu").addEventListener("click",t=>this.onClickOutOfMenu(t))}disconnectedCallback(){this.shadowRoot.querySelector(".menu .chat-window").removeEventListener("click",this.eventClickChatWindow)}onClickOutOfMenu(t){t.target.classList.contains("menu")&&this.hide()}onClickChatWindow(){this.hide(),this.openChatWindow()}openChatWindow(){j.loadingDOM(),j.renderChatWindow()}show(){this.style.display="block",this.menuState="show"}hide(){this.style.display="none",this.menuState="hide"}render(){return A`
			${I}
			<ul class='menu'>
				<li class='chat-window' title='${i18next.t("MENU_CHAT_WINDOW")}'>${i18next.t("MENU_CHAT_WINDOW")}</li>
			</ul>
		`}});const P=A`
<style scoped>
	* {
		user-select: none;
	}

	main {
		width: 100%;
		height: 100%;
		box-sizing: border-box;		
		display: grid;
		grid-template-columns: 80px 1fr 100px;
		grid-template-rows: 1fr;
	}

	.setting-img-wrap {
		position: relative;
		padding: 15px;	
	}
	
	.setting-img {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-image: url('/images/bot-setting.svg');
		background-repeat: no-repeat;
    	background-position: center;
    	background-size: contain;
	}

	.title-submenu {
		display:grid;
		grid-template-rows: 1fr 1fr;
	}

	.title {
		padding-top: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #4A4C4E;
	}

	.button-rivescript {
		border: 0;
		background-color: hsl(162, 100%, 0%);
		color: white;
		box-sizing: border-box;
		height: 20px;
		border-radius: 2px;
	}

	.button-rivescript:not(.on):hover, .button-rivescript.on {
		background-color: hsl(162, 100%, 43%);
	}

	.button-rivescript.on:hover {
		background-color: hsl(162, 100%, 0%);
	}

	.menu svg:hover {
		color: black;
	}

	.menu {
		text-align: right;
    	padding-right: 15px;
	}

	.menu > svg {
		vertical-align: middle;	
		cursor: pointer;		
		position:relative;
		top: 50%;
		transform: translateY(-50%);
		color: #65717C;
	}	

	.menu-button {
		vertical-align: middle;
		position:relative;
		top: 50%;
		transform: translateY(-50%);
		z-index: 20;
		padding: 0;
		border: 0;
		background-color: transparent;
	}

	.menu-button svg {
		color: #65717C;
		cursor: pointer;
	}

	bot-setting-menu {
		display: none;			
		position: absolute;
		top: 24px;
		right: -10px;
	}
</style>
`;customElements.define("bot-setting-header",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot),this.eventClickMenu=this.onClickMenu.bind(this),this.eventClickRivescript=this.onClickRivescript.bind(this)}connectedCallback(){this.shadowRoot.querySelector(".menu-button").addEventListener("click",this.eventClickMenu,!0),this.shadowRoot.querySelector(".button-rivescript").addEventListener("click",this.eventClickRivescript,!0)}disconnectedCallback(){this.shadowRoot.querySelector(".menu-button").removeEventListener("click",this.eventClickMenu,!0),this.shadowRoot.querySelector(".button-rivescript").removeEventListener("click",this.eventClickRivescript,!0)}onClickMenu(){const t=this.shadowRoot.querySelector("bot-setting-menu");"hide"===t.menuState?t.show():t.hide()}onClickRivescript(){const t=document.querySelector("bot-setting-window").shadowRoot.querySelector("bot-setting-body"),e=this.shadowRoot.querySelector(".button-rivescript");this.emptyBody(),e.classList.contains("on")?e.classList.remove("on"):(e.classList.add("on"),this.readRivescript().then(e=>{t.textContent=e}).catch(t=>{throw new Error(`No read Rivescript: ${t}`)}))}emptyBody(){document.querySelector("bot-setting-window").shadowRoot.querySelector("bot-setting-body").innerHTML=""}readRivescript(){return new Promise((t,e)=>{const n=new XMLHttpRequest;n.open("GET","/src/libs/hy-lion.rive"),n.send(),n.addEventListener("readystatechange",()=>{n.readyState===XMLHttpRequest.DONE&&(200===n.status?t(n.response):e(n.statusText))})})}render(){return A`
			${P}
			<main>
				<div class='setting-img-wrap'>
					<span class='setting-img'></span>
				</div>
				<div class='title-submenu'>
					<div class='title'>${i18next.t("BOT_SETTING_TITLE")}</div>
					<div class='submenu'>
						<button class='button-rivescript' title='${i18next.t("CONVERT_RIVESCRIPT")}'>${i18next.t("CONVERT_RIVESCRIPT")}</button>
					</div>
				</div>
				<div class='menu'>		
					<button class='menu-button' title='메뉴'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
						<bot-setting-menu></bot-setting-menu>
					</button>
				</div>
			</main>
		`}});const D=A`
<style scoped>
	main {
		position: absolute;		
		top: 0;
		left: 0;		
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 80px 1fr 100px;
	}

	bot-setting-header {
		background-color: #A9BDCE;
	}

	bot-setting-body {		
		white-space: pre;
		padding-left: 10px;
	}
</style>
`;customElements.define("bot-setting-window",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),z(this.render(),this.shadowRoot)}render(){return A`
			${D}
			<main>
				<bot-setting-header></bot-setting-header>
				<bot-setting-body></bot-setting-body>
				<bot-setting-footer></bot-setting-footer>
			</main>
		`}}),n.d(e,"default",function(){return j});class j{static init(){this.loadingDOM(),this.renderChatWindow()}static loadingDOM(){const t=document.querySelector(".app-root"),e=document.createElement("div");this.emptyDOM(),e.classList.add("loading");for(let t=0;t<5;t++)e.appendChild(document.createElement("span"));t.appendChild(e)}static renderChatWindow(){this.emptyDOM();const t=document.createElement("chat-window");document.querySelector(".app-root").appendChild(t)}static renderBotSettingWindow(){this.emptyDOM();const t=document.createElement("bot-setting-window");document.querySelector(".app-root").appendChild(t)}static emptyDOM(){document.querySelector(".app-root").innerHTML=""}}j.init()}]);