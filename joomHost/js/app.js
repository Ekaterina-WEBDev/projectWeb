(() => {
    var __webpack_modules__ = {
        755: function(module, exports) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
 * jQuery JavaScript Library v3.6.3
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-12-20T21:28Z
 */            (function(global, factory) {
                "use strict";
                if (true && "object" === typeof module.exports) module.exports = global.document ? factory(global, true) : function(w) {
                    if (!w.document) throw new Error("jQuery requires a window with a document");
                    return factory(w);
                }; else factory(global);
            })("undefined" !== typeof window ? window : this, (function(window, noGlobal) {
                "use strict";
                var arr = [];
                var getProto = Object.getPrototypeOf;
                var slice = arr.slice;
                var flat = arr.flat ? function(array) {
                    return arr.flat.call(array);
                } : function(array) {
                    return arr.concat.apply([], array);
                };
                var push = arr.push;
                var indexOf = arr.indexOf;
                var class2type = {};
                var toString = class2type.toString;
                var hasOwn = class2type.hasOwnProperty;
                var fnToString = hasOwn.toString;
                var ObjectFunctionString = fnToString.call(Object);
                var support = {};
                var isFunction = function isFunction(obj) {
                    return "function" === typeof obj && "number" !== typeof obj.nodeType && "function" !== typeof obj.item;
                };
                var isWindow = function isWindow(obj) {
                    return null != obj && obj === obj.window;
                };
                var document = window.document;
                var preservedScriptAttributes = {
                    type: true,
                    src: true,
                    nonce: true,
                    noModule: true
                };
                function DOMEval(code, node, doc) {
                    doc = doc || document;
                    var i, val, script = doc.createElement("script");
                    script.text = code;
                    if (node) for (i in preservedScriptAttributes) {
                        val = node[i] || node.getAttribute && node.getAttribute(i);
                        if (val) script.setAttribute(i, val);
                    }
                    doc.head.appendChild(script).parentNode.removeChild(script);
                }
                function toType(obj) {
                    if (null == obj) return obj + "";
                    return "object" === typeof obj || "function" === typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
                }
                var version = "3.6.3", jQuery = function(selector, context) {
                    return new jQuery.fn.init(selector, context);
                };
                jQuery.fn = jQuery.prototype = {
                    jquery: version,
                    constructor: jQuery,
                    length: 0,
                    toArray: function() {
                        return slice.call(this);
                    },
                    get: function(num) {
                        if (null == num) return slice.call(this);
                        return num < 0 ? this[num + this.length] : this[num];
                    },
                    pushStack: function(elems) {
                        var ret = jQuery.merge(this.constructor(), elems);
                        ret.prevObject = this;
                        return ret;
                    },
                    each: function(callback) {
                        return jQuery.each(this, callback);
                    },
                    map: function(callback) {
                        return this.pushStack(jQuery.map(this, (function(elem, i) {
                            return callback.call(elem, i, elem);
                        })));
                    },
                    slice: function() {
                        return this.pushStack(slice.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return (i + 1) % 2;
                        })));
                    },
                    odd: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return i % 2;
                        })));
                    },
                    eq: function(i) {
                        var len = this.length, j = +i + (i < 0 ? len : 0);
                        return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push,
                    sort: arr.sort,
                    splice: arr.splice
                };
                jQuery.extend = jQuery.fn.extend = function() {
                    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                    if ("boolean" === typeof target) {
                        deep = target;
                        target = arguments[i] || {};
                        i++;
                    }
                    if ("object" !== typeof target && !isFunction(target)) target = {};
                    if (i === length) {
                        target = this;
                        i--;
                    }
                    for (;i < length; i++) if (null != (options = arguments[i])) for (name in options) {
                        copy = options[name];
                        if ("__proto__" === name || target === copy) continue;
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            src = target[name];
                            if (copyIsArray && !Array.isArray(src)) clone = []; else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {}; else clone = src;
                            copyIsArray = false;
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (void 0 !== copy) target[name] = copy;
                    }
                    return target;
                };
                jQuery.extend({
                    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                    isReady: true,
                    error: function(msg) {
                        throw new Error(msg);
                    },
                    noop: function() {},
                    isPlainObject: function(obj) {
                        var proto, Ctor;
                        if (!obj || "[object Object]" !== toString.call(obj)) return false;
                        proto = getProto(obj);
                        if (!proto) return true;
                        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                        return "function" === typeof Ctor && fnToString.call(Ctor) === ObjectFunctionString;
                    },
                    isEmptyObject: function(obj) {
                        var name;
                        for (name in obj) return false;
                        return true;
                    },
                    globalEval: function(code, options, doc) {
                        DOMEval(code, {
                            nonce: options && options.nonce
                        }, doc);
                    },
                    each: function(obj, callback) {
                        var length, i = 0;
                        if (isArrayLike(obj)) {
                            length = obj.length;
                            for (;i < length; i++) if (false === callback.call(obj[i], i, obj[i])) break;
                        } else for (i in obj) if (false === callback.call(obj[i], i, obj[i])) break;
                        return obj;
                    },
                    makeArray: function(arr, results) {
                        var ret = results || [];
                        if (null != arr) if (isArrayLike(Object(arr))) jQuery.merge(ret, "string" === typeof arr ? [ arr ] : arr); else push.call(ret, arr);
                        return ret;
                    },
                    inArray: function(elem, arr, i) {
                        return null == arr ? -1 : indexOf.call(arr, elem, i);
                    },
                    merge: function(first, second) {
                        var len = +second.length, j = 0, i = first.length;
                        for (;j < len; j++) first[i++] = second[j];
                        first.length = i;
                        return first;
                    },
                    grep: function(elems, callback, invert) {
                        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                        for (;i < length; i++) {
                            callbackInverse = !callback(elems[i], i);
                            if (callbackInverse !== callbackExpect) matches.push(elems[i]);
                        }
                        return matches;
                    },
                    map: function(elems, callback, arg) {
                        var length, value, i = 0, ret = [];
                        if (isArrayLike(elems)) {
                            length = elems.length;
                            for (;i < length; i++) {
                                value = callback(elems[i], i, arg);
                                if (null != value) ret.push(value);
                            }
                        } else for (i in elems) {
                            value = callback(elems[i], i, arg);
                            if (null != value) ret.push(value);
                        }
                        return flat(ret);
                    },
                    guid: 1,
                    support
                });
                if ("function" === typeof Symbol) jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(_i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                }));
                function isArrayLike(obj) {
                    var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                    if (isFunction(obj) || isWindow(obj)) return false;
                    return "array" === type || 0 === length || "number" === typeof length && length > 0 && length - 1 in obj;
                }
                var Sizzle = 
                /*!
 * Sizzle CSS Selector Engine v2.3.9
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2022-12-19
 */
                function(window) {
                    var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                        if (a === b) hasDuplicate = true;
                        return 0;
                    }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                        var i = 0, len = list.length;
                        for (;i < len; i++) if (list[i] === elem) return i;
                        return -1;
                    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                        ID: new RegExp("^#(" + identifier + ")"),
                        CLASS: new RegExp("^\\.(" + identifier + ")"),
                        TAG: new RegExp("^(" + identifier + "|[*])"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
                        var high = "0x" + escape.slice(1) - 65536;
                        return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
                    }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                        if (asCodePoint) {
                            if ("\0" === ch) return "�";
                            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                        }
                        return "\\" + ch;
                    }, unloadHandler = function() {
                        setDocument();
                    }, inDisabledFieldset = addCombinator((function(elem) {
                        return true === elem.disabled && "fieldset" === elem.nodeName.toLowerCase();
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                        arr[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: arr.length ? function(target, els) {
                                pushNative.apply(target, slice.call(els));
                            } : function(target, els) {
                                var j = target.length, i = 0;
                                while (target[j++] = els[i++]) ;
                                target.length = j - 1;
                            }
                        };
                    }
                    function Sizzle(selector, context, results, seed) {
                        var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                        results = results || [];
                        if ("string" !== typeof selector || !selector || 1 !== nodeType && 9 !== nodeType && 11 !== nodeType) return results;
                        if (!seed) {
                            setDocument(context);
                            context = context || document;
                            if (documentIsHTML) {
                                if (11 !== nodeType && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                                    if (9 === nodeType) if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else return results; else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else if (match[2]) {
                                    push.apply(results, context.getElementsByTagName(selector));
                                    return results;
                                } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                    push.apply(results, context.getElementsByClassName(m));
                                    return results;
                                }
                                if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (1 !== nodeType || "object" !== context.nodeName.toLowerCase())) {
                                    newSelector = selector;
                                    newContext = context;
                                    if (1 === nodeType && (rdescend.test(selector) || rcombinators.test(selector))) {
                                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                        if (newContext !== context || !support.scope) if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape); else context.setAttribute("id", nid = expando);
                                        groups = tokenize(selector);
                                        i = groups.length;
                                        while (i--) groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                        newSelector = groups.join(",");
                                    }
                                    try {
                                        if (support.cssSupportsSelector && !CSS.supports("selector(:is(" + newSelector + "))")) throw new Error;
                                        push.apply(results, newContext.querySelectorAll(newSelector));
                                        return results;
                                    } catch (qsaError) {
                                        nonnativeSelectorCache(selector, true);
                                    } finally {
                                        if (nid === expando) context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                        return select(selector.replace(rtrim, "$1"), context, results, seed);
                    }
                    function createCache() {
                        var keys = [];
                        function cache(key, value) {
                            if (keys.push(key + " ") > Expr.cacheLength) delete cache[keys.shift()];
                            return cache[key + " "] = value;
                        }
                        return cache;
                    }
                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    function assert(fn) {
                        var el = document.createElement("fieldset");
                        try {
                            return !!fn(el);
                        } catch (e) {
                            return false;
                        } finally {
                            if (el.parentNode) el.parentNode.removeChild(el);
                            el = null;
                        }
                    }
                    function addHandle(attrs, handler) {
                        var arr = attrs.split("|"), i = arr.length;
                        while (i--) Expr.attrHandle[arr[i]] = handler;
                    }
                    function siblingCheck(a, b) {
                        var cur = b && a, diff = cur && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
                        if (diff) return diff;
                        if (cur) while (cur = cur.nextSibling) if (cur === b) return -1;
                        return a ? 1 : -1;
                    }
                    function createInputPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return "input" === name && elem.type === type;
                        };
                    }
                    function createButtonPseudo(type) {
                        return function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return ("input" === name || "button" === name) && elem.type === type;
                        };
                    }
                    function createDisabledPseudo(disabled) {
                        return function(elem) {
                            if ("form" in elem) {
                                if (elem.parentNode && false === elem.disabled) {
                                    if ("label" in elem) if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled; else return elem.disabled === disabled;
                                    return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                                }
                                return elem.disabled === disabled;
                            } else if ("label" in elem) return elem.disabled === disabled;
                            return false;
                        };
                    }
                    function createPositionalPseudo(fn) {
                        return markFunction((function(argument) {
                            argument = +argument;
                            return markFunction((function(seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                                while (i--) if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                            }));
                        }));
                    }
                    function testContext(context) {
                        return context && "undefined" !== typeof context.getElementsByTagName && context;
                    }
                    support = Sizzle.support = {};
                    isXML = Sizzle.isXML = function(elem) {
                        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
                        return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
                    };
                    setDocument = Sizzle.setDocument = function(node) {
                        var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                        if (doc == document || 9 !== doc.nodeType || !doc.documentElement) return document;
                        document = doc;
                        docElem = document.documentElement;
                        documentIsHTML = !isXML(document);
                        if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false); else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
                        support.scope = assert((function(el) {
                            docElem.appendChild(el).appendChild(document.createElement("div"));
                            return "undefined" !== typeof el.querySelectorAll && !el.querySelectorAll(":scope fieldset div").length;
                        }));
                        support.cssSupportsSelector = assert((function() {
                            return CSS.supports("selector(*)") && document.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))");
                        }));
                        support.attributes = assert((function(el) {
                            el.className = "i";
                            return !el.getAttribute("className");
                        }));
                        support.getElementsByTagName = assert((function(el) {
                            el.appendChild(document.createComment(""));
                            return !el.getElementsByTagName("*").length;
                        }));
                        support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                        support.getById = assert((function(el) {
                            docElem.appendChild(el).id = expando;
                            return !document.getElementsByName || !document.getElementsByName(expando).length;
                        }));
                        if (support.getById) {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                            Expr.find["ID"] = function(id, context) {
                                if ("undefined" !== typeof context.getElementById && documentIsHTML) {
                                    var elem = context.getElementById(id);
                                    return elem ? [ elem ] : [];
                                }
                            };
                        } else {
                            Expr.filter["ID"] = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    var node = "undefined" !== typeof elem.getAttributeNode && elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                            Expr.find["ID"] = function(id, context) {
                                if ("undefined" !== typeof context.getElementById && documentIsHTML) {
                                    var node, i, elems, elem = context.getElementById(id);
                                    if (elem) {
                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) return [ elem ];
                                        elems = context.getElementsByName(id);
                                        i = 0;
                                        while (elem = elems[i++]) {
                                            node = elem.getAttributeNode("id");
                                            if (node && node.value === id) return [ elem ];
                                        }
                                    }
                                    return [];
                                }
                            };
                        }
                        Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                            if ("undefined" !== typeof context.getElementsByTagName) return context.getElementsByTagName(tag); else if (support.qsa) return context.querySelectorAll(tag);
                        } : function(tag, context) {
                            var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                            if ("*" === tag) {
                                while (elem = results[i++]) if (1 === elem.nodeType) tmp.push(elem);
                                return tmp;
                            }
                            return results;
                        };
                        Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                            if ("undefined" !== typeof context.getElementsByClassName && documentIsHTML) return context.getElementsByClassName(className);
                        };
                        rbuggyMatches = [];
                        rbuggyQSA = [];
                        if (support.qsa = rnative.test(document.querySelectorAll)) {
                            assert((function(el) {
                                var input;
                                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                                if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                                if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                                if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                                input = document.createElement("input");
                                input.setAttribute("name", "");
                                el.appendChild(input);
                                if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                                if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                                if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                                el.querySelectorAll("\\\f");
                                rbuggyQSA.push("[\\r\\n\\f]");
                            }));
                            assert((function(el) {
                                el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                                var input = document.createElement("input");
                                input.setAttribute("type", "hidden");
                                el.appendChild(input).setAttribute("name", "D");
                                if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                                if (2 !== el.querySelectorAll(":enabled").length) rbuggyQSA.push(":enabled", ":disabled");
                                docElem.appendChild(el).disabled = true;
                                if (2 !== el.querySelectorAll(":disabled").length) rbuggyQSA.push(":enabled", ":disabled");
                                el.querySelectorAll("*,:x");
                                rbuggyQSA.push(",.*:");
                            }));
                        }
                        if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) assert((function(el) {
                            support.disconnectedMatch = matches.call(el, "*");
                            matches.call(el, "[s!='']:x");
                            rbuggyMatches.push("!=", pseudos);
                        }));
                        if (!support.cssSupportsSelector) rbuggyQSA.push(":has");
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                        hasCompare = rnative.test(docElem.compareDocumentPosition);
                        contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                            var adown = 9 === a.nodeType && a.documentElement || a, bup = b && b.parentNode;
                            return a === bup || !!(bup && 1 === bup.nodeType && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
                        } : function(a, b) {
                            if (b) while (b = b.parentNode) if (b === a) return true;
                            return false;
                        };
                        sortOrder = hasCompare ? function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) return compare;
                            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                            if (1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                                if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                                if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                                return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                            }
                            return 4 & compare ? -1 : 1;
                        } : function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                            if (!aup || !bup) return a == document ? -1 : b == document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; else if (aup === bup) return siblingCheck(a, b);
                            cur = a;
                            while (cur = cur.parentNode) ap.unshift(cur);
                            cur = b;
                            while (cur = cur.parentNode) bp.unshift(cur);
                            while (ap[i] === bp[i]) i++;
                            return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0;
                        };
                        return document;
                    };
                    Sizzle.matches = function(expr, elements) {
                        return Sizzle(expr, null, null, elements);
                    };
                    Sizzle.matchesSelector = function(elem, expr) {
                        setDocument(elem);
                        if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret;
                        } catch (e) {
                            nonnativeSelectorCache(expr, true);
                        }
                        return Sizzle(expr, document, null, [ elem ]).length > 0;
                    };
                    Sizzle.contains = function(context, elem) {
                        if ((context.ownerDocument || context) != document) setDocument(context);
                        return contains(context, elem);
                    };
                    Sizzle.attr = function(elem, name) {
                        if ((elem.ownerDocument || elem) != document) setDocument(elem);
                        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                        return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    };
                    Sizzle.escape = function(sel) {
                        return (sel + "").replace(rcssescape, fcssescape);
                    };
                    Sizzle.error = function(msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    Sizzle.uniqueSort = function(results) {
                        var elem, duplicates = [], j = 0, i = 0;
                        hasDuplicate = !support.detectDuplicates;
                        sortInput = !support.sortStable && results.slice(0);
                        results.sort(sortOrder);
                        if (hasDuplicate) {
                            while (elem = results[i++]) if (elem === results[i]) j = duplicates.push(i);
                            while (j--) results.splice(duplicates[j], 1);
                        }
                        sortInput = null;
                        return results;
                    };
                    getText = Sizzle.getText = function(elem) {
                        var node, ret = "", i = 0, nodeType = elem.nodeType;
                        if (!nodeType) while (node = elem[i++]) ret += getText(node); else if (1 === nodeType || 9 === nodeType || 11 === nodeType) if ("string" === typeof elem.textContent) return elem.textContent; else for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem); else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
                        return ret;
                    };
                    Expr = Sizzle.selectors = {
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(match) {
                                match[1] = match[1].replace(runescape, funescape);
                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                                if ("~=" === match[2]) match[3] = " " + match[3] + " ";
                                return match.slice(0, 4);
                            },
                            CHILD: function(match) {
                                match[1] = match[1].toLowerCase();
                                if ("nth" === match[1].slice(0, 3)) {
                                    if (!match[3]) Sizzle.error(match[0]);
                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3]));
                                    match[5] = +(match[7] + match[8] || "odd" === match[3]);
                                } else if (match[3]) Sizzle.error(match[0]);
                                return match;
                            },
                            PSEUDO: function(match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr["CHILD"].test(match[0])) return null;
                                if (match[3]) match[2] = match[4] || match[5] || ""; else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            TAG: function(nodeNameSelector) {
                                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return "*" === nodeNameSelector ? function() {
                                    return true;
                                } : function(elem) {
                                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                                };
                            },
                            CLASS: function(className) {
                                var pattern = classCache[className + " "];
                                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, (function(elem) {
                                    return pattern.test("string" === typeof elem.className && elem.className || "undefined" !== typeof elem.getAttribute && elem.getAttribute("class") || "");
                                }));
                            },
                            ATTR: function(name, operator, check) {
                                return function(elem) {
                                    var result = Sizzle.attr(elem, name);
                                    if (null == result) return "!=" === operator;
                                    if (!operator) return true;
                                    result += "";
                                    return "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : "|=" === operator ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                                };
                            },
                            CHILD: function(type, what, _argument, first, last) {
                                var simple = "nth" !== type.slice(0, 3), forward = "last" !== type.slice(-4), ofType = "of-type" === what;
                                return 1 === first && 0 === last ? function(elem) {
                                    return !!elem.parentNode;
                                } : function(elem, _context, xml) {
                                    var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                                    if (parent) {
                                        if (simple) {
                                            while (dir) {
                                                node = elem;
                                                while (node = node[dir]) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return false;
                                                start = dir = "only" === type && !start && "nextSibling";
                                            }
                                            return true;
                                        }
                                        start = [ forward ? parent.firstChild : parent.lastChild ];
                                        if (forward && useCache) {
                                            node = parent;
                                            outerCache = node[expando] || (node[expando] = {});
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex && cache[2];
                                            node = nodeIndex && parent.childNodes[nodeIndex];
                                            while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (1 === node.nodeType && ++diff && node === elem) {
                                                uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                                break;
                                            }
                                        } else {
                                            if (useCache) {
                                                node = elem;
                                                outerCache = node[expando] || (node[expando] = {});
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                cache = uniqueCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex;
                                            }
                                            if (false === diff) while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                    uniqueCache[type] = [ dirruns, diff ];
                                                }
                                                if (node === elem) break;
                                            }
                                        }
                                        diff -= last;
                                        return diff === first || diff % first === 0 && diff / first >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(pseudo, argument) {
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                                if (fn[expando]) return fn(argument);
                                if (fn.length > 1) {
                                    args = [ pseudo, pseudo, "", argument ];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction((function(seed, matches) {
                                        var idx, matched = fn(seed, argument), i = matched.length;
                                        while (i--) {
                                            idx = indexOf(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    })) : function(elem) {
                                        return fn(elem, 0, args);
                                    };
                                }
                                return fn;
                            }
                        },
                        pseudos: {
                            not: markFunction((function(selector) {
                                var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                                return matcher[expando] ? markFunction((function(seed, matches, _context, xml) {
                                    var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                    while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                                })) : function(elem, _context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results);
                                    input[0] = null;
                                    return !results.pop();
                                };
                            })),
                            has: markFunction((function(selector) {
                                return function(elem) {
                                    return Sizzle(selector, elem).length > 0;
                                };
                            })),
                            contains: markFunction((function(text) {
                                text = text.replace(runescape, funescape);
                                return function(elem) {
                                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                                };
                            })),
                            lang: markFunction((function(lang) {
                                if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function(elem) {
                                    var elemLang;
                                    do {
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || 0 === elemLang.indexOf(lang + "-");
                                        }
                                    } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                    return false;
                                };
                            })),
                            target: function(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            root: function(elem) {
                                return elem === docElem;
                            },
                            focus: function(elem) {
                                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                            },
                            enabled: createDisabledPseudo(false),
                            disabled: createDisabledPseudo(true),
                            checked: function(elem) {
                                var nodeName = elem.nodeName.toLowerCase();
                                return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected;
                            },
                            selected: function(elem) {
                                if (elem.parentNode) elem.parentNode.selectedIndex;
                                return true === elem.selected;
                            },
                            empty: function(elem) {
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return false;
                                return true;
                            },
                            parent: function(elem) {
                                return !Expr.pseudos["empty"](elem);
                            },
                            header: function(elem) {
                                return rheader.test(elem.nodeName);
                            },
                            input: function(elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            button: function(elem) {
                                var name = elem.nodeName.toLowerCase();
                                return "input" === name && "button" === elem.type || "button" === name;
                            },
                            text: function(elem) {
                                var attr;
                                return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase());
                            },
                            first: createPositionalPseudo((function() {
                                return [ 0 ];
                            })),
                            last: createPositionalPseudo((function(_matchIndexes, length) {
                                return [ length - 1 ];
                            })),
                            eq: createPositionalPseudo((function(_matchIndexes, length, argument) {
                                return [ argument < 0 ? argument + length : argument ];
                            })),
                            even: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 0;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            odd: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 1;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            lt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument > length ? length : argument;
                                for (;--i >= 0; ) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            gt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (;++i < length; ) matchIndexes.push(i);
                                return matchIndexes;
                            }))
                        }
                    };
                    Expr.pseudos["nth"] = Expr.pseudos["eq"];
                    for (i in {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    }) Expr.pseudos[i] = createInputPseudo(i);
                    for (i in {
                        submit: true,
                        reset: true
                    }) Expr.pseudos[i] = createButtonPseudo(i);
                    function setFilters() {}
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters;
                    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) return parseOnly ? 0 : cached.slice(0);
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while (soFar) {
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) soFar = soFar.slice(match[0].length) || soFar;
                                groups.push(tokens = []);
                            }
                            matched = false;
                            if (match = rcombinators.exec(soFar)) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: match[0].replace(rtrim, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            for (type in Expr.filter) if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            if (!matched) break;
                        }
                        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
                    };
                    function toSelector(tokens) {
                        var i = 0, len = tokens.length, selector = "";
                        for (;i < len; i++) selector += tokens[i].value;
                        return selector;
                    }
                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && "parentNode" === key, doneName = done++;
                        return combinator.first ? function(elem, context, xml) {
                            while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
                            return false;
                        } : function(elem, context, xml) {
                            var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
                            if (xml) {
                                while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) if (matcher(elem, context, xml)) return true;
                            } else while (elem = elem[dir]) if (1 === elem.nodeType || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem; else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2]; else {
                                    uniqueCache[key] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) return true;
                                }
                            }
                            return false;
                        };
                    }
                    function elementMatcher(matchers) {
                        return matchers.length > 1 ? function(elem, context, xml) {
                            var i = matchers.length;
                            while (i--) if (!matchers[i](elem, context, xml)) return false;
                            return true;
                        } : matchers[0];
                    }
                    function multipleContexts(selector, contexts, results) {
                        var i = 0, len = contexts.length;
                        for (;i < len; i++) Sizzle(selector, contexts[i], results);
                        return results;
                    }
                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map;
                        for (;i < len; i++) if (elem = unmatched[i]) if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) map.push(i);
                        }
                        return newUnmatched;
                    }
                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
                        if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
                        return markFunction((function(seed, results, context, xml) {
                            var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                            if (matcher) matcher(matcherIn, matcherOut, context, xml);
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);
                                i = temp.length;
                                while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) if (elem = matcherOut[i]) temp.push(matcherIn[i] = elem);
                                        postFinder(null, matcherOut = [], temp, xml);
                                    }
                                    i = matcherOut.length;
                                    while (i--) if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                                }
                            } else {
                                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                                if (postFinder) postFinder(null, results, matcherOut, xml); else push.apply(results, matcherOut);
                            }
                        }));
                    }
                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator((function(elem) {
                            return elem === checkContext;
                        }), implicitRelative, true), matchAnyContext = addCombinator((function(elem) {
                            return indexOf(checkContext, elem) > -1;
                        }), implicitRelative, true), matchers = [ function(elem, context, xml) {
                            var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                            checkContext = null;
                            return ret;
                        } ];
                        for (;i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            if (matcher[expando]) {
                                j = ++i;
                                for (;j < len; j++) if (Expr.relative[tokens[j].type]) break;
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: " " === tokens[i - 2].type ? "*" : ""
                                })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                            }
                            matchers.push(matcher);
                        }
                        return elementMatcher(matchers);
                    }
                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length;
                            if (outermost) outermostContext = context == document || context || outermost;
                            for (;i !== len && null != (elem = elems[i]); i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    if (!context && elem.ownerDocument != document) {
                                        setDocument(elem);
                                        xml = !documentIsHTML;
                                    }
                                    while (matcher = elementMatchers[j++]) if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                    if (outermost) dirruns = dirrunsUnique;
                                }
                                if (bySet) {
                                    if (elem = !matcher && elem) matchedCount--;
                                    if (seed) unmatched.push(elem);
                                }
                            }
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0) while (i--) if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                                    setMatched = condense(setMatched);
                                }
                                push.apply(results, setMatched);
                                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                        return bySet ? markFunction(superMatcher) : superMatcher;
                    }
                    compile = Sizzle.compile = function(selector, match) {
                        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                        if (!cached) {
                            if (!match) match = tokenize(selector);
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) setMatchers.push(cached); else elementMatchers.push(cached);
                            }
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                            cached.selector = selector;
                        }
                        return cached;
                    };
                    select = Sizzle.select = function(selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = "function" === typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                        results = results || [];
                        if (1 === match.length) {
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && "ID" === (token = tokens[0]).type && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) return results; else if (compiled) context = context.parentNode;
                                selector = selector.slice(tokens.shift().value.length);
                            }
                            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];
                                if (Expr.relative[type = token.type]) break;
                                if (find = Expr.find[type]) if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, seed);
                                        return results;
                                    }
                                    break;
                                }
                            }
                        }
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    };
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                    support.detectDuplicates = !!hasDuplicate;
                    setDocument();
                    support.sortDetached = assert((function(el) {
                        return 1 & el.compareDocumentPosition(document.createElement("fieldset"));
                    }));
                    if (!assert((function(el) {
                        el.innerHTML = "<a href='#'></a>";
                        return "#" === el.firstChild.getAttribute("href");
                    }))) addHandle("type|href|height|width", (function(elem, name, isXML) {
                        if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
                    }));
                    if (!support.attributes || !assert((function(el) {
                        el.innerHTML = "<input/>";
                        el.firstChild.setAttribute("value", "");
                        return "" === el.firstChild.getAttribute("value");
                    }))) addHandle("value", (function(elem, _name, isXML) {
                        if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue;
                    }));
                    if (!assert((function(el) {
                        return null == el.getAttribute("disabled");
                    }))) addHandle(booleans, (function(elem, name, isXML) {
                        var val;
                        if (!isXML) return true === elem[name] ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                    }));
                    return Sizzle;
                }(window);
                jQuery.find = Sizzle;
                jQuery.expr = Sizzle.selectors;
                jQuery.expr[":"] = jQuery.expr.pseudos;
                jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
                jQuery.text = Sizzle.getText;
                jQuery.isXMLDoc = Sizzle.isXML;
                jQuery.contains = Sizzle.contains;
                jQuery.escapeSelector = Sizzle.escape;
                var dir = function(elem, dir, until) {
                    var matched = [], truncate = void 0 !== until;
                    while ((elem = elem[dir]) && 9 !== elem.nodeType) if (1 === elem.nodeType) {
                        if (truncate && jQuery(elem).is(until)) break;
                        matched.push(elem);
                    }
                    return matched;
                };
                var siblings = function(n, elem) {
                    var matched = [];
                    for (;n; n = n.nextSibling) if (1 === n.nodeType && n !== elem) matched.push(n);
                    return matched;
                };
                var rneedsContext = jQuery.expr.match.needsContext;
                function nodeName(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                }
                var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function winnow(elements, qualifier, not) {
                    if (isFunction(qualifier)) return jQuery.grep(elements, (function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not;
                    }));
                    if (qualifier.nodeType) return jQuery.grep(elements, (function(elem) {
                        return elem === qualifier !== not;
                    }));
                    if ("string" !== typeof qualifier) return jQuery.grep(elements, (function(elem) {
                        return indexOf.call(qualifier, elem) > -1 !== not;
                    }));
                    return jQuery.filter(qualifier, elements, not);
                }
                jQuery.filter = function(expr, elems, not) {
                    var elem = elems[0];
                    if (not) expr = ":not(" + expr + ")";
                    if (1 === elems.length && 1 === elem.nodeType) return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
                    return jQuery.find.matches(expr, jQuery.grep(elems, (function(elem) {
                        return 1 === elem.nodeType;
                    })));
                };
                jQuery.fn.extend({
                    find: function(selector) {
                        var i, ret, len = this.length, self = this;
                        if ("string" !== typeof selector) return this.pushStack(jQuery(selector).filter((function() {
                            for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return true;
                        })));
                        ret = this.pushStack([]);
                        for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                        return len > 1 ? jQuery.uniqueSort(ret) : ret;
                    },
                    filter: function(selector) {
                        return this.pushStack(winnow(this, selector || [], false));
                    },
                    not: function(selector) {
                        return this.pushStack(winnow(this, selector || [], true));
                    },
                    is: function(selector) {
                        return !!winnow(this, "string" === typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                    }
                });
                var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
                    var match, elem;
                    if (!selector) return this;
                    root = root || rootjQuery;
                    if ("string" === typeof selector) {
                        if ("<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3) match = [ null, selector, null ]; else match = rquickExpr.exec(selector);
                        if (match && (match[1] || !context)) if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) if (isFunction(this[match])) this[match](context[match]); else this.attr(match, context[match]);
                            return this;
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem) {
                                this[0] = elem;
                                this.length = 1;
                            }
                            return this;
                        } else if (!context || context.jquery) return (context || root).find(selector); else return this.constructor(context).find(selector);
                    } else if (selector.nodeType) {
                        this[0] = selector;
                        this.length = 1;
                        return this;
                    } else if (isFunction(selector)) return void 0 !== root.ready ? root.ready(selector) : selector(jQuery);
                    return jQuery.makeArray(selector, this);
                };
                init.prototype = jQuery.fn;
                rootjQuery = jQuery(document);
                var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                jQuery.fn.extend({
                    has: function(target) {
                        var targets = jQuery(target, this), l = targets.length;
                        return this.filter((function() {
                            var i = 0;
                            for (;i < l; i++) if (jQuery.contains(this, targets[i])) return true;
                        }));
                    },
                    closest: function(selectors, context) {
                        var cur, i = 0, l = this.length, matched = [], targets = "string" !== typeof selectors && jQuery(selectors);
                        if (!rneedsContext.test(selectors)) for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                    },
                    index: function(elem) {
                        if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        if ("string" === typeof elem) return indexOf.call(jQuery(elem), this[0]);
                        return indexOf.call(this, elem.jquery ? elem[0] : elem);
                    },
                    add: function(selector, context) {
                        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                    },
                    addBack: function(selector) {
                        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
                    }
                });
                function sibling(cur, dir) {
                    while ((cur = cur[dir]) && 1 !== cur.nodeType) ;
                    return cur;
                }
                jQuery.each({
                    parent: function(elem) {
                        var parent = elem.parentNode;
                        return parent && 11 !== parent.nodeType ? parent : null;
                    },
                    parents: function(elem) {
                        return dir(elem, "parentNode");
                    },
                    parentsUntil: function(elem, _i, until) {
                        return dir(elem, "parentNode", until);
                    },
                    next: function(elem) {
                        return sibling(elem, "nextSibling");
                    },
                    prev: function(elem) {
                        return sibling(elem, "previousSibling");
                    },
                    nextAll: function(elem) {
                        return dir(elem, "nextSibling");
                    },
                    prevAll: function(elem) {
                        return dir(elem, "previousSibling");
                    },
                    nextUntil: function(elem, _i, until) {
                        return dir(elem, "nextSibling", until);
                    },
                    prevUntil: function(elem, _i, until) {
                        return dir(elem, "previousSibling", until);
                    },
                    siblings: function(elem) {
                        return siblings((elem.parentNode || {}).firstChild, elem);
                    },
                    children: function(elem) {
                        return siblings(elem.firstChild);
                    },
                    contents: function(elem) {
                        if (null != elem.contentDocument && getProto(elem.contentDocument)) return elem.contentDocument;
                        if (nodeName(elem, "template")) elem = elem.content || elem;
                        return jQuery.merge([], elem.childNodes);
                    }
                }, (function(name, fn) {
                    jQuery.fn[name] = function(until, selector) {
                        var matched = jQuery.map(this, fn, until);
                        if ("Until" !== name.slice(-5)) selector = until;
                        if (selector && "string" === typeof selector) matched = jQuery.filter(selector, matched);
                        if (this.length > 1) {
                            if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                            if (rparentsprev.test(name)) matched.reverse();
                        }
                        return this.pushStack(matched);
                    };
                }));
                var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
                function createOptions(options) {
                    var object = {};
                    jQuery.each(options.match(rnothtmlwhite) || [], (function(_, flag) {
                        object[flag] = true;
                    }));
                    return object;
                }
                jQuery.Callbacks = function(options) {
                    options = "string" === typeof options ? createOptions(options) : jQuery.extend({}, options);
                    var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                        locked = locked || options.once;
                        fired = firing = true;
                        for (;queue.length; firingIndex = -1) {
                            memory = queue.shift();
                            while (++firingIndex < list.length) if (false === list[firingIndex].apply(memory[0], memory[1]) && options.stopOnFalse) {
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                        if (!options.memory) memory = false;
                        firing = false;
                        if (locked) if (memory) list = []; else list = "";
                    }, self = {
                        add: function() {
                            if (list) {
                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }
                                (function add(args) {
                                    jQuery.each(args, (function(_, arg) {
                                        if (isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) list.push(arg);
                                        } else if (arg && arg.length && "string" !== toType(arg)) add(arg);
                                    }));
                                })(arguments);
                                if (memory && !firing) fire();
                            }
                            return this;
                        },
                        remove: function() {
                            jQuery.each(arguments, (function(_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);
                                    if (index <= firingIndex) firingIndex--;
                                }
                            }));
                            return this;
                        },
                        has: function(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                        },
                        empty: function() {
                            if (list) list = [];
                            return this;
                        },
                        disable: function() {
                            locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function() {
                            return !list;
                        },
                        lock: function() {
                            locked = queue = [];
                            if (!memory && !firing) list = memory = "";
                            return this;
                        },
                        locked: function() {
                            return !!locked;
                        },
                        fireWith: function(context, args) {
                            if (!locked) {
                                args = args || [];
                                args = [ context, args.slice ? args.slice() : args ];
                                queue.push(args);
                                if (!firing) fire();
                            }
                            return this;
                        },
                        fire: function() {
                            self.fireWith(this, arguments);
                            return this;
                        },
                        fired: function() {
                            return !!fired;
                        }
                    };
                    return self;
                };
                function Identity(v) {
                    return v;
                }
                function Thrower(ex) {
                    throw ex;
                }
                function adoptValue(value, resolve, reject, noValue) {
                    var method;
                    try {
                        if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject); else if (value && isFunction(method = value.then)) method.call(value, resolve, reject); else resolve.apply(void 0, [ value ].slice(noValue));
                    } catch (value) {
                        reject.apply(void 0, [ value ]);
                    }
                }
                jQuery.extend({
                    Deferred: function(func) {
                        var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            catch: function(fn) {
                                return promise.then(null, fn);
                            },
                            pipe: function() {
                                var fns = arguments;
                                return jQuery.Deferred((function(newDefer) {
                                    jQuery.each(tuples, (function(_i, tuple) {
                                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                        deferred[tuple[1]]((function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject); else newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                        }));
                                    }));
                                    fns = null;
                                })).promise();
                            },
                            then: function(onFulfilled, onRejected, onProgress) {
                                var maxDepth = 0;
                                function resolve(depth, deferred, handler, special) {
                                    return function() {
                                        var that = this, args = arguments, mightThrow = function() {
                                            var returned, then;
                                            if (depth < maxDepth) return;
                                            returned = handler.apply(that, args);
                                            if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                            then = returned && ("object" === typeof returned || "function" === typeof returned) && returned.then;
                                            if (isFunction(then)) if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); else {
                                                maxDepth++;
                                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                            } else {
                                                if (handler !== Identity) {
                                                    that = void 0;
                                                    args = [ returned ];
                                                }
                                                (special || deferred.resolveWith)(that, args);
                                            }
                                        }, process = special ? mightThrow : function() {
                                            try {
                                                mightThrow();
                                            } catch (e) {
                                                if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                                if (depth + 1 >= maxDepth) {
                                                    if (handler !== Thrower) {
                                                        that = void 0;
                                                        args = [ e ];
                                                    }
                                                    deferred.rejectWith(that, args);
                                                }
                                            }
                                        };
                                        if (depth) process(); else {
                                            if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                            window.setTimeout(process);
                                        }
                                    };
                                }
                                return jQuery.Deferred((function(newDefer) {
                                    tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                                    tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                                    tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                                })).promise();
                            },
                            promise: function(obj) {
                                return null != obj ? jQuery.extend(obj, promise) : promise;
                            }
                        }, deferred = {};
                        jQuery.each(tuples, (function(i, tuple) {
                            var list = tuple[2], stateString = tuple[5];
                            promise[tuple[1]] = list.add;
                            if (stateString) list.add((function() {
                                state = stateString;
                            }), tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
                            list.add(tuple[3].fire);
                            deferred[tuple[0]] = function() {
                                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                                return this;
                            };
                            deferred[tuple[0] + "With"] = list.fireWith;
                        }));
                        promise.promise(deferred);
                        if (func) func.call(deferred, deferred);
                        return deferred;
                    },
                    when: function(singleValue) {
                        var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i) {
                            return function(value) {
                                resolveContexts[i] = this;
                                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                            };
                        };
                        if (remaining <= 1) {
                            adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                            if ("pending" === primary.state() || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
                        }
                        while (i--) adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                        return primary.promise();
                    }
                });
                var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                jQuery.Deferred.exceptionHook = function(error, stack) {
                    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
                };
                jQuery.readyException = function(error) {
                    window.setTimeout((function() {
                        throw error;
                    }));
                };
                var readyList = jQuery.Deferred();
                jQuery.fn.ready = function(fn) {
                    readyList.then(fn).catch((function(error) {
                        jQuery.readyException(error);
                    }));
                    return this;
                };
                jQuery.extend({
                    isReady: false,
                    readyWait: 1,
                    ready: function(wait) {
                        if (true === wait ? --jQuery.readyWait : jQuery.isReady) return;
                        jQuery.isReady = true;
                        if (true !== wait && --jQuery.readyWait > 0) return;
                        readyList.resolveWith(document, [ jQuery ]);
                    }
                });
                jQuery.ready.then = readyList.then;
                function completed() {
                    document.removeEventListener("DOMContentLoaded", completed);
                    window.removeEventListener("load", completed);
                    jQuery.ready();
                }
                if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) window.setTimeout(jQuery.ready); else {
                    document.addEventListener("DOMContentLoaded", completed);
                    window.addEventListener("load", completed);
                }
                var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0, len = elems.length, bulk = null == key;
                    if ("object" === toType(key)) {
                        chainable = true;
                        for (i in key) access(elems, fn, i, key[i], true, emptyGet, raw);
                    } else if (void 0 !== value) {
                        chainable = true;
                        if (!isFunction(value)) raw = true;
                        if (bulk) if (raw) {
                            fn.call(elems, value);
                            fn = null;
                        } else {
                            bulk = fn;
                            fn = function(elem, _key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                        if (fn) for (;i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                    if (chainable) return elems;
                    if (bulk) return fn.call(elems);
                    return len ? fn(elems[0], key) : emptyGet;
                };
                var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
                function fcamelCase(_all, letter) {
                    return letter.toUpperCase();
                }
                function camelCase(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                }
                var acceptData = function(owner) {
                    return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
                };
                function Data() {
                    this.expando = jQuery.expando + Data.uid++;
                }
                Data.uid = 1;
                Data.prototype = {
                    cache: function(owner) {
                        var value = owner[this.expando];
                        if (!value) {
                            value = {};
                            if (acceptData(owner)) if (owner.nodeType) owner[this.expando] = value; else Object.defineProperty(owner, this.expando, {
                                value,
                                configurable: true
                            });
                        }
                        return value;
                    },
                    set: function(owner, data, value) {
                        var prop, cache = this.cache(owner);
                        if ("string" === typeof data) cache[camelCase(data)] = value; else for (prop in data) cache[camelCase(prop)] = data[prop];
                        return cache;
                    },
                    get: function(owner, key) {
                        return void 0 === key ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
                    },
                    access: function(owner, key, value) {
                        if (void 0 === key || key && "string" === typeof key && void 0 === value) return this.get(owner, key);
                        this.set(owner, key, value);
                        return void 0 !== value ? value : key;
                    },
                    remove: function(owner, key) {
                        var i, cache = owner[this.expando];
                        if (void 0 === cache) return;
                        if (void 0 !== key) {
                            if (Array.isArray(key)) key = key.map(camelCase); else {
                                key = camelCase(key);
                                key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
                            }
                            i = key.length;
                            while (i--) delete cache[key[i]];
                        }
                        if (void 0 === key || jQuery.isEmptyObject(cache)) if (owner.nodeType) owner[this.expando] = void 0; else delete owner[this.expando];
                    },
                    hasData: function(owner) {
                        var cache = owner[this.expando];
                        return void 0 !== cache && !jQuery.isEmptyObject(cache);
                    }
                };
                var dataPriv = new Data;
                var dataUser = new Data;
                var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
                function getData(data) {
                    if ("true" === data) return true;
                    if ("false" === data) return false;
                    if ("null" === data) return null;
                    if (data === +data + "") return +data;
                    if (rbrace.test(data)) return JSON.parse(data);
                    return data;
                }
                function dataAttr(elem, key, data) {
                    var name;
                    if (void 0 === data && 1 === elem.nodeType) {
                        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                        data = elem.getAttribute(name);
                        if ("string" === typeof data) {
                            try {
                                data = getData(data);
                            } catch (e) {}
                            dataUser.set(elem, key, data);
                        } else data = void 0;
                    }
                    return data;
                }
                jQuery.extend({
                    hasData: function(elem) {
                        return dataUser.hasData(elem) || dataPriv.hasData(elem);
                    },
                    data: function(elem, name, data) {
                        return dataUser.access(elem, name, data);
                    },
                    removeData: function(elem, name) {
                        dataUser.remove(elem, name);
                    },
                    _data: function(elem, name, data) {
                        return dataPriv.access(elem, name, data);
                    },
                    _removeData: function(elem, name) {
                        dataPriv.remove(elem, name);
                    }
                });
                jQuery.fn.extend({
                    data: function(key, value) {
                        var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                        if (void 0 === key) {
                            if (this.length) {
                                data = dataUser.get(elem);
                                if (1 === elem.nodeType && !dataPriv.get(elem, "hasDataAttrs")) {
                                    i = attrs.length;
                                    while (i--) if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (0 === name.indexOf("data-")) {
                                            name = camelCase(name.slice(5));
                                            dataAttr(elem, name, data[name]);
                                        }
                                    }
                                    dataPriv.set(elem, "hasDataAttrs", true);
                                }
                            }
                            return data;
                        }
                        if ("object" === typeof key) return this.each((function() {
                            dataUser.set(this, key);
                        }));
                        return access(this, (function(value) {
                            var data;
                            if (elem && void 0 === value) {
                                data = dataUser.get(elem, key);
                                if (void 0 !== data) return data;
                                data = dataAttr(elem, key);
                                if (void 0 !== data) return data;
                                return;
                            }
                            this.each((function() {
                                dataUser.set(this, key, value);
                            }));
                        }), null, value, arguments.length > 1, null, true);
                    },
                    removeData: function(key) {
                        return this.each((function() {
                            dataUser.remove(this, key);
                        }));
                    }
                });
                jQuery.extend({
                    queue: function(elem, type, data) {
                        var queue;
                        if (elem) {
                            type = (type || "fx") + "queue";
                            queue = dataPriv.get(elem, type);
                            if (data) if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data)); else queue.push(data);
                            return queue || [];
                        }
                    },
                    dequeue: function(elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                            jQuery.dequeue(elem, type);
                        };
                        if ("inprogress" === fn) {
                            fn = queue.shift();
                            startLength--;
                        }
                        if (fn) {
                            if ("fx" === type) queue.unshift("inprogress");
                            delete hooks.stop;
                            fn.call(elem, next, hooks);
                        }
                        if (!startLength && hooks) hooks.empty.fire();
                    },
                    _queueHooks: function(elem, type) {
                        var key = type + "queueHooks";
                        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                            empty: jQuery.Callbacks("once memory").add((function() {
                                dataPriv.remove(elem, [ type + "queue", key ]);
                            }))
                        });
                    }
                });
                jQuery.fn.extend({
                    queue: function(type, data) {
                        var setter = 2;
                        if ("string" !== typeof type) {
                            data = type;
                            type = "fx";
                            setter--;
                        }
                        if (arguments.length < setter) return jQuery.queue(this[0], type);
                        return void 0 === data ? this : this.each((function() {
                            var queue = jQuery.queue(this, type, data);
                            jQuery._queueHooks(this, type);
                            if ("fx" === type && "inprogress" !== queue[0]) jQuery.dequeue(this, type);
                        }));
                    },
                    dequeue: function(type) {
                        return this.each((function() {
                            jQuery.dequeue(this, type);
                        }));
                    },
                    clearQueue: function(type) {
                        return this.queue(type || "fx", []);
                    },
                    promise: function(type, obj) {
                        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                            if (!--count) defer.resolveWith(elements, [ elements ]);
                        };
                        if ("string" !== typeof type) {
                            obj = type;
                            type = void 0;
                        }
                        type = type || "fx";
                        while (i--) {
                            tmp = dataPriv.get(elements[i], type + "queueHooks");
                            if (tmp && tmp.empty) {
                                count++;
                                tmp.empty.add(resolve);
                            }
                        }
                        resolve();
                        return defer.promise(obj);
                    }
                });
                var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
                var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
                var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
                var documentElement = document.documentElement;
                var isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                }, composed = {
                    composed: true
                };
                if (documentElement.getRootNode) isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
                };
                var isHiddenWithinTree = function(elem, el) {
                    elem = el || elem;
                    return "none" === elem.style.display || "" === elem.style.display && isAttached(elem) && "none" === jQuery.css(elem, "display");
                };
                function adjustCSS(elem, prop, valueParts, tween) {
                    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                        return tween.cur();
                    } : function() {
                        return jQuery.css(elem, prop, "");
                    }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || "px" !== unit && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                    if (initialInUnit && initialInUnit[3] !== unit) {
                        initial /= 2;
                        unit = unit || initialInUnit[3];
                        initialInUnit = +initial || 1;
                        while (maxIterations--) {
                            jQuery.style(elem, prop, initialInUnit + unit);
                            if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) maxIterations = 0;
                            initialInUnit /= scale;
                        }
                        initialInUnit *= 2;
                        jQuery.style(elem, prop, initialInUnit + unit);
                        valueParts = valueParts || [];
                    }
                    if (valueParts) {
                        initialInUnit = +initialInUnit || +initial || 0;
                        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                        if (tween) {
                            tween.unit = unit;
                            tween.start = initialInUnit;
                            tween.end = adjusted;
                        }
                    }
                    return adjusted;
                }
                var defaultDisplayMap = {};
                function getDefaultDisplay(elem) {
                    var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                    if (display) return display;
                    temp = doc.body.appendChild(doc.createElement(nodeName));
                    display = jQuery.css(temp, "display");
                    temp.parentNode.removeChild(temp);
                    if ("none" === display) display = "block";
                    defaultDisplayMap[nodeName] = display;
                    return display;
                }
                function showHide(elements, show) {
                    var display, elem, values = [], index = 0, length = elements.length;
                    for (;index < length; index++) {
                        elem = elements[index];
                        if (!elem.style) continue;
                        display = elem.style.display;
                        if (show) {
                            if ("none" === display) {
                                values[index] = dataPriv.get(elem, "display") || null;
                                if (!values[index]) elem.style.display = "";
                            }
                            if ("" === elem.style.display && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
                        } else if ("none" !== display) {
                            values[index] = "none";
                            dataPriv.set(elem, "display", display);
                        }
                    }
                    for (index = 0; index < length; index++) if (null != values[index]) elements[index].style.display = values[index];
                    return elements;
                }
                jQuery.fn.extend({
                    show: function() {
                        return showHide(this, true);
                    },
                    hide: function() {
                        return showHide(this);
                    },
                    toggle: function(state) {
                        if ("boolean" === typeof state) return state ? this.show() : this.hide();
                        return this.each((function() {
                            if (isHiddenWithinTree(this)) jQuery(this).show(); else jQuery(this).hide();
                        }));
                    }
                });
                var rcheckableType = /^(?:checkbox|radio)$/i;
                var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
                var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
                (function() {
                    var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
                    input.setAttribute("type", "radio");
                    input.setAttribute("checked", "checked");
                    input.setAttribute("name", "t");
                    div.appendChild(input);
                    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                    div.innerHTML = "<textarea>x</textarea>";
                    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    div.innerHTML = "<option></option>";
                    support.option = !!div.lastChild;
                })();
                var wrapMap = {
                    thead: [ 1, "<table>", "</table>" ],
                    col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: [ 0, "", "" ]
                };
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                wrapMap.th = wrapMap.td;
                if (!support.option) wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
                function getAll(context, tag) {
                    var ret;
                    if ("undefined" !== typeof context.getElementsByTagName) ret = context.getElementsByTagName(tag || "*"); else if ("undefined" !== typeof context.querySelectorAll) ret = context.querySelectorAll(tag || "*"); else ret = [];
                    if (void 0 === tag || tag && nodeName(context, tag)) return jQuery.merge([ context ], ret);
                    return ret;
                }
                function setGlobalEval(elems, refElements) {
                    var i = 0, l = elems.length;
                    for (;i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
                }
                var rhtml = /<|&#?\w+;/;
                function buildFragment(elems, context, scripts, selection, ignored) {
                    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
                    for (;i < l; i++) {
                        elem = elems[i];
                        if (elem || 0 === elem) if ("object" === toType(elem)) jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem)); else {
                            tmp = tmp || fragment.appendChild(context.createElement("div"));
                            tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                            j = wrap[0];
                            while (j--) tmp = tmp.lastChild;
                            jQuery.merge(nodes, tmp.childNodes);
                            tmp = fragment.firstChild;
                            tmp.textContent = "";
                        }
                    }
                    fragment.textContent = "";
                    i = 0;
                    while (elem = nodes[i++]) {
                        if (selection && jQuery.inArray(elem, selection) > -1) {
                            if (ignored) ignored.push(elem);
                            continue;
                        }
                        attached = isAttached(elem);
                        tmp = getAll(fragment.appendChild(elem), "script");
                        if (attached) setGlobalEval(tmp);
                        if (scripts) {
                            j = 0;
                            while (elem = tmp[j++]) if (rscriptType.test(elem.type || "")) scripts.push(elem);
                        }
                    }
                    return fragment;
                }
                var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
                function returnTrue() {
                    return true;
                }
                function returnFalse() {
                    return false;
                }
                function expectSync(elem, type) {
                    return elem === safeActiveElement() === ("focus" === type);
                }
                function safeActiveElement() {
                    try {
                        return document.activeElement;
                    } catch (err) {}
                }
                function on(elem, types, selector, data, fn, one) {
                    var origFn, type;
                    if ("object" === typeof types) {
                        if ("string" !== typeof selector) {
                            data = data || selector;
                            selector = void 0;
                        }
                        for (type in types) on(elem, type, selector, data, types[type], one);
                        return elem;
                    }
                    if (null == data && null == fn) {
                        fn = selector;
                        data = selector = void 0;
                    } else if (null == fn) if ("string" === typeof selector) {
                        fn = data;
                        data = void 0;
                    } else {
                        fn = data;
                        data = selector;
                        selector = void 0;
                    }
                    if (false === fn) fn = returnFalse; else if (!fn) return elem;
                    if (1 === one) {
                        origFn = fn;
                        fn = function(event) {
                            jQuery().off(event);
                            return origFn.apply(this, arguments);
                        };
                        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                    }
                    return elem.each((function() {
                        jQuery.event.add(this, types, fn, data, selector);
                    }));
                }
                jQuery.event = {
                    global: {},
                    add: function(elem, types, handler, data, selector) {
                        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                        if (!acceptData(elem)) return;
                        if (handler.handler) {
                            handleObjIn = handler;
                            handler = handleObjIn.handler;
                            selector = handleObjIn.selector;
                        }
                        if (selector) jQuery.find.matchesSelector(documentElement, selector);
                        if (!handler.guid) handler.guid = jQuery.guid++;
                        if (!(events = elemData.events)) events = elemData.events = Object.create(null);
                        if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                            return "undefined" !== typeof jQuery && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                        };
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) continue;
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            special = jQuery.event.special[type] || {};
                            handleObj = jQuery.extend({
                                type,
                                origType,
                                data,
                                handler,
                                guid: handler.guid,
                                selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn);
                            if (!(handlers = events[type])) {
                                handlers = events[type] = [];
                                handlers.delegateCount = 0;
                                if (!special.setup || false === special.setup.call(elem, data, namespaces, eventHandle)) if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                            }
                            if (special.add) {
                                special.add.call(elem, handleObj);
                                if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                            }
                            if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj); else handlers.push(handleObj);
                            jQuery.event.global[type] = true;
                        }
                    },
                    remove: function(elem, types, handler, selector, mappedTypes) {
                        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                        if (!elemData || !(events = elemData.events)) return;
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) {
                                for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, true);
                                continue;
                            }
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            handlers = events[type] || [];
                            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            origCount = j = handlers.length;
                            while (j--) {
                                handleObj = handlers[j];
                                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || "**" === selector && handleObj.selector)) {
                                    handlers.splice(j, 1);
                                    if (handleObj.selector) handlers.delegateCount--;
                                    if (special.remove) special.remove.call(elem, handleObj);
                                }
                            }
                            if (origCount && !handlers.length) {
                                if (!special.teardown || false === special.teardown.call(elem, namespaces, elemData.handle)) jQuery.removeEvent(elem, type, elemData.handle);
                                delete events[type];
                            }
                        }
                        if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
                    },
                    dispatch: function(nativeEvent) {
                        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
                        args[0] = event;
                        for (i = 1; i < arguments.length; i++) args[i] = arguments[i];
                        event.delegateTarget = this;
                        if (special.preDispatch && false === special.preDispatch.call(this, event)) return;
                        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                        i = 0;
                        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                            event.currentTarget = matched.elem;
                            j = 0;
                            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.rnamespace || false === handleObj.namespace || event.rnamespace.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                                if (void 0 !== ret) if (false === (event.result = ret)) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                        if (special.postDispatch) special.postDispatch.call(this, event);
                        return event.result;
                    },
                    handlers: function(event, handlers) {
                        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                        if (delegateCount && cur.nodeType && !("click" === event.type && event.button >= 1)) for (;cur !== this; cur = cur.parentNode || this) if (1 === cur.nodeType && !("click" === event.type && true === cur.disabled)) {
                            matchedHandlers = [];
                            matchedSelectors = {};
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (void 0 === matchedSelectors[sel]) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                                if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                            }
                            if (matchedHandlers.length) handlerQueue.push({
                                elem: cur,
                                handlers: matchedHandlers
                            });
                        }
                        cur = this;
                        if (delegateCount < handlers.length) handlerQueue.push({
                            elem: cur,
                            handlers: handlers.slice(delegateCount)
                        });
                        return handlerQueue;
                    },
                    addProp: function(name, hook) {
                        Object.defineProperty(jQuery.Event.prototype, name, {
                            enumerable: true,
                            configurable: true,
                            get: isFunction(hook) ? function() {
                                if (this.originalEvent) return hook(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[name];
                            },
                            set: function(value) {
                                Object.defineProperty(this, name, {
                                    enumerable: true,
                                    configurable: true,
                                    writable: true,
                                    value
                                });
                            }
                        });
                    },
                    fix: function(originalEvent) {
                        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                    },
                    special: {
                        load: {
                            noBubble: true
                        },
                        click: {
                            setup: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click", returnTrue);
                                return false;
                            },
                            trigger: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                                return true;
                            },
                            _default: function(event) {
                                var target = event.target;
                                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(event) {
                                if (void 0 !== event.result && event.originalEvent) event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                };
                function leverageNative(el, type, expectSync) {
                    if (!expectSync) {
                        if (void 0 === dataPriv.get(el, type)) jQuery.event.add(el, type, returnTrue);
                        return;
                    }
                    dataPriv.set(el, type, false);
                    jQuery.event.add(el, type, {
                        namespace: false,
                        handler: function(event) {
                            var notAsync, result, saved = dataPriv.get(this, type);
                            if (1 & event.isTrigger && this[type]) {
                                if (!saved.length) {
                                    saved = slice.call(arguments);
                                    dataPriv.set(this, type, saved);
                                    notAsync = expectSync(this, type);
                                    this[type]();
                                    result = dataPriv.get(this, type);
                                    if (saved !== result || notAsync) dataPriv.set(this, type, false); else result = {};
                                    if (saved !== result) {
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                        return result && result.value;
                                    }
                                } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                            } else if (saved.length) {
                                dataPriv.set(this, type, {
                                    value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                                });
                                event.stopImmediatePropagation();
                            }
                        }
                    });
                }
                jQuery.removeEvent = function(elem, type, handle) {
                    if (elem.removeEventListener) elem.removeEventListener(type, handle);
                };
                jQuery.Event = function(src, props) {
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                    if (src && src.type) {
                        this.originalEvent = src;
                        this.type = src.type;
                        this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && false === src.returnValue ? returnTrue : returnFalse;
                        this.target = src.target && 3 === src.target.nodeType ? src.target.parentNode : src.target;
                        this.currentTarget = src.currentTarget;
                        this.relatedTarget = src.relatedTarget;
                    } else this.type = src;
                    if (props) jQuery.extend(this, props);
                    this.timeStamp = src && src.timeStamp || Date.now();
                    this[jQuery.expando] = true;
                };
                jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: false,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue;
                        if (e && !this.isSimulated) e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopImmediatePropagation();
                        this.stopPropagation();
                    }
                };
                jQuery.each({
                    altKey: true,
                    bubbles: true,
                    cancelable: true,
                    changedTouches: true,
                    ctrlKey: true,
                    detail: true,
                    eventPhase: true,
                    metaKey: true,
                    pageX: true,
                    pageY: true,
                    shiftKey: true,
                    view: true,
                    char: true,
                    code: true,
                    charCode: true,
                    key: true,
                    keyCode: true,
                    button: true,
                    buttons: true,
                    clientX: true,
                    clientY: true,
                    offsetX: true,
                    offsetY: true,
                    pointerId: true,
                    pointerType: true,
                    screenX: true,
                    screenY: true,
                    targetTouches: true,
                    toElement: true,
                    touches: true,
                    which: true
                }, jQuery.event.addProp);
                jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(type, delegateType) {
                    jQuery.event.special[type] = {
                        setup: function() {
                            leverageNative(this, type, expectSync);
                            return false;
                        },
                        trigger: function() {
                            leverageNative(this, type);
                            return true;
                        },
                        _default: function(event) {
                            return dataPriv.get(event.target, type);
                        },
                        delegateType
                    };
                }));
                jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function(event) {
                            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                            if (!related || related !== target && !jQuery.contains(target, related)) {
                                event.type = handleObj.origType;
                                ret = handleObj.handler.apply(this, arguments);
                                event.type = fix;
                            }
                            return ret;
                        }
                    };
                }));
                jQuery.fn.extend({
                    on: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn);
                    },
                    one: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn, 1);
                    },
                    off: function(types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj) {
                            handleObj = types.handleObj;
                            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                            return this;
                        }
                        if ("object" === typeof types) {
                            for (type in types) this.off(type, selector, types[type]);
                            return this;
                        }
                        if (false === selector || "function" === typeof selector) {
                            fn = selector;
                            selector = void 0;
                        }
                        if (false === fn) fn = returnFalse;
                        return this.each((function() {
                            jQuery.event.remove(this, types, fn, selector);
                        }));
                    }
                });
                var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function manipulationTarget(elem, content) {
                    if (nodeName(elem, "table") && nodeName(11 !== content.nodeType ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
                    return elem;
                }
                function disableScript(elem) {
                    elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type;
                    return elem;
                }
                function restoreScript(elem) {
                    if ("true/" === (elem.type || "").slice(0, 5)) elem.type = elem.type.slice(5); else elem.removeAttribute("type");
                    return elem;
                }
                function cloneCopyEvent(src, dest) {
                    var i, l, type, pdataOld, udataOld, udataCur, events;
                    if (1 !== dest.nodeType) return;
                    if (dataPriv.hasData(src)) {
                        pdataOld = dataPriv.get(src);
                        events = pdataOld.events;
                        if (events) {
                            dataPriv.remove(dest, "handle events");
                            for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                    if (dataUser.hasData(src)) {
                        udataOld = dataUser.access(src);
                        udataCur = jQuery.extend({}, udataOld);
                        dataUser.set(dest, udataCur);
                    }
                }
                function fixInput(src, dest) {
                    var nodeName = dest.nodeName.toLowerCase();
                    if ("input" === nodeName && rcheckableType.test(src.type)) dest.checked = src.checked; else if ("input" === nodeName || "textarea" === nodeName) dest.defaultValue = src.defaultValue;
                }
                function domManip(collection, args, callback, ignored) {
                    args = flat(args);
                    var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                    if (valueIsFunction || l > 1 && "string" === typeof value && !support.checkClone && rchecked.test(value)) return collection.each((function(index) {
                        var self = collection.eq(index);
                        if (valueIsFunction) args[0] = value.call(this, index, self.html());
                        domManip(self, args, callback, ignored);
                    }));
                    if (l) {
                        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                        first = fragment.firstChild;
                        if (1 === fragment.childNodes.length) fragment = first;
                        if (first || ignored) {
                            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                            hasScripts = scripts.length;
                            for (;i < l; i++) {
                                node = fragment;
                                if (i !== iNoClone) {
                                    node = jQuery.clone(node, true, true);
                                    if (hasScripts) jQuery.merge(scripts, getAll(node, "script"));
                                }
                                callback.call(collection[i], node, i);
                            }
                            if (hasScripts) {
                                doc = scripts[scripts.length - 1].ownerDocument;
                                jQuery.map(scripts, restoreScript);
                                for (i = 0; i < hasScripts; i++) {
                                    node = scripts[i];
                                    if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) if (node.src && "module" !== (node.type || "").toLowerCase()) {
                                        if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                            nonce: node.nonce || node.getAttribute("nonce")
                                        }, doc);
                                    } else DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                }
                            }
                        }
                    }
                    return collection;
                }
                function remove(elem, selector, keepData) {
                    var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
                    for (;null != (node = nodes[i]); i++) {
                        if (!keepData && 1 === node.nodeType) jQuery.cleanData(getAll(node));
                        if (node.parentNode) {
                            if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                            node.parentNode.removeChild(node);
                        }
                    }
                    return elem;
                }
                jQuery.extend({
                    htmlPrefilter: function(html) {
                        return html;
                    },
                    clone: function(elem, dataAndEvents, deepDataAndEvents) {
                        var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                        if (!support.noCloneChecked && (1 === elem.nodeType || 11 === elem.nodeType) && !jQuery.isXMLDoc(elem)) {
                            destElements = getAll(clone);
                            srcElements = getAll(elem);
                            for (i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                        }
                        if (dataAndEvents) if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);
                            for (i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                        } else cloneCopyEvent(elem, clone);
                        destElements = getAll(clone, "script");
                        if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                        return clone;
                    },
                    cleanData: function(elems) {
                        var data, elem, type, special = jQuery.event.special, i = 0;
                        for (;void 0 !== (elem = elems[i]); i++) if (acceptData(elem)) {
                            if (data = elem[dataPriv.expando]) {
                                if (data.events) for (type in data.events) if (special[type]) jQuery.event.remove(elem, type); else jQuery.removeEvent(elem, type, data.handle);
                                elem[dataPriv.expando] = void 0;
                            }
                            if (elem[dataUser.expando]) elem[dataUser.expando] = void 0;
                        }
                    }
                });
                jQuery.fn.extend({
                    detach: function(selector) {
                        return remove(this, selector, true);
                    },
                    remove: function(selector) {
                        return remove(this, selector);
                    },
                    text: function(value) {
                        return access(this, (function(value) {
                            return void 0 === value ? jQuery.text(this) : this.empty().each((function() {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = value;
                            }));
                        }), null, value, arguments.length);
                    },
                    append: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var target = manipulationTarget(this, elem);
                                target.appendChild(elem);
                            }
                        }));
                    },
                    prepend: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        }));
                    },
                    before: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this);
                        }));
                    },
                    after: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
                        }));
                    },
                    empty: function() {
                        var elem, i = 0;
                        for (;null != (elem = this[i]); i++) if (1 === elem.nodeType) {
                            jQuery.cleanData(getAll(elem, false));
                            elem.textContent = "";
                        }
                        return this;
                    },
                    clone: function(dataAndEvents, deepDataAndEvents) {
                        dataAndEvents = null == dataAndEvents ? false : dataAndEvents;
                        deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents;
                        return this.map((function() {
                            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                        }));
                    },
                    html: function(value) {
                        return access(this, (function(value) {
                            var elem = this[0] || {}, i = 0, l = this.length;
                            if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                            if ("string" === typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                                value = jQuery.htmlPrefilter(value);
                                try {
                                    for (;i < l; i++) {
                                        elem = this[i] || {};
                                        if (1 === elem.nodeType) {
                                            jQuery.cleanData(getAll(elem, false));
                                            elem.innerHTML = value;
                                        }
                                    }
                                    elem = 0;
                                } catch (e) {}
                            }
                            if (elem) this.empty().append(value);
                        }), null, value, arguments.length);
                    },
                    replaceWith: function() {
                        var ignored = [];
                        return domManip(this, arguments, (function(elem) {
                            var parent = this.parentNode;
                            if (jQuery.inArray(this, ignored) < 0) {
                                jQuery.cleanData(getAll(this));
                                if (parent) parent.replaceChild(elem, this);
                            }
                        }), ignored);
                    }
                });
                jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(name, original) {
                    jQuery.fn[name] = function(selector) {
                        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                        for (;i <= last; i++) {
                            elems = i === last ? this : this.clone(true);
                            jQuery(insert[i])[original](elems);
                            push.apply(ret, elems.get());
                        }
                        return this.pushStack(ret);
                    };
                }));
                var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
                var rcustomProp = /^--/;
                var getStyles = function(elem) {
                    var view = elem.ownerDocument.defaultView;
                    if (!view || !view.opener) view = window;
                    return view.getComputedStyle(elem);
                };
                var swap = function(elem, options, callback) {
                    var ret, name, old = {};
                    for (name in options) {
                        old[name] = elem.style[name];
                        elem.style[name] = options[name];
                    }
                    ret = callback.call(elem);
                    for (name in options) elem.style[name] = old[name];
                    return ret;
                };
                var rboxStyle = new RegExp(cssExpand.join("|"), "i");
                var whitespace = "[\\x20\\t\\r\\n\\f]";
                var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
                (function() {
                    function computeStyleTests() {
                        if (!div) return;
                        container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                        documentElement.appendChild(container).appendChild(div);
                        var divStyle = window.getComputedStyle(div);
                        pixelPositionVal = "1%" !== divStyle.top;
                        reliableMarginLeftVal = 12 === roundPixelMeasures(divStyle.marginLeft);
                        div.style.right = "60%";
                        pixelBoxStylesVal = 36 === roundPixelMeasures(divStyle.right);
                        boxSizingReliableVal = 36 === roundPixelMeasures(divStyle.width);
                        div.style.position = "absolute";
                        scrollboxSizeVal = 12 === roundPixelMeasures(div.offsetWidth / 3);
                        documentElement.removeChild(container);
                        div = null;
                    }
                    function roundPixelMeasures(measure) {
                        return Math.round(parseFloat(measure));
                    }
                    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                    if (!div.style) return;
                    div.style.backgroundClip = "content-box";
                    div.cloneNode(true).style.backgroundClip = "";
                    support.clearCloneStyle = "content-box" === div.style.backgroundClip;
                    jQuery.extend(support, {
                        boxSizingReliable: function() {
                            computeStyleTests();
                            return boxSizingReliableVal;
                        },
                        pixelBoxStyles: function() {
                            computeStyleTests();
                            return pixelBoxStylesVal;
                        },
                        pixelPosition: function() {
                            computeStyleTests();
                            return pixelPositionVal;
                        },
                        reliableMarginLeft: function() {
                            computeStyleTests();
                            return reliableMarginLeftVal;
                        },
                        scrollboxSize: function() {
                            computeStyleTests();
                            return scrollboxSizeVal;
                        },
                        reliableTrDimensions: function() {
                            var table, tr, trChild, trStyle;
                            if (null == reliableTrDimensionsVal) {
                                table = document.createElement("table");
                                tr = document.createElement("tr");
                                trChild = document.createElement("div");
                                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                                tr.style.cssText = "border:1px solid";
                                tr.style.height = "1px";
                                trChild.style.height = "9px";
                                trChild.style.display = "block";
                                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                                trStyle = window.getComputedStyle(tr);
                                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                                documentElement.removeChild(table);
                            }
                            return reliableTrDimensionsVal;
                        }
                    });
                })();
                function curCSS(elem, name, computed) {
                    var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
                    computed = computed || getStyles(elem);
                    if (computed) {
                        ret = computed.getPropertyValue(name) || computed[name];
                        if (isCustomProp && ret) ret = ret.replace(rtrimCSS, "$1") || void 0;
                        if ("" === ret && !isAttached(elem)) ret = jQuery.style(elem, name);
                        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth;
                        }
                    }
                    return void 0 !== ret ? ret + "" : ret;
                }
                function addGetHookIf(conditionFn, hookFn) {
                    return {
                        get: function() {
                            if (conditionFn()) {
                                delete this.get;
                                return;
                            }
                            return (this.get = hookFn).apply(this, arguments);
                        }
                    };
                }
                var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
                function vendorPropName(name) {
                    var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
                    while (i--) {
                        name = cssPrefixes[i] + capName;
                        if (name in emptyStyle) return name;
                    }
                }
                function finalPropName(name) {
                    var final = jQuery.cssProps[name] || vendorProps[name];
                    if (final) return final;
                    if (name in emptyStyle) return name;
                    return vendorProps[name] = vendorPropName(name) || name;
                }
                var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function setPositiveNumber(_elem, value, subtract) {
                    var matches = rcssNum.exec(value);
                    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
                }
                function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                    var i = "width" === dimension ? 1 : 0, extra = 0, delta = 0;
                    if (box === (isBorderBox ? "border" : "content")) return 0;
                    for (;i < 4; i += 2) {
                        if ("margin" === box) delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                        if (!isBorderBox) {
                            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if ("padding" !== box) delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        } else {
                            if ("content" === box) delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if ("margin" !== box) delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                    if (!isBorderBox && computedVal >= 0) delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
                    return delta;
                }
                function getWidthOrHeight(elem, dimension, extra) {
                    var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && "border-box" === jQuery.css(elem, "boxSizing", false, styles), valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                    if (rnumnonpx.test(val)) {
                        if (!extra) return val;
                        val = "auto";
                    }
                    if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || "auto" === val || !parseFloat(val) && "inline" === jQuery.css(elem, "display", false, styles)) && elem.getClientRects().length) {
                        isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", false, styles);
                        valueIsBorderBox = offsetProp in elem;
                        if (valueIsBorderBox) val = elem[offsetProp];
                    }
                    val = parseFloat(val) || 0;
                    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
                }
                jQuery.extend({
                    cssHooks: {
                        opacity: {
                            get: function(elem, computed) {
                                if (computed) {
                                    var ret = curCSS(elem, "opacity");
                                    return "" === ret ? "1" : ret;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: true,
                        columnCount: true,
                        fillOpacity: true,
                        flexGrow: true,
                        flexShrink: true,
                        fontWeight: true,
                        gridArea: true,
                        gridColumn: true,
                        gridColumnEnd: true,
                        gridColumnStart: true,
                        gridRow: true,
                        gridRowEnd: true,
                        gridRowStart: true,
                        lineHeight: true,
                        opacity: true,
                        order: true,
                        orphans: true,
                        widows: true,
                        zIndex: true,
                        zoom: true
                    },
                    cssProps: {},
                    style: function(elem, name, value, extra) {
                        if (!elem || 3 === elem.nodeType || 8 === elem.nodeType || !elem.style) return;
                        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (void 0 !== value) {
                            type = typeof value;
                            if ("string" === type && (ret = rcssNum.exec(value)) && ret[1]) {
                                value = adjustCSS(elem, name, ret);
                                type = "number";
                            }
                            if (null == value || value !== value) return;
                            if ("number" === type && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                            if (!support.clearCloneStyle && "" === value && 0 === name.indexOf("background")) style[name] = "inherit";
                            if (!hooks || !("set" in hooks) || void 0 !== (value = hooks.set(elem, value, extra))) if (isCustomProp) style.setProperty(name, value); else style[name] = value;
                        } else {
                            if (hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, false, extra))) return ret;
                            return style[name];
                        }
                    },
                    css: function(elem, name, extra, styles) {
                        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
                        if (void 0 === val) val = curCSS(elem, name, styles);
                        if ("normal" === val && name in cssNormalTransform) val = cssNormalTransform[name];
                        if ("" === extra || extra) {
                            num = parseFloat(val);
                            return true === extra || isFinite(num) ? num || 0 : val;
                        }
                        return val;
                    }
                });
                jQuery.each([ "height", "width" ], (function(_i, dimension) {
                    jQuery.cssHooks[dimension] = {
                        get: function(elem, computed, extra) {
                            if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, (function() {
                                return getWidthOrHeight(elem, dimension, extra);
                            })) : getWidthOrHeight(elem, dimension, extra);
                        },
                        set: function(elem, value, extra) {
                            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && "absolute" === styles.position, boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && "border-box" === jQuery.css(elem, "boxSizing", false, styles), subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                            if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5);
                            if (subtract && (matches = rcssNum.exec(value)) && "px" !== (matches[3] || "px")) {
                                elem.style[dimension] = value;
                                value = jQuery.css(elem, dimension);
                            }
                            return setPositiveNumber(elem, value, subtract);
                        }
                    };
                }));
                jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, (function(elem, computed) {
                    if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                        marginLeft: 0
                    }, (function() {
                        return elem.getBoundingClientRect().left;
                    }))) + "px";
                }));
                jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(prefix, suffix) {
                    jQuery.cssHooks[prefix + suffix] = {
                        expand: function(value) {
                            var i = 0, expanded = {}, parts = "string" === typeof value ? value.split(" ") : [ value ];
                            for (;i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                            return expanded;
                        }
                    };
                    if ("margin" !== prefix) jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }));
                jQuery.fn.extend({
                    css: function(name, value) {
                        return access(this, (function(elem, name, value) {
                            var styles, len, map = {}, i = 0;
                            if (Array.isArray(name)) {
                                styles = getStyles(elem);
                                len = name.length;
                                for (;i < len; i++) map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                return map;
                            }
                            return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                        }), name, value, arguments.length > 1);
                    }
                });
                function Tween(elem, options, prop, end, easing) {
                    return new Tween.prototype.init(elem, options, prop, end, easing);
                }
                jQuery.Tween = Tween;
                Tween.prototype = {
                    constructor: Tween,
                    init: function(elem, options, prop, end, easing, unit) {
                        this.elem = elem;
                        this.prop = prop;
                        this.easing = easing || jQuery.easing._default;
                        this.options = options;
                        this.start = this.now = this.cur();
                        this.end = end;
                        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                    },
                    cur: function() {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                    },
                    run: function(percent) {
                        var eased, hooks = Tween.propHooks[this.prop];
                        if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration); else this.pos = eased = percent;
                        this.now = (this.end - this.start) * eased + this.start;
                        if (this.options.step) this.options.step.call(this.elem, this.now, this);
                        if (hooks && hooks.set) hooks.set(this); else Tween.propHooks._default.set(this);
                        return this;
                    }
                };
                Tween.prototype.init.prototype = Tween.prototype;
                Tween.propHooks = {
                    _default: {
                        get: function(tween) {
                            var result;
                            if (1 !== tween.elem.nodeType || null != tween.elem[tween.prop] && null == tween.elem.style[tween.prop]) return tween.elem[tween.prop];
                            result = jQuery.css(tween.elem, tween.prop, "");
                            return !result || "auto" === result ? 0 : result;
                        },
                        set: function(tween) {
                            if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween); else if (1 === tween.elem.nodeType && (jQuery.cssHooks[tween.prop] || null != tween.elem.style[finalPropName(tween.prop)])) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit); else tween.elem[tween.prop] = tween.now;
                        }
                    }
                };
                Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function(tween) {
                        if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
                    }
                };
                jQuery.easing = {
                    linear: function(p) {
                        return p;
                    },
                    swing: function(p) {
                        return .5 - Math.cos(p * Math.PI) / 2;
                    },
                    _default: "swing"
                };
                jQuery.fx = Tween.prototype.init;
                jQuery.fx.step = {};
                var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
                function schedule() {
                    if (inProgress) {
                        if (false === document.hidden && window.requestAnimationFrame) window.requestAnimationFrame(schedule); else window.setTimeout(schedule, jQuery.fx.interval);
                        jQuery.fx.tick();
                    }
                }
                function createFxNow() {
                    window.setTimeout((function() {
                        fxNow = void 0;
                    }));
                    return fxNow = Date.now();
                }
                function genFx(type, includeWidth) {
                    var which, i = 0, attrs = {
                        height: type
                    };
                    includeWidth = includeWidth ? 1 : 0;
                    for (;i < 4; i += 2 - includeWidth) {
                        which = cssExpand[i];
                        attrs["margin" + which] = attrs["padding" + which] = type;
                    }
                    if (includeWidth) attrs.opacity = attrs.width = type;
                    return attrs;
                }
                function createTween(value, prop, animation) {
                    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
                    for (;index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
                }
                function defaultPrefilter(elem, props, opts) {
                    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                    if (!opts.queue) {
                        hooks = jQuery._queueHooks(elem, "fx");
                        if (null == hooks.unqueued) {
                            hooks.unqueued = 0;
                            oldfire = hooks.empty.fire;
                            hooks.empty.fire = function() {
                                if (!hooks.unqueued) oldfire();
                            };
                        }
                        hooks.unqueued++;
                        anim.always((function() {
                            anim.always((function() {
                                hooks.unqueued--;
                                if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                            }));
                        }));
                    }
                    for (prop in props) {
                        value = props[prop];
                        if (rfxtypes.test(value)) {
                            delete props[prop];
                            toggle = toggle || "toggle" === value;
                            if (value === (hidden ? "hide" : "show")) if ("show" === value && dataShow && void 0 !== dataShow[prop]) hidden = true; else continue;
                            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                        }
                    }
                    propTween = !jQuery.isEmptyObject(props);
                    if (!propTween && jQuery.isEmptyObject(orig)) return;
                    if (isBox && 1 === elem.nodeType) {
                        opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                        restoreDisplay = dataShow && dataShow.display;
                        if (null == restoreDisplay) restoreDisplay = dataPriv.get(elem, "display");
                        display = jQuery.css(elem, "display");
                        if ("none" === display) if (restoreDisplay) display = restoreDisplay; else {
                            showHide([ elem ], true);
                            restoreDisplay = elem.style.display || restoreDisplay;
                            display = jQuery.css(elem, "display");
                            showHide([ elem ]);
                        }
                        if ("inline" === display || "inline-block" === display && null != restoreDisplay) if ("none" === jQuery.css(elem, "float")) {
                            if (!propTween) {
                                anim.done((function() {
                                    style.display = restoreDisplay;
                                }));
                                if (null == restoreDisplay) {
                                    display = style.display;
                                    restoreDisplay = "none" === display ? "" : display;
                                }
                            }
                            style.display = "inline-block";
                        }
                    }
                    if (opts.overflow) {
                        style.overflow = "hidden";
                        anim.always((function() {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2];
                        }));
                    }
                    propTween = false;
                    for (prop in orig) {
                        if (!propTween) {
                            if (dataShow) {
                                if ("hidden" in dataShow) hidden = dataShow.hidden;
                            } else dataShow = dataPriv.access(elem, "fxshow", {
                                display: restoreDisplay
                            });
                            if (toggle) dataShow.hidden = !hidden;
                            if (hidden) showHide([ elem ], true);
                            anim.done((function() {
                                if (!hidden) showHide([ elem ]);
                                dataPriv.remove(elem, "fxshow");
                                for (prop in orig) jQuery.style(elem, prop, orig[prop]);
                            }));
                        }
                        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = propTween.start;
                            if (hidden) {
                                propTween.end = propTween.start;
                                propTween.start = 0;
                            }
                        }
                    }
                }
                function propFilter(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    for (index in props) {
                        name = camelCase(index);
                        easing = specialEasing[name];
                        value = props[index];
                        if (Array.isArray(value)) {
                            easing = value[1];
                            value = props[index] = value[0];
                        }
                        if (index !== name) {
                            props[name] = value;
                            delete props[index];
                        }
                        hooks = jQuery.cssHooks[name];
                        if (hooks && "expand" in hooks) {
                            value = hooks.expand(value);
                            delete props[name];
                            for (index in value) if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        } else specialEasing[name] = easing;
                    }
                }
                function Animation(elem, properties, options) {
                    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always((function() {
                        delete tick.elem;
                    })), tick = function() {
                        if (stopped) return false;
                        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                        for (;index < length; index++) animation.tweens[index].run(percent);
                        deferred.notifyWith(elem, [ animation, percent, remaining ]);
                        if (percent < 1 && length) return remaining;
                        if (!length) deferred.notifyWith(elem, [ animation, 1, 0 ]);
                        deferred.resolveWith(elem, [ animation ]);
                        return false;
                    }, animation = deferred.promise({
                        elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {},
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function(gotoEnd) {
                            var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) return this;
                            stopped = true;
                            for (;index < length; index++) animation.tweens[index].run(1);
                            if (gotoEnd) {
                                deferred.notifyWith(elem, [ animation, 1, 0 ]);
                                deferred.resolveWith(elem, [ animation, gotoEnd ]);
                            } else deferred.rejectWith(elem, [ animation, gotoEnd ]);
                            return this;
                        }
                    }), props = animation.props;
                    propFilter(props, animation.opts.specialEasing);
                    for (;index < length; index++) {
                        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                        if (result) {
                            if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                            return result;
                        }
                    }
                    jQuery.map(props, createTween, animation);
                    if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
                    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
                    jQuery.fx.timer(jQuery.extend(tick, {
                        elem,
                        anim: animation,
                        queue: animation.opts.queue
                    }));
                    return animation;
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweeners: {
                        "*": [ function(prop, value) {
                            var tween = this.createTween(prop, value);
                            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                            return tween;
                        } ]
                    },
                    tweener: function(props, callback) {
                        if (isFunction(props)) {
                            callback = props;
                            props = [ "*" ];
                        } else props = props.match(rnothtmlwhite);
                        var prop, index = 0, length = props.length;
                        for (;index < length; index++) {
                            prop = props[index];
                            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                            Animation.tweeners[prop].unshift(callback);
                        }
                    },
                    prefilters: [ defaultPrefilter ],
                    prefilter: function(callback, prepend) {
                        if (prepend) Animation.prefilters.unshift(callback); else Animation.prefilters.push(callback);
                    }
                });
                jQuery.speed = function(speed, easing, fn) {
                    var opt = speed && "object" === typeof speed ? jQuery.extend({}, speed) : {
                        complete: fn || !fn && easing || isFunction(speed) && speed,
                        duration: speed,
                        easing: fn && easing || easing && !isFunction(easing) && easing
                    };
                    if (jQuery.fx.off) opt.duration = 0; else if ("number" !== typeof opt.duration) if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration]; else opt.duration = jQuery.fx.speeds._default;
                    if (null == opt.queue || true === opt.queue) opt.queue = "fx";
                    opt.old = opt.complete;
                    opt.complete = function() {
                        if (isFunction(opt.old)) opt.old.call(this);
                        if (opt.queue) jQuery.dequeue(this, opt.queue);
                    };
                    return opt;
                };
                jQuery.fn.extend({
                    fadeTo: function(speed, to, easing, callback) {
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                            opacity: to
                        }, speed, easing, callback);
                    },
                    animate: function(prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            if (empty || dataPriv.get(this, "finish")) anim.stop(true);
                        };
                        doAnimation.finish = doAnimation;
                        return empty || false === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                    },
                    stop: function(type, clearQueue, gotoEnd) {
                        var stopQueue = function(hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop;
                            stop(gotoEnd);
                        };
                        if ("string" !== typeof type) {
                            gotoEnd = clearQueue;
                            clearQueue = type;
                            type = void 0;
                        }
                        if (clearQueue) this.queue(type || "fx", []);
                        return this.each((function() {
                            var dequeue = true, index = null != type && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                            if (index) {
                                if (data[index] && data[index].stop) stopQueue(data[index]);
                            } else for (index in data) if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && (null == type || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                            if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
                        }));
                    },
                    finish: function(type) {
                        if (false !== type) type = type || "fx";
                        return this.each((function() {
                            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                            data.finish = true;
                            jQuery.queue(this, type, []);
                            if (hooks && hooks.stop) hooks.stop.call(this, true);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                            for (index = 0; index < length; index++) if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                            delete data.finish;
                        }));
                    }
                });
                jQuery.each([ "toggle", "show", "hide" ], (function(_i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return null == speed || "boolean" === typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                    };
                }));
                jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(name, props) {
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                }));
                jQuery.timers = [];
                jQuery.fx.tick = function() {
                    var timer, i = 0, timers = jQuery.timers;
                    fxNow = Date.now();
                    for (;i < timers.length; i++) {
                        timer = timers[i];
                        if (!timer() && timers[i] === timer) timers.splice(i--, 1);
                    }
                    if (!timers.length) jQuery.fx.stop();
                    fxNow = void 0;
                };
                jQuery.fx.timer = function(timer) {
                    jQuery.timers.push(timer);
                    jQuery.fx.start();
                };
                jQuery.fx.interval = 13;
                jQuery.fx.start = function() {
                    if (inProgress) return;
                    inProgress = true;
                    schedule();
                };
                jQuery.fx.stop = function() {
                    inProgress = null;
                };
                jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                };
                jQuery.fn.delay = function(time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, (function(next, hooks) {
                        var timeout = window.setTimeout(next, time);
                        hooks.stop = function() {
                            window.clearTimeout(timeout);
                        };
                    }));
                };
                (function() {
                    var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
                    input.type = "checkbox";
                    support.checkOn = "" !== input.value;
                    support.optSelected = opt.selected;
                    input = document.createElement("input");
                    input.value = "t";
                    input.type = "radio";
                    support.radioValue = "t" === input.value;
                })();
                var boolHook, attrHandle = jQuery.expr.attrHandle;
                jQuery.fn.extend({
                    attr: function(name, value) {
                        return access(this, jQuery.attr, name, value, arguments.length > 1);
                    },
                    removeAttr: function(name) {
                        return this.each((function() {
                            jQuery.removeAttr(this, name);
                        }));
                    }
                });
                jQuery.extend({
                    attr: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (3 === nType || 8 === nType || 2 === nType) return;
                        if ("undefined" === typeof elem.getAttribute) return jQuery.prop(elem, name, value);
                        if (1 !== nType || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
                        if (void 0 !== value) {
                            if (null === value) {
                                jQuery.removeAttr(elem, name);
                                return;
                            }
                            if (hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) return ret;
                            elem.setAttribute(name, value + "");
                            return value;
                        }
                        if (hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))) return ret;
                        ret = jQuery.find.attr(elem, name);
                        return null == ret ? void 0 : ret;
                    },
                    attrHooks: {
                        type: {
                            set: function(elem, value) {
                                if (!support.radioValue && "radio" === value && nodeName(elem, "input")) {
                                    var val = elem.value;
                                    elem.setAttribute("type", value);
                                    if (val) elem.value = val;
                                    return value;
                                }
                            }
                        }
                    },
                    removeAttr: function(elem, value) {
                        var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                        if (attrNames && 1 === elem.nodeType) while (name = attrNames[i++]) elem.removeAttribute(name);
                    }
                });
                boolHook = {
                    set: function(elem, value, name) {
                        if (false === value) jQuery.removeAttr(elem, name); else elem.setAttribute(name, name);
                        return name;
                    }
                };
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(_i, name) {
                    var getter = attrHandle[name] || jQuery.find.attr;
                    attrHandle[name] = function(elem, name, isXML) {
                        var ret, handle, lowercaseName = name.toLowerCase();
                        if (!isXML) {
                            handle = attrHandle[lowercaseName];
                            attrHandle[lowercaseName] = ret;
                            ret = null != getter(elem, name, isXML) ? lowercaseName : null;
                            attrHandle[lowercaseName] = handle;
                        }
                        return ret;
                    };
                }));
                var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
                jQuery.fn.extend({
                    prop: function(name, value) {
                        return access(this, jQuery.prop, name, value, arguments.length > 1);
                    },
                    removeProp: function(name) {
                        return this.each((function() {
                            delete this[jQuery.propFix[name] || name];
                        }));
                    }
                });
                jQuery.extend({
                    prop: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (3 === nType || 8 === nType || 2 === nType) return;
                        if (1 !== nType || !jQuery.isXMLDoc(elem)) {
                            name = jQuery.propFix[name] || name;
                            hooks = jQuery.propHooks[name];
                        }
                        if (void 0 !== value) {
                            if (hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name))) return ret;
                            return elem[name] = value;
                        }
                        if (hooks && "get" in hooks && null !== (ret = hooks.get(elem, name))) return ret;
                        return elem[name];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(elem) {
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                if (tabindex) return parseInt(tabindex, 10);
                                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                                return -1;
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                });
                if (!support.optSelected) jQuery.propHooks.selected = {
                    get: function(elem) {
                        var parent = elem.parentNode;
                        if (parent && parent.parentNode) parent.parentNode.selectedIndex;
                        return null;
                    },
                    set: function(elem) {
                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) parent.parentNode.selectedIndex;
                        }
                    }
                };
                jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                    jQuery.propFix[this.toLowerCase()] = this;
                }));
                function stripAndCollapse(value) {
                    var tokens = value.match(rnothtmlwhite) || [];
                    return tokens.join(" ");
                }
                function getClass(elem) {
                    return elem.getAttribute && elem.getAttribute("class") || "";
                }
                function classesToArray(value) {
                    if (Array.isArray(value)) return value;
                    if ("string" === typeof value) return value.match(rnothtmlwhite) || [];
                    return [];
                }
                jQuery.fn.extend({
                    addClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)));
                        }));
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = 1 === this.nodeType && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    removeClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)));
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = 1 === this.nodeType && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    while (cur.indexOf(" " + className + " ") > -1) cur = cur.replace(" " + className + " ", " ");
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    toggleClass: function(value, stateVal) {
                        var classNames, className, i, self, type = typeof value, isValidValue = "string" === type || Array.isArray(value);
                        if (isFunction(value)) return this.each((function(i) {
                            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                        }));
                        if ("boolean" === typeof stateVal && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
                        classNames = classesToArray(value);
                        return this.each((function() {
                            if (isValidValue) {
                                self = jQuery(this);
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (self.hasClass(className)) self.removeClass(className); else self.addClass(className);
                                }
                            } else if (void 0 === value || "boolean" === type) {
                                className = getClass(this);
                                if (className) dataPriv.set(this, "__className__", className);
                                if (this.setAttribute) this.setAttribute("class", className || false === value ? "" : dataPriv.get(this, "__className__") || "");
                            }
                        }));
                    },
                    hasClass: function(selector) {
                        var className, elem, i = 0;
                        className = " " + selector + " ";
                        while (elem = this[i++]) if (1 === elem.nodeType && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
                        return false;
                    }
                });
                var rreturn = /\r/g;
                jQuery.fn.extend({
                    val: function(value) {
                        var hooks, ret, valueIsFunction, elem = this[0];
                        if (!arguments.length) {
                            if (elem) {
                                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                                if (hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value"))) return ret;
                                ret = elem.value;
                                if ("string" === typeof ret) return ret.replace(rreturn, "");
                                return null == ret ? "" : ret;
                            }
                            return;
                        }
                        valueIsFunction = isFunction(value);
                        return this.each((function(i) {
                            var val;
                            if (1 !== this.nodeType) return;
                            if (valueIsFunction) val = value.call(this, i, jQuery(this).val()); else val = value;
                            if (null == val) val = ""; else if ("number" === typeof val) val += ""; else if (Array.isArray(val)) val = jQuery.map(val, (function(value) {
                                return null == value ? "" : value + "";
                            }));
                            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                            if (!hooks || !("set" in hooks) || void 0 === hooks.set(this, val, "value")) this.value = val;
                        }));
                    }
                });
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function(elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return null != val ? val : stripAndCollapse(jQuery.text(elem));
                            }
                        },
                        select: {
                            get: function(elem) {
                                var value, option, i, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type, values = one ? null : [], max = one ? index + 1 : options.length;
                                if (index < 0) i = max; else i = one ? index : 0;
                                for (;i < max; i++) {
                                    option = options[i];
                                    if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                        value = jQuery(option).val();
                                        if (one) return value;
                                        values.push(value);
                                    }
                                }
                                return values;
                            },
                            set: function(elem, value) {
                                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                                while (i--) {
                                    option = options[i];
                                    if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                                }
                                if (!optionSet) elem.selectedIndex = -1;
                                return values;
                            }
                        }
                    }
                });
                jQuery.each([ "radio", "checkbox" ], (function() {
                    jQuery.valHooks[this] = {
                        set: function(elem, value) {
                            if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                        }
                    };
                    if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
                        return null === elem.getAttribute("value") ? "on" : elem.value;
                    };
                }));
                support.focusin = "onfocusin" in window;
                var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
                    e.stopPropagation();
                };
                jQuery.extend(jQuery.event, {
                    trigger: function(event, data, elem, onlyHandlers) {
                        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                        cur = lastElement = tmp = elem = elem || document;
                        if (3 === elem.nodeType || 8 === elem.nodeType) return;
                        if (rfocusMorph.test(type + jQuery.event.triggered)) return;
                        if (type.indexOf(".") > -1) {
                            namespaces = type.split(".");
                            type = namespaces.shift();
                            namespaces.sort();
                        }
                        ontype = type.indexOf(":") < 0 && "on" + type;
                        event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" === typeof event && event);
                        event.isTrigger = onlyHandlers ? 2 : 3;
                        event.namespace = namespaces.join(".");
                        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        event.result = void 0;
                        if (!event.target) event.target = elem;
                        data = null == data ? [ event ] : jQuery.makeArray(data, [ event ]);
                        special = jQuery.event.special[type] || {};
                        if (!onlyHandlers && special.trigger && false === special.trigger.apply(elem, data)) return;
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            bubbleType = special.delegateType || type;
                            if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                            for (;cur; cur = cur.parentNode) {
                                eventPath.push(cur);
                                tmp = cur;
                            }
                            if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                        i = 0;
                        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                            lastElement = cur;
                            event.type = i > 1 ? bubbleType : special.bindType || type;
                            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                            if (handle) handle.apply(cur, data);
                            handle = ontype && cur[ontype];
                            if (handle && handle.apply && acceptData(cur)) {
                                event.result = handle.apply(cur, data);
                                if (false === event.result) event.preventDefault();
                            }
                        }
                        event.type = type;
                        if (!onlyHandlers && !event.isDefaultPrevented()) if ((!special._default || false === special._default.apply(eventPath.pop(), data)) && acceptData(elem)) if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) elem[ontype] = null;
                            jQuery.event.triggered = type;
                            if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                            elem[type]();
                            if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                            jQuery.event.triggered = void 0;
                            if (tmp) elem[ontype] = tmp;
                        }
                        return event.result;
                    },
                    simulate: function(type, elem, event) {
                        var e = jQuery.extend(new jQuery.Event, event, {
                            type,
                            isSimulated: true
                        });
                        jQuery.event.trigger(e, null, elem);
                    }
                });
                jQuery.fn.extend({
                    trigger: function(type, data) {
                        return this.each((function() {
                            jQuery.event.trigger(type, data, this);
                        }));
                    },
                    triggerHandler: function(type, data) {
                        var elem = this[0];
                        if (elem) return jQuery.event.trigger(type, data, elem, true);
                    }
                });
                if (!support.focusin) jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(orig, fix) {
                    var handler = function(event) {
                        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                    };
                    jQuery.event.special[fix] = {
                        setup: function() {
                            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                            if (!attaches) doc.addEventListener(orig, handler, true);
                            dataPriv.access(doc, fix, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                            if (!attaches) {
                                doc.removeEventListener(orig, handler, true);
                                dataPriv.remove(doc, fix);
                            } else dataPriv.access(doc, fix, attaches);
                        }
                    };
                }));
                var location = window.location;
                var nonce = {
                    guid: Date.now()
                };
                var rquery = /\?/;
                jQuery.parseXML = function(data) {
                    var xml, parserErrorElem;
                    if (!data || "string" !== typeof data) return null;
                    try {
                        xml = (new window.DOMParser).parseFromString(data, "text/xml");
                    } catch (e) {}
                    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
                    if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, (function(el) {
                        return el.textContent;
                    })).join("\n") : data));
                    return xml;
                };
                var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
                function buildParams(prefix, obj, traditional, add) {
                    var name;
                    if (Array.isArray(obj)) jQuery.each(obj, (function(i, v) {
                        if (traditional || rbracket.test(prefix)) add(prefix, v); else buildParams(prefix + "[" + ("object" === typeof v && null != v ? i : "") + "]", v, traditional, add);
                    })); else if (!traditional && "object" === toType(obj)) for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add); else add(prefix, obj);
                }
                jQuery.param = function(a, traditional) {
                    var prefix, s = [], add = function(key, valueOrFunction) {
                        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(null == value ? "" : value);
                    };
                    if (null == a) return "";
                    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, (function() {
                        add(this.name, this.value);
                    })); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
                    return s.join("&");
                };
                jQuery.fn.extend({
                    serialize: function() {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        })).filter((function() {
                            var type = this.type;
                            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                        })).map((function(_i, elem) {
                            var val = jQuery(this).val();
                            if (null == val) return null;
                            if (Array.isArray(val)) return jQuery.map(val, (function(val) {
                                return {
                                    name: elem.name,
                                    value: val.replace(rCRLF, "\r\n")
                                };
                            }));
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        })).get();
                    }
                });
                var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
                originAnchor.href = location.href;
                function addToPrefiltersOrTransports(structure) {
                    return function(dataTypeExpression, func) {
                        if ("string" !== typeof dataTypeExpression) {
                            func = dataTypeExpression;
                            dataTypeExpression = "*";
                        }
                        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                        if (isFunction(func)) while (dataType = dataTypes[i++]) if ("+" === dataType[0]) {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else (structure[dataType] = structure[dataType] || []).push(func);
                    };
                }
                function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                    var inspected = {}, seekingTransport = structure === transports;
                    function inspect(dataType) {
                        var selected;
                        inspected[dataType] = true;
                        jQuery.each(structure[dataType] || [], (function(_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            if ("string" === typeof dataTypeOrTransport && !seekingTransport && !inspected[dataTypeOrTransport]) {
                                options.dataTypes.unshift(dataTypeOrTransport);
                                inspect(dataTypeOrTransport);
                                return false;
                            } else if (seekingTransport) return !(selected = dataTypeOrTransport);
                        }));
                        return selected;
                    }
                    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
                }
                function ajaxExtend(target, src) {
                    var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                    for (key in src) if (void 0 !== src[key]) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                    if (deep) jQuery.extend(true, target, deep);
                    return target;
                }
                function ajaxHandleResponses(s, jqXHR, responses) {
                    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                    while ("*" === dataTypes[0]) {
                        dataTypes.shift();
                        if (void 0 === ct) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                    if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                    if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            if (!firstDataType) firstDataType = type;
                        }
                        finalDataType = finalDataType || firstDataType;
                    }
                    if (finalDataType) {
                        if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
                        return responses[finalDataType];
                    }
                }
                function ajaxConvert(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                    if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                    current = dataTypes.shift();
                    while (current) {
                        if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
                        if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
                        prev = current;
                        current = dataTypes.shift();
                        if (current) if ("*" === current) current = prev; else if ("*" !== prev && prev !== current) {
                            conv = converters[prev + " " + current] || converters["* " + current];
                            if (!conv) for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (true === conv) conv = converters[conv2]; else if (true !== converters[conv2]) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                            if (true !== conv) if (conv && s.throws) response = conv(response); else try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: response
                    };
                }
                jQuery.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: location.href,
                        type: "GET",
                        isLocal: rlocalProtocol.test(location.protocol),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": allTypes,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": true,
                            "text json": JSON.parse,
                            "text xml": jQuery.parseXML
                        },
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    ajaxSetup: function(target, settings) {
                        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    ajax: function(url, options) {
                        if ("object" === typeof url) {
                            options = url;
                            url = void 0;
                        }
                        options = options || {};
                        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                            readyState: 0,
                            getResponseHeader: function(key) {
                                var match;
                                if (completed) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                    }
                                    match = responseHeaders[key.toLowerCase() + " "];
                                }
                                return null == match ? null : match.join(", ");
                            },
                            getAllResponseHeaders: function() {
                                return completed ? responseHeadersString : null;
                            },
                            setRequestHeader: function(name, value) {
                                if (null == completed) {
                                    name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },
                            overrideMimeType: function(type) {
                                if (null == completed) s.mimeType = type;
                                return this;
                            },
                            statusCode: function(map) {
                                var code;
                                if (map) if (completed) jqXHR.always(map[jqXHR.status]); else for (code in map) statusCode[code] = [ statusCode[code], map[code] ];
                                return this;
                            },
                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) transport.abort(finalText);
                                done(0, finalText);
                                return this;
                            }
                        };
                        deferred.promise(jqXHR);
                        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                        s.type = options.method || options.type || s.method || s.type;
                        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
                        if (null == s.crossDomain) {
                            urlAnchor = document.createElement("a");
                            try {
                                urlAnchor.href = s.url;
                                urlAnchor.href = urlAnchor.href;
                                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                            } catch (e) {
                                s.crossDomain = true;
                            }
                        }
                        if (s.data && s.processData && "string" !== typeof s.data) s.data = jQuery.param(s.data, s.traditional);
                        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                        if (completed) return jqXHR;
                        fireGlobals = jQuery.event && s.global;
                        if (fireGlobals && 0 === jQuery.active++) jQuery.event.trigger("ajaxStart");
                        s.type = s.type.toUpperCase();
                        s.hasContent = !rnoContent.test(s.type);
                        cacheURL = s.url.replace(rhash, "");
                        if (!s.hasContent) {
                            uncached = s.url.slice(cacheURL.length);
                            if (s.data && (s.processData || "string" === typeof s.data)) {
                                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                                delete s.data;
                            }
                            if (false === s.cache) {
                                cacheURL = cacheURL.replace(rantiCache, "$1");
                                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                            }
                            s.url = cacheURL + uncached;
                        } else if (s.data && s.processData && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded")) s.data = s.data.replace(r20, "+");
                        if (s.ifModified) {
                            if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                            if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                        if (s.data && s.hasContent && false !== s.contentType || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                        for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                        if (s.beforeSend && (false === s.beforeSend.call(callbackContext, jqXHR, s) || completed)) return jqXHR.abort();
                        strAbort = "abort";
                        completeDeferred.add(s.complete);
                        jqXHR.done(s.success);
                        jqXHR.fail(s.error);
                        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                        if (!transport) done(-1, "No Transport"); else {
                            jqXHR.readyState = 1;
                            if (fireGlobals) globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                            if (completed) return jqXHR;
                            if (s.async && s.timeout > 0) timeoutTimer = window.setTimeout((function() {
                                jqXHR.abort("timeout");
                            }), s.timeout);
                            try {
                                completed = false;
                                transport.send(requestHeaders, done);
                            } catch (e) {
                                if (completed) throw e;
                                done(-1, e);
                            }
                        }
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                            if (completed) return;
                            completed = true;
                            if (timeoutTimer) window.clearTimeout(timeoutTimer);
                            transport = void 0;
                            responseHeadersString = headers || "";
                            jqXHR.readyState = status > 0 ? 4 : 0;
                            isSuccess = status >= 200 && status < 300 || 304 === status;
                            if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                            response = ajaxConvert(s, response, jqXHR, isSuccess);
                            if (isSuccess) {
                                if (s.ifModified) {
                                    modified = jqXHR.getResponseHeader("Last-Modified");
                                    if (modified) jQuery.lastModified[cacheURL] = modified;
                                    modified = jqXHR.getResponseHeader("etag");
                                    if (modified) jQuery.etag[cacheURL] = modified;
                                }
                                if (204 === status || "HEAD" === s.type) statusText = "nocontent"; else if (304 === status) statusText = "notmodified"; else {
                                    statusText = response.state;
                                    success = response.data;
                                    error = response.error;
                                    isSuccess = !error;
                                }
                            } else {
                                error = statusText;
                                if (status || !statusText) {
                                    statusText = "error";
                                    if (status < 0) status = 0;
                                }
                            }
                            jqXHR.status = status;
                            jqXHR.statusText = (nativeStatusText || statusText) + "";
                            if (isSuccess) deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]); else deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                            jqXHR.statusCode(statusCode);
                            statusCode = void 0;
                            if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                            completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                                if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                            }
                        }
                        return jqXHR;
                    },
                    getJSON: function(url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function(url, callback) {
                        return jQuery.get(url, void 0, callback, "script");
                    }
                });
                jQuery.each([ "get", "post" ], (function(_i, method) {
                    jQuery[method] = function(url, data, callback, type) {
                        if (isFunction(data)) {
                            type = type || callback;
                            callback = data;
                            data = void 0;
                        }
                        return jQuery.ajax(jQuery.extend({
                            url,
                            type: method,
                            dataType: type,
                            data,
                            success: callback
                        }, jQuery.isPlainObject(url) && url));
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    var i;
                    for (i in s.headers) if ("content-type" === i.toLowerCase()) s.contentType = s.headers[i] || "";
                }));
                jQuery._evalUrl = function(url, options, doc) {
                    return jQuery.ajax({
                        url,
                        type: "GET",
                        dataType: "script",
                        cache: true,
                        async: false,
                        global: false,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(response) {
                            jQuery.globalEval(response, options, doc);
                        }
                    });
                };
                jQuery.fn.extend({
                    wrapAll: function(html) {
                        var wrap;
                        if (this[0]) {
                            if (isFunction(html)) html = html.call(this[0]);
                            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode) wrap.insertBefore(this[0]);
                            wrap.map((function() {
                                var elem = this;
                                while (elem.firstElementChild) elem = elem.firstElementChild;
                                return elem;
                            })).append(this);
                        }
                        return this;
                    },
                    wrapInner: function(html) {
                        if (isFunction(html)) return this.each((function(i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        }));
                        return this.each((function() {
                            var self = jQuery(this), contents = self.contents();
                            if (contents.length) contents.wrapAll(html); else self.append(html);
                        }));
                    },
                    wrap: function(html) {
                        var htmlIsFunction = isFunction(html);
                        return this.each((function(i) {
                            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                        }));
                    },
                    unwrap: function(selector) {
                        this.parent(selector).not("body").each((function() {
                            jQuery(this).replaceWith(this.childNodes);
                        }));
                        return this;
                    }
                });
                jQuery.expr.pseudos.hidden = function(elem) {
                    return !jQuery.expr.pseudos.visible(elem);
                };
                jQuery.expr.pseudos.visible = function(elem) {
                    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                };
                jQuery.ajaxSettings.xhr = function() {
                    try {
                        return new window.XMLHttpRequest;
                    } catch (e) {}
                };
                var xhrSuccessStatus = {
                    0: 200,
                    1223: 204
                }, xhrSupported = jQuery.ajaxSettings.xhr();
                support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
                support.ajax = xhrSupported = !!xhrSupported;
                jQuery.ajaxTransport((function(options) {
                    var callback, errorCallback;
                    if (support.cors || xhrSupported && !options.crossDomain) return {
                        send: function(headers, complete) {
                            var i, xhr = options.xhr();
                            xhr.open(options.type, options.url, options.async, options.username, options.password);
                            if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                            if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                            if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                            for (i in headers) xhr.setRequestHeader(i, headers[i]);
                            callback = function(type) {
                                return function() {
                                    if (callback) {
                                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                        if ("abort" === type) xhr.abort(); else if ("error" === type) if ("number" !== typeof xhr.status) complete(0, "error"); else complete(xhr.status, xhr.statusText); else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "text" !== (xhr.responseType || "text") || "string" !== typeof xhr.responseText ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                };
                            };
                            xhr.onload = callback();
                            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                            if (void 0 !== xhr.onabort) xhr.onabort = errorCallback; else xhr.onreadystatechange = function() {
                                if (4 === xhr.readyState) window.setTimeout((function() {
                                    if (callback) errorCallback();
                                }));
                            };
                            callback = callback("abort");
                            try {
                                xhr.send(options.hasContent && options.data || null);
                            } catch (e) {
                                if (callback) throw e;
                            }
                        },
                        abort: function() {
                            if (callback) callback();
                        }
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    if (s.crossDomain) s.contents.script = false;
                }));
                jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(text) {
                            jQuery.globalEval(text);
                            return text;
                        }
                    }
                });
                jQuery.ajaxPrefilter("script", (function(s) {
                    if (void 0 === s.cache) s.cache = false;
                    if (s.crossDomain) s.type = "GET";
                }));
                jQuery.ajaxTransport("script", (function(s) {
                    if (s.crossDomain || s.scriptAttrs) {
                        var script, callback;
                        return {
                            send: function(_, complete) {
                                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                                    charset: s.scriptCharset,
                                    src: s.url
                                }).on("load error", callback = function(evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) complete("error" === evt.type ? 404 : 200, evt.type);
                                });
                                document.head.appendChild(script[0]);
                            },
                            abort: function() {
                                if (callback) callback();
                            }
                        };
                    }
                }));
                var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                        this[callback] = true;
                        return callback;
                    }
                });
                jQuery.ajaxPrefilter("json jsonp", (function(s, originalSettings, jqXHR) {
                    var callbackName, overwritten, responseContainer, jsonProp = false !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" === typeof s.data && 0 === (s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
                    if (jsonProp || "jsonp" === s.dataTypes[0]) {
                        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                        if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName); else if (false !== s.jsonp) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                        s.converters["script json"] = function() {
                            if (!responseContainer) jQuery.error(callbackName + " was not called");
                            return responseContainer[0];
                        };
                        s.dataTypes[0] = "json";
                        overwritten = window[callbackName];
                        window[callbackName] = function() {
                            responseContainer = arguments;
                        };
                        jqXHR.always((function() {
                            if (void 0 === overwritten) jQuery(window).removeProp(callbackName); else window[callbackName] = overwritten;
                            if (s[callbackName]) {
                                s.jsonpCallback = originalSettings.jsonpCallback;
                                oldCallbacks.push(callbackName);
                            }
                            if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                            responseContainer = overwritten = void 0;
                        }));
                        return "script";
                    }
                }));
                support.createHTMLDocument = function() {
                    var body = document.implementation.createHTMLDocument("").body;
                    body.innerHTML = "<form></form><form></form>";
                    return 2 === body.childNodes.length;
                }();
                jQuery.parseHTML = function(data, context, keepScripts) {
                    if ("string" !== typeof data) return [];
                    if ("boolean" === typeof context) {
                        keepScripts = context;
                        context = false;
                    }
                    var base, parsed, scripts;
                    if (!context) if (support.createHTMLDocument) {
                        context = document.implementation.createHTMLDocument("");
                        base = context.createElement("base");
                        base.href = document.location.href;
                        context.head.appendChild(base);
                    } else context = document;
                    parsed = rsingleTag.exec(data);
                    scripts = !keepScripts && [];
                    if (parsed) return [ context.createElement(parsed[1]) ];
                    parsed = buildFragment([ data ], context, scripts);
                    if (scripts && scripts.length) jQuery(scripts).remove();
                    return jQuery.merge([], parsed.childNodes);
                };
                jQuery.fn.load = function(url, params, callback) {
                    var selector, type, response, self = this, off = url.indexOf(" ");
                    if (off > -1) {
                        selector = stripAndCollapse(url.slice(off));
                        url = url.slice(0, off);
                    }
                    if (isFunction(params)) {
                        callback = params;
                        params = void 0;
                    } else if (params && "object" === typeof params) type = "POST";
                    if (self.length > 0) jQuery.ajax({
                        url,
                        type: type || "GET",
                        dataType: "html",
                        data: params
                    }).done((function(responseText) {
                        response = arguments;
                        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                    })).always(callback && function(jqXHR, status) {
                        self.each((function() {
                            callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                        }));
                    });
                    return this;
                };
                jQuery.expr.pseudos.animated = function(elem) {
                    return jQuery.grep(jQuery.timers, (function(fn) {
                        return elem === fn.elem;
                    })).length;
                };
                jQuery.offset = {
                    setOffset: function(elem, options, i) {
                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                        if ("static" === position) elem.style.position = "relative";
                        curOffset = curElem.offset();
                        curCSSTop = jQuery.css(elem, "top");
                        curCSSLeft = jQuery.css(elem, "left");
                        calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                        if (calculatePosition) {
                            curPosition = curElem.position();
                            curTop = curPosition.top;
                            curLeft = curPosition.left;
                        } else {
                            curTop = parseFloat(curCSSTop) || 0;
                            curLeft = parseFloat(curCSSLeft) || 0;
                        }
                        if (isFunction(options)) options = options.call(elem, i, jQuery.extend({}, curOffset));
                        if (null != options.top) props.top = options.top - curOffset.top + curTop;
                        if (null != options.left) props.left = options.left - curOffset.left + curLeft;
                        if ("using" in options) options.using.call(elem, props); else curElem.css(props);
                    }
                };
                jQuery.fn.extend({
                    offset: function(options) {
                        if (arguments.length) return void 0 === options ? this : this.each((function(i) {
                            jQuery.offset.setOffset(this, options, i);
                        }));
                        var rect, win, elem = this[0];
                        if (!elem) return;
                        if (!elem.getClientRects().length) return {
                            top: 0,
                            left: 0
                        };
                        rect = elem.getBoundingClientRect();
                        win = elem.ownerDocument.defaultView;
                        return {
                            top: rect.top + win.pageYOffset,
                            left: rect.left + win.pageXOffset
                        };
                    },
                    position: function() {
                        if (!this[0]) return;
                        var offsetParent, offset, doc, elem = this[0], parentOffset = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === jQuery.css(elem, "position")) offset = elem.getBoundingClientRect(); else {
                            offset = this.offset();
                            doc = elem.ownerDocument;
                            offsetParent = elem.offsetParent || doc.documentElement;
                            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && "static" === jQuery.css(offsetParent, "position")) offsetParent = offsetParent.parentNode;
                            if (offsetParent && offsetParent !== elem && 1 === offsetParent.nodeType) {
                                parentOffset = jQuery(offsetParent).offset();
                                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                            }
                        }
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                        };
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            var offsetParent = this.offsetParent;
                            while (offsetParent && "static" === jQuery.css(offsetParent, "position")) offsetParent = offsetParent.offsetParent;
                            return offsetParent || documentElement;
                        }));
                    }
                });
                jQuery.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(method, prop) {
                    var top = "pageYOffset" === prop;
                    jQuery.fn[method] = function(val) {
                        return access(this, (function(elem, method, val) {
                            var win;
                            if (isWindow(elem)) win = elem; else if (9 === elem.nodeType) win = elem.defaultView;
                            if (void 0 === val) return win ? win[prop] : elem[method];
                            if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset); else elem[method] = val;
                        }), method, val, arguments.length);
                    };
                }));
                jQuery.each([ "top", "left" ], (function(_i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, (function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }));
                }));
                jQuery.each({
                    Height: "height",
                    Width: "width"
                }, (function(name, type) {
                    jQuery.each({
                        padding: "inner" + name,
                        content: type,
                        "": "outer" + name
                    }, (function(defaultExtra, funcName) {
                        jQuery.fn[funcName] = function(margin, value) {
                            var chainable = arguments.length && (defaultExtra || "boolean" !== typeof margin), extra = defaultExtra || (true === margin || true === value ? "margin" : "border");
                            return access(this, (function(elem, type, value) {
                                var doc;
                                if (isWindow(elem)) return 0 === funcName.indexOf("outer") ? elem["inner" + name] : elem.document.documentElement["client" + name];
                                if (9 === elem.nodeType) {
                                    doc = elem.documentElement;
                                    return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                                }
                                return void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                            }), type, chainable ? margin : void 0, chainable);
                        };
                    }));
                }));
                jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(_i, type) {
                    jQuery.fn[type] = function(fn) {
                        return this.on(type, fn);
                    };
                }));
                jQuery.fn.extend({
                    bind: function(types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function(types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function(selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function(selector, types, fn) {
                        return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                    },
                    hover: function(fnOver, fnOut) {
                        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                    }
                });
                jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function(_i, name) {
                    jQuery.fn[name] = function(data, fn) {
                        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                    };
                }));
                var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                jQuery.proxy = function(fn, context) {
                    var tmp, args, proxy;
                    if ("string" === typeof context) {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp;
                    }
                    if (!isFunction(fn)) return;
                    args = slice.call(arguments, 2);
                    proxy = function() {
                        return fn.apply(context || this, args.concat(slice.call(arguments)));
                    };
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy;
                };
                jQuery.holdReady = function(hold) {
                    if (hold) jQuery.readyWait++; else jQuery.ready(true);
                };
                jQuery.isArray = Array.isArray;
                jQuery.parseJSON = JSON.parse;
                jQuery.nodeName = nodeName;
                jQuery.isFunction = isFunction;
                jQuery.isWindow = isWindow;
                jQuery.camelCase = camelCase;
                jQuery.type = toType;
                jQuery.now = Date.now;
                jQuery.isNumeric = function(obj) {
                    var type = jQuery.type(obj);
                    return ("number" === type || "string" === type) && !isNaN(obj - parseFloat(obj));
                };
                jQuery.trim = function(text) {
                    return null == text ? "" : (text + "").replace(rtrim, "$1");
                };
                if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return jQuery;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                var _jQuery = window.jQuery, _$ = window.$;
                jQuery.noConflict = function(deep) {
                    if (window.$ === jQuery) window.$ = _$;
                    if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
                    return jQuery;
                };
                if ("undefined" === typeof noGlobal) window.jQuery = window.$ = jQuery;
                return jQuery;
            }));
        },
        154: (module, exports, __webpack_require__) => {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (function(factory) {
                "use strict";
                if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(755) ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
                __WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
                void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            })((function($) {
                "use strict";
                var Slick = window.Slick || {};
                Slick = function() {
                    var instanceUid = 0;
                    function Slick(element, settings) {
                        var dataSettings, _ = this;
                        _.defaults = {
                            accessibility: true,
                            adaptiveHeight: false,
                            appendArrows: $(element),
                            appendDots: $(element),
                            arrows: true,
                            asNavFor: null,
                            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                            autoplay: false,
                            autoplaySpeed: 3e3,
                            centerMode: false,
                            centerPadding: "50px",
                            cssEase: "ease",
                            customPaging: function(slider, i) {
                                return $('<button type="button" />').text(i + 1);
                            },
                            dots: false,
                            dotsClass: "slick-dots",
                            draggable: true,
                            easing: "linear",
                            edgeFriction: .35,
                            fade: false,
                            focusOnSelect: false,
                            focusOnChange: false,
                            infinite: true,
                            initialSlide: 0,
                            lazyLoad: "ondemand",
                            mobileFirst: false,
                            pauseOnHover: true,
                            pauseOnFocus: true,
                            pauseOnDotsHover: false,
                            respondTo: "window",
                            responsive: null,
                            rows: 1,
                            rtl: false,
                            slide: "",
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 500,
                            swipe: true,
                            swipeToSlide: false,
                            touchMove: true,
                            touchThreshold: 5,
                            useCSS: true,
                            useTransform: true,
                            variableWidth: false,
                            vertical: false,
                            verticalSwiping: false,
                            waitForAnimate: true,
                            zIndex: 1e3
                        };
                        _.initials = {
                            animating: false,
                            dragging: false,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            scrolling: false,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: false,
                            slideOffset: 0,
                            swipeLeft: null,
                            swiping: false,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: false,
                            unslicked: false
                        };
                        $.extend(_, _.initials);
                        _.activeBreakpoint = null;
                        _.animType = null;
                        _.animProp = null;
                        _.breakpoints = [];
                        _.breakpointSettings = [];
                        _.cssTransitions = false;
                        _.focussed = false;
                        _.interrupted = false;
                        _.hidden = "hidden";
                        _.paused = true;
                        _.positionProp = null;
                        _.respondTo = null;
                        _.rowCount = 1;
                        _.shouldClick = true;
                        _.$slider = $(element);
                        _.$slidesCache = null;
                        _.transformType = null;
                        _.transitionType = null;
                        _.visibilityChange = "visibilitychange";
                        _.windowWidth = 0;
                        _.windowTimer = null;
                        dataSettings = $(element).data("slick") || {};
                        _.options = $.extend({}, _.defaults, settings, dataSettings);
                        _.currentSlide = _.options.initialSlide;
                        _.originalSettings = _.options;
                        if ("undefined" !== typeof document.mozHidden) {
                            _.hidden = "mozHidden";
                            _.visibilityChange = "mozvisibilitychange";
                        } else if ("undefined" !== typeof document.webkitHidden) {
                            _.hidden = "webkitHidden";
                            _.visibilityChange = "webkitvisibilitychange";
                        }
                        _.autoPlay = $.proxy(_.autoPlay, _);
                        _.autoPlayClear = $.proxy(_.autoPlayClear, _);
                        _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
                        _.changeSlide = $.proxy(_.changeSlide, _);
                        _.clickHandler = $.proxy(_.clickHandler, _);
                        _.selectHandler = $.proxy(_.selectHandler, _);
                        _.setPosition = $.proxy(_.setPosition, _);
                        _.swipeHandler = $.proxy(_.swipeHandler, _);
                        _.dragHandler = $.proxy(_.dragHandler, _);
                        _.keyHandler = $.proxy(_.keyHandler, _);
                        _.instanceUid = instanceUid++;
                        _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
                        _.registerBreakpoints();
                        _.init(true);
                    }
                    return Slick;
                }();
                Slick.prototype.activateADA = function() {
                    var _ = this;
                    _.$slideTrack.find(".slick-active").attr({
                        "aria-hidden": "false"
                    }).find("a, input, button, select").attr({
                        tabindex: "0"
                    });
                };
                Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {
                    var _ = this;
                    if ("boolean" === typeof index) {
                        addBefore = index;
                        index = null;
                    } else if (index < 0 || index >= _.slideCount) return false;
                    _.unload();
                    if ("number" === typeof index) if (0 === index && 0 === _.$slides.length) $(markup).appendTo(_.$slideTrack); else if (addBefore) $(markup).insertBefore(_.$slides.eq(index)); else $(markup).insertAfter(_.$slides.eq(index)); else if (true === addBefore) $(markup).prependTo(_.$slideTrack); else $(markup).appendTo(_.$slideTrack);
                    _.$slides = _.$slideTrack.children(this.options.slide);
                    _.$slideTrack.children(this.options.slide).detach();
                    _.$slideTrack.append(_.$slides);
                    _.$slides.each((function(index, element) {
                        $(element).attr("data-slick-index", index);
                    }));
                    _.$slidesCache = _.$slides;
                    _.reinit();
                };
                Slick.prototype.animateHeight = function() {
                    var _ = this;
                    if (1 === _.options.slidesToShow && true === _.options.adaptiveHeight && false === _.options.vertical) {
                        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                        _.$list.animate({
                            height: targetHeight
                        }, _.options.speed);
                    }
                };
                Slick.prototype.animateSlide = function(targetLeft, callback) {
                    var animProps = {}, _ = this;
                    _.animateHeight();
                    if (true === _.options.rtl && false === _.options.vertical) targetLeft = -targetLeft;
                    if (false === _.transformsEnabled) if (false === _.options.vertical) _.$slideTrack.animate({
                        left: targetLeft
                    }, _.options.speed, _.options.easing, callback); else _.$slideTrack.animate({
                        top: targetLeft
                    }, _.options.speed, _.options.easing, callback); else if (false === _.cssTransitions) {
                        if (true === _.options.rtl) _.currentLeft = -_.currentLeft;
                        $({
                            animStart: _.currentLeft
                        }).animate({
                            animStart: targetLeft
                        }, {
                            duration: _.options.speed,
                            easing: _.options.easing,
                            step: function(now) {
                                now = Math.ceil(now);
                                if (false === _.options.vertical) {
                                    animProps[_.animType] = "translate(" + now + "px, 0px)";
                                    _.$slideTrack.css(animProps);
                                } else {
                                    animProps[_.animType] = "translate(0px," + now + "px)";
                                    _.$slideTrack.css(animProps);
                                }
                            },
                            complete: function() {
                                if (callback) callback.call();
                            }
                        });
                    } else {
                        _.applyTransition();
                        targetLeft = Math.ceil(targetLeft);
                        if (false === _.options.vertical) animProps[_.animType] = "translate3d(" + targetLeft + "px, 0px, 0px)"; else animProps[_.animType] = "translate3d(0px," + targetLeft + "px, 0px)";
                        _.$slideTrack.css(animProps);
                        if (callback) setTimeout((function() {
                            _.disableTransition();
                            callback.call();
                        }), _.options.speed);
                    }
                };
                Slick.prototype.getNavTarget = function() {
                    var _ = this, asNavFor = _.options.asNavFor;
                    if (asNavFor && null !== asNavFor) asNavFor = $(asNavFor).not(_.$slider);
                    return asNavFor;
                };
                Slick.prototype.asNavFor = function(index) {
                    var _ = this, asNavFor = _.getNavTarget();
                    if (null !== asNavFor && "object" === typeof asNavFor) asNavFor.each((function() {
                        var target = $(this).slick("getSlick");
                        if (!target.unslicked) target.slideHandler(index, true);
                    }));
                };
                Slick.prototype.applyTransition = function(slide) {
                    var _ = this, transition = {};
                    if (false === _.options.fade) transition[_.transitionType] = _.transformType + " " + _.options.speed + "ms " + _.options.cssEase; else transition[_.transitionType] = "opacity " + _.options.speed + "ms " + _.options.cssEase;
                    if (false === _.options.fade) _.$slideTrack.css(transition); else _.$slides.eq(slide).css(transition);
                };
                Slick.prototype.autoPlay = function() {
                    var _ = this;
                    _.autoPlayClear();
                    if (_.slideCount > _.options.slidesToShow) _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
                };
                Slick.prototype.autoPlayClear = function() {
                    var _ = this;
                    if (_.autoPlayTimer) clearInterval(_.autoPlayTimer);
                };
                Slick.prototype.autoPlayIterator = function() {
                    var _ = this, slideTo = _.currentSlide + _.options.slidesToScroll;
                    if (!_.paused && !_.interrupted && !_.focussed) {
                        if (false === _.options.infinite) if (1 === _.direction && _.currentSlide + 1 === _.slideCount - 1) _.direction = 0; else if (0 === _.direction) {
                            slideTo = _.currentSlide - _.options.slidesToScroll;
                            if (_.currentSlide - 1 === 0) _.direction = 1;
                        }
                        _.slideHandler(slideTo);
                    }
                };
                Slick.prototype.buildArrows = function() {
                    var _ = this;
                    if (true === _.options.arrows) {
                        _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
                        _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");
                        if (_.slideCount > _.options.slidesToShow) {
                            _.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                            _.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                            if (_.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.prependTo(_.options.appendArrows);
                            if (_.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.appendTo(_.options.appendArrows);
                            if (true !== _.options.infinite) _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        } else _.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({
                            "aria-disabled": "true",
                            tabindex: "-1"
                        });
                    }
                };
                Slick.prototype.buildDots = function() {
                    var i, dot, _ = this;
                    if (true === _.options.dots && _.slideCount > _.options.slidesToShow) {
                        _.$slider.addClass("slick-dotted");
                        dot = $("<ul />").addClass(_.options.dotsClass);
                        for (i = 0; i <= _.getDotCount(); i += 1) dot.append($("<li />").append(_.options.customPaging.call(this, _, i)));
                        _.$dots = dot.appendTo(_.options.appendDots);
                        _.$dots.find("li").first().addClass("slick-active");
                    }
                };
                Slick.prototype.buildOut = function() {
                    var _ = this;
                    _.$slides = _.$slider.children(_.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
                    _.slideCount = _.$slides.length;
                    _.$slides.each((function(index, element) {
                        $(element).attr("data-slick-index", index).data("originalStyling", $(element).attr("style") || "");
                    }));
                    _.$slider.addClass("slick-slider");
                    _.$slideTrack = 0 === _.slideCount ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
                    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
                    _.$slideTrack.css("opacity", 0);
                    if (true === _.options.centerMode || true === _.options.swipeToSlide) _.options.slidesToScroll = 1;
                    $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
                    _.setupInfinite();
                    _.buildArrows();
                    _.buildDots();
                    _.updateDots();
                    _.setSlideClasses("number" === typeof _.currentSlide ? _.currentSlide : 0);
                    if (true === _.options.draggable) _.$list.addClass("draggable");
                };
                Slick.prototype.buildRows = function() {
                    var a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection, _ = this;
                    newSlides = document.createDocumentFragment();
                    originalSlides = _.$slider.children();
                    if (_.options.rows > 0) {
                        slidesPerSection = _.options.slidesPerRow * _.options.rows;
                        numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
                        for (a = 0; a < numOfSlides; a++) {
                            var slide = document.createElement("div");
                            for (b = 0; b < _.options.rows; b++) {
                                var row = document.createElement("div");
                                for (c = 0; c < _.options.slidesPerRow; c++) {
                                    var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                                    if (originalSlides.get(target)) row.appendChild(originalSlides.get(target));
                                }
                                slide.appendChild(row);
                            }
                            newSlides.appendChild(slide);
                        }
                        _.$slider.empty().append(newSlides);
                        _.$slider.children().children().children().css({
                            width: 100 / _.options.slidesPerRow + "%",
                            display: "inline-block"
                        });
                    }
                };
                Slick.prototype.checkResponsive = function(initial, forceUpdate) {
                    var breakpoint, targetBreakpoint, respondToWidth, _ = this, triggerBreakpoint = false;
                    var sliderWidth = _.$slider.width();
                    var windowWidth = window.innerWidth || $(window).width();
                    if ("window" === _.respondTo) respondToWidth = windowWidth; else if ("slider" === _.respondTo) respondToWidth = sliderWidth; else if ("min" === _.respondTo) respondToWidth = Math.min(windowWidth, sliderWidth);
                    if (_.options.responsive && _.options.responsive.length && null !== _.options.responsive) {
                        targetBreakpoint = null;
                        for (breakpoint in _.breakpoints) if (_.breakpoints.hasOwnProperty(breakpoint)) if (false === _.originalSettings.mobileFirst) {
                            if (respondToWidth < _.breakpoints[breakpoint]) targetBreakpoint = _.breakpoints[breakpoint];
                        } else if (respondToWidth > _.breakpoints[breakpoint]) targetBreakpoint = _.breakpoints[breakpoint];
                        if (null !== targetBreakpoint) if (null !== _.activeBreakpoint) {
                            if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                                _.activeBreakpoint = targetBreakpoint;
                                if ("unslick" === _.breakpointSettings[targetBreakpoint]) _.unslick(targetBreakpoint); else {
                                    _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                                    if (true === initial) _.currentSlide = _.options.initialSlide;
                                    _.refresh(initial);
                                }
                                triggerBreakpoint = targetBreakpoint;
                            }
                        } else {
                            _.activeBreakpoint = targetBreakpoint;
                            if ("unslick" === _.breakpointSettings[targetBreakpoint]) _.unslick(targetBreakpoint); else {
                                _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                                if (true === initial) _.currentSlide = _.options.initialSlide;
                                _.refresh(initial);
                            }
                            triggerBreakpoint = targetBreakpoint;
                        } else if (null !== _.activeBreakpoint) {
                            _.activeBreakpoint = null;
                            _.options = _.originalSettings;
                            if (true === initial) _.currentSlide = _.options.initialSlide;
                            _.refresh(initial);
                            triggerBreakpoint = targetBreakpoint;
                        }
                        if (!initial && false !== triggerBreakpoint) _.$slider.trigger("breakpoint", [ _, triggerBreakpoint ]);
                    }
                };
                Slick.prototype.changeSlide = function(event, dontAnimate) {
                    var indexOffset, slideOffset, unevenOffset, _ = this, $target = $(event.currentTarget);
                    if ($target.is("a")) event.preventDefault();
                    if (!$target.is("li")) $target = $target.closest("li");
                    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
                    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
                    switch (event.data.message) {
                      case "previous":
                        slideOffset = 0 === indexOffset ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                        if (_.slideCount > _.options.slidesToShow) _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                        break;

                      case "next":
                        slideOffset = 0 === indexOffset ? _.options.slidesToScroll : indexOffset;
                        if (_.slideCount > _.options.slidesToShow) _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                        break;

                      case "index":
                        var index = 0 === event.data.index ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;
                        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                        $target.children().trigger("focus");
                        break;

                      default:
                        return;
                    }
                };
                Slick.prototype.checkNavigable = function(index) {
                    var navigables, prevNavigable, _ = this;
                    navigables = _.getNavigableIndexes();
                    prevNavigable = 0;
                    if (index > navigables[navigables.length - 1]) index = navigables[navigables.length - 1]; else for (var n in navigables) {
                        if (index < navigables[n]) {
                            index = prevNavigable;
                            break;
                        }
                        prevNavigable = navigables[n];
                    }
                    return index;
                };
                Slick.prototype.cleanUpEvents = function() {
                    var _ = this;
                    if (_.options.dots && null !== _.$dots) {
                        $("li", _.$dots).off("click.slick", _.changeSlide).off("mouseenter.slick", $.proxy(_.interrupt, _, true)).off("mouseleave.slick", $.proxy(_.interrupt, _, false));
                        if (true === _.options.accessibility) _.$dots.off("keydown.slick", _.keyHandler);
                    }
                    _.$slider.off("focus.slick blur.slick");
                    if (true === _.options.arrows && _.slideCount > _.options.slidesToShow) {
                        _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
                        _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);
                        if (true === _.options.accessibility) {
                            _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
                            _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
                        }
                    }
                    _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
                    _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
                    _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
                    _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
                    _.$list.off("click.slick", _.clickHandler);
                    $(document).off(_.visibilityChange, _.visibility);
                    _.cleanUpSlideEvents();
                    if (true === _.options.accessibility) _.$list.off("keydown.slick", _.keyHandler);
                    if (true === _.options.focusOnSelect) $(_.$slideTrack).children().off("click.slick", _.selectHandler);
                    $(window).off("orientationchange.slick.slick-" + _.instanceUid, _.orientationChange);
                    $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
                    $("[draggable!=true]", _.$slideTrack).off("dragstart", _.preventDefault);
                    $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
                };
                Slick.prototype.cleanUpSlideEvents = function() {
                    var _ = this;
                    _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
                    _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
                };
                Slick.prototype.cleanUpRows = function() {
                    var originalSlides, _ = this;
                    if (_.options.rows > 0) {
                        originalSlides = _.$slides.children().children();
                        originalSlides.removeAttr("style");
                        _.$slider.empty().append(originalSlides);
                    }
                };
                Slick.prototype.clickHandler = function(event) {
                    var _ = this;
                    if (false === _.shouldClick) {
                        event.stopImmediatePropagation();
                        event.stopPropagation();
                        event.preventDefault();
                    }
                };
                Slick.prototype.destroy = function(refresh) {
                    var _ = this;
                    _.autoPlayClear();
                    _.touchObject = {};
                    _.cleanUpEvents();
                    $(".slick-cloned", _.$slider).detach();
                    if (_.$dots) _.$dots.remove();
                    if (_.$prevArrow && _.$prevArrow.length) {
                        _.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                        if (_.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.remove();
                    }
                    if (_.$nextArrow && _.$nextArrow.length) {
                        _.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                        if (_.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.remove();
                    }
                    if (_.$slides) {
                        _.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                            $(this).attr("style", $(this).data("originalStyling"));
                        }));
                        _.$slideTrack.children(this.options.slide).detach();
                        _.$slideTrack.detach();
                        _.$list.detach();
                        _.$slider.append(_.$slides);
                    }
                    _.cleanUpRows();
                    _.$slider.removeClass("slick-slider");
                    _.$slider.removeClass("slick-initialized");
                    _.$slider.removeClass("slick-dotted");
                    _.unslicked = true;
                    if (!refresh) _.$slider.trigger("destroy", [ _ ]);
                };
                Slick.prototype.disableTransition = function(slide) {
                    var _ = this, transition = {};
                    transition[_.transitionType] = "";
                    if (false === _.options.fade) _.$slideTrack.css(transition); else _.$slides.eq(slide).css(transition);
                };
                Slick.prototype.fadeSlide = function(slideIndex, callback) {
                    var _ = this;
                    if (false === _.cssTransitions) {
                        _.$slides.eq(slideIndex).css({
                            zIndex: _.options.zIndex
                        });
                        _.$slides.eq(slideIndex).animate({
                            opacity: 1
                        }, _.options.speed, _.options.easing, callback);
                    } else {
                        _.applyTransition(slideIndex);
                        _.$slides.eq(slideIndex).css({
                            opacity: 1,
                            zIndex: _.options.zIndex
                        });
                        if (callback) setTimeout((function() {
                            _.disableTransition(slideIndex);
                            callback.call();
                        }), _.options.speed);
                    }
                };
                Slick.prototype.fadeSlideOut = function(slideIndex) {
                    var _ = this;
                    if (false === _.cssTransitions) _.$slides.eq(slideIndex).animate({
                        opacity: 0,
                        zIndex: _.options.zIndex - 2
                    }, _.options.speed, _.options.easing); else {
                        _.applyTransition(slideIndex);
                        _.$slides.eq(slideIndex).css({
                            opacity: 0,
                            zIndex: _.options.zIndex - 2
                        });
                    }
                };
                Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {
                    var _ = this;
                    if (null !== filter) {
                        _.$slidesCache = _.$slides;
                        _.unload();
                        _.$slideTrack.children(this.options.slide).detach();
                        _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
                        _.reinit();
                    }
                };
                Slick.prototype.focusHandler = function() {
                    var _ = this;
                    _.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(event) {
                        event.stopImmediatePropagation();
                        var $sf = $(this);
                        setTimeout((function() {
                            if (_.options.pauseOnFocus) {
                                _.focussed = $sf.is(":focus");
                                _.autoPlay();
                            }
                        }), 0);
                    }));
                };
                Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {
                    var _ = this;
                    return _.currentSlide;
                };
                Slick.prototype.getDotCount = function() {
                    var _ = this;
                    var breakPoint = 0;
                    var counter = 0;
                    var pagerQty = 0;
                    if (true === _.options.infinite) if (_.slideCount <= _.options.slidesToShow) ++pagerQty; else while (breakPoint < _.slideCount) {
                        ++pagerQty;
                        breakPoint = counter + _.options.slidesToScroll;
                        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    } else if (true === _.options.centerMode) pagerQty = _.slideCount; else if (!_.options.asNavFor) pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll); else while (breakPoint < _.slideCount) {
                        ++pagerQty;
                        breakPoint = counter + _.options.slidesToScroll;
                        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                    return pagerQty - 1;
                };
                Slick.prototype.getLeft = function(slideIndex) {
                    var targetLeft, verticalHeight, targetSlide, coef, _ = this, verticalOffset = 0;
                    _.slideOffset = 0;
                    verticalHeight = _.$slides.first().outerHeight(true);
                    if (true === _.options.infinite) {
                        if (_.slideCount > _.options.slidesToShow) {
                            _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                            coef = -1;
                            if (true === _.options.vertical && true === _.options.centerMode) if (2 === _.options.slidesToShow) coef = -1.5; else if (1 === _.options.slidesToShow) coef = -2;
                            verticalOffset = verticalHeight * _.options.slidesToShow * coef;
                        }
                        if (_.slideCount % _.options.slidesToScroll !== 0) if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) if (slideIndex > _.slideCount) {
                            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                        } else {
                            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                        }
                    } else if (slideIndex + _.options.slidesToShow > _.slideCount) {
                        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
                    }
                    if (_.slideCount <= _.options.slidesToShow) {
                        _.slideOffset = 0;
                        verticalOffset = 0;
                    }
                    if (true === _.options.centerMode && _.slideCount <= _.options.slidesToShow) _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2; else if (true === _.options.centerMode && true === _.options.infinite) _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth; else if (true === _.options.centerMode) {
                        _.slideOffset = 0;
                        _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
                    }
                    if (false === _.options.vertical) targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset; else targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
                    if (true === _.options.variableWidth) {
                        if (_.slideCount <= _.options.slidesToShow || false === _.options.infinite) targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex); else targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow);
                        if (true === _.options.rtl) if (targetSlide[0]) targetLeft = -1 * (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()); else targetLeft = 0; else targetLeft = targetSlide[0] ? -1 * targetSlide[0].offsetLeft : 0;
                        if (true === _.options.centerMode) {
                            if (_.slideCount <= _.options.slidesToShow || false === _.options.infinite) targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex); else targetSlide = _.$slideTrack.children(".slick-slide").eq(slideIndex + _.options.slidesToShow + 1);
                            if (true === _.options.rtl) if (targetSlide[0]) targetLeft = -1 * (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()); else targetLeft = 0; else targetLeft = targetSlide[0] ? -1 * targetSlide[0].offsetLeft : 0;
                            targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
                        }
                    }
                    return targetLeft;
                };
                Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {
                    var _ = this;
                    return _.options[option];
                };
                Slick.prototype.getNavigableIndexes = function() {
                    var max, _ = this, breakPoint = 0, counter = 0, indexes = [];
                    if (false === _.options.infinite) max = _.slideCount; else {
                        breakPoint = -1 * _.options.slidesToScroll;
                        counter = -1 * _.options.slidesToScroll;
                        max = 2 * _.slideCount;
                    }
                    while (breakPoint < max) {
                        indexes.push(breakPoint);
                        breakPoint = counter + _.options.slidesToScroll;
                        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                    }
                    return indexes;
                };
                Slick.prototype.getSlick = function() {
                    return this;
                };
                Slick.prototype.getSlideCount = function() {
                    var slidesTraversed, swipedSlide, centerOffset, _ = this;
                    centerOffset = true === _.options.centerMode ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;
                    if (true === _.options.swipeToSlide) {
                        _.$slideTrack.find(".slick-slide").each((function(index, slide) {
                            if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > -1 * _.swipeLeft) {
                                swipedSlide = slide;
                                return false;
                            }
                        }));
                        slidesTraversed = Math.abs($(swipedSlide).attr("data-slick-index") - _.currentSlide) || 1;
                        return slidesTraversed;
                    } else return _.options.slidesToScroll;
                };
                Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {
                    var _ = this;
                    _.changeSlide({
                        data: {
                            message: "index",
                            index: parseInt(slide)
                        }
                    }, dontAnimate);
                };
                Slick.prototype.init = function(creation) {
                    var _ = this;
                    if (!$(_.$slider).hasClass("slick-initialized")) {
                        $(_.$slider).addClass("slick-initialized");
                        _.buildRows();
                        _.buildOut();
                        _.setProps();
                        _.startLoad();
                        _.loadSlider();
                        _.initializeEvents();
                        _.updateArrows();
                        _.updateDots();
                        _.checkResponsive(true);
                        _.focusHandler();
                    }
                    if (creation) _.$slider.trigger("init", [ _ ]);
                    if (true === _.options.accessibility) _.initADA();
                    if (_.options.autoplay) {
                        _.paused = false;
                        _.autoPlay();
                    }
                };
                Slick.prototype.initADA = function() {
                    var _ = this, numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow), tabControlIndexes = _.getNavigableIndexes().filter((function(val) {
                        return val >= 0 && val < _.slideCount;
                    }));
                    _.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }).find("a, input, button, select").attr({
                        tabindex: "-1"
                    });
                    if (null !== _.$dots) {
                        _.$slides.not(_.$slideTrack.find(".slick-cloned")).each((function(i) {
                            var slideControlIndex = tabControlIndexes.indexOf(i);
                            $(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + _.instanceUid + i,
                                tabindex: -1
                            });
                            if (-1 !== slideControlIndex) {
                                var ariaButtonControl = "slick-slide-control" + _.instanceUid + slideControlIndex;
                                if ($("#" + ariaButtonControl).length) $(this).attr({
                                    "aria-describedby": ariaButtonControl
                                });
                            }
                        }));
                        _.$dots.attr("role", "tablist").find("li").each((function(i) {
                            var mappedSlideIndex = tabControlIndexes[i];
                            $(this).attr({
                                role: "presentation"
                            });
                            $(this).find("button").first().attr({
                                role: "tab",
                                id: "slick-slide-control" + _.instanceUid + i,
                                "aria-controls": "slick-slide" + _.instanceUid + mappedSlideIndex,
                                "aria-label": i + 1 + " of " + numDotGroups,
                                "aria-selected": null,
                                tabindex: "-1"
                            });
                        })).eq(_.currentSlide).find("button").attr({
                            "aria-selected": "true",
                            tabindex: "0"
                        }).end();
                    }
                    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) if (_.options.focusOnChange) _.$slides.eq(i).attr({
                        tabindex: "0"
                    }); else _.$slides.eq(i).removeAttr("tabindex");
                    _.activateADA();
                };
                Slick.prototype.initArrowEvents = function() {
                    var _ = this;
                    if (true === _.options.arrows && _.slideCount > _.options.slidesToShow) {
                        _.$prevArrow.off("click.slick").on("click.slick", {
                            message: "previous"
                        }, _.changeSlide);
                        _.$nextArrow.off("click.slick").on("click.slick", {
                            message: "next"
                        }, _.changeSlide);
                        if (true === _.options.accessibility) {
                            _.$prevArrow.on("keydown.slick", _.keyHandler);
                            _.$nextArrow.on("keydown.slick", _.keyHandler);
                        }
                    }
                };
                Slick.prototype.initDotEvents = function() {
                    var _ = this;
                    if (true === _.options.dots && _.slideCount > _.options.slidesToShow) {
                        $("li", _.$dots).on("click.slick", {
                            message: "index"
                        }, _.changeSlide);
                        if (true === _.options.accessibility) _.$dots.on("keydown.slick", _.keyHandler);
                    }
                    if (true === _.options.dots && true === _.options.pauseOnDotsHover && _.slideCount > _.options.slidesToShow) $("li", _.$dots).on("mouseenter.slick", $.proxy(_.interrupt, _, true)).on("mouseleave.slick", $.proxy(_.interrupt, _, false));
                };
                Slick.prototype.initSlideEvents = function() {
                    var _ = this;
                    if (_.options.pauseOnHover) {
                        _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
                        _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
                    }
                };
                Slick.prototype.initializeEvents = function() {
                    var _ = this;
                    _.initArrowEvents();
                    _.initDotEvents();
                    _.initSlideEvents();
                    _.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, _.swipeHandler);
                    _.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, _.swipeHandler);
                    _.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, _.swipeHandler);
                    _.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, _.swipeHandler);
                    _.$list.on("click.slick", _.clickHandler);
                    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
                    if (true === _.options.accessibility) _.$list.on("keydown.slick", _.keyHandler);
                    if (true === _.options.focusOnSelect) $(_.$slideTrack).children().on("click.slick", _.selectHandler);
                    $(window).on("orientationchange.slick.slick-" + _.instanceUid, $.proxy(_.orientationChange, _));
                    $(window).on("resize.slick.slick-" + _.instanceUid, $.proxy(_.resize, _));
                    $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
                    $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
                    $(_.setPosition);
                };
                Slick.prototype.initUI = function() {
                    var _ = this;
                    if (true === _.options.arrows && _.slideCount > _.options.slidesToShow) {
                        _.$prevArrow.show();
                        _.$nextArrow.show();
                    }
                    if (true === _.options.dots && _.slideCount > _.options.slidesToShow) _.$dots.show();
                };
                Slick.prototype.keyHandler = function(event) {
                    var _ = this;
                    if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) if (37 === event.keyCode && true === _.options.accessibility) _.changeSlide({
                        data: {
                            message: true === _.options.rtl ? "next" : "previous"
                        }
                    }); else if (39 === event.keyCode && true === _.options.accessibility) _.changeSlide({
                        data: {
                            message: true === _.options.rtl ? "previous" : "next"
                        }
                    });
                };
                Slick.prototype.lazyLoad = function() {
                    var loadRange, cloneRange, rangeStart, rangeEnd, _ = this;
                    function loadImages(imagesScope) {
                        $("img[data-lazy]", imagesScope).each((function() {
                            var image = $(this), imageSource = $(this).attr("data-lazy"), imageSrcSet = $(this).attr("data-srcset"), imageSizes = $(this).attr("data-sizes") || _.$slider.attr("data-sizes"), imageToLoad = document.createElement("img");
                            imageToLoad.onload = function() {
                                image.animate({
                                    opacity: 0
                                }, 100, (function() {
                                    if (imageSrcSet) {
                                        image.attr("srcset", imageSrcSet);
                                        if (imageSizes) image.attr("sizes", imageSizes);
                                    }
                                    image.attr("src", imageSource).animate({
                                        opacity: 1
                                    }, 200, (function() {
                                        image.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }));
                                    _.$slider.trigger("lazyLoaded", [ _, image, imageSource ]);
                                }));
                            };
                            imageToLoad.onerror = function() {
                                image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                                _.$slider.trigger("lazyLoadError", [ _, image, imageSource ]);
                            };
                            imageToLoad.src = imageSource;
                        }));
                    }
                    if (true === _.options.centerMode) if (true === _.options.infinite) {
                        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                        rangeEnd = rangeStart + _.options.slidesToShow + 2;
                    } else {
                        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
                    } else {
                        rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
                        rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
                        if (true === _.options.fade) {
                            if (rangeStart > 0) rangeStart--;
                            if (rangeEnd <= _.slideCount) rangeEnd++;
                        }
                    }
                    loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
                    if ("anticipated" === _.options.lazyLoad) {
                        var prevSlide = rangeStart - 1, nextSlide = rangeEnd, $slides = _.$slider.find(".slick-slide");
                        for (var i = 0; i < _.options.slidesToScroll; i++) {
                            if (prevSlide < 0) prevSlide = _.slideCount - 1;
                            loadRange = loadRange.add($slides.eq(prevSlide));
                            loadRange = loadRange.add($slides.eq(nextSlide));
                            prevSlide--;
                            nextSlide++;
                        }
                    }
                    loadImages(loadRange);
                    if (_.slideCount <= _.options.slidesToShow) {
                        cloneRange = _.$slider.find(".slick-slide");
                        loadImages(cloneRange);
                    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                        cloneRange = _.$slider.find(".slick-cloned").slice(0, _.options.slidesToShow);
                        loadImages(cloneRange);
                    } else if (0 === _.currentSlide) {
                        cloneRange = _.$slider.find(".slick-cloned").slice(-1 * _.options.slidesToShow);
                        loadImages(cloneRange);
                    }
                };
                Slick.prototype.loadSlider = function() {
                    var _ = this;
                    _.setPosition();
                    _.$slideTrack.css({
                        opacity: 1
                    });
                    _.$slider.removeClass("slick-loading");
                    _.initUI();
                    if ("progressive" === _.options.lazyLoad) _.progressiveLazyLoad();
                };
                Slick.prototype.next = Slick.prototype.slickNext = function() {
                    var _ = this;
                    _.changeSlide({
                        data: {
                            message: "next"
                        }
                    });
                };
                Slick.prototype.orientationChange = function() {
                    var _ = this;
                    _.checkResponsive();
                    _.setPosition();
                };
                Slick.prototype.pause = Slick.prototype.slickPause = function() {
                    var _ = this;
                    _.autoPlayClear();
                    _.paused = true;
                };
                Slick.prototype.play = Slick.prototype.slickPlay = function() {
                    var _ = this;
                    _.autoPlay();
                    _.options.autoplay = true;
                    _.paused = false;
                    _.focussed = false;
                    _.interrupted = false;
                };
                Slick.prototype.postSlide = function(index) {
                    var _ = this;
                    if (!_.unslicked) {
                        _.$slider.trigger("afterChange", [ _, index ]);
                        _.animating = false;
                        if (_.slideCount > _.options.slidesToShow) _.setPosition();
                        _.swipeLeft = null;
                        if (_.options.autoplay) _.autoPlay();
                        if (true === _.options.accessibility) {
                            _.initADA();
                            if (_.options.focusOnChange) {
                                var $currentSlide = $(_.$slides.get(_.currentSlide));
                                $currentSlide.attr("tabindex", 0).focus();
                            }
                        }
                    }
                };
                Slick.prototype.prev = Slick.prototype.slickPrev = function() {
                    var _ = this;
                    _.changeSlide({
                        data: {
                            message: "previous"
                        }
                    });
                };
                Slick.prototype.preventDefault = function(event) {
                    event.preventDefault();
                };
                Slick.prototype.progressiveLazyLoad = function(tryCount) {
                    tryCount = tryCount || 1;
                    var image, imageSource, imageSrcSet, imageSizes, imageToLoad, _ = this, $imgsToLoad = $("img[data-lazy]", _.$slider);
                    if ($imgsToLoad.length) {
                        image = $imgsToLoad.first();
                        imageSource = image.attr("data-lazy");
                        imageSrcSet = image.attr("data-srcset");
                        imageSizes = image.attr("data-sizes") || _.$slider.attr("data-sizes");
                        imageToLoad = document.createElement("img");
                        imageToLoad.onload = function() {
                            if (imageSrcSet) {
                                image.attr("srcset", imageSrcSet);
                                if (imageSizes) image.attr("sizes", imageSizes);
                            }
                            image.attr("src", imageSource).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                            if (true === _.options.adaptiveHeight) _.setPosition();
                            _.$slider.trigger("lazyLoaded", [ _, image, imageSource ]);
                            _.progressiveLazyLoad();
                        };
                        imageToLoad.onerror = function() {
                            if (tryCount < 3) setTimeout((function() {
                                _.progressiveLazyLoad(tryCount + 1);
                            }), 500); else {
                                image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                                _.$slider.trigger("lazyLoadError", [ _, image, imageSource ]);
                                _.progressiveLazyLoad();
                            }
                        };
                        imageToLoad.src = imageSource;
                    } else _.$slider.trigger("allImagesLoaded", [ _ ]);
                };
                Slick.prototype.refresh = function(initializing) {
                    var currentSlide, lastVisibleIndex, _ = this;
                    lastVisibleIndex = _.slideCount - _.options.slidesToShow;
                    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) _.currentSlide = lastVisibleIndex;
                    if (_.slideCount <= _.options.slidesToShow) _.currentSlide = 0;
                    currentSlide = _.currentSlide;
                    _.destroy(true);
                    $.extend(_, _.initials, {
                        currentSlide
                    });
                    _.init();
                    if (!initializing) _.changeSlide({
                        data: {
                            message: "index",
                            index: currentSlide
                        }
                    }, false);
                };
                Slick.prototype.registerBreakpoints = function() {
                    var breakpoint, currentBreakpoint, l, _ = this, responsiveSettings = _.options.responsive || null;
                    if ("array" === $.type(responsiveSettings) && responsiveSettings.length) {
                        _.respondTo = _.options.respondTo || "window";
                        for (breakpoint in responsiveSettings) {
                            l = _.breakpoints.length - 1;
                            if (responsiveSettings.hasOwnProperty(breakpoint)) {
                                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;
                                while (l >= 0) {
                                    if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) _.breakpoints.splice(l, 1);
                                    l--;
                                }
                                _.breakpoints.push(currentBreakpoint);
                                _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                            }
                        }
                        _.breakpoints.sort((function(a, b) {
                            return _.options.mobileFirst ? a - b : b - a;
                        }));
                    }
                };
                Slick.prototype.reinit = function() {
                    var _ = this;
                    _.$slides = _.$slideTrack.children(_.options.slide).addClass("slick-slide");
                    _.slideCount = _.$slides.length;
                    if (_.currentSlide >= _.slideCount && 0 !== _.currentSlide) _.currentSlide = _.currentSlide - _.options.slidesToScroll;
                    if (_.slideCount <= _.options.slidesToShow) _.currentSlide = 0;
                    _.registerBreakpoints();
                    _.setProps();
                    _.setupInfinite();
                    _.buildArrows();
                    _.updateArrows();
                    _.initArrowEvents();
                    _.buildDots();
                    _.updateDots();
                    _.initDotEvents();
                    _.cleanUpSlideEvents();
                    _.initSlideEvents();
                    _.checkResponsive(false, true);
                    if (true === _.options.focusOnSelect) $(_.$slideTrack).children().on("click.slick", _.selectHandler);
                    _.setSlideClasses("number" === typeof _.currentSlide ? _.currentSlide : 0);
                    _.setPosition();
                    _.focusHandler();
                    _.paused = !_.options.autoplay;
                    _.autoPlay();
                    _.$slider.trigger("reInit", [ _ ]);
                };
                Slick.prototype.resize = function() {
                    var _ = this;
                    if ($(window).width() !== _.windowWidth) {
                        clearTimeout(_.windowDelay);
                        _.windowDelay = window.setTimeout((function() {
                            _.windowWidth = $(window).width();
                            _.checkResponsive();
                            if (!_.unslicked) _.setPosition();
                        }), 50);
                    }
                };
                Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {
                    var _ = this;
                    if ("boolean" === typeof index) {
                        removeBefore = index;
                        index = true === removeBefore ? 0 : _.slideCount - 1;
                    } else index = true === removeBefore ? --index : index;
                    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) return false;
                    _.unload();
                    if (true === removeAll) _.$slideTrack.children().remove(); else _.$slideTrack.children(this.options.slide).eq(index).remove();
                    _.$slides = _.$slideTrack.children(this.options.slide);
                    _.$slideTrack.children(this.options.slide).detach();
                    _.$slideTrack.append(_.$slides);
                    _.$slidesCache = _.$slides;
                    _.reinit();
                };
                Slick.prototype.setCSS = function(position) {
                    var x, y, _ = this, positionProps = {};
                    if (true === _.options.rtl) position = -position;
                    x = "left" == _.positionProp ? Math.ceil(position) + "px" : "0px";
                    y = "top" == _.positionProp ? Math.ceil(position) + "px" : "0px";
                    positionProps[_.positionProp] = position;
                    if (false === _.transformsEnabled) _.$slideTrack.css(positionProps); else {
                        positionProps = {};
                        if (false === _.cssTransitions) {
                            positionProps[_.animType] = "translate(" + x + ", " + y + ")";
                            _.$slideTrack.css(positionProps);
                        } else {
                            positionProps[_.animType] = "translate3d(" + x + ", " + y + ", 0px)";
                            _.$slideTrack.css(positionProps);
                        }
                    }
                };
                Slick.prototype.setDimensions = function() {
                    var _ = this;
                    if (false === _.options.vertical) {
                        if (true === _.options.centerMode) _.$list.css({
                            padding: "0px " + _.options.centerPadding
                        });
                    } else {
                        _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
                        if (true === _.options.centerMode) _.$list.css({
                            padding: _.options.centerPadding + " 0px"
                        });
                    }
                    _.listWidth = _.$list.width();
                    _.listHeight = _.$list.height();
                    if (false === _.options.vertical && false === _.options.variableWidth) {
                        _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
                        _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children(".slick-slide").length));
                    } else if (true === _.options.variableWidth) _.$slideTrack.width(5e3 * _.slideCount); else {
                        _.slideWidth = Math.ceil(_.listWidth);
                        _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children(".slick-slide").length));
                    }
                    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
                    if (false === _.options.variableWidth) _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
                };
                Slick.prototype.setFade = function() {
                    var targetLeft, _ = this;
                    _.$slides.each((function(index, element) {
                        targetLeft = _.slideWidth * index * -1;
                        if (true === _.options.rtl) $(element).css({
                            position: "relative",
                            right: targetLeft,
                            top: 0,
                            zIndex: _.options.zIndex - 2,
                            opacity: 0
                        }); else $(element).css({
                            position: "relative",
                            left: targetLeft,
                            top: 0,
                            zIndex: _.options.zIndex - 2,
                            opacity: 0
                        });
                    }));
                    _.$slides.eq(_.currentSlide).css({
                        zIndex: _.options.zIndex - 1,
                        opacity: 1
                    });
                };
                Slick.prototype.setHeight = function() {
                    var _ = this;
                    if (1 === _.options.slidesToShow && true === _.options.adaptiveHeight && false === _.options.vertical) {
                        var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
                        _.$list.css("height", targetHeight);
                    }
                };
                Slick.prototype.setOption = Slick.prototype.slickSetOption = function() {
                    var l, item, option, value, type, _ = this, refresh = false;
                    if ("object" === $.type(arguments[0])) {
                        option = arguments[0];
                        refresh = arguments[1];
                        type = "multiple";
                    } else if ("string" === $.type(arguments[0])) {
                        option = arguments[0];
                        value = arguments[1];
                        refresh = arguments[2];
                        if ("responsive" === arguments[0] && "array" === $.type(arguments[1])) type = "responsive"; else if ("undefined" !== typeof arguments[1]) type = "single";
                    }
                    if ("single" === type) _.options[option] = value; else if ("multiple" === type) $.each(option, (function(opt, val) {
                        _.options[opt] = val;
                    })); else if ("responsive" === type) for (item in value) if ("array" !== $.type(_.options.responsive)) _.options.responsive = [ value[item] ]; else {
                        l = _.options.responsive.length - 1;
                        while (l >= 0) {
                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) _.options.responsive.splice(l, 1);
                            l--;
                        }
                        _.options.responsive.push(value[item]);
                    }
                    if (refresh) {
                        _.unload();
                        _.reinit();
                    }
                };
                Slick.prototype.setPosition = function() {
                    var _ = this;
                    _.setDimensions();
                    _.setHeight();
                    if (false === _.options.fade) _.setCSS(_.getLeft(_.currentSlide)); else _.setFade();
                    _.$slider.trigger("setPosition", [ _ ]);
                };
                Slick.prototype.setProps = function() {
                    var _ = this, bodyStyle = document.body.style;
                    _.positionProp = true === _.options.vertical ? "top" : "left";
                    if ("top" === _.positionProp) _.$slider.addClass("slick-vertical"); else _.$slider.removeClass("slick-vertical");
                    if (void 0 !== bodyStyle.WebkitTransition || void 0 !== bodyStyle.MozTransition || void 0 !== bodyStyle.msTransition) if (true === _.options.useCSS) _.cssTransitions = true;
                    if (_.options.fade) if ("number" === typeof _.options.zIndex) {
                        if (_.options.zIndex < 3) _.options.zIndex = 3;
                    } else _.options.zIndex = _.defaults.zIndex;
                    if (void 0 !== bodyStyle.OTransform) {
                        _.animType = "OTransform";
                        _.transformType = "-o-transform";
                        _.transitionType = "OTransition";
                        if (void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective) _.animType = false;
                    }
                    if (void 0 !== bodyStyle.MozTransform) {
                        _.animType = "MozTransform";
                        _.transformType = "-moz-transform";
                        _.transitionType = "MozTransition";
                        if (void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.MozPerspective) _.animType = false;
                    }
                    if (void 0 !== bodyStyle.webkitTransform) {
                        _.animType = "webkitTransform";
                        _.transformType = "-webkit-transform";
                        _.transitionType = "webkitTransition";
                        if (void 0 === bodyStyle.perspectiveProperty && void 0 === bodyStyle.webkitPerspective) _.animType = false;
                    }
                    if (void 0 !== bodyStyle.msTransform) {
                        _.animType = "msTransform";
                        _.transformType = "-ms-transform";
                        _.transitionType = "msTransition";
                        if (void 0 === bodyStyle.msTransform) _.animType = false;
                    }
                    if (void 0 !== bodyStyle.transform && false !== _.animType) {
                        _.animType = "transform";
                        _.transformType = "transform";
                        _.transitionType = "transition";
                    }
                    _.transformsEnabled = _.options.useTransform && null !== _.animType && false !== _.animType;
                };
                Slick.prototype.setSlideClasses = function(index) {
                    var centerOffset, allSlides, indexOffset, remainder, _ = this;
                    allSlides = _.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
                    _.$slides.eq(index).addClass("slick-current");
                    if (true === _.options.centerMode) {
                        var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
                        centerOffset = Math.floor(_.options.slidesToShow / 2);
                        if (true === _.options.infinite) {
                            if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass("slick-active").attr("aria-hidden", "false"); else {
                                indexOffset = _.options.slidesToShow + index;
                                allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass("slick-active").attr("aria-hidden", "false");
                            }
                            if (0 === index) allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass("slick-center"); else if (index === _.slideCount - 1) allSlides.eq(_.options.slidesToShow).addClass("slick-center");
                        }
                        _.$slides.eq(index).addClass("slick-center");
                    } else if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) _.$slides.slice(index, index + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"); else if (allSlides.length <= _.options.slidesToShow) allSlides.addClass("slick-active").attr("aria-hidden", "false"); else {
                        remainder = _.slideCount % _.options.slidesToShow;
                        indexOffset = true === _.options.infinite ? _.options.slidesToShow + index : index;
                        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass("slick-active").attr("aria-hidden", "false"); else allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
                    }
                    if ("ondemand" === _.options.lazyLoad || "anticipated" === _.options.lazyLoad) _.lazyLoad();
                };
                Slick.prototype.setupInfinite = function() {
                    var i, slideIndex, infiniteCount, _ = this;
                    if (true === _.options.fade) _.options.centerMode = false;
                    if (true === _.options.infinite && false === _.options.fade) {
                        slideIndex = null;
                        if (_.slideCount > _.options.slidesToShow) {
                            if (true === _.options.centerMode) infiniteCount = _.options.slidesToShow + 1; else infiniteCount = _.options.slidesToShow;
                            for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                                slideIndex = i - 1;
                                $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");
                            }
                            for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                                slideIndex = i;
                                $(_.$slides[slideIndex]).clone(true).attr("id", "").attr("data-slick-index", slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");
                            }
                            _.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                                $(this).attr("id", "");
                            }));
                        }
                    }
                };
                Slick.prototype.interrupt = function(toggle) {
                    var _ = this;
                    if (!toggle) _.autoPlay();
                    _.interrupted = toggle;
                };
                Slick.prototype.selectHandler = function(event) {
                    var _ = this;
                    var targetElement = $(event.target).is(".slick-slide") ? $(event.target) : $(event.target).parents(".slick-slide");
                    var index = parseInt(targetElement.attr("data-slick-index"));
                    if (!index) index = 0;
                    if (_.slideCount <= _.options.slidesToShow) {
                        _.slideHandler(index, false, true);
                        return;
                    }
                    _.slideHandler(index);
                };
                Slick.prototype.slideHandler = function(index, sync, dontAnimate) {
                    var targetSlide, animSlide, oldSlide, slideLeft, navTarget, targetLeft = null, _ = this;
                    sync = sync || false;
                    if (true === _.animating && true === _.options.waitForAnimate) return;
                    if (true === _.options.fade && _.currentSlide === index) return;
                    if (false === sync) _.asNavFor(index);
                    targetSlide = index;
                    targetLeft = _.getLeft(targetSlide);
                    slideLeft = _.getLeft(_.currentSlide);
                    _.currentLeft = null === _.swipeLeft ? slideLeft : _.swipeLeft;
                    if (false === _.options.infinite && false === _.options.centerMode && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
                        if (false === _.options.fade) {
                            targetSlide = _.currentSlide;
                            if (true !== dontAnimate && _.slideCount > _.options.slidesToShow) _.animateSlide(slideLeft, (function() {
                                _.postSlide(targetSlide);
                            })); else _.postSlide(targetSlide);
                        }
                        return;
                    } else if (false === _.options.infinite && true === _.options.centerMode && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
                        if (false === _.options.fade) {
                            targetSlide = _.currentSlide;
                            if (true !== dontAnimate && _.slideCount > _.options.slidesToShow) _.animateSlide(slideLeft, (function() {
                                _.postSlide(targetSlide);
                            })); else _.postSlide(targetSlide);
                        }
                        return;
                    }
                    if (_.options.autoplay) clearInterval(_.autoPlayTimer);
                    if (targetSlide < 0) if (_.slideCount % _.options.slidesToScroll !== 0) animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll; else animSlide = _.slideCount + targetSlide; else if (targetSlide >= _.slideCount) if (_.slideCount % _.options.slidesToScroll !== 0) animSlide = 0; else animSlide = targetSlide - _.slideCount; else animSlide = targetSlide;
                    _.animating = true;
                    _.$slider.trigger("beforeChange", [ _, _.currentSlide, animSlide ]);
                    oldSlide = _.currentSlide;
                    _.currentSlide = animSlide;
                    _.setSlideClasses(_.currentSlide);
                    if (_.options.asNavFor) {
                        navTarget = _.getNavTarget();
                        navTarget = navTarget.slick("getSlick");
                        if (navTarget.slideCount <= navTarget.options.slidesToShow) navTarget.setSlideClasses(_.currentSlide);
                    }
                    _.updateDots();
                    _.updateArrows();
                    if (true === _.options.fade) {
                        if (true !== dontAnimate) {
                            _.fadeSlideOut(oldSlide);
                            _.fadeSlide(animSlide, (function() {
                                _.postSlide(animSlide);
                            }));
                        } else _.postSlide(animSlide);
                        _.animateHeight();
                        return;
                    }
                    if (true !== dontAnimate && _.slideCount > _.options.slidesToShow) _.animateSlide(targetLeft, (function() {
                        _.postSlide(animSlide);
                    })); else _.postSlide(animSlide);
                };
                Slick.prototype.startLoad = function() {
                    var _ = this;
                    if (true === _.options.arrows && _.slideCount > _.options.slidesToShow) {
                        _.$prevArrow.hide();
                        _.$nextArrow.hide();
                    }
                    if (true === _.options.dots && _.slideCount > _.options.slidesToShow) _.$dots.hide();
                    _.$slider.addClass("slick-loading");
                };
                Slick.prototype.swipeDirection = function() {
                    var xDist, yDist, r, swipeAngle, _ = this;
                    xDist = _.touchObject.startX - _.touchObject.curX;
                    yDist = _.touchObject.startY - _.touchObject.curY;
                    r = Math.atan2(yDist, xDist);
                    swipeAngle = Math.round(180 * r / Math.PI);
                    if (swipeAngle < 0) swipeAngle = 360 - Math.abs(swipeAngle);
                    if (swipeAngle <= 45 && swipeAngle >= 0) return false === _.options.rtl ? "left" : "right";
                    if (swipeAngle <= 360 && swipeAngle >= 315) return false === _.options.rtl ? "left" : "right";
                    if (swipeAngle >= 135 && swipeAngle <= 225) return false === _.options.rtl ? "right" : "left";
                    if (true === _.options.verticalSwiping) if (swipeAngle >= 35 && swipeAngle <= 135) return "down"; else return "up";
                    return "vertical";
                };
                Slick.prototype.swipeEnd = function(event) {
                    var slideCount, direction, _ = this;
                    _.dragging = false;
                    _.swiping = false;
                    if (_.scrolling) {
                        _.scrolling = false;
                        return false;
                    }
                    _.interrupted = false;
                    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
                    if (void 0 === _.touchObject.curX) return false;
                    if (true === _.touchObject.edgeHit) _.$slider.trigger("edge", [ _, _.swipeDirection() ]);
                    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
                        direction = _.swipeDirection();
                        switch (direction) {
                          case "left":
                          case "down":
                            slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
                            _.currentDirection = 0;
                            break;

                          case "right":
                          case "up":
                            slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
                            _.currentDirection = 1;
                            break;

                          default:
                        }
                        if ("vertical" != direction) {
                            _.slideHandler(slideCount);
                            _.touchObject = {};
                            _.$slider.trigger("swipe", [ _, direction ]);
                        }
                    } else if (_.touchObject.startX !== _.touchObject.curX) {
                        _.slideHandler(_.currentSlide);
                        _.touchObject = {};
                    }
                };
                Slick.prototype.swipeHandler = function(event) {
                    var _ = this;
                    if (false === _.options.swipe || "ontouchend" in document && false === _.options.swipe) return; else if (false === _.options.draggable && -1 !== event.type.indexOf("mouse")) return;
                    _.touchObject.fingerCount = event.originalEvent && void 0 !== event.originalEvent.touches ? event.originalEvent.touches.length : 1;
                    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
                    if (true === _.options.verticalSwiping) _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
                    switch (event.data.action) {
                      case "start":
                        _.swipeStart(event);
                        break;

                      case "move":
                        _.swipeMove(event);
                        break;

                      case "end":
                        _.swipeEnd(event);
                        break;
                    }
                };
                Slick.prototype.swipeMove = function(event) {
                    var curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength, _ = this;
                    touches = void 0 !== event.originalEvent ? event.originalEvent.touches : null;
                    if (!_.dragging || _.scrolling || touches && 1 !== touches.length) return false;
                    curLeft = _.getLeft(_.currentSlide);
                    _.touchObject.curX = void 0 !== touches ? touches[0].pageX : event.clientX;
                    _.touchObject.curY = void 0 !== touches ? touches[0].pageY : event.clientY;
                    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
                    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
                    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
                        _.scrolling = true;
                        return false;
                    }
                    if (true === _.options.verticalSwiping) _.touchObject.swipeLength = verticalSwipeLength;
                    swipeDirection = _.swipeDirection();
                    if (void 0 !== event.originalEvent && _.touchObject.swipeLength > 4) {
                        _.swiping = true;
                        event.preventDefault();
                    }
                    positionOffset = (false === _.options.rtl ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
                    if (true === _.options.verticalSwiping) positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
                    swipeLength = _.touchObject.swipeLength;
                    _.touchObject.edgeHit = false;
                    if (false === _.options.infinite) if (0 === _.currentSlide && "right" === swipeDirection || _.currentSlide >= _.getDotCount() && "left" === swipeDirection) {
                        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                        _.touchObject.edgeHit = true;
                    }
                    if (false === _.options.vertical) _.swipeLeft = curLeft + swipeLength * positionOffset; else _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
                    if (true === _.options.verticalSwiping) _.swipeLeft = curLeft + swipeLength * positionOffset;
                    if (true === _.options.fade || false === _.options.touchMove) return false;
                    if (true === _.animating) {
                        _.swipeLeft = null;
                        return false;
                    }
                    _.setCSS(_.swipeLeft);
                };
                Slick.prototype.swipeStart = function(event) {
                    var touches, _ = this;
                    _.interrupted = true;
                    if (1 !== _.touchObject.fingerCount || _.slideCount <= _.options.slidesToShow) {
                        _.touchObject = {};
                        return false;
                    }
                    if (void 0 !== event.originalEvent && void 0 !== event.originalEvent.touches) touches = event.originalEvent.touches[0];
                    _.touchObject.startX = _.touchObject.curX = void 0 !== touches ? touches.pageX : event.clientX;
                    _.touchObject.startY = _.touchObject.curY = void 0 !== touches ? touches.pageY : event.clientY;
                    _.dragging = true;
                };
                Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {
                    var _ = this;
                    if (null !== _.$slidesCache) {
                        _.unload();
                        _.$slideTrack.children(this.options.slide).detach();
                        _.$slidesCache.appendTo(_.$slideTrack);
                        _.reinit();
                    }
                };
                Slick.prototype.unload = function() {
                    var _ = this;
                    $(".slick-cloned", _.$slider).remove();
                    if (_.$dots) _.$dots.remove();
                    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) _.$prevArrow.remove();
                    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) _.$nextArrow.remove();
                    _.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                };
                Slick.prototype.unslick = function(fromBreakpoint) {
                    var _ = this;
                    _.$slider.trigger("unslick", [ _, fromBreakpoint ]);
                    _.destroy();
                };
                Slick.prototype.updateArrows = function() {
                    var _ = this;
                    Math.floor(_.options.slidesToShow / 2);
                    if (true === _.options.arrows && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
                        _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        if (0 === _.currentSlide) {
                            _.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                            _.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && false === _.options.centerMode) {
                            _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                            _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        } else if (_.currentSlide >= _.slideCount - 1 && true === _.options.centerMode) {
                            _.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                            _.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                        }
                    }
                };
                Slick.prototype.updateDots = function() {
                    var _ = this;
                    if (null !== _.$dots) {
                        _.$dots.find("li").removeClass("slick-active").end();
                        _.$dots.find("li").eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass("slick-active");
                    }
                };
                Slick.prototype.visibility = function() {
                    var _ = this;
                    if (_.options.autoplay) if (document[_.hidden]) _.interrupted = true; else _.interrupted = false;
                };
                $.fn.slick = function() {
                    var i, ret, _ = this, opt = arguments[0], args = Array.prototype.slice.call(arguments, 1), l = _.length;
                    for (i = 0; i < l; i++) {
                        if ("object" == typeof opt || "undefined" == typeof opt) _[i].slick = new Slick(_[i], opt); else ret = _[i].slick[opt].apply(_[i].slick, args);
                        if ("undefined" != typeof ret) return ret;
                    }
                    return _;
                };
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        var jquery = __webpack_require__(755);
        __webpack_require__(154);
        jquery(".reviews__items").slick({
            dots: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            responsive: [ {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    dots: true
                }
            } ]
        });
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        function stickyBlock() {
            addWindowScrollEvent = true;
            function stickyBlockInit() {
                const stickyParents = document.querySelectorAll("[data-sticky]");
                if (stickyParents.length) stickyParents.forEach((stickyParent => {
                    let stickyConfig = {
                        media: stickyParent.dataset.sticky ? parseInt(stickyParent.dataset.sticky) : null,
                        top: stickyParent.dataset.stickyTop ? parseInt(stickyParent.dataset.stickyTop) : 0,
                        bottom: stickyParent.dataset.stickyBottom ? parseInt(stickyParent.dataset.stickyBottom) : 0,
                        header: stickyParent.hasAttribute("data-sticky-header") ? document.querySelector("header.header").offsetHeight : 0
                    };
                    stickyBlockItem(stickyParent, stickyConfig);
                }));
            }
            function stickyBlockItem(stickyParent, stickyConfig) {
                const stickyBlockItem = stickyParent.querySelector("[data-sticky-item]");
                const headerHeight = stickyConfig.header;
                const offsetTop = headerHeight + stickyConfig.top;
                const startPoint = stickyBlockItem.getBoundingClientRect().top + scrollY - offsetTop;
                document.addEventListener("windowScroll", stickyBlockActions);
                function stickyBlockActions(e) {
                    const endPoint = stickyParent.offsetHeight + stickyParent.getBoundingClientRect().top + scrollY - (offsetTop + stickyBlockItem.offsetHeight + stickyConfig.bottom);
                    let stickyItemValues = {
                        position: "relative",
                        bottom: "auto",
                        top: "0px",
                        left: "0px",
                        width: "auto"
                    };
                    if (!stickyConfig.media || stickyConfig.media < window.innerWidth) if (offsetTop + stickyConfig.bottom + stickyBlockItem.offsetHeight < window.innerHeight) if (scrollY >= startPoint && scrollY <= endPoint) {
                        stickyItemValues.position = `fixed`;
                        stickyItemValues.bottom = `auto`;
                        stickyItemValues.top = `${offsetTop}px`;
                        stickyItemValues.left = `${stickyBlockItem.getBoundingClientRect().left}px`;
                        stickyItemValues.width = `${stickyBlockItem.offsetWidth}px`;
                    } else if (scrollY >= endPoint) {
                        stickyItemValues.position = `absolute`;
                        stickyItemValues.bottom = `${stickyConfig.bottom}px`;
                        stickyItemValues.top = `auto`;
                        stickyItemValues.left = `0px`;
                        stickyItemValues.width = `${stickyBlockItem.offsetWidth}px`;
                    }
                    stickyBlockType(stickyBlockItem, stickyItemValues);
                }
            }
            function stickyBlockType(stickyBlockItem, stickyItemValues) {
                stickyBlockItem.style.cssText = `position:${stickyItemValues.position};bottom:${stickyItemValues.bottom};top:${stickyItemValues.top};left:${stickyItemValues.left};width:${stickyItemValues.width};`;
            }
            stickyBlockInit();
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        isWebp();
        pageNavigation();
        headerScroll();
        stickyBlock();
        const item = document.querySelector(".header__items");
        document.addEventListener("click", (event => {
            if (event.target.closest(".header__burger")) if (item) item.classList.toggle("header__items--active");
        }));
    })();
})();