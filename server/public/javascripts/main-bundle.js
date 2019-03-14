/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/src/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _chat_window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _bot_setting_window_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);



class Main {
	static init() {
		this.loadingDOM()
		this.renderChatWindow()
	}

	static loadingDOM() {
		const root = document.querySelector(`.app-root`)
		const loading = document.createElement(`div`)
		const FIVE = 5
				
		this.emptyDOM()
		loading.classList.add(`loading`)
		for (let i=0; i < FIVE; i++) {
			loading.appendChild(document.createElement(`span`))
		}
		root.appendChild(loading)
	}

	static renderChatWindow() {
		this.emptyDOM()
		const chatWindow = document.createElement(`chat-window`)
		document.querySelector(`.app-root`).appendChild(chatWindow)
	}

	static renderBotSettingWindow() {
		this.emptyDOM()
		const botSettingWIndow = document.createElement(`bot-setting-window`)
		document.querySelector(`.app-root`).appendChild(botSettingWIndow)
	}

	static emptyDOM() {
		document.querySelector(`.app-root`).innerHTML = ``
	}
}

Main.init()


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_chat_window_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _components_chat_window_body_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _components_chat_window_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);





class ChatWindow extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)
	}

	connectedCallback() {
		this.scrollToLast()
	}

	scrollToLast() {
		const chatBody = this.shadowRoot.querySelector(`chat-window-body`)

		chatBody.scrollTop = chatBody.scrollHeight
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<main>
				<chat-window-header></chat-window-header>
				<chat-window-body></chat-window-body>
				<chat-window-footer></chat-window-footer>				
			</main>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`chat-window`, ChatWindow)


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony import */ var _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["DefaultTemplateProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]; });

/* harmony import */ var _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _lib_directive_js__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["removeNodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__["reparentNodes"]; });

/* harmony import */ var _lib_part_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return _lib_part_js__WEBPACK_IMPORTED_MODULE_4__["nothing"]; });

/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributeCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["AttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["BooleanAttributePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["EventPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["NodePart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyCommitter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return _lib_parts_js__WEBPACK_IMPORTED_MODULE_5__["PropertyPart"]; });

/* harmony import */ var _lib_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["parts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _lib_render_js__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony import */ var _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return _lib_template_factory_js__WEBPACK_IMPORTED_MODULE_7__["templateFactory"]; });

/* harmony import */ var _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return _lib_template_instance_js__WEBPACK_IMPORTED_MODULE_8__["TemplateInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"]; });

/* harmony import */ var _lib_template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["createMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["isTemplatePartActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return _lib_template_js__WEBPACK_IMPORTED_MODULE_9__["Template"]; });

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
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @module lit-html
 * @preferred
 */
/**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */




// TODO(justinfagnani): remove line when we get NodePart moving methods








// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["TemplateResult"](strings, values, 'html', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
/**
 * Interprets a template literal as an SVG template that can efficiently
 * render to and update a container.
 */
const svg = (strings, ...values) => new _lib_template_result_js__WEBPACK_IMPORTED_MODULE_1__["SVGTemplateResult"](strings, values, 'svg', _lib_default_template_processor_js__WEBPACK_IMPORTED_MODULE_0__["defaultTemplateProcessor"]);
//# sourceMappingURL=lit-html.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTemplateProcessor", function() { return DefaultTemplateProcessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplateProcessor", function() { return defaultTemplateProcessor; });
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["PropertyCommitter"](element, name.slice(1), strings);
            return comitter.parts;
        }
        if (prefix === '@') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["EventPart"](element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new _parts_js__WEBPACK_IMPORTED_MODULE_0__["BooleanAttributePart"](element, name.slice(1), strings)];
        }
        const comitter = new _parts_js__WEBPACK_IMPORTED_MODULE_0__["AttributeCommitter"](element, name, strings);
        return comitter.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new _parts_js__WEBPACK_IMPORTED_MODULE_0__["NodePart"](options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
//# sourceMappingURL=default-template-processor.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeCommitter", function() { return AttributeCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePart", function() { return AttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodePart", function() { return NodePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanAttributePart", function() { return BooleanAttributePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCommitter", function() { return PropertyCommitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyPart", function() { return PropertyPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPart", function() { return EventPart; });
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _part_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _template_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _template_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
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
 * @module lit-html
 */






const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
/**
 * Sets attribute values for AttributeParts, so that the value is only set once
 * even if there are multiple parts for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (v != null &&
                    (Array.isArray(v) ||
                        // tslint:disable-next-line:no-any
                        typeof v !== 'string' && v[Symbol.iterator])) {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
                else {
                    text += typeof v === 'string' ? v : String(v);
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
class AttributePart {
    constructor(comitter) {
        this.value = undefined;
        this.committer = comitter;
    }
    setValue(value) {
        if (value !== _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"] && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this.value)) {
            const directive = this.value;
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this.value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        this.committer.commit();
    }
}
class NodePart {
    constructor(options) {
        this.value = undefined;
        this._pendingValue = undefined;
        this.options = options;
    }
    /**
     * Inserts this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = container.appendChild(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
     * its next sibling must be static, unchanging nodes such as those that appear
     * in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        part._insert(this.endNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
    }
    /**
     * Appends this part after `ref`
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref._insert(this.startNode = Object(_template_js__WEBPACK_IMPORTED_MODULE_5__["createMarker"])());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this._pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
            const directive = this._pendingValue;
            this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        const value = this._pendingValue;
        if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this._commitText(value);
            }
        }
        else if (value instanceof _template_result_js__WEBPACK_IMPORTED_MODULE_4__["TemplateResult"]) {
            this._commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this._commitNode(value);
        }
        else if (Array.isArray(value) ||
            // tslint:disable-next-line:no-any
            value[Symbol.iterator]) {
            this._commitIterable(value);
        }
        else if (value === _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]) {
            this.value = _part_js__WEBPACK_IMPORTED_MODULE_2__["nothing"];
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    _commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this._insert(value);
        this.value = value;
    }
    _commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = value;
        }
        else {
            this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
        }
        this.value = value;
    }
    _commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"] &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new _template_instance_js__WEBPACK_IMPORTED_MODULE_3__["TemplateInstance"](template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this._commitNode(fragment);
            this.value = instance;
        }
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_1__["removeNodes"])(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this._pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this._pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
            const directive = this._pendingValue;
            this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const value = !!this._pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
        }
        this.value = value;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
try {
    const options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
}
catch (_e) {
}
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this._pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this._boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this._pendingValue = value;
    }
    commit() {
        while (Object(_directive_js__WEBPACK_IMPORTED_MODULE_0__["isDirective"])(this._pendingValue)) {
            const directive = this._pendingValue;
            this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
            directive(this);
        }
        if (this._pendingValue === _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]) {
            return;
        }
        const newListener = this._pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
        }
        if (shouldAddListener) {
            this._options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
        }
        this.value = newListener;
        this._pendingValue = _part_js__WEBPACK_IMPORTED_MODULE_2__["noChange"];
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);
//# sourceMappingURL=parts.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
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
const directives = new WeakMap();
/**
 * Brands a function as a directive so that lit-html will call the function
 * during template rendering, rather than passing as a value.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object
 *
 * @example
 *
 * ```
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 * ```
 */
// tslint:disable-next-line:no-any
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};
//# sourceMappingURL=directive.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCEPolyfill", function() { return isCEPolyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reparentNodes", function() { return reparentNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
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
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), into another container (could be the same container), before
 * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
 * container.
 */
const reparentNodes = (container, start, end = null, before = null) => {
    let node = start;
    while (node !== end) {
        const n = node.nextSibling;
        container.insertBefore(node, before);
        node = n;
    }
};
/**
 * Removes nodes, starting from `startNode` (inclusive) to `endNode`
 * (exclusive), from `container`.
 */
const removeNodes = (container, startNode, endNode = null) => {
    let node = startNode;
    while (node !== endNode) {
        const n = node.nextSibling;
        container.removeChild(node);
        node = n;
    }
};
//# sourceMappingURL=dom.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return noChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};
//# sourceMappingURL=part.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstance", function() { return TemplateInstance; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
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
 * @module lit-html
 */


/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this._parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this._parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this._parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // When using the Custom Elements polyfill, clone the node, rather than
        // importing it, to keep the fragment in the template's document. This
        // leaves the fragment inert so custom elements won't upgrade and
        // potentially modify their contents by creating a polyfilled ShadowRoot
        // while we traverse the tree.
        const fragment = _dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"] ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const parts = this.template.parts;
        let partIndex = 0;
        let nodeIndex = 0;
        const _prepareInstance = (fragment) => {
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
            // null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            let node = walker.nextNode();
            // Loop through all the nodes and parts of a template
            while (partIndex < parts.length && node !== null) {
                const part = parts[partIndex];
                // Consecutive Parts may have the same node index, in the case of
                // multiple bound attributes on an element. So each iteration we either
                // increment the nodeIndex, if we aren't on a node with a part, or the
                // partIndex if we are. By not incrementing the nodeIndex when we find a
                // part, we allow for the next part to be associated with the current
                // node if neccessasry.
                if (!Object(_template_js__WEBPACK_IMPORTED_MODULE_1__["isTemplatePartActive"])(part)) {
                    this._parts.push(undefined);
                    partIndex++;
                }
                else if (nodeIndex === part.index) {
                    if (part.type === 'node') {
                        const part = this.processor.handleTextExpression(this.options);
                        part.insertAfterNode(node.previousSibling);
                        this._parts.push(part);
                    }
                    else {
                        this._parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
                    }
                    partIndex++;
                }
                else {
                    nodeIndex++;
                    if (node.nodeName === 'TEMPLATE') {
                        _prepareInstance(node.content);
                    }
                    node = walker.nextNode();
                }
            }
        };
        _prepareInstance(fragment);
        if (_dom_js__WEBPACK_IMPORTED_MODULE_0__["isCEPolyfill"]) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}
//# sourceMappingURL=template-instance.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marker", function() { return marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeMarker", function() { return nodeMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markerRegex", function() { return markerRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAttributeSuffix", function() { return boundAttributeSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Template", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTemplatePartActive", function() { return isTemplatePartActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarker", function() { return createMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastAttributeNameRegex", function() { return lastAttributeNameRegex; });
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
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        let index = -1;
        let partIndex = 0;
        const nodesToRemove = [];
        const _prepareTemplate = (template) => {
            const content = template.content;
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
            // null
            const walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            // Keeps track of the last index associated with a part. We try to delete
            // unnecessary nodes, but we never want to associate two different parts
            // to the same index. They must have a constant node between.
            let lastPartIndex = 0;
            while (walker.nextNode()) {
                index++;
                const node = walker.currentNode;
                if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        const attributes = node.attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondance between part index and attribute index.
                        let count = 0;
                        for (let i = 0; i < attributes.length; i++) {
                            if (attributes[i].value.indexOf(marker) >= 0) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            const stringForPart = result.strings[partIndex];
                            // Find the attribute name
                            const name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            const attributeValue = node.getAttribute(attributeLookupName);
                            const strings = attributeValue.split(markerRegex);
                            this.parts.push({ type: 'attribute', index, name, strings });
                            node.removeAttribute(attributeLookupName);
                            partIndex += strings.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        _prepareTemplate(node);
                    }
                }
                else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    const data = node.data;
                    if (data.indexOf(marker) >= 0) {
                        const parent = node.parentNode;
                        const strings = data.split(markerRegex);
                        const lastIndex = strings.length - 1;
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (let i = 0; i < lastIndex; i++) {
                            parent.insertBefore((strings[i] === '') ? createMarker() :
                                document.createTextNode(strings[i]), node);
                            this.parts.push({ type: 'node', index: ++index });
                        }
                        // If there's no text, we must insert a comment to mark our place.
                        // Else, we can trust it will stick around after cloning.
                        if (strings[lastIndex] === '') {
                            parent.insertBefore(createMarker(), node);
                            nodesToRemove.push(node);
                        }
                        else {
                            node.data = strings[lastIndex];
                        }
                        // We have a part for each match found
                        partIndex += lastIndex;
                    }
                }
                else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.data === marker) {
                        const parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * The previousSibling is already the start of a previous part
                        if (node.previousSibling === null || index === lastPartIndex) {
                            index++;
                            parent.insertBefore(createMarker(), node);
                        }
                        lastPartIndex = index;
                        this.parts.push({ type: 'node', index });
                        // If we don't have a nextSibling, keep this node so we have an end.
                        // Else, we can remove it to save future costs.
                        if (node.nextSibling === null) {
                            node.data = '';
                        }
                        else {
                            nodesToRemove.push(node);
                            index--;
                        }
                        partIndex++;
                    }
                    else {
                        let i = -1;
                        while ((i = node.data.indexOf(marker, i + 1)) !==
                            -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            this.parts.push({ type: 'node', index: -1 });
                        }
                    }
                }
            }
        };
        _prepareTemplate(element);
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#attributes-0
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-character
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
//# sourceMappingURL=template.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return TemplateResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return SVGTemplateResult; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
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
 * @module lit-html
 */


/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const endIndex = this.strings.length - 1;
        let html = '';
        for (let i = 0; i < endIndex; i++) {
            const s = this.strings[i];
            // This exec() call does two things:
            // 1) Appends a suffix to the bound attribute name to opt out of special
            // attribute value parsing that IE11 and Edge do, like for style and
            // many SVG attributes. The Template class also appends the same suffix
            // when looking up attributes to create Parts.
            // 2) Adds an unquoted-attribute-safe marker for the first expression in
            // an attribute. Subsequent attribute expressions will use node markers,
            // and this is safe since attributes with multiple expressions are
            // guaranteed to be quoted.
            const match = _template_js__WEBPACK_IMPORTED_MODULE_1__["lastAttributeNameRegex"].exec(s);
            if (match) {
                // We're starting a new bound attribute.
                // Add the safe attribute suffix, and use unquoted-attribute-safe
                // marker.
                html += s.substr(0, match.index) + match[1] + match[2] +
                    _template_js__WEBPACK_IMPORTED_MODULE_1__["boundAttributeSuffix"] + match[3] + _template_js__WEBPACK_IMPORTED_MODULE_1__["marker"];
            }
            else {
                // We're either in a bound node, or trailing bound attribute.
                // Either way, nodeMarker is safe to use.
                html += s + _template_js__WEBPACK_IMPORTED_MODULE_1__["nodeMarker"];
            }
        }
        return html + this.strings[endIndex];
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTMl in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["reparentNodes"])(content, svgElement.firstChild);
        return template;
    }
}
//# sourceMappingURL=template-result.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _parts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _template_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
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
 * @module lit-html
 */



const parts = new WeakMap();
/**
 * Renders a template to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result a TemplateResult created by evaluating a template tag like
 *     `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        Object(_dom_js__WEBPACK_IMPORTED_MODULE_0__["removeNodes"])(container, container.firstChild);
        parts.set(container, part = new _parts_js__WEBPACK_IMPORTED_MODULE_1__["NodePart"](Object.assign({ templateFactory: _template_factory_js__WEBPACK_IMPORTED_MODULE_2__["templateFactory"] }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};
//# sourceMappingURL=render.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateFactory", function() { return templateFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateCaches", function() { return templateCaches; });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
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
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(_template_js__WEBPACK_IMPORTED_MODULE_0__["marker"]);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new _template_js__WEBPACK_IMPORTED_MODULE_0__["Template"](result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();
//# sourceMappingURL=template-factory.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _chat_window_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



class ChatWindowHeader extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)
		
		this.eventClickAlarm = this.onClickAlarm.bind(this)
		this.eventClickMenu = this.onClickMenu.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.submenu-search`).addEventListener(`click`, this.onClickSubmenuSearch, true)
		this.shadowRoot.querySelector(`.menu-button`).addEventListener(`click`, this.eventClickMenu, true)
		this.shadowRoot.querySelector(`.menu-alarm`).addEventListener(`click`, this.eventClickAlarm, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.submenu-search`).removeEventListener(`click`, this.onClickSubmenuSearch, true)
		this.shadowRoot.querySelector(`.menu-button`).removeEventListener(`click`, this.eventClickMenu, true)
		this.shadowRoot.querySelector(`.menu-alarm`).removeEventListener(`click`, this.eventClickAlarm, true)
	}

	onClickSubmenuPicture() {
		alert(i18next.t(`NO_IMPLEMENT`))
	}

	onClickSubmenuSearch() {
		alert(i18next.t(`NO_IMPLEMENT`))
	}

	onClickMenu() {
		const chatMenu = this.shadowRoot.querySelector(`chat-window-menu`)
		if(chatMenu.menuState === `hide`) {
			chatMenu.show()
		} else {
			chatMenu.hide()
		}
	}

	onClickAlarm() {
		this.toggleAlarmIcon()
	}

	toggleAlarmIcon() {
		const alarmButton = this.shadowRoot.querySelector(`.menu-alarm`)
		if(alarmButton.classList.contains(`on`)) {
			alarmButton.classList.remove(`on`)
			alarmButton.innerHTML = `
			<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06.05-7.55-2.61-15.27-8.61-21.71-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45zM157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h241.92L157.23 251.54zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z"></path></svg>
			`
			return
		}
		alarmButton.classList.add(`on`)
		alarmButton.innerHTML = `
		<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
		`
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<main>
				<div class='bot-profile'>
					<span class='bot-profile-img'></span>
				</div>
				<div class='name-submenu'>
					<div class='name'>${i18next.t(`BOT_NAME`)}</div>
					<div class='submenu'>
						<button class='submenu-search'>
							<svg height='14' width='14' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
						</button>						
					</div>
				</div>
				<div class='menu'>
					<button class='menu-alarm on' title='${i18next.t(`MENU_ALARM_TITLE`)}'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>
					</button>					
					<button class='menu-button' title='${i18next.t(`MENU_TITLE`)}'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
						<chat-window-menu></chat-window-menu>
					</button>
				</div>
			</main>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`chat-window-header`, ChatWindowHeader)


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);



class ChatWindowMenu extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)

		this.menuState = `hide`
		this.eventClickBotSetting = this.onClickBotSetting.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.menu .bot-setting`).addEventListener(`click`, this.eventClickBotSetting)
		this.shadowRoot.querySelector(`.menu`).addEventListener(`click`, event => this.onClickOutOfMenu(event))
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.menu .bot-setting`).removeEventListener(`click`, this.eventClickBotSetting)
	}	

	onClickOutOfMenu(event) {
		if(event.target.classList.contains(`menu`)) {
			this.hide()
		}
	}

	onClickBotSetting() {
		this.hide()
		this.openBotSetting()
	}

	openBotSetting() {
		_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadingDOM()
		_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderBotSettingWindow()
	}

	show() {
		this.style.display = `block`
		this.menuState = `show`
	}

	hide() {
		this.style.display = `none`
		this.menuState = `hide`
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<ul class='menu'>
				<li class='bot-setting' title='${i18next.t(`MENU_BOT_SETTING`)}'>${i18next.t(`MENU_BOT_SETTING`)}</li>
			</ul>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`chat-window-menu`, ChatWindowMenu)


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _bot_chat_balloon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _my_chat_balloon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);




class ChatWindowBody extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)		
	}

	connectedCallback() {
		this.chatWindow = document.querySelector(`chat-window`)

		this.bot = new RiveScript()

		// 라이브 스크립트 테스트 코드
		// this.bot.loadFile(`/assets/hy-lion.rive`).then(this.loading_done.bind(this)).catch(this.loading_error)
	}

	loading_done() {
		const username = `hy-lion`
		const sendText = `hello`

		this.bot.sortReplies()		

		this.send(sendText)
		this.bot.reply(username, sendText).then(reply => {
			this.reply(reply)
		})
	}

	loading_error(error) {
		throw new Error(`Error when loading files: ${error}`)
	}

	reply(text) {
		const main = this.shadowRoot.querySelector(`main`)
		const ONE = 1, LAST_CHILD_NUM = main.children.length - ONE
		const lastChat = main.children[LAST_CHILD_NUM]
		const isBot = main.children.length && main.children[LAST_CHILD_NUM].localName === `bot-chat-balloon`
		

		if(isBot == false) {
			const botChatBalloon = document.createElement(`bot-chat-balloon`)
			main.appendChild(botChatBalloon)
			botChatBalloon.chat(text)
			this.chatWindow.scrollToLast()
			return
		}
		lastChat.chat(text)
		this.chatWindow.scrollToLast()
	}

	send(text) {
		const main = this.shadowRoot.querySelector(`main`)
		const ONE = 1, LAST_CHILD_NUM = main.children.length - ONE
		const lastChat = main.children[LAST_CHILD_NUM]
		const isMe = main.children.length && main.children[LAST_CHILD_NUM].localName === `my-chat-balloon`

		if(isMe == false) {
			const myChatBalloon = document.createElement(`my-chat-balloon`)
			main.appendChild(myChatBalloon)
			myChatBalloon.chat(text)
			this.chatWindow.scrollToLast()
			return
		}
		lastChat.chat(text)
		this.chatWindow.scrollToLast()
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<main>				
				<!-- <my-chat-balloon></my-chat-balloon>
				<bot-chat-balloon></bot-chat-balloon> -->
			</main>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`chat-window-body`, ChatWindowBody)


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class BotChatBalloon extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)
		this.chatWindow = document.querySelector(`chat-window`)
	}

	chat(text) {
		const NO_CHAT = 0
		const isNoChat = this.shadowRoot.querySelector(`.chat-wrap`).childElementCount === NO_CHAT

		if(isNoChat) {
			this.newChat(text)
			this.shadowRoot.querySelector(`.chat-content`).textContent = text
			return
		}

		this.continueChat(text)
	}

	newChat(text) {
		const div = document.createElement(`div`)
		div.classList.add(`chat-content`)
		div.textContent = text
		this.shadowRoot.querySelector(`.chat-wrap`).appendChild(div)
	}

	continueChat(text) {
		const div = document.createElement(`div`)
		div.classList.add(`chat-content-continue`)
		div.textContent = text
		this.shadowRoot.querySelector(`.chat-wrap`).appendChild(div)
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<main>
				<div class='profile'>
					<div class='profile-img'></div>
				</div>
				<div class='name'>${i18next.t(`BOT_NAME`)}</div>
				<div class='chat-wrap'>
					<!-- <div class='chat-content'></div> -->
					<!-- <div class='chat-content-continue'></div> -->
				</div>
			</main>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`bot-chat-balloon`, BotChatBalloon)


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class MyChatBalloon extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)
	}

	chat(text) {
		const NO_CHAT = 0
		const isNoChat = this.shadowRoot.querySelector(`.chat-wrap`).childElementCount === NO_CHAT

		if(isNoChat) {
			this.newChat(text)
			this.shadowRoot.querySelector(`.chat-content`).textContent = text
			return
		}

		this.continueChat(text)
	}

	newChat(text) {
		const div = document.createElement(`div`)
		div.classList.add(`chat-content`)
		div.textContent = text
		this.shadowRoot.querySelector(`.chat-wrap`).appendChild(div)
	}

	continueChat(text) {
		const div = document.createElement(`div`)
		div.classList.add(`chat-content-continue`)
		div.textContent = text
		this.shadowRoot.querySelector(`.chat-wrap`).appendChild(div)
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<main>
				<div class='chat-wrap'>
					<!-- <div class='chat-content'></div> -->
					<!-- <div class='chat-content-continue'></div> -->
				</div>
			</main>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`my-chat-balloon`, MyChatBalloon)


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


class ChatWindowFooter extends HTMLElement {	
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)

		this.eventKeydownTextarea = this.onkeydownTextarea.bind(this)
		this.eventClickSendButton = this.onClickSendButton.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.send_text`).addEventListener(`keypress`, this.eventKeydownTextarea)
		this.shadowRoot.querySelector(`.send_button`).addEventListener(`click`, this.eventClickSendButton)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.send_text`).removeEventListener(`keypress`, this.eventKeydownTextarea)
		this.shadowRoot.querySelector(`.send_button`).removeEventListener(`click`, this.eventClickSendButton)
	}

	onkeydownTextarea(event) {
		const isEnter = event.code === `Enter`
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const sendText = this.shadowRoot.querySelector(`.send_text`)

		if(isEnter) {
			event.preventDefault()
			chatBody.send(sendText.value)
			this.replyByPingpongAPI(sendText.value)
			sendText.value = ``			
		}
	}

	onClickSendButton() {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const sendText = this.shadowRoot.querySelector(`.send_text`)

		chatBody.send(sendText.value)
		this.replyByPingpongAPI(sendText.value)
		sendText.value = ``		
	}

	replyByPingpongAPI(text) {
		const xhr = new XMLHttpRequest()
		const COMPLETED = 4, OK = 200, FIRST_TEXT = 0
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}		
		xhr.open(`GET`, `https://cors-anywhere.herokuapp.com/https://pingpong.us/api/reaction.php?custom=basic&query=${encodeURIComponent(text)}`)	

		xhr.addEventListener(`readystatechange`, () => {
			if(xhr.readyState === COMPLETED) {
				if(xhr.status === OK) {
					const data = JSON.parse(xhr.responseText)
					const RAND = Math.floor(Math.random() * data.length)
					const speack = data[RAND][`message`].split(`(`)[FIRST_TEXT]
					chatBody.reply(speack)
				} else {
					throw new Error(`No XHR`)
				}
			}
		})		
		xhr.send()
	}
	

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<main>
				<textarea class='send_text'></textarea>
				<div class='send_button_wrap'>
					<button class='send_button' type='button'>${i18next.t(`SEND_MESSAGE`)}</button>
				</div>
			</main>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`chat-window-footer`, ChatWindowFooter)


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _components_bot_setting_window_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



class BotSettingWindow extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<main>
				<bot-setting-header></bot-setting-header>
				<bot-setting-body></bot-setting-body>
				<bot-setting-footer></bot-setting-footer>
			</main>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`bot-setting-window`, BotSettingWindow)


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _bot_setting_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);



class BotSettingHeader extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)

		this.eventClickMenu = this.onClickMenu.bind(this)
		this.eventClickRivescript = this.onClickRivescript.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.menu-button`).addEventListener(`click`, this.eventClickMenu, true)
		this.shadowRoot.querySelector(`.button-rivescript`).addEventListener(`click`, this.eventClickRivescript, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.menu-button`).removeEventListener(`click`, this.eventClickMenu, true)
		this.shadowRoot.querySelector(`.button-rivescript`).removeEventListener(`click`, this.eventClickRivescript, true)
	}

	onClickMenu() {
		const botSettingMenu = this.shadowRoot.querySelector(`bot-setting-menu`)
		if(botSettingMenu.menuState === `hide`) {
			botSettingMenu.show()
		} else {
			botSettingMenu.hide()
		}
	}

	onClickRivescript() {
		const body = document.querySelector(`bot-setting-window`).shadowRoot.querySelector(`bot-setting-body`)
		const buttonRivescript = this.shadowRoot.querySelector(`.button-rivescript`)

		this.emptyBody()
		if (buttonRivescript.classList.contains(`on`)) {
			buttonRivescript.classList.remove(`on`)
		} else {
			buttonRivescript.classList.add(`on`)
			this.readRivescript().then(script => {			
				body.textContent = script
			}).catch(error => {
				throw new Error(`No read Rivescript: ${error}`)
			})
		}				
	}

	emptyBody() {
		document.querySelector(`bot-setting-window`).shadowRoot.querySelector(`bot-setting-body`).innerHTML = ``		
	}

	readRivescript() {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			const COMPLETE = 200

			xhr.open(`GET`, `/assets/hy-lion.rive`)
			xhr.send()
			xhr.addEventListener(`readystatechange`, () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === COMPLETE) {
						resolve(xhr.response)
					} else {
						reject(xhr.statusText)
					}
				}
			})
		})
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<main>
				<div class='setting-img-wrap'>
					<span class='setting-img'></span>
				</div>
				<div class='title-submenu'>
					<div class='title'>${i18next.t(`BOT_SETTING_TITLE`)}</div>
					<div class='submenu'>
						<button class='button-rivescript' title='${i18next.t(`CONVERT_RIVESCRIPT`)}'>${i18next.t(`CONVERT_RIVESCRIPT`)}</button>
					</div>
				</div>
				<div class='menu'>		
					<button class='menu-button' title='메뉴'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
						<bot-setting-menu></bot-setting-menu>
					</button>
				</div>
			</main>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`bot-setting-header`, BotSettingHeader)


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);



class BotSettingMenu extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		Object(_node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["render"])(this.render(), this.shadowRoot)

		this.menuState = `hide`
		this.eventClickChatWindow = this.onClickChatWindow.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.menu .chat-window`).addEventListener(`click`, this.eventClickChatWindow)
		this.shadowRoot.querySelector(`.menu`).addEventListener(`click`, event => this.onClickOutOfMenu(event))
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.menu .chat-window`).removeEventListener(`click`, this.eventClickChatWindow)
	}	

	onClickOutOfMenu(event) {
		if(event.target.classList.contains(`menu`)) {
			this.hide()
		}
	}

	onClickChatWindow() {
		this.hide()
		this.openChatWindow()
	}

	openChatWindow() {
		_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadingDOM()
		_main_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderChatWindow()
	}

	show() {
		this.style.display = `block`
		this.menuState = `show`
	}

	hide() {
		this.style.display = `none`
		this.menuState = `hide`
	}

	render() {
		return _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
			${style}
			<ul class='menu'>
				<li class='chat-window' title='${i18next.t(`MENU_CHAT_WINDOW`)}'>${i18next.t(`MENU_CHAT_WINDOW`)}</li>
			</ul>
		`
	}
}

const style = _node_modules_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["html"]`
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
`

customElements.define(`bot-setting-menu`, BotSettingMenu)


/***/ })
/******/ ]);