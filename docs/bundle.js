/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elements/md-blockquote.ts":
/*!***************************************!*\
  !*** ./src/elements/md-blockquote.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MdBlockquote = void 0;\r\nconst markdown_1 = __webpack_require__(/*! ../markdown */ \"./src/markdown.ts\");\r\nclass MdBlockquote extends HTMLParagraphElement {\r\n    constructor() {\r\n        super();\r\n        this.addEventListener('openInput', () => {\r\n            var _a;\r\n            console.log(this.getAttribute('md'));\r\n            this.innerText = '> ' + this.innerText;\r\n            if (((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) === 'blockquote'.toUpperCase()) {\r\n                this.parentElement.style.cssText = '';\r\n            }\r\n        });\r\n        this.addEventListener('closeInput', this.close.bind(this));\r\n    }\r\n    close() {\r\n        var _a;\r\n        if (((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) === 'blockquote'.toUpperCase()) {\r\n            this.parentElement.style.cssText = 'border-left: 0.2rem solid #dfe2e5;';\r\n        }\r\n        markdown_1.Markdown.factory(this);\r\n    }\r\n}\r\nexports.MdBlockquote = MdBlockquote;\r\n\n\n//# sourceURL=webpack://wizmarker/./src/elements/md-blockquote.ts?");

/***/ }),

/***/ "./src/elements/md-code.ts":
/*!*********************************!*\
  !*** ./src/elements/md-code.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MdCode = void 0;\r\nconst markdown_1 = __webpack_require__(/*! ../markdown */ \"./src/markdown.ts\");\r\nclass MdCode extends HTMLElement {\r\n    constructor() {\r\n        super();\r\n        this.addEventListener('openInput', () => {\r\n            this.innerText = \"```\" + this.innerText + \"```\";\r\n        });\r\n        this.addEventListener('closeInput', this.close.bind(this));\r\n    }\r\n    close() {\r\n        markdown_1.Markdown.factory(this);\r\n    }\r\n}\r\nexports.MdCode = MdCode;\r\n\n\n//# sourceURL=webpack://wizmarker/./src/elements/md-code.ts?");

/***/ }),

/***/ "./src/elements/md-event.ts":
/*!**********************************!*\
  !*** ./src/elements/md-event.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.CloseInput = exports.OpenInput = void 0;\r\nexports.OpenInput = new Event(\"openInput\", { \"bubbles\": true, \"cancelable\": false });\r\nexports.CloseInput = new Event(\"closeInput\", { \"bubbles\": true, \"cancelable\": false });\r\n\n\n//# sourceURL=webpack://wizmarker/./src/elements/md-event.ts?");

/***/ }),

/***/ "./src/elements/md-heading.ts":
/*!************************************!*\
  !*** ./src/elements/md-heading.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MdHeading6 = exports.MdHeading5 = exports.MdHeading4 = exports.MdHeading3 = exports.MdHeading2 = exports.MdHeading1 = exports.MdHeading = void 0;\r\nconst markdown_1 = __webpack_require__(/*! ../markdown */ \"./src/markdown.ts\");\r\nclass MdHeading extends HTMLHeadingElement {\r\n    constructor() {\r\n        super();\r\n        this.addEventListener('openInput', () => {\r\n            let level = Number(this.tagName.slice(1, 2));\r\n            console.log('===' + level);\r\n            let str = '';\r\n            for (let i = 0; i < level; i++) {\r\n                str += '#';\r\n            }\r\n            this.innerText = str + ' ' + this.innerText;\r\n        });\r\n        this.addEventListener('closeInput', this.close.bind(this));\r\n    }\r\n    close() {\r\n        markdown_1.Markdown.factory(this);\r\n    }\r\n}\r\nexports.MdHeading = MdHeading;\r\nclass MdHeading1 extends MdHeading {\r\n}\r\nexports.MdHeading1 = MdHeading1;\r\nclass MdHeading2 extends MdHeading {\r\n}\r\nexports.MdHeading2 = MdHeading2;\r\nclass MdHeading3 extends MdHeading {\r\n}\r\nexports.MdHeading3 = MdHeading3;\r\nclass MdHeading4 extends MdHeading {\r\n}\r\nexports.MdHeading4 = MdHeading4;\r\nclass MdHeading5 extends MdHeading {\r\n}\r\nexports.MdHeading5 = MdHeading5;\r\nclass MdHeading6 extends MdHeading {\r\n}\r\nexports.MdHeading6 = MdHeading6;\r\n\n\n//# sourceURL=webpack://wizmarker/./src/elements/md-heading.ts?");

/***/ }),

/***/ "./src/elements/md-horizontal-rule.ts":
/*!********************************************!*\
  !*** ./src/elements/md-horizontal-rule.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MdHorizontalRule = void 0;\r\nconst markdown_1 = __webpack_require__(/*! ../markdown */ \"./src/markdown.ts\");\r\nclass MdHorizontalRule extends HTMLHRElement {\r\n    constructor() {\r\n        super();\r\n        //this.style.cssText = 'border-bottom: 5px solid black';\r\n        this.setAttribute('contenteditable', 'true');\r\n        this.addEventListener('openInput', () => {\r\n            console.log('yyyy');\r\n            this.innerText = '---';\r\n        });\r\n        this.addEventListener('closeInput', this.close.bind(this));\r\n    }\r\n    close() {\r\n        markdown_1.Markdown.factory(this);\r\n    }\r\n}\r\nexports.MdHorizontalRule = MdHorizontalRule;\r\n\n\n//# sourceURL=webpack://wizmarker/./src/elements/md-horizontal-rule.ts?");

/***/ }),

/***/ "./src/elements/md-li.ts":
/*!*******************************!*\
  !*** ./src/elements/md-li.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MdLi = void 0;\r\nconst markdown_1 = __webpack_require__(/*! ../markdown */ \"./src/markdown.ts\");\r\nclass MdLi extends HTMLLIElement {\r\n    constructor() {\r\n        super();\r\n        this.innerHTML = '<br>';\r\n        this.addEventListener('openInput', () => {\r\n            var _a, _b;\r\n            let tag = ((_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.tagName) || '';\r\n            let str = '';\r\n            switch (tag) {\r\n                case 'UL':\r\n                    str = '*';\r\n                    break;\r\n                case 'OL':\r\n                    let index;\r\n                    if (this.parentElement) {\r\n                        index = [...(_b = this.parentElement) === null || _b === void 0 ? void 0 : _b.children].indexOf(this);\r\n                        str = index + '.';\r\n                    }\r\n                    break;\r\n            }\r\n            this.innerText = str + ' ' + this.innerText;\r\n            this.style.cssText = 'list-style:none';\r\n        });\r\n        this.addEventListener('closeInput', this.close.bind(this));\r\n    }\r\n    close() {\r\n        this.style.cssText = '';\r\n        markdown_1.Markdown.factory(this);\r\n    }\r\n    add() {\r\n        var _a;\r\n        let li = document.createElement('li', { is: 'md-li' });\r\n        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(li);\r\n    }\r\n}\r\nexports.MdLi = MdLi;\r\n\n\n//# sourceURL=webpack://wizmarker/./src/elements/md-li.ts?");

/***/ }),

/***/ "./src/elements/md-paragraph.ts":
/*!**************************************!*\
  !*** ./src/elements/md-paragraph.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MdParagraph = void 0;\r\nconst markdown_1 = __webpack_require__(/*! ../markdown */ \"./src/markdown.ts\");\r\nclass MdParagraph extends HTMLParagraphElement {\r\n    constructor() {\r\n        super();\r\n        this.addEventListener('closeInput', this.close.bind(this));\r\n    }\r\n    close() {\r\n        markdown_1.Markdown.factory(this);\r\n    }\r\n}\r\nexports.MdParagraph = MdParagraph;\r\n\n\n//# sourceURL=webpack://wizmarker/./src/elements/md-paragraph.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst mark_editor_1 = __webpack_require__(/*! ./mark-editor */ \"./src/mark-editor.ts\");\r\nlet m = new mark_editor_1.MarkEditor();\r\n// console.log(m)\r\n// let lists= /^((\\s*)((\\*|\\-)|\\d(\\.|\\))) ([^\\n]+))/;\r\n// console.log(lists.exec('* gggkkk'))\r\n// var p = document.createElement('h1', { is: 'md-h1' });\r\n// let mark: Mark = document.createElement(\"button\", { is: \"md-mark\" });\r\n// console.log(mark.outerHTML);\r\n// m.el.appendChild(mark);\r\n\n\n//# sourceURL=webpack://wizmarker/./src/main.ts?");

/***/ }),

/***/ "./src/mark-editor.ts":
/*!****************************!*\
  !*** ./src/mark-editor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MarkEditor = void 0;\r\nconst md_event_1 = __webpack_require__(/*! ./elements/md-event */ \"./src/elements/md-event.ts\");\r\nconst md_paragraph_1 = __webpack_require__(/*! ./elements/md-paragraph */ \"./src/elements/md-paragraph.ts\");\r\nconst md_heading_1 = __webpack_require__(/*! ./elements/md-heading */ \"./src/elements/md-heading.ts\");\r\nconst md_li_1 = __webpack_require__(/*! ./elements/md-li */ \"./src/elements/md-li.ts\");\r\nconst md_horizontal_rule_1 = __webpack_require__(/*! ./elements/md-horizontal-rule */ \"./src/elements/md-horizontal-rule.ts\");\r\nconst md_blockquote_1 = __webpack_require__(/*! ./elements/md-blockquote */ \"./src/elements/md-blockquote.ts\");\r\nconst md_code_1 = __webpack_require__(/*! ./elements/md-code */ \"./src/elements/md-code.ts\");\r\ncustomElements.define('md-h1', md_heading_1.MdHeading1, { extends: 'h1' });\r\ncustomElements.define('md-h2', md_heading_1.MdHeading2, { extends: 'h2' });\r\ncustomElements.define('md-h3', md_heading_1.MdHeading3, { extends: 'h3' });\r\ncustomElements.define('md-h4', md_heading_1.MdHeading4, { extends: 'h4' });\r\ncustomElements.define('md-h5', md_heading_1.MdHeading5, { extends: 'h5' });\r\ncustomElements.define('md-h6', md_heading_1.MdHeading6, { extends: 'h6' });\r\ncustomElements.define('md-p', md_paragraph_1.MdParagraph, { extends: 'p' });\r\ncustomElements.define('md-li', md_li_1.MdLi, { extends: 'li' });\r\ncustomElements.define('md-hr', md_horizontal_rule_1.MdHorizontalRule, { extends: 'hr' });\r\ncustomElements.define('md-blockquote', md_blockquote_1.MdBlockquote, { extends: 'p' });\r\ncustomElements.define('md-code', md_code_1.MdCode, { extends: 'code' });\r\nclass MarkEditor {\r\n    constructor(options) {\r\n        this.current = null;\r\n        Object.assign(this, options);\r\n        this.el = this.buildEditor();\r\n        this.bindEvent();\r\n    }\r\n    buildEditor() {\r\n        let el = document.getElementById('editor');\r\n        if (!el) {\r\n            el = document.createElement('div');\r\n        }\r\n        let me = document.createElement('p', { is: 'md-p' });\r\n        me.innerHTML = '<br>';\r\n        el.appendChild(me);\r\n        return el;\r\n    }\r\n    bindEvent() {\r\n        document.addEventListener('selectionchange', this.selectionChange.bind(this));\r\n        this.el.addEventListener('keydown', this.keydown.bind(this));\r\n    }\r\n    keydown(e) {\r\n        var _a, _b;\r\n        if (e.shiftKey && e.key === 'Enter') {\r\n            if (((_a = this.current) === null || _a === void 0 ? void 0 : _a.tagName) === 'LI') {\r\n                let li = document.createElement('li', { is: 'md-li' });\r\n                (_b = this.current.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(li);\r\n                li.dispatchEvent(md_event_1.OpenInput);\r\n                let range = document.createRange();\r\n                range.selectNodeContents(li);\r\n                //range.setStartAfter(p);\r\n                range.collapse(false);\r\n                let selection = window.getSelection();\r\n                selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();\r\n                selection === null || selection === void 0 ? void 0 : selection.addRange(range);\r\n                e.preventDefault();\r\n                return false;\r\n            }\r\n        }\r\n        else if (e.key === 'Enter') {\r\n            let p = document.createElement('p', { is: 'md-p' });\r\n            p.innerHTML = '<br>';\r\n            this.el.appendChild(p);\r\n            let range = document.createRange(); //Create a range (a range is a like the selection but invisible)\r\n            range.selectNodeContents(p); //Select the entire contents of the element with the range\r\n            //range.setStartAfter(p);\r\n            range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start\r\n            let selection = window.getSelection(); //get the selection object (allows you to change selection)\r\n            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges(); //remove any selections already made\r\n            selection === null || selection === void 0 ? void 0 : selection.addRange(range); //make the range you have just created the visible selection\r\n            this.setCurrent(p);\r\n            // prevent the default behaviour of return key pressed\r\n            e.preventDefault();\r\n            return false;\r\n        }\r\n    }\r\n    selectionChange(e) {\r\n        let sel = window.getSelection();\r\n        if (!(sel === null || sel === void 0 ? void 0 : sel.rangeCount)) {\r\n            return void 0;\r\n        }\r\n        let rng = sel.getRangeAt(0);\r\n        let node = rng.startContainer;\r\n        console.log(node);\r\n        if (node.nodeType === 3) {\r\n            let ele = node.parentNode;\r\n            console.log(ele);\r\n            console.log('----------');\r\n            console.log(this.current);\r\n            if (this.current !== ele) {\r\n                ele.dispatchEvent(md_event_1.OpenInput);\r\n                this.setCurrent(ele);\r\n            }\r\n            else {\r\n                ele.setAttribute('md', ele.innerText.trim());\r\n            }\r\n        }\r\n    }\r\n    setCurrent(ele) {\r\n        var _a;\r\n        (_a = this.current) === null || _a === void 0 ? void 0 : _a.dispatchEvent(md_event_1.CloseInput);\r\n        this.current = ele;\r\n    }\r\n    getCaretCharacterOffsetWithin() {\r\n        let caretOffset = 0;\r\n        const doc = this.el.ownerDocument || this.el.document;\r\n        const win = doc.defaultView || doc.parentWindow;\r\n        let sel;\r\n        if (typeof win.getSelection != \"undefined\") {\r\n            sel = win.getSelection();\r\n            if (sel.rangeCount > 0) {\r\n                var range = win.getSelection().getRangeAt(0);\r\n                var preCaretRange = range.cloneRange();\r\n                preCaretRange.selectNodeContents(this.el);\r\n                preCaretRange.setEnd(range.endContainer, range.endOffset);\r\n                caretOffset = preCaretRange.toString().length;\r\n            }\r\n        }\r\n        else if ((sel = doc.selection) && sel.type != \"Control\") {\r\n            var textRange = sel.createRange();\r\n            var preCaretTextRange = doc.body.createTextRange();\r\n            preCaretTextRange.moveToElementText(this.el);\r\n            preCaretTextRange.setEndPoint(\"EndToEnd\", textRange);\r\n            caretOffset = preCaretTextRange.text.length;\r\n        }\r\n        return caretOffset;\r\n    }\r\n    setFocus() {\r\n        const range = document.createRange();\r\n        range.selectNodeContents(this.el);\r\n        range.collapse(false);\r\n        const sel = document.getSelection();\r\n        sel === null || sel === void 0 ? void 0 : sel.removeAllRanges();\r\n        sel === null || sel === void 0 ? void 0 : sel.addRange(range);\r\n    }\r\n}\r\nexports.MarkEditor = MarkEditor;\r\n\n\n//# sourceURL=webpack://wizmarker/./src/mark-editor.ts?");

/***/ }),

/***/ "./src/markdown.ts":
/*!*************************!*\
  !*** ./src/markdown.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Markdown = void 0;\r\nclass Markdown {\r\n    static match(str) {\r\n        let result;\r\n        let mark = { name: 'paragraph', md: str, txt: str, tag: 'p' };\r\n        for (let i = 0; i < Markdown.regs.length; i++) {\r\n            result = Markdown.regs[i].rule.exec(str);\r\n            console.log(result);\r\n            if (result) {\r\n                switch (Markdown.regs[i].name) {\r\n                    case 'heading':\r\n                        mark = { name: Markdown.regs[i].name, md: str, txt: result[2].trim(), tag: 'h' + result[1].length };\r\n                        break;\r\n                    case 'list':\r\n                        console.log(result);\r\n                        let tag = (result[4] === '*' || result[4] === '-') ? 'ul' : 'ol';\r\n                        mark = { name: Markdown.regs[i].name, md: str, txt: result[6].trim(), tag: tag };\r\n                        break;\r\n                    case 'horizontal-rule':\r\n                        mark = { name: Markdown.regs[i].name, md: str, txt: result[0].trim(), tag: 'hr' };\r\n                        break;\r\n                    case 'blockquote':\r\n                        mark = { name: Markdown.regs[i].name, md: str, txt: result[1], tag: 'blockquote' };\r\n                        break;\r\n                    case 'code':\r\n                        mark = { name: Markdown.regs[i].name, md: str, txt: result[1], tag: 'code' };\r\n                        break;\r\n                    default:\r\n                        break;\r\n                }\r\n            }\r\n        }\r\n        return mark;\r\n    }\r\n    static factory(el) {\r\n        var _a, _b, _c, _d, _e, _f, _g, _h;\r\n        let me;\r\n        let mark = Markdown.match(el.textContent || '');\r\n        console.log(mark);\r\n        switch (mark === null || mark === void 0 ? void 0 : mark.name) {\r\n            case 'heading':\r\n                if (el.tagName.toLowerCase() === mark.tag) {\r\n                    el.innerText = mark.txt;\r\n                }\r\n                else {\r\n                    me = document.createElement(mark.tag, { is: 'md-' + mark.tag });\r\n                    me.setAttribute('md', mark.md);\r\n                    me.innerText = mark.txt;\r\n                    (_a = el.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(me, el);\r\n                }\r\n                break;\r\n            case 'list':\r\n                let tag = (_b = el.parentElement) === null || _b === void 0 ? void 0 : _b.tagName;\r\n                if (tag === 'UL' || tag === 'OL') {\r\n                    el.innerText = mark.txt;\r\n                }\r\n                else {\r\n                    let u = document.createElement(mark.tag);\r\n                    let l = document.createElement('li', { is: 'md-li' });\r\n                    l.setAttribute('md', mark.md);\r\n                    l.innerText = mark.txt;\r\n                    u.appendChild(l);\r\n                    (_c = el.parentNode) === null || _c === void 0 ? void 0 : _c.replaceChild(u, el);\r\n                }\r\n                break;\r\n            case 'paragraph':\r\n                if (el.tagName !== 'P') {\r\n                    me = document.createElement('p', { is: 'md-p' });\r\n                    me.innerText = mark.txt;\r\n                    (_d = el.parentNode) === null || _d === void 0 ? void 0 : _d.replaceChild(me, el);\r\n                }\r\n                break;\r\n            case 'horizontal-rule':\r\n                if (el.tagName !== 'HR') {\r\n                    me = document.createElement('hr', { is: 'md-hr' });\r\n                    (_e = el.parentNode) === null || _e === void 0 ? void 0 : _e.replaceChild(me, el);\r\n                }\r\n                break;\r\n            case 'blockquote':\r\n                let tag1 = (_f = el.parentElement) === null || _f === void 0 ? void 0 : _f.tagName;\r\n                if (tag1 !== 'blockquote'.toUpperCase()) {\r\n                    let q = document.createElement('blockquote');\r\n                    q.style.cssText = 'border-left: 0.2rem solid #dfe2e5;';\r\n                    let p = document.createElement('p', { is: 'md-blockquote' });\r\n                    p.setAttribute('md', mark.md);\r\n                    p.innerText = mark.txt;\r\n                    q.appendChild(p);\r\n                    (_g = el.parentNode) === null || _g === void 0 ? void 0 : _g.replaceChild(q, el);\r\n                }\r\n                else {\r\n                    el.innerText = mark.txt;\r\n                }\r\n                break;\r\n            case 'code':\r\n                if (el.tagName !== 'CODE') {\r\n                    let p = document.createElement('pre');\r\n                    let c = document.createElement('code', { is: 'md-code' });\r\n                    c.innerText = mark.txt;\r\n                    p.appendChild(c);\r\n                    (_h = el.parentNode) === null || _h === void 0 ? void 0 : _h.replaceChild(p, el);\r\n                }\r\n                else {\r\n                    el.innerText = mark.txt;\r\n                }\r\n                break;\r\n            default:\r\n                break;\r\n        }\r\n    }\r\n}\r\nexports.Markdown = Markdown;\r\nMarkdown.regs = [\r\n    { name: 'heading', rule: /^(\\#{1,6})([^\\#\\n]+)$/m },\r\n    { name: 'list', rule: /^((\\s*)((\\*|\\-)|\\d(\\.|\\))) ([^\\n]+))/ },\r\n    { name: 'horizontal-rule', rule: /^(?:([\\*\\-_] ?)+)\\1\\1$/gm },\r\n    { name: 'blockquote', rule: /^\\> (.*$)/gim },\r\n    { name: 'code', rule: /\\`\\`\\`\\n?([^`]+)\\`\\`\\`/g }\r\n];\r\nMarkdown.regexobject = {\r\n    headline: /^(\\#{1,6})([^\\#\\n]+)$/m,\r\n    code: /\\s\\`\\`\\`\\n?([^`]+)\\`\\`\\`/g,\r\n    hr: /^(?:([\\*\\-_] ?)+)\\1\\1$/gm,\r\n    //lists:  /^((\\s*((\\*|\\-)|\\d(\\.|\\))) [^\\n]+)\\n)+/gm,\r\n    list: /^((\\s*)((\\*|\\-)|\\d(\\.|\\))) ([^\\n]+))/,\r\n    bolditalic: /(?:([\\*_~]{1,3}))([^\\*_~\\n]+[^\\*_~\\s])\\1/g,\r\n    links: /!?\\[([^\\]<>]+)\\]\\(([^ \\)<>]+)( \"[^\\(\\)\\\"]+\")?\\)/g,\r\n    reflinks: /\\[([^\\]]+)\\]\\[([^\\]]+)\\]/g,\r\n    smlinks: /\\@([a-z0-9]{3,})\\@(t|gh|fb|gp|adn)/gi,\r\n    mail: /<(([a-z0-9_\\-\\.])+\\@([a-z0-9_\\-\\.])+\\.([a-z]{2,7}))>/gmi,\r\n    tables: /\\n(([^|\\n]+ *\\| *)+([^|\\n]+\\n))([\\t ]*(:?\\-+:?\\|)+(:?\\-+:?)*\\n)((([^|\\n]+ *\\| *)+([^|\\n]+)\\n)+)/g,\r\n    include: /[\\[<]include (\\S+) from (https?:\\/\\/[a-z0-9\\.\\-]+\\.[a-z]{2,9}[a-z0-9\\.\\-\\?\\&\\/]+)[\\]>]/gi,\r\n    url: /<([a-zA-Z0-9@:%_\\+.~#?&\\/=]{2,256}\\.[a-z]{2,4}\\b(\\/[\\-a-zA-Z0-9@:%_\\+.~#?&\\/\\/=]*)?)>/g,\r\n    url2: /[ \\t\\n]([a-zA-Z]{2,16}:\\/\\/[a-zA-Z0-9@:%_\\+.~#?&=]{2,256}.[a-z]{2,4}\\b(\\/[\\-a-zA-Z0-9@:%_\\+.~#?&\\/\\/=]*)?)/g\r\n};\r\n\n\n//# sourceURL=webpack://wizmarker/./src/markdown.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;