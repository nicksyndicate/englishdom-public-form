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
/******/ 	__webpack_require__.p = "/home/nick/englishdom-public-form/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(49);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(55);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */

(function( global, factory ) {

	if (  true && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {
		var key;

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

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

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(12),
    isObjectLike = __webpack_require__(28);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(24);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(21);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(7),
    getRawTag = __webpack_require__(26),
    objectToString = __webpack_require__(27);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(36),
    getValue = __webpack_require__(41);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRegistrationData(data) {
  return {
    attributes: {
      email: data.attributes.email,
      source: data.attributes.source,
      timezone: new Date().getTimezoneOffset()
    }
  };
}

function getExternalData(opt, form) {
  var email = form.querySelector('.js-email').value;
  var data = {
    attributes: {
      segment: opt.segment || 'individual',
      source: opt.source,
      from_page: window.location.href,
      email: email,
      timezone: new Date().getTimezoneOffset()
    }
  };

  if (opt.firstName) {
    var field = form.querySelector('.js-first_name');
    var name = field ? field.value : '';

    if (!name) {
      name = email.split('@')[0];
      name = name.replace(/\d+/g, '').replace(/[^\w\s]/gi, '');

      if (name && name.length > 24) {
        name = name.slice(0, 24);
      }

      if (!name) {
        name = '';
      }
    } else {//
    }

    data.attributes.first_name = name;
    data.attributes.name = name;
  }

  if (opt.phone) {
    data.attributes.phone = form.querySelector('.js-phone').value;
  }

  if (opt.from) {
    data.attributes.from = opt.from;
  }

  if (opt.AMOCRMTagFormAttribute && form.getAttribute(opt.AMOCRMTagFormAttribute)) {
    data.attributes.tags = form.getAttribute(opt.AMOCRMTagFormAttribute);
  }

  return data;
}

function afterErrorSend(response, form, cb) {
  var errors = response.responseJSON ? response.responseJSON.errors.detail : {};
  var parsedErrors = [];

  if (errors) {
    Object.keys(errors).map(function (error) {
      Object.keys(errors[error]).map(function (type) {
        parsedErrors.push({
          name: error,
          text: errors[error][type]
        });
      });
    });
  }

  cb(parsedErrors, form);
}

function getCookie(name) {
  var match = document.cookie.match("".concat(name, "=[^; ]*"));
  if (match) return match[0].split('=')[1];
  return null;
}

function setCookie(name, value) {
  var cookies = document.cookie.split('; ');
  var newCookie = "".concat(name, "=").concat(value, ";path=/;");
  var updatedCookies = [newCookie];

  for (var i = 0; i < cookies.length; i++) {
    if (!cookies[i].match(name)) {
      updatedCookies.push(cookies[i]);
    }
  }

  document.cookie = updatedCookies.join('; ');
}

function createUserId() {
  var rand = function rand() {
    return Math.random().toString(36).substr(2);
  };

  return rand() + rand();
}

var _default = {
  getRegistrationData: getRegistrationData,
  getExternalData: getExternalData,
  afterErrorSend: afterErrorSend,
  getCookie: getCookie,
  setCookie: setCookie,
  createUserId: createUserId
};
exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _extends2 = _interopRequireDefault(__webpack_require__(9));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(17));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(18));

var _createClass2 = _interopRequireDefault(__webpack_require__(19));

var _sourcebuster = _interopRequireDefault(__webpack_require__(20));

var _get2 = _interopRequireDefault(__webpack_require__(11));

var _formApi = _interopRequireDefault(__webpack_require__(63));

var _formParsers = _interopRequireDefault(__webpack_require__(15));

var _intlTelInput = _interopRequireDefault(__webpack_require__(66));

var _leadPriority = __webpack_require__(69);

var formInstances = [];

_sourcebuster.default.init();

var formMurkupError = function formMurkupError(elSelector) {
  return "Element with selector ".concat(elSelector, " not found in englishdom-form murkup. Please check that you have correctly copied\n  form murkup to your page.");
};

var Form = /*#__PURE__*/function () {
  function Form(options) {
    (0, _classCallCheck2.default)(this, Form);
    this.options = options;
    this.form = options.formEl;
    this.checkMurkup();
    this.buttonListener = this.buttonListener.bind(this);
    this.hideErrorByInput = this.hideErrorByInput.bind(this);

    if (this.options.phone) {
      this.$iti = (0, _intlTelInput.default)(this.form);
      if (this.form) this.setFormInputsEvent(this.form);
    }

    if (this.options.initFormCb) {
      this.options.initFormCb.map(function (cb) {
        cb();
      });
    }

    if (this.form) this.setButtons(this.form);
    if (this.form) this.setSuccessText(this.options.successSendText, this.form);
  }

  (0, _createClass2.default)(Form, [{
    key: "checkMurkup",
    value: function checkMurkup() {
      if (!this.form.querySelector('.js-ed-form-button')) {
        console.log(formMurkupError('.js-ed-form-button'));
      }

      if (!this.form.querySelector('.js-ed-form-tel-number')) {
        console.log(formMurkupError('.js-ed-form-tel-number'));
      }

      if (!document.querySelector('.js-success-send-ed-form')) {
        console.log(formMurkupError('.js-success-send-ed-form'));
      }

      if (!this.form.querySelector('.js-error-field')) {
        console.log(formMurkupError('.js-error-field'));
      }

      if (!this.form.querySelector('.js-email')) {
        console.log(formMurkupError('.js-email'));
      }

      if (!this.form.querySelector('.js-phone')) {
        console.log(formMurkupError('.js-phone'));
      }

      if (!this.form.querySelector('.js-error-phone')) {
        console.log(formMurkupError('.js-error-phone'));
      }

      if (!this.form.querySelector('.js-error-email')) {
        console.log(formMurkupError('.js-error-email'));
      }
    }
  }, {
    key: "buttonListener",
    value: function buttonListener(e) {
      e.preventDefault();
      this.setNextMethod(e);
    }
  }, {
    key: "setButtons",
    value: function setButtons(el) {
      this.button = el.querySelector('.js-ed-form-button');
      this.button.addEventListener('click', this.buttonListener, false);
    }
  }, {
    key: "setFormInputsEvent",
    value: function setFormInputsEvent(form) {
      form.addEventListener('keyup', this.hideErrorByInput);
    }
  }, {
    key: "blurPhoneEvent",
    value: function blurPhoneEvent(event) {
      event.preventDefault();
      this.checkValidity();
    }
  }, {
    key: "isPhoneInvalid",
    value: function isPhoneInvalid() {
      return !this.$iti.intlTelInput('isValidNumber');
    }
  }, {
    key: "checkValidity",
    value: function checkValidity(parent) {
      var errorMap = ['Неправильный номер', 'Такого кода страны не существует', 'Номер слишком короткий', 'Номер слишком длинный', 'Неправильный номер'];

      if (this.$iti) {
        if (this.isPhoneInvalid()) {
          this.showErrors([{
            text: errorMap[this.$iti.intlTelInput('getValidationError')],
            name: 'phone'
          }], parent, this.form, false);

          if (this.options.errorPhoneEvent) {
            this.options.errorPhoneEvent({
              number: this.$iti.intlTelInput('getNumber'),
              error: errorMap[this.$iti.intlTelInput('getValidationError')],
              country: this.$iti.intlTelInput('getSelectedCountryData').iso2,
              page: window.location.origin + window.location.pathname
            });
          }
        }
      }
    }
  }, {
    key: "setNextMethod",
    value: function setNextMethod(e) {
      this.closestIEpolyfill(e.target);

      var data = _formParsers.default.getExternalData(this.options, this.form);

      if (this.options.preReadRegFormCb) return this.getTokenForApp(data, this.form);

      if (this.options.registration) {
        return this.registration(_formParsers.default.getRegistrationData(data), this.form);
      }

      if (this.options.internal) return this.readRegistration(data, this.form);

      if (e.target.classList.contains('is-disabled')) {
        return this.sendApplication(data, this.form);
      }
    }
  }, {
    key: "registration",
    value: function registration(data, form) {
      var _this = this;

      _formApi.default.apiRegistration(data, this.options.internal, this.options.partnerTags, this.options.loadCb, function (result, response) {
        if (result) {
          if (_this.options.successRegSendCb) {
            _this.options.successRegSendCb.map(function (cb) {
              cb(response);
            });
          }

          return _this.afterSuccessRegistration(data, form);
        }

        return _formParsers.default.afterErrorSend(response, form, function (error, parent, form) {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(response);
          }

          return _this.showErrors(error, parent, form);
        });
      });
    }
  }, {
    key: "getTokenForApp",
    value: function getTokenForApp(data, form) {
      var loginData = this.options.preReadRegFormCb();

      var _this = this; // reset phone send to backend because front validation doesnt pass


      if (_this.isPhoneInvalid()) data.attributes.phone = '';
      if (loginData) return this.sendApplication(data, form, loginData);

      _formApi.default.apiGetToken(data, this.options.internal, this.options.partnerTags, this.options.loadCb, function (apiData) {
        if (apiData.result) {
          var token = apiData.response.meta.token;

          if (_this.options.successRegSendCb) {
            _this.options.successRegSendCb.map(function (cb) {
              cb(apiData.response);
            });
          }

          if (!_this.options.registration) {
            return _this.sendApplication(data, form, token);
          }
        } else {
          return _formParsers.default.afterErrorSend(apiData.response, form, function (error, parent, form) {
            if (_this.options.errorRegSendCb) {
              _this.options.errorRegSendCb(apiData.response);
            }

            _this.showErrors(error, parent, form);

            _this.checkValidity(parent);
          });
        }
      });
    }
  }, {
    key: "readRegistration",
    value: function readRegistration(data, form) {
      var _this = this;

      _formApi.default.apiReadRegistration(data, this.options.internal, this.options.partnerTags, this.options.loadCb, function (apiData) {
        if (apiData.sendApp) {
          var token = apiData.response.meta.token;

          if (apiData.result || !_this.options.internal) {
            if (_this.options.successRegSendCb) {
              _this.options.successRegSendCb.map(function (cb) {
                cb(apiData.response);
              });
            }

            return _this.sendApplication(data, form, token);
          }

          var errorResponse = {
            responseJSON: {
              errors: {
                detail: {
                  email: {
                    recordFound: 'Ваш email уже зарегистрирован'
                  }
                }
              }
            }
          };

          _this.sendApplication(data, form, token);

          return _formParsers.default.afterErrorSend(errorResponse, form, function (error, parent, form) {
            if (_this.options.errorRegSendCb) {
              _this.options.errorRegSendCb(errorResponse);
            }

            return _this.showErrors(error, parent, form);
          });
        }

        return _formParsers.default.afterErrorSend(apiData.response, form, function (error, parent, form) {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(apiData.response);
          }

          return _this.showErrors(error, parent, form);
        });
      });
    }
  }, {
    key: "addPriorityToTags",
    value: function addPriorityToTags(tagsRaw) {
      var tags = tagsRaw;
      var dataForLog = {};
      var rawData = {
        source: (0, _get2.default)(_sourcebuster.default, 'get.current.src'),
        medium: (0, _get2.default)(_sourcebuster.default, 'get.current.mdm'),
        fromPage: window.location.pathname,
        country: document.body.getAttribute('data-country'),
        hour: new Date().getUTCHours(),
        month: new Date().getUTCMonth() + 1,
        gmt: new Date().getTimezoneOffset(),
        dayOfWeek: new Date().getUTCDay() + 1,
        // день недели (в формате вс- 1, сб- 7),
        hash: window.location.hash
      };
      dataForLog = (0, _objectSpread2.default)({}, rawData);
      var data = (0, _objectSpread2.default)({}, rawData, {
        fromPage: (0, _leadPriority.pageConverter)(rawData.fromPage),
        gmt: (0, _leadPriority.gmtConverter)(rawData.gmt)
      });
      dataForLog = (0, _objectSpread2.default)({}, dataForLog, {
        fromPageNew: data.fromPage,
        gmtNew: data.gmt
      });
      var k = (0, _leadPriority.getK)(data, function (kObj) {
        dataForLog = (0, _objectSpread2.default)({}, dataForLog, kObj);
      });
      dataForLog = (0, _objectSpread2.default)({}, dataForLog, {
        k: k
      });
      var priority = (0, _leadPriority.getPeriod)(k);
      dataForLog = (0, _objectSpread2.default)({}, dataForLog, {
        priority: priority
      });
      var score = "Score:".concat(priority); // send to amplitude for testing
      // try if global facade exists

      try {
        facade.publish('user-action', 'application-scoring', dataForLog);
      } catch (e) {//
      }

      if (tags) {
        var tagsArray = tags.split(',');
        tagsArray.push(score);
        tags = tagsArray.join(',');
      } else {
        tags = score;
      }

      return tags;
    }
  }, {
    key: "sendApplication",
    value: function sendApplication(data, form, token) {
      var _this = this; // reset phone send to backend because front validation doesnt pass


      if (_this.isPhoneInvalid()) data.attributes.phone = ''; // add priority to tags

      try {
        data.attributes.tags = this.addPriorityToTags(data.attributes.tags);
      } catch (e) {//
      }

      _formApi.default.apiSendApplication(data, this.options.internal, this.options.partnerTags, token, this.options.loadCb, function (result, response) {
        if (result) {
          if (_this.options.successAppSendCb) {
            _this.options.successAppSendCb.map(function (cb) {
              cb(response);
            });
          }

          return _this.afterSuccessSend(response, form);
        }

        return _formParsers.default.afterErrorSend(response, form, function (error, parent, form) {
          if (_this.options.errorRegSendCb) {
            _this.options.errorRegSendCb(response);
          }

          _this.showErrors(error, parent, form);

          _this.checkValidity(parent);
        });
      });
    }
  }, {
    key: "toRedirect",
    value: function toRedirect() {
      if (this.options.redirectToEd) {
        setTimeout(function () {
          window.location = 'https://englishdom.com/home/user/login';
        }, 4000);
      }
    }
  }, {
    key: "afterSuccessRegistration",
    value: function afterSuccessRegistration(data, form) {
      this.afterSuccessSend(data, form);
    }
  }, {
    key: "afterSuccessSend",
    value: function afterSuccessSend(response, form) {
      this.hideErrors(form); // TODO remove document.querySelector

      var successSendBlock = document.querySelector('.js-success-send-ed-form');

      if (!form.classList.contains('is-success')) {
        form.classList.add('is-success');
      }

      if (successSendBlock && !successSendBlock.classList.contains('is-success')) {
        successSendBlock.classList.add('is-success');
      }

      this.toRedirect(response);
    }
  }, {
    key: "setSuccessText",
    value: function setSuccessText(text, el) {
      var successSendBlock = el.querySelector('.js-success-send-ed-form');

      if (successSendBlock && text) {
        successSendBlock.innerHTML = text;
      }
    }
  }, {
    key: "showErrors",
    value: function showErrors(errors, parent, form) {
      var isHideErrors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (isHideErrors) this.hideErrors(parent);
      errors.forEach(function (error) {
        var errorInput = parent.querySelector(".js-".concat(error.name));

        if (errorInput && !errorInput.classList.contains('is-error')) {
          errorInput.classList.add('is-error');
        }

        var errorField = parent.querySelector(".js-error-".concat(error.name));

        if (errorField && !errorField.classList.contains('is-error')) {
          errorField.classList.add('is-error');
        }

        if (errorField) errorField.innerHTML = error.text;
      });
      if (errors.length) this.button.classList.add('is-disabled');
    }
  }, {
    key: "hideErrors",
    value: function hideErrors(form) {
      var inputs = form.querySelectorAll('input');

      for (var i = 0; i < inputs.length; i += 1) {
        inputs[i].classList.remove('is-error');
      }

      var errors = form.querySelectorAll('.js-error-field');

      for (var _i = 0; _i < errors.length; _i += 1) {
        errors[_i].classList.remove('is-error');

        errors[_i].innerHTML = '';
      }

      this.button.classList.remove('is-disabled');
    }
  }, {
    key: "hideError",
    value: function hideError(input) {
      var errorTextEls = input.parentElement.parentElement.querySelector('.js-error-field');
      input.classList.remove('is-error');

      if (errorTextEls) {
        errorTextEls.classList.remove('is-error');
        errorTextEls.innerHTML = '';
      }
    }
  }, {
    key: "isValidForm",
    value: function isValidForm(form) {
      var ifValidForm = true;
      var inputs = form.querySelectorAll('input');

      for (var i = 0; i < inputs.length; i += 1) {
        if (inputs[i].classList.contains('is-error')) {
          ifValidForm = false;
        }
      }

      return ifValidForm;
    }
  }, {
    key: "hideErrorByInput",
    value: function hideErrorByInput(event) {
      this.hideError(event.target);
      if (this.isValidForm(this.form)) this.button.classList.remove('is-disabled');
    }
  }, {
    key: "closestIEpolyfill",
    value: function closestIEpolyfill(Element) {
      var _this2 = this;

      if (!Element.__proto__.closest) {
        Element.__proto__.closest = function (css) {
          var node = _this2;

          while (node) {
            node.matches = node.matches || node.webkitMatchesSelector || node.msMatchesSelector || node.mozMatchesSelector;
            if (node.matches(css)) return node;
            node = node.parentElement;
          }

          return null;
        };
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (this.button) this.button.removeEventListener('click', this.buttonListener, false);
      if (this.form) this.form.removeEventListener('click', this.hideErrorByInput);
    }
  }]);
  return Form;
}();

function init(options) {
  var forms = document.querySelectorAll(".".concat(options.internalCls || 'js-ed-form'));
  forms.forEach(function (form) {
    var removeForm;
    formInstances.forEach(function (formInstance) {
      if (formInstance.form === form) {
        removeForm = form;
      }
    });

    if (!removeForm) {
      formInstances.push(new Form((0, _extends2.default)(options, {
        formEl: form
      })));
    }
  });
  return formInstances;
}

function uninit(instance) {
  if (instance) {
    instance.close();
    formInstances.splice(formInstances.indexOf(instance), 1);
  } else {
    for (var i = 0; i < formInstances.length; i += 1) {
      formInstances[i].close();
    }

    formInstances = [];
  }
}

module.exports = {
  init: init,
  uninit: uninit
};
window.logicInit = init;
window.logicUninit = uninit;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(10);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;!function(e){if(true)module.exports=e();else { var f; }}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var init = _dereq_('./init');

var sbjs = {
  init: function(prefs) {
    this.get = init(prefs);
    if (prefs && prefs.callback && typeof prefs.callback === 'function') {
      prefs.callback(this.get);
    }
  }
};

module.exports = sbjs;
},{"./init":6}],2:[function(_dereq_,module,exports){
"use strict";

var terms = _dereq_('./terms'),
    utils = _dereq_('./helpers/utils');

var data = {

  containers: {
    current:          'sbjs_current',
    current_extra:    'sbjs_current_add',
    first:            'sbjs_first',
    first_extra:      'sbjs_first_add',
    session:          'sbjs_session',
    udata:            'sbjs_udata',
    promocode:        'sbjs_promo'
  },

  service: {
    migrations:       'sbjs_migrations'
  },

  delimiter:          '|||',

  aliases: {

    main: {
      type:           'typ',
      source:         'src',
      medium:         'mdm',
      campaign:       'cmp',
      content:        'cnt',
      term:           'trm'
    },

    extra: {
      fire_date:      'fd',
      entrance_point: 'ep',
      referer:        'rf'
    },

    session: {
      pages_seen:     'pgs',
      current_page:   'cpg'
    },

    udata: {
      visits:         'vst',
      ip:             'uip',
      agent:          'uag'
    },

    promo:            'code'

  },

  pack: {

    main: function(sbjs) {
      return (
        data.aliases.main.type      + '=' + sbjs.type     + data.delimiter +
        data.aliases.main.source    + '=' + sbjs.source   + data.delimiter +
        data.aliases.main.medium    + '=' + sbjs.medium   + data.delimiter +
        data.aliases.main.campaign  + '=' + sbjs.campaign + data.delimiter +
        data.aliases.main.content   + '=' + sbjs.content  + data.delimiter +
        data.aliases.main.term      + '=' + sbjs.term
      );
    },

    extra: function(timezone_offset) {
      return (
        data.aliases.extra.fire_date      + '=' + utils.setDate(new Date, timezone_offset) + data.delimiter +
        data.aliases.extra.entrance_point + '=' + document.location.href                   + data.delimiter +
        data.aliases.extra.referer        + '=' + (document.referrer || terms.none)
      );
    },

    user: function(visits, user_ip) {
      return (
        data.aliases.udata.visits + '=' + visits  + data.delimiter +
        data.aliases.udata.ip     + '=' + user_ip + data.delimiter +
        data.aliases.udata.agent  + '=' + navigator.userAgent
      );
    },

    session: function(pages) {
      return (
      data.aliases.session.pages_seen   + '=' + pages + data.delimiter +
      data.aliases.session.current_page + '=' + document.location.href
      );
    },

    promo: function(promo) {
      return (
        data.aliases.promo + '=' + utils.setLeadingZeroToInt(utils.randomInt(promo.min, promo.max), promo.max.toString().length)
      );
    }

  }
};

module.exports = data;
},{"./helpers/utils":5,"./terms":9}],3:[function(_dereq_,module,exports){
"use strict";

var delimiter = _dereq_('../data').delimiter;

module.exports = {

  encodeData: function(s) {
    return encodeURIComponent(s).replace(/\!/g, '%21')
                                .replace(/\~/g, '%7E')
                                .replace(/\*/g, '%2A')
                                .replace(/\'/g, '%27')
                                .replace(/\(/g, '%28')
                                .replace(/\)/g, '%29');
  },

  decodeData: function(s) {
    try {
      return decodeURIComponent(s).replace(/\%21/g, '!')
                                  .replace(/\%7E/g, '~')
                                  .replace(/\%2A/g, '*')
                                  .replace(/\%27/g, "'")
                                  .replace(/\%28/g, '(')
                                  .replace(/\%29/g, ')');
    } catch(err1) {
      // try unescape for backward compatibility
      try { return unescape(s); } catch(err2) { return ''; }
    }
  },

  set: function(name, value, minutes, domain, excl_subdomains) {
    var expires, basehost;

    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    } else {
      expires = '';
    }
    if (domain && !excl_subdomains) {
      basehost = ';domain=.' + domain;
    } else {
      basehost = '';
    }
    document.cookie = this.encodeData(name) + '=' + this.encodeData(value) + expires + basehost + '; path=/';
  },

  get: function(name) {
    var nameEQ = this.encodeData(name) + '=',
        ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
      if (c.indexOf(nameEQ) === 0) {
        return this.decodeData(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  },

  destroy: function(name, domain, excl_subdomains) {
    this.set(name, '', -1, domain, excl_subdomains);
  },

  parse: function(yummy) {

    var cookies = [],
        data    = {};

    if (typeof yummy === 'string') {
      cookies.push(yummy);
    } else {
      for (var prop in yummy) {
        if (yummy.hasOwnProperty(prop)) {
          cookies.push(yummy[prop]);
        }
      }
    }

    for (var i1 = 0; i1 < cookies.length; i1++) {
      var cookie_array;
      data[this.unsbjs(cookies[i1])] = {};
      if (this.get(cookies[i1])) {
        cookie_array = this.get(cookies[i1]).split(delimiter);
      } else {
        cookie_array = [];
      }
      for (var i2 = 0; i2 < cookie_array.length; i2++) {
        var tmp_array = cookie_array[i2].split('='),
            result_array = tmp_array.splice(0, 1);
        result_array.push(tmp_array.join('='));
        data[this.unsbjs(cookies[i1])][result_array[0]] = this.decodeData(result_array[1]);
      }
    }

    return data;

  },

  unsbjs: function (string) {
    return string.replace('sbjs_', '');
  }

};

},{"../data":2}],4:[function(_dereq_,module,exports){
"use strict";

module.exports = {

  parse: function(str) {
    var o = this.parseOptions,
        m = o.parser[o.strictMode ? 'strict' : 'loose'].exec(str),
        uri = {},
        i = 14;

    while (i--) { uri[o.key[i]] = m[i] || ''; }

    uri[o.q.name] = {};
    uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
      if ($1) { uri[o.q.name][$1] = $2; }
    });

    return uri;
  },

  parseOptions: {
    strictMode: false,
    key: ['source','protocol','authority','userInfo','user','password','host','port','relative','path','directory','file','query','anchor'],
    q: {
      name:   'queryKey',
      parser: /(?:^|&)([^&=]*)=?([^&]*)/g
    },
    parser: {
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
    }
  },

  getParam: function(custom_params) {
    var query_string = {},
        query = custom_params ? custom_params : window.location.search.substring(1),
        vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (typeof query_string[pair[0]] === 'undefined') {
        query_string[pair[0]] = pair[1];
      } else if (typeof query_string[pair[0]] === 'string') {
        var arr = [ query_string[pair[0]], pair[1] ];
        query_string[pair[0]] = arr;
      } else {
        query_string[pair[0]].push(pair[1]);
      }
    }
    return query_string;
  },

  getHost: function(request) {
    return this.parse(request).host.replace('www.', '');
  }

};
},{}],5:[function(_dereq_,module,exports){
"use strict";

module.exports = {

  escapeRegexp: function(string) {
    return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  },

  setDate: function(date, offset) {
    var utc_offset    = date.getTimezoneOffset() / 60,
        now_hours     = date.getHours(),
        custom_offset = offset || offset === 0 ? offset : -utc_offset;

    date.setHours(now_hours + utc_offset + custom_offset);

    var year    = date.getFullYear(),
        month   = this.setLeadingZeroToInt(date.getMonth() + 1,   2),
        day     = this.setLeadingZeroToInt(date.getDate(),        2),
        hour    = this.setLeadingZeroToInt(date.getHours(),       2),
        minute  = this.setLeadingZeroToInt(date.getMinutes(),     2),
        second  = this.setLeadingZeroToInt(date.getSeconds(),     2);

    return (year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
  },

  setLeadingZeroToInt: function(num, size) {
    var s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
  },

  randomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

};

},{}],6:[function(_dereq_,module,exports){
"use strict";

var data        = _dereq_('./data'),
    terms       = _dereq_('./terms'),
    cookies     = _dereq_('./helpers/cookies'),
    uri         = _dereq_('./helpers/uri'),
    utils       = _dereq_('./helpers/utils'),
    params      = _dereq_('./params'),
    migrations  = _dereq_('./migrations');

module.exports = function(prefs) {

  var p         = params.fetch(prefs);
  var get_param = uri.getParam();
  var domain    = p.domain.host,
      isolate   = p.domain.isolate,
      lifetime  = p.lifetime;

  migrations.go(lifetime, domain, isolate);

  var __sbjs_type,
      __sbjs_source,
      __sbjs_medium,
      __sbjs_campaign,
      __sbjs_content,
      __sbjs_term;

  function mainData() {
    var sbjs_data;
    if (
        typeof get_param.utm_source        !== 'undefined' ||
        typeof get_param.utm_medium        !== 'undefined' ||
        typeof get_param.utm_campaign      !== 'undefined' ||
        typeof get_param.utm_content       !== 'undefined' ||
        typeof get_param.utm_term          !== 'undefined' ||
        typeof get_param.gclid             !== 'undefined' ||
        typeof get_param.yclid             !== 'undefined' ||
        typeof get_param[p.campaign_param] !== 'undefined'
      ) {
      setFirstAndCurrentExtraData();
      sbjs_data = getData(terms.traffic.utm);
    } else if (checkReferer(terms.traffic.organic)) {
      setFirstAndCurrentExtraData();
      sbjs_data = getData(terms.traffic.organic);
    } else if (!cookies.get(data.containers.session) && checkReferer(terms.traffic.referral)) {
      setFirstAndCurrentExtraData();
      sbjs_data = getData(terms.traffic.referral);
    } else if (!cookies.get(data.containers.first) && !cookies.get(data.containers.current)) {
      setFirstAndCurrentExtraData();
      sbjs_data = getData(terms.traffic.typein);
    } else {
      return cookies.get(data.containers.current);
    }

    return sbjs_data;
  }

  function getData(type) {

    switch (type) {

      case terms.traffic.utm:

        __sbjs_type = terms.traffic.utm;

        if (typeof get_param.utm_source !== 'undefined') {
          __sbjs_source = get_param.utm_source;
        } else if (typeof get_param.gclid !== 'undefined') {
          __sbjs_source = 'google';
        } else if (typeof get_param.yclid !== 'undefined') {
          __sbjs_source = 'yandex';  
        } else {
          __sbjs_source = terms.none;
        }

        if (typeof get_param.utm_medium !== 'undefined') {
          __sbjs_medium = get_param.utm_medium;
        } else if (typeof get_param.gclid !== 'undefined') {
          __sbjs_medium = 'cpc';
        } else if (typeof get_param.yclid !== 'undefined') {
          __sbjs_medium = 'cpc';  
        } else {
          __sbjs_medium = terms.none;
        }

        if (typeof get_param.utm_campaign !== 'undefined') {
          __sbjs_campaign = get_param.utm_campaign;
        } else if (typeof get_param[p.campaign_param] !== 'undefined') {
          __sbjs_campaign = get_param[p.campaign_param];
        } else if (typeof get_param.gclid !== 'undefined') {
          __sbjs_campaign = 'google_cpc';
        } else if (typeof get_param.yclid !== 'undefined') {
          __sbjs_campaign = 'yandex_cpc';  
        } else {
          __sbjs_campaign = terms.none;
        }

        __sbjs_content  = get_param.utm_content || terms.none;
        __sbjs_term     = getUtmTerm()          || terms.none;
        break;

      case terms.traffic.organic:
        __sbjs_type     = terms.traffic.organic;
        __sbjs_source   = __sbjs_source || uri.getHost(document.referrer);
        __sbjs_medium   = terms.referer.organic;
        __sbjs_campaign = terms.none;
        __sbjs_content  = terms.none;
        __sbjs_term     = terms.none;
        break;

      case terms.traffic.referral:
        __sbjs_type     = terms.traffic.referral;
        __sbjs_source   = __sbjs_source || uri.getHost(document.referrer);
        __sbjs_medium   = __sbjs_medium || terms.referer.referral;
        __sbjs_campaign = terms.none;
        __sbjs_content  = uri.parse(document.referrer).path;
        __sbjs_term     = terms.none;
        break;

      case terms.traffic.typein:
        __sbjs_type     = terms.traffic.typein;
        __sbjs_source   = p.typein_attributes.source;
        __sbjs_medium   = p.typein_attributes.medium;
        __sbjs_campaign = terms.none;
        __sbjs_content  = terms.none;
        __sbjs_term     = terms.none;
        break;

      default:
        __sbjs_type     = terms.oops;
        __sbjs_source   = terms.oops;
        __sbjs_medium   = terms.oops;
        __sbjs_campaign = terms.oops;
        __sbjs_content  = terms.oops;
        __sbjs_term     = terms.oops;
    }
    var sbjs_data = {
      type:             __sbjs_type,
      source:           __sbjs_source,
      medium:           __sbjs_medium,
      campaign:         __sbjs_campaign,
      content:          __sbjs_content,
      term:             __sbjs_term
    };

    return data.pack.main(sbjs_data);

  }

  function getUtmTerm() {
    var referer = document.referrer;
    if (get_param.utm_term) {
      return get_param.utm_term;
    } else if (referer && uri.parse(referer).host && uri.parse(referer).host.match(/^(?:.*\.)?yandex\..{2,9}$/i)) {
      try {
        return uri.getParam(uri.parse(document.referrer).query).text;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  }

  function checkReferer(type) {
    var referer = document.referrer;
    switch(type) {
      case terms.traffic.organic:
        return (!!referer && checkRefererHost(referer) && isOrganic(referer));
      case terms.traffic.referral:
        return (!!referer && checkRefererHost(referer) && isReferral(referer));
      default:
        return false;
    }
  }

  function checkRefererHost(referer) {
    if (p.domain) {
      if (!isolate) {
        var host_regex = new RegExp('^(?:.*\\.)?' + utils.escapeRegexp(domain) + '$', 'i');
        return !(uri.getHost(referer).match(host_regex));
      } else {
        return (uri.getHost(referer) !== uri.getHost(domain));
      }
    } else {
      return (uri.getHost(referer) !== uri.getHost(document.location.href));
    }
  }

  function isOrganic(referer) {

    var y_host  = 'yandex',
        y_param = 'text',
        g_host  = 'google';

    var y_host_regex  = new RegExp('^(?:.*\\.)?'  + utils.escapeRegexp(y_host)  + '\\..{2,9}$'),
        y_param_regex = new RegExp('.*'           + utils.escapeRegexp(y_param) + '=.*'),
        g_host_regex  = new RegExp('^(?:www\\.)?' + utils.escapeRegexp(g_host)  + '\\..{2,9}$');

    if (
        !!uri.parse(referer).query &&
        !!uri.parse(referer).host.match(y_host_regex) &&
        !!uri.parse(referer).query.match(y_param_regex)
      ) {
      __sbjs_source = y_host;
      return true;
    } else if (!!uri.parse(referer).host.match(g_host_regex)) {
      __sbjs_source = g_host;
      return true;
    } else if (!!uri.parse(referer).query) {
      for (var i = 0; i < p.organics.length; i++) {
        if (
            uri.parse(referer).host.match(new RegExp('^(?:.*\\.)?' + utils.escapeRegexp(p.organics[i].host)  + '$', 'i')) &&
            uri.parse(referer).query.match(new RegExp('.*'         + utils.escapeRegexp(p.organics[i].param) + '=.*', 'i'))
          ) {
          __sbjs_source = p.organics[i].display || p.organics[i].host;
          return true;
        }
        if (i + 1 === p.organics.length) {
          return false;
        }
      }
    } else {
      return false;
    }
  }

  function isReferral(referer) {
    if (p.referrals.length > 0) {
      for (var i = 0; i < p.referrals.length; i++) {
        if (uri.parse(referer).host.match(new RegExp('^(?:.*\\.)?' + utils.escapeRegexp(p.referrals[i].host) + '$', 'i'))) {
          __sbjs_source = p.referrals[i].display  || p.referrals[i].host;
          __sbjs_medium = p.referrals[i].medium   || terms.referer.referral;
          return true;
        }
        if (i + 1 === p.referrals.length) {
          __sbjs_source = uri.getHost(referer);
          return true;
        }
      }
    } else {
      __sbjs_source = uri.getHost(referer);
      return true;
    }
  }

  function setFirstAndCurrentExtraData() {
    cookies.set(data.containers.current_extra, data.pack.extra(p.timezone_offset), lifetime, domain, isolate);
    if (!cookies.get(data.containers.first_extra)) {
      cookies.set(data.containers.first_extra, data.pack.extra(p.timezone_offset), lifetime, domain, isolate);
    }
  }

  (function setData() {

    // Main data
    cookies.set(data.containers.current, mainData(), lifetime, domain, isolate);
    if (!cookies.get(data.containers.first)) {
      cookies.set(data.containers.first, cookies.get(data.containers.current), lifetime, domain, isolate);
    }

    // User data
    var visits, udata;
    if (!cookies.get(data.containers.udata)) {
      visits  = 1;
      udata   = data.pack.user(visits, p.user_ip);
    } else {
      visits  = parseInt(cookies.parse(data.containers.udata)[cookies.unsbjs(data.containers.udata)][data.aliases.udata.visits]) || 1;
      visits  = cookies.get(data.containers.session) ? visits : visits + 1;
      udata   = data.pack.user(visits, p.user_ip);
    }
    cookies.set(data.containers.udata, udata, lifetime, domain, isolate);

    // Session
    var pages_count;
    if (!cookies.get(data.containers.session)) {
      pages_count = 1;
    } else {
      pages_count = parseInt(cookies.parse(data.containers.session)[cookies.unsbjs(data.containers.session)][data.aliases.session.pages_seen]) || 1;
      pages_count += 1;
    }
    cookies.set(data.containers.session, data.pack.session(pages_count), p.session_length, domain, isolate);

    // Promocode
    if (p.promocode && !cookies.get(data.containers.promocode)) {
      cookies.set(data.containers.promocode, data.pack.promo(p.promocode), lifetime, domain, isolate);
    }

  })();

  return cookies.parse(data.containers);

};
},{"./data":2,"./helpers/cookies":3,"./helpers/uri":4,"./helpers/utils":5,"./migrations":7,"./params":8,"./terms":9}],7:[function(_dereq_,module,exports){
"use strict";

var data    = _dereq_('./data'),
    cookies = _dereq_('./helpers/cookies');

module.exports = {

  go: function(lifetime, domain, isolate) {

    var migrate = this.migrations,
        _with   = { l: lifetime, d: domain, i: isolate };

    var i;

    if (!cookies.get(data.containers.first) && !cookies.get(data.service.migrations)) {

      var mids = [];
      for (i = 0; i < migrate.length; i++) { mids.push(migrate[i].id); }

      var advance = '';
      for (i = 0; i < mids.length; i++) {
        advance += mids[i] + '=1';
        if (i < mids.length - 1) { advance += data.delimiter; }
      }
      cookies.set(data.service.migrations, advance, _with.l, _with.d, _with.i);

    } else if (!cookies.get(data.service.migrations)) {

      // We have only one migration for now, so just
      for (i = 0; i < migrate.length; i++) {
        migrate[i].go(migrate[i].id, _with);
      }

    }

  },

  migrations: [

    {
      id: '1418474375998',
      version: '1.0.0-beta',
      go: function(mid, _with) {

        var success = mid + '=1',
            fail    = mid + '=0';

        var safeReplace = function($0, $1, $2) {
          return ($1 || $2 ? $0 : data.delimiter);
        };

        try {

          // Switch delimiter and renew cookies
          var _in = [];
          for (var prop in data.containers) {
            if (data.containers.hasOwnProperty(prop)) {
              _in.push(data.containers[prop]);
            }
          }

          for (var i = 0; i < _in.length; i++) {
            if (cookies.get(_in[i])) {
              var buffer = cookies.get(_in[i]).replace(/(\|)?\|(\|)?/g, safeReplace);
              cookies.destroy(_in[i], _with.d, _with.i);
              cookies.destroy(_in[i], _with.d, !_with.i);
              cookies.set(_in[i], buffer, _with.l, _with.d, _with.i);
            }
          }

          // Update `session`
          if (cookies.get(data.containers.session)) {
            cookies.set(data.containers.session, data.pack.session(0), _with.l, _with.d, _with.i);
          }

          // Yay!
          cookies.set(data.service.migrations, success, _with.l, _with.d, _with.i);

        } catch (err) {
          // Oops
          cookies.set(data.service.migrations, fail, _with.l, _with.d, _with.i);
        }
      }
    }

  ]

};
},{"./data":2,"./helpers/cookies":3}],8:[function(_dereq_,module,exports){
"use strict";

var terms = _dereq_('./terms'),
    uri   = _dereq_('./helpers/uri');

module.exports = {

  fetch: function(prefs) {

    var user   = prefs || {},
        params = {};

    // Set `lifetime of the cookie` in months
    params.lifetime = this.validate.checkFloat(user.lifetime) || 6;
    params.lifetime = parseInt(params.lifetime * 30 * 24 * 60);

    // Set `session length` in minutes
    params.session_length = this.validate.checkInt(user.session_length) || 30;

    // Set `timezone offset` in hours
    params.timezone_offset = this.validate.checkInt(user.timezone_offset);

    // Set `campaign param` for AdWords links
    params.campaign_param = user.campaign_param || false;

    // Set `user ip`
    params.user_ip = user.user_ip || terms.none;

    // Set `promocode`
    if (user.promocode) {
      params.promocode = {};
      params.promocode.min = parseInt(user.promocode.min) || 100000;
      params.promocode.max = parseInt(user.promocode.max) || 999999;
    } else {
      params.promocode = false;
    }

    // Set `typein attributes`
    if (user.typein_attributes && user.typein_attributes.source && user.typein_attributes.medium) {
      params.typein_attributes = {};
      params.typein_attributes.source = user.typein_attributes.source;
      params.typein_attributes.medium = user.typein_attributes.medium;
    } else {
      params.typein_attributes = { source: '(direct)', medium: '(none)' };
    }

    // Set `domain`
    if (user.domain && this.validate.isString(user.domain)) {
      params.domain = { host: user.domain, isolate: false };
    } else if (user.domain && user.domain.host) {
      params.domain = user.domain;
    } else {
      params.domain = { host: uri.getHost(document.location.hostname), isolate: false };
    }

    // Set `referral sources`
    params.referrals = [];

    if (user.referrals && user.referrals.length > 0) {
      for (var ir = 0; ir < user.referrals.length; ir++) {
        if (user.referrals[ir].host) {
          params.referrals.push(user.referrals[ir]);
        }
      }
    }

    // Set `organic sources`
    params.organics = [];

    if (user.organics && user.organics.length > 0) {
      for (var io = 0; io < user.organics.length; io++) {
        if (user.organics[io].host && user.organics[io].param) {
          params.organics.push(user.organics[io]);
        }
      }
    }

    params.organics.push({ host: 'bing.com',      param: 'q',     display: 'bing'            });
    params.organics.push({ host: 'yahoo.com',     param: 'p',     display: 'yahoo'           });
    params.organics.push({ host: 'about.com',     param: 'q',     display: 'about'           });
    params.organics.push({ host: 'aol.com',       param: 'q',     display: 'aol'             });
    params.organics.push({ host: 'ask.com',       param: 'q',     display: 'ask'             });
    params.organics.push({ host: 'globososo.com', param: 'q',     display: 'globo'           });
    params.organics.push({ host: 'go.mail.ru',    param: 'q',     display: 'go.mail.ru'      });
    params.organics.push({ host: 'rambler.ru',    param: 'query', display: 'rambler'         });
    params.organics.push({ host: 'tut.by',        param: 'query', display: 'tut.by'          });

    params.referrals.push({ host: 't.co',                         display: 'twitter.com'     });
    params.referrals.push({ host: 'plus.url.google.com',          display: 'plus.google.com' });


    return params;

  },

  validate: {

    checkFloat: function(v) {
      return v && this.isNumeric(parseFloat(v)) ? parseFloat(v) : false;
    },

    checkInt: function(v) {
      return v && this.isNumeric(parseInt(v)) ? parseInt(v) : false;
    },

    isNumeric: function(v){
      return !isNaN(v);
    },

    isString: function(v) {
      return Object.prototype.toString.call(v) === '[object String]';
    }

  }

};
},{"./helpers/uri":4,"./terms":9}],9:[function(_dereq_,module,exports){
"use strict";

module.exports = {

  traffic: {
    utm:        'utm',
    organic:    'organic',
    referral:   'referral',
    typein:     'typein'
  },

  referer: {
    referral:   'referral',
    organic:    'organic',
    social:     'social'
  },

  none:         '(none)',
  oops:         '(Houston, we have a problem)'

};

},{}]},{},[1])(1)
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(22),
    toKey = __webpack_require__(62);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isKey = __webpack_require__(23),
    stringToPath = __webpack_require__(29),
    toString = __webpack_require__(59);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(6);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(30);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(31);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(32);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(33),
    mapCacheDelete = __webpack_require__(54),
    mapCacheGet = __webpack_require__(56),
    mapCacheHas = __webpack_require__(57),
    mapCacheSet = __webpack_require__(58);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(34),
    ListCache = __webpack_require__(46),
    Map = __webpack_require__(53);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(35),
    hashDelete = __webpack_require__(42),
    hashGet = __webpack_require__(43),
    hashHas = __webpack_require__(44),
    hashSet = __webpack_require__(45);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(37),
    isMasked = __webpack_require__(38),
    isObject = __webpack_require__(14),
    toSource = __webpack_require__(40);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(12),
    isObject = __webpack_require__(14);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(39);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(1);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(47),
    listCacheDelete = __webpack_require__(48),
    listCacheGet = __webpack_require__(50),
    listCacheHas = __webpack_require__(51),
    listCacheSet = __webpack_require__(52);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(13),
    root = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(60);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(7),
    arrayMap = __webpack_require__(61),
    isArray = __webpack_require__(5),
    isSymbol = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(6);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(9));

var _jquery = _interopRequireDefault(__webpack_require__(4));

var _formParsers = _interopRequireDefault(__webpack_require__(15));

var _refreshToken = _interopRequireDefault(__webpack_require__(64));

function getUrl(isInternal) {
  return isInternal ? '' : 'https://englishdom.com';
}

function getClientId() {
  var clientId = _formParsers.default.getCookie('client_id');

  if (!clientId) {
    clientId = _formParsers.default.createUserId();

    _formParsers.default.setCookie('client_id', clientId);
  }

  return clientId;
}

function apiRegistration(data, internal, tags, loadCb, cb) {
  var utm = tags || '';
  var sendData = {
    data: data
  };
  (0, _refreshToken.default)().then(function (header) {
    _jquery.default.ajax({
      type: 'POST',
      url: "".concat(getUrl(internal), "/api-public/user/registration").concat(utm),
      dataType: 'json',
      timeout: 40000,
      contentType: 'application/vnd.api+json',
      data: JSON.stringify(sendData),
      headers: (0, _extends2.default)({
        'X-Client-Id': getClientId()
      }, header),
      beforeSend: function beforeSend() {
        if (loadCb) loadCb.start();
      },
      success: function success(response) {
        _formParsers.default.setCookie('jwt', response.meta.token);

        cb(true, response);
      },
      error: function error(response) {
        cb(false, response);
      },
      complete: function complete() {
        if (loadCb) loadCb.end();
      }
    });
  });
}

function apiGetToken(data, internal, tags, loadCb, cb) {
  data.type = 'read-registration';
  var utm = tags || '';
  var sendData = {
    data: data
  };
  (0, _refreshToken.default)().then(function (header) {
    _jquery.default.ajax({
      type: 'POST',
      url: "".concat(getUrl(internal), "/api-public/user/read-registration").concat(utm),
      dataType: 'json',
      timeout: 40000,
      contentType: 'application/vnd.api+json',
      data: JSON.stringify(sendData),
      headers: (0, _extends2.default)({
        'X-Client-Id': getClientId()
      }, header),
      beforeSend: function beforeSend() {
        if (loadCb) loadCb.start();
      },
      success: function success(response) {
        cb({
          result: true,
          response: response
        });
        if (loadCb) loadCb.end();
      },
      error: function error(response) {
        cb({
          result: false,
          response: response
        });
        if (loadCb) loadCb.end();
      }
    });
  });
}

function apiReadRegistration(data, internal, tags, loadCb, cb) {
  data.type = 'read-registration';
  var utm = tags || '';
  var sendData = {
    data: data
  };
  (0, _refreshToken.default)().then(function (header) {
    _jquery.default.ajax({
      type: 'POST',
      url: "".concat(getUrl(internal), "/api-public/user/read-registration").concat(utm),
      dataType: 'json',
      timeout: 40000,
      contentType: 'application/vnd.api+json',
      data: JSON.stringify(sendData),
      headers: (0, _extends2.default)({
        'X-Client-Id': getClientId()
      }, header),
      statusCode: {
        200: function _(response) {
          cb({
            result: false,
            response: response,
            sendApp: true
          });
        },
        201: function _(response) {
          cb({
            result: true,
            response: response,
            sendApp: true
          });
          if (loadCb) loadCb.end();
        }
      },
      beforeSend: function beforeSend() {
        if (loadCb) loadCb.start();
      },
      error: function error(response) {
        cb({
          result: false,
          response: response,
          sendApp: false
        });
        if (loadCb) loadCb.end();
      }
    });
  });
}

function apiSendApplication(data, internal, tags, token, loadCb, cb) {
  data.type = 'application';
  var utm = tags || '';
  var sendData = {
    data: data
  };

  _jquery.default.ajax({
    crossDomain: true,
    type: 'POST',
    url: "".concat(getUrl(internal), "/api-public/application/individual").concat(utm),
    dataType: 'json',
    timeout: 40000,
    contentType: 'application/vnd.api+json',
    data: JSON.stringify(sendData),
    headers: (0, _extends2.default)({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Authorization1',
      'X-Client-Id': getClientId()
    }, token ? {
      Authorization1: "Bearer ".concat(token)
    } : {}),
    beforeSend: function beforeSend() {
      if (loadCb) loadCb.start();
    },
    success: function success(response) {
      cb(true, response);
      if (loadCb) loadCb.end();
    },
    error: function error(response) {
      cb(false, response);
      if (loadCb) loadCb.end();
    }
  });
}

var _default = {
  apiGetToken: apiGetToken,
  apiRegistration: apiRegistration,
  apiReadRegistration: apiReadRegistration,
  apiSendApplication: apiSendApplication
};
exports.default = _default;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(10));

var _jquery = _interopRequireDefault(__webpack_require__(4));

var _md = _interopRequireDefault(__webpack_require__(65));

var _get2 = _interopRequireDefault(__webpack_require__(11));

var k = function k(s) {
  return s.split('').map(function (c) {
    return String.fromCharCode(c.charCodeAt() - 1);
  }).join('');
};

function _default() {
  return new Promise(function (resolve) {
    _jquery.default.ajax({
      contentType: 'application/vnd.api+json',
      url: k('0bqj.qvcmjd0ydtsg0'),
      success: function success(response) {
        resolve((0, _defineProperty2.default)({}, k('Y.DTSG.Uplfo'), (0, _md.default)("".concat((0, _get2.default)(response, k('ebub/buusjcvuft/ydtsg'))).concat(k('wXbwV2MRTCFsFxxPc59p5:Iv{LZ:HOmq')))));
      }
    });
  });
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

/* eslint-disable strict */

;(function ($) {
  'use strict'

  /**
   * Add integers, wrapping at 2^32.
   * This uses 16-bit operations internally to work around bugs in interpreters.
   *
   * @param {number} x First integer
   * @param {number} y Second integer
   * @returns {number} Sum
   */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff)
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xffff)
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t)
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t)
  }

  /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32
    x[(((len + 64) >>> 9) << 4) + 14] = len

    var i
    var olda
    var oldb
    var oldc
    var oldd
    var a = 1732584193
    var b = -271733879
    var c = -1732584194
    var d = 271733878

    for (i = 0; i < x.length; i += 16) {
      olda = a
      oldb = b
      oldc = c
      oldd = d

      a = md5ff(a, b, c, d, x[i], 7, -680876936)
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5gg(b, c, d, a, x[i], 20, -373897302)
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5hh(d, a, b, c, x[i], 11, -358537222)
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5ii(a, b, c, d, x[i], 6, -198630844)
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */
  function binl2rstr(input) {
    var i
    var output = ''
    var length32 = input.length * 32
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff)
    }
    return output
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   *
   * @param {string} input Raw input string
   * @returns {Array<number>} Array of little-endian words
   */
  function rstr2binl(input) {
    var i
    var output = []
    output[(input.length >> 2) - 1] = undefined
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0
    }
    var length8 = input.length * 8
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32
    }
    return output
  }

  /**
   * Calculate the MD5 of a raw string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
  }

  /**
   * Calculates the HMAC-MD5 of a key and some data (raw strings)
   *
   * @param {string} key HMAC key
   * @param {string} data Raw input string
   * @returns {string} Raw MD5 string
   */
  function rstrHMACMD5(key, data) {
    var i
    var bkey = rstr2binl(key)
    var ipad = []
    var opad = []
    var hash
    ipad[15] = opad[15] = undefined
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8)
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5c5c5c5c
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
  }

  /**
   * Convert a raw string to a hex string
   *
   * @param {string} input Raw input string
   * @returns {string} Hex encoded string
   */
  function rstr2hex(input) {
    var hexTab = '0123456789abcdef'
    var output = ''
    var x
    var i
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i)
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
    }
    return output
  }

  /**
   * Encode a string as UTF-8
   *
   * @param {string} input Input string
   * @returns {string} UTF8 string
   */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input))
  }

  /**
   * Encodes input string as raw MD5 string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s))
  }
  /**
   * Encodes input string as Hex encoded string
   *
   * @param {string} s Input string
   * @returns {string} Hex encoded string
   */
  function hexMD5(s) {
    return rstr2hex(rawMD5(s))
  }
  /**
   * Calculates the raw HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
  }
  /**
   * Calculates the Hex encoded HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d))
  }

  /**
   * Calculates MD5 value for a given string.
   * If a key is provided, calculates the HMAC-MD5 value.
   * Returns a Hex encoded string unless the raw argument is given.
   *
   * @param {string} string Input string
   * @param {string} [key] HMAC key
   * @param {boolean} [raw] Raw output switch
   * @returns {string} MD5 output
   */
  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string)
      }
      return rawMD5(string)
    }
    if (!raw) {
      return hexHMACMD5(key, string)
    }
    return rawHMACMD5(key, string)
  }

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return md5
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(this)


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(67);

function init(el) {
  var $input = (0, _jquery.default)(el).find('.js-ed-form-tel-number');
  return setIntlTel($input);
}

function setIntlTel(el) {
  el.intlTelInput({
    defaultCountry: 'RU',
    autoPlaceholder: true,
    autoHideDialCode: true,
    nationalMode: false,
    preferredCountries: ['RU', 'UA', 'KZ', 'BY', 'AZ'],
    customPlaceholder: function customPlaceholder(selectedCountryPlaceholder, selectedCountryData) {
      var place;
      var placeMap = [['ru', '+7 XXX XXX-XX-XX'], ['ua', '+380 XX XXX XXX'], ['kz', '+7 XXX XXX XXXX'], ['by', '+375 XX XXX-XX-XX'], ['az', '+994 XX XXX XX XX']];
      placeMap.forEach(function (item) {
        if (item[0] === selectedCountryData.iso2) {
          place = item[1];
        }
      });
      return place || selectedCountryPlaceholder;
    }
  });
  el.intlTelInput('loadUtils', '/vendor/intl-tel-input/lib/libphonenumber/build/utils.js');
  var attr = document.body.getAttribute('data-country');
  var country = attr || 'RU';

  try {
    el.intlTelInput('selectCountry', country);
  } catch (e) {
    el.intlTelInput('selectCountry', 'RU');
  }

  return el;
}

var _default = init;
exports.default = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(68));

/*
International Telephone Input v6.4.1
https://github.com/Bluefieldscom/intl-tel-input.git
*/
// wrap in UMD - see https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
      factory($, window, document);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($, window, document, undefined) {
  "use strict"; // these vars persist through all instances of the plugin

  var pluginName = "intlTelInput",
      id = 1,
      // give each instance it's own id for namespaced event handling
  defaults = {
    // typing digits after a valid number will be added to the extension part of the number
    allowExtensions: false,
    // automatically format the number according to the selected country
    autoFormat: true,
    // if there is just a dial code in the input: remove it on blur, and re-add it on focus
    autoHideDialCode: true,
    // add or remove input placeholder with an example number for the selected country
    autoPlaceholder: true,
    // default country
    defaultCountry: "",
    // append menu to a specific element
    dropdownContainer: false,
    // don't display these countries
    excludeCountries: [],
    // geoIp lookup function
    geoIpLookup: null,
    // don't insert international dial codes
    nationalMode: true,
    // number type to use for placeholders
    numberType: "MOBILE",
    // display only these countries
    onlyCountries: [],
    // the countries at the top of the list. defaults to united states and united kingdom
    preferredCountries: ["us", "gb"],
    // specify the path to the libphonenumber script to enable validation/formatting
    utilsScript: ""
  },
      keys = {
    UP: 38,
    DOWN: 40,
    ENTER: 13,
    ESC: 27,
    PLUS: 43,
    A: 65,
    Z: 90,
    ZERO: 48,
    NINE: 57,
    SPACE: 32,
    BSPACE: 8,
    TAB: 9,
    DEL: 46,
    CTRL: 17,
    CMD1: 91,
    // Chrome
    CMD2: 224
  },
      windowLoaded = false; // keep track of if the window.load event has fired as impossible to check after the fact

  $(window).load(function () {
    windowLoaded = true;
  });

  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults; // event namespace

    this.ns = "." + pluginName + id++; // Chrome, FF, Safari, IE9+

    this.isGoodBrowser = Boolean(element.setSelectionRange);
    this.hadInitialPlaceholder = Boolean($(element).attr("placeholder"));
    this._name = pluginName;
  }

  Plugin.prototype = {
    _init: function _init() {
      // if in nationalMode, disable options relating to dial codes
      if (this.options.nationalMode) {
        this.options.autoHideDialCode = false;
      } // IE Mobile doesn't support the keypress event (see issue 68) which makes autoFormat impossible


      if (navigator.userAgent.match(/IEMobile/i)) {
        this.options.autoFormat = false;
      } // we cannot just test screen size as some smartphones/website meta tags will report desktop resolutions
      // Note: for some reason jasmine fucks up if you put this in the main Plugin function with the rest of these declarations
      // Note: to target Android Mobiles (and not Tablets), we must find "Android" and "Mobile"


      this.isMobile = false; // we return these deferred objects from the _init() call so they can be watched, and then we resolve them when each specific request returns
      // Note: again, jasmine had a spazz when I put these in the Plugin function

      this.autoCountryDeferred = new $.Deferred();
      this.utilsScriptDeferred = new $.Deferred(); // process all the data: onlyCountries, excludeCountries, preferredCountries etc

      this._processCountryData(); // generate the markup


      this._generateMarkup(); // set the initial state of the input value and the selected flag


      this._setInitialState(); // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click


      this._initListeners(); // utils script, and auto country


      this._initRequests(); // return the deferreds


      return [this.autoCountryDeferred, this.utilsScriptDeferred];
    },

    /********************
    *  PRIVATE METHODS
    ********************/
    // prepare all of the country data, including onlyCountries, excludeCountries and preferredCountries options
    _processCountryData: function _processCountryData() {
      // set the instances country data objects
      this._setInstanceCountryData(); // set the preferredCountries property


      this._setPreferredCountries();
    },
    // add a country code to this.countryCodes
    _addCountryCode: function _addCountryCode(iso2, dialCode, priority) {
      if (!(dialCode in this.countryCodes)) {
        this.countryCodes[dialCode] = [];
      }

      var index = priority || 0;
      this.countryCodes[dialCode][index] = iso2;
    },
    // process countries
    processCountries: function processCountries(countryArray, processFunc) {
      var i; // standardise case

      for (i = 0; i < countryArray.length; i++) {
        countryArray[i] = countryArray[i].toLowerCase();
      } // build instance country array


      this.countries = [];

      for (i = 0; i < allCountries.length; i++) {
        if (processFunc($.inArray(allCountries[i].iso2, countryArray))) {
          this.countries.push(allCountries[i]);
        }
      }
    },
    // process onlyCountries or excludeCountries array if present, and generate the countryCodes map
    _setInstanceCountryData: function _setInstanceCountryData() {
      // process onlyCountries option
      if (this.options.onlyCountries.length) {
        this.processCountries(this.options.onlyCountries, function (inArray) {
          // if country is in array
          return inArray != -1;
        });
      } else if (this.options.excludeCountries.length) {
        this.processCountries(this.options.excludeCountries, function (inArray) {
          // if country is not in array
          return inArray == -1;
        });
      } else {
        this.countries = allCountries;
      } // generate countryCodes map


      this.countryCodes = {};

      for (var i = 0; i < this.countries.length; i++) {
        var c = this.countries[i];

        this._addCountryCode(c.iso2, c.dialCode, c.priority); // area codes


        if (c.areaCodes) {
          for (var j = 0; j < c.areaCodes.length; j++) {
            // full dial code is country code + dial code
            this._addCountryCode(c.iso2, c.dialCode + c.areaCodes[j]);
          }
        }
      }
    },
    // process preferred countries - iterate through the preferences,
    // fetching the country data for each one
    _setPreferredCountries: function _setPreferredCountries() {
      this.preferredCountries = [];

      for (var i = 0; i < this.options.preferredCountries.length; i++) {
        var countryCode = this.options.preferredCountries[i].toLowerCase(),
            countryData = this._getCountryData(countryCode, false, true);

        if (countryData) {
          this.preferredCountries.push(countryData);
        }
      }
    },
    // generate all of the markup for the plugin: the selected flag overlay, and the dropdown
    _generateMarkup: function _generateMarkup() {
      // telephone input
      this.telInput = $(this.element); // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can easily put the plugin in an inconsistent state e.g. the wrong flag selected for the autocompleted number, which on submit could mean the wrong number is saved (esp in nationalMode)

      this.telInput.attr("autocomplete", "off"); // containers (mostly for positioning)

      this.telInput.wrap($("<div>", {
        class: "intl-tel-input"
      }));
      this.flagsContainer = $("<div>", {
        class: "flag-container"
      }).insertBefore(this.telInput); // currently selected flag (displayed to left of input)

      var selectedFlag = $("<div>", {
        // make element focusable and tab naviagable
        tabindex: "0",
        class: "selected-flag"
      }).appendTo(this.flagsContainer);
      this.selectedFlagInner = $("<div>", {
        class: "iti-flag"
      }).appendTo(selectedFlag); // CSS triangle

      $("<div>", {
        class: "arrow"
      }).appendTo(selectedFlag); // country list
      // mobile is just a native select element
      // desktop is a proper list containing: preferred countries, then divider, then all countries

      if (this.isMobile) {
        this.countryList = $("<select>", {
          class: "iti-mobile-select"
        }).appendTo(this.flagsContainer);
      } else {
        this.countryList = $("<ul>", {
          class: "country-list hide"
        });

        if (this.preferredCountries.length && !this.isMobile) {
          this._appendListItems(this.preferredCountries, "preferred");

          $("<li>", {
            class: "divider"
          }).appendTo(this.countryList);
        }
      }

      this._appendListItems(this.countries, "");

      if (!this.isMobile) {
        // this is useful in lots of places
        this.countryListItems = this.countryList.children(".country"); // create dropdownContainer markup

        if (this.options.dropdownContainer) {
          this.dropdown = $("<div>", {
            class: "intl-tel-input iti-container"
          }).append(this.countryList);
        } else {
          this.countryList.appendTo(this.flagsContainer);
        }
      }
    },
    // add a country <li> to the countryList <ul> container
    // UPDATE: if isMobile, add an <option> to the countryList <select> container
    _appendListItems: function _appendListItems(countries, className) {
      // we create so many DOM elements, it is faster to build a temp string
      // and then add everything to the DOM in one go at the end
      var tmp = ""; // for each country

      for (var i = 0; i < countries.length; i++) {
        var c = countries[i];

        if (this.isMobile) {
          tmp += "<option data-dial-code='" + c.dialCode + "' value='" + c.iso2 + "'>";
          tmp += c.name + " +" + c.dialCode;
          tmp += "</option>";
        } else {
          // open the list item
          tmp += "<li class='country " + className + "' data-dial-code='" + c.dialCode + "' data-country-code='" + c.iso2 + "'>"; // add the flag

          tmp += "<div class='flag'><div class='iti-flag " + c.iso2 + "'></div></div>"; // and the country name and dial code

          tmp += "<span class='country-name'>" + c.name + "</span>";
          tmp += "<span class='dial-code'>+" + c.dialCode + "</span>"; // close the list item

          tmp += "</li>";
        }
      }

      this.countryList.append(tmp);
    },
    // set the initial state of the input value and the selected flag
    _setInitialState: function _setInitialState() {
      var val = this.telInput.val(); // if there is a number, and it's valid, we can go ahead and set the flag, else fall back to default

      if (this._getDialCode(val)) {
        this._updateFlagFromNumber(val, true);
      } else if (this.options.defaultCountry != "auto") {
        // check the defaultCountry option, else fall back to the first in the list
        if (this.options.defaultCountry) {
          this.options.defaultCountry = this._getCountryData(this.options.defaultCountry.toLowerCase(), false, false);
        } else {
          this.options.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0] : this.countries[0];
        }

        this._selectFlag(this.options.defaultCountry.iso2); // if empty, insert the default dial code (this function will check !nationalMode and !autoHideDialCode)


        if (!val) {
          this._updateDialCode(this.options.defaultCountry.dialCode, false);
        }
      } // format


      if (val) {
        // this wont be run after _updateDialCode as that's only called if no val
        this._updateVal(val);
      }
    },
    // initialise the main event listeners: input keyup, and click selected flag
    _initListeners: function _initListeners() {
      var that = this;

      this._initKeyListeners(); // autoFormat prevents the change event from firing, so we need to check for changes between focus and blur in order to manually trigger it


      if (this.options.autoHideDialCode || this.options.autoFormat) {
        this._initFocusListeners();
      }

      if (this.isMobile) {
        this.countryList.on("change" + this.ns, function (e) {
          that._selectListItem($(this).find("option:selected"));
        });
      } else {
        // hack for input nested inside label: clicking the selected-flag to open the dropdown would then automatically trigger a 2nd click on the input which would close it again
        var label = this.telInput.closest("label");

        if (label.length) {
          label.on("click" + this.ns, function (e) {
            // if the dropdown is closed, then focus the input, else ignore the click
            if (that.countryList.hasClass("hide")) {
              that.telInput.focus();
            } else {
              e.preventDefault();
            }
          });
        } // toggle country dropdown on click


        var selectedFlag = this.selectedFlagInner.parent();
        selectedFlag.on("click" + this.ns, function (e) {
          // only intercept this event if we're opening the dropdown
          // else let it bubble up to the top ("click-off-to-close" listener)
          // we cannot just stopPropagation as it may be needed to close another instance
          if (that.countryList.hasClass("hide") && !that.telInput.prop("disabled") && !that.telInput.prop("readonly")) {
            that._showDropdown();
          }
        });
      } // open dropdown list if currently focused


      this.flagsContainer.on("keydown" + that.ns, function (e) {
        var isDropdownHidden = that.countryList.hasClass("hide");

        if (isDropdownHidden && (e.which == keys.UP || e.which == keys.DOWN || e.which == keys.SPACE || e.which == keys.ENTER)) {
          // prevent form from being submitted if "ENTER" was pressed
          e.preventDefault(); // prevent event from being handled again by document

          e.stopPropagation();

          that._showDropdown();
        } // allow navigation from dropdown to input on TAB


        if (e.which == keys.TAB) {
          that._closeDropdown();
        }
      });
    },
    _initRequests: function _initRequests() {
      var that = this; // if the user has specified the path to the utils script, fetch it on window.load

      if (this.options.utilsScript) {
        // if the plugin is being initialised after the window.load event has already been fired
        if (windowLoaded) {
          this.loadUtils();
        } else {
          // wait until the load event so we don't block any other requests e.g. the flags image
          $(window).load(function () {
            that.loadUtils();
          });
        }
      } else {
        this.utilsScriptDeferred.resolve();
      }

      if (this.options.defaultCountry == "auto") {
        this._loadAutoCountry();
      } else {
        this.autoCountryDeferred.resolve();
      }
    },
    _loadAutoCountry: function _loadAutoCountry() {
      var that = this; // check for cookie

      var cookieAutoCountry = $.cookie ? $.cookie("itiAutoCountry") : "";

      if (cookieAutoCountry) {
        $.fn[pluginName].autoCountry = cookieAutoCountry;
      } // 3 options:
      // 1) already loaded (we're done)
      // 2) not already started loading (start)
      // 3) already started loading (do nothing - just wait for loading callback to fire)


      if ($.fn[pluginName].autoCountry) {
        this.autoCountryLoaded();
      } else if (!$.fn[pluginName].startedLoadingAutoCountry) {
        // don't do this twice!
        $.fn[pluginName].startedLoadingAutoCountry = true;

        if (typeof this.options.geoIpLookup === "function") {
          this.options.geoIpLookup(function (countryCode) {
            $.fn[pluginName].autoCountry = countryCode.toLowerCase();

            if ($.cookie) {
              $.cookie("itiAutoCountry", $.fn[pluginName].autoCountry, {
                path: "/"
              });
            } // tell all instances the auto country is ready
            // TODO: this should just be the current instances
            // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight away (e.g. if they have already done the geo ip lookup somewhere else). Using setTimeout means that the current thread of execution will finish before executing this, which allows the plugin to finish initialising.


            setTimeout(function () {
              $(".intl-tel-input input").intlTelInput("autoCountryLoaded");
            });
          });
        }
      }
    },
    _initKeyListeners: function _initKeyListeners() {
      var that = this;

      if (this.options.autoFormat) {
        // format number and update flag on keypress
        // use keypress event as we want to ignore all input except for a select few keys,
        // but we dont want to ignore the navigation keys like the arrows etc.
        // NOTE: no point in refactoring this to only bind these listeners on focus/blur because then you would need to have those 2 listeners running the whole time anyway...
        this.telInput.on("keypress" + this.ns, function (e) {
          // 32 is space, and after that it's all chars (not meta/nav keys)
          // this fix is needed for Firefox, which triggers keypress event for some meta/nav keys
          // Update: also ignore if this is a metaKey e.g. FF and Safari trigger keypress on the v of Ctrl+v
          // Update: also ignore if ctrlKey (FF on Windows/Ubuntu)
          // Update: also check that we have utils before we do any autoFormat stuff
          if (e.which >= keys.SPACE && !e.ctrlKey && !e.metaKey && window.intlTelInputUtils && !that.telInput.prop("readonly")) {
            e.preventDefault(); // allowed keys are just numeric keys and plus
            // we must allow plus for the case where the user does select-all and then hits plus to start typing a new number. we could refine this logic to first check that the selection contains a plus, but that wont work in old browsers, and I think it's overkill anyway

            var isAllowedKey = e.which >= keys.ZERO && e.which <= keys.NINE || e.which == keys.PLUS,
                input = that.telInput[0],
                noSelection = that.isGoodBrowser && input.selectionStart == input.selectionEnd,
                max = that.telInput.attr("maxlength"),
                val = that.telInput.val(),
                // assumes that if max exists, it is >0
            isBelowMax = max ? val.length < max : true; // first: ensure we dont go over maxlength. we must do this here to prevent adding digits in the middle of the number
            // still reformat even if not an allowed key as they could by typing a formatting char, but ignore if there's a selection as doesn't make sense to replace selection with illegal char and then immediately remove it

            if (isBelowMax && (isAllowedKey || noSelection)) {
              var newChar = isAllowedKey ? String.fromCharCode(e.which) : null;

              that._handleInputKey(newChar, true, isAllowedKey); // if something has changed, trigger the input event (which was otherwised squashed by the preventDefault)


              if (val != that.telInput.val()) {
                that.telInput.trigger("input");
              }
            }

            if (!isAllowedKey) {
              that._handleInvalidKey();
            }
          }
        });
      } // handle cut/paste event (now supported in all major browsers)


      this.telInput.on("cut" + this.ns + " paste" + this.ns, function () {
        // hack because "paste" event is fired before input is updated
        setTimeout(function () {
          if (that.options.autoFormat && window.intlTelInputUtils) {
            var cursorAtEnd = that.isGoodBrowser && that.telInput[0].selectionStart == that.telInput.val().length;

            that._handleInputKey(null, cursorAtEnd);

            that._ensurePlus();
          } else {
            // if no autoFormat, just update flag
            that._updateFlagFromNumber(that.telInput.val());
          }
        });
      }); // handle keyup event
      // if autoFormat enabled: we use keyup to catch delete events (after the fact)
      // if no autoFormat, this is used to update the flag

      this.telInput.on("keyup" + this.ns, function (e) {
        // the "enter" key event from selecting a dropdown item is triggered here on the input, because the document.keydown handler that initially handles that event triggers a focus on the input, and so the keyup for that same key event gets triggered here. weird, but just make sure we dont bother doing any re-formatting in this case (we've already done preventDefault in the keydown handler, so it wont actually submit the form or anything).
        // ALSO: ignore keyup if readonly
        if (e.which == keys.ENTER || that.telInput.prop("readonly")) {} else if (that.options.autoFormat && window.intlTelInputUtils) {
          // cursorAtEnd defaults to false for bad browsers else they would never get a reformat on delete
          var cursorAtEnd = that.isGoodBrowser && that.telInput[0].selectionStart == that.telInput.val().length;

          if (!that.telInput.val()) {
            // if they just cleared the input, update the flag to the default
            that._updateFlagFromNumber("");
          } else if (e.which == keys.DEL && !cursorAtEnd || e.which == keys.BSPACE) {
            // if delete in the middle: reformat with no suffix (no need to reformat if delete at end)
            // if backspace: reformat with no suffix (need to reformat if at end to remove any lingering suffix - this is a feature)
            // important to remember never to add suffix on any delete key as can fuck up in ie8 so you can never delete a formatting char at the end
            that._handleInputKey();
          }

          that._ensurePlus();
        } else {
          // if no autoFormat, just update flag
          that._updateFlagFromNumber(that.telInput.val());
        }
      });
    },
    // prevent deleting the plus (if not in nationalMode)
    _ensurePlus: function _ensurePlus() {
      if (!this.options.nationalMode) {
        var val = this.telInput.val(),
            input = this.telInput[0];

        if (val.charAt(0) != "+") {
          // newCursorPos is current pos + 1 to account for the plus we are about to add
          var newCursorPos = this.isGoodBrowser ? input.selectionStart + 1 : 0;
          this.telInput.val("+" + val);

          if (this.isGoodBrowser) {
            input.setSelectionRange(newCursorPos, newCursorPos);
          }
        }
      }
    },
    // alert the user to an invalid key event
    _handleInvalidKey: function _handleInvalidKey() {
      var that = this;
      this.telInput.trigger("invalidkey").addClass("iti-invalid-key");
      setTimeout(function () {
        that.telInput.removeClass("iti-invalid-key");
      }, 100);
    },
    // when autoFormat is enabled: handle various key events on the input:
    // 1) adding a new number character, which will replace any selection, reformat, and preserve the cursor position
    // 2) reformatting on backspace/delete
    // 3) cut/paste event
    _handleInputKey: function _handleInputKey(newNumericChar, addSuffix, isAllowedKey) {
      var val = this.telInput.val(),
          cleanBefore = this._getClean(val),
          originalLeftChars,
          // raw DOM element
      input = this.telInput[0],
          digitsOnRight = 0;

      if (this.isGoodBrowser) {
        // cursor strategy: maintain the number of digits on the right. we use the right instead of the left so that A) we dont have to account for the new digit (or multiple digits if paste event), and B) we're always on the right side of formatting suffixes
        digitsOnRight = this._getDigitsOnRight(val, input.selectionEnd); // if handling a new number character: insert it in the right place

        if (newNumericChar) {
          // replace any selection they may have made with the new char
          val = val.substr(0, input.selectionStart) + newNumericChar + val.substring(input.selectionEnd, val.length);
        } else {
          // here we're not handling a new char, we're just doing a re-format (e.g. on delete/backspace/paste, after the fact), but we still need to maintain the cursor position. so make note of the char on the left, and then after the re-format, we'll count in the same number of digits from the right, and then keep going through any formatting chars until we hit the same left char that we had before.
          // UPDATE: now have to store 2 chars as extensions formatting contains 2 spaces so you need to be able to distinguish
          originalLeftChars = val.substr(input.selectionStart - 2, 2);
        }
      } else if (newNumericChar) {
        val += newNumericChar;
      } // update the number and flag


      this.setNumber(val, null, addSuffix, true, isAllowedKey); // update the cursor position

      if (this.isGoodBrowser) {
        var newCursor;
        val = this.telInput.val(); // if it was at the end, keep it there

        if (!digitsOnRight) {
          newCursor = val.length;
        } else {
          // else count in the same number of digits from the right
          newCursor = this._getCursorFromDigitsOnRight(val, digitsOnRight); // but if delete/paste etc, keep going left until hit the same left char as before

          if (!newNumericChar) {
            newCursor = this._getCursorFromLeftChar(val, newCursor, originalLeftChars);
          }
        } // set the new cursor


        input.setSelectionRange(newCursor, newCursor);
      }
    },
    // we start from the position in guessCursor, and work our way left until we hit the originalLeftChars or a number to make sure that after reformatting the cursor has the same char on the left in the case of a delete etc
    _getCursorFromLeftChar: function _getCursorFromLeftChar(val, guessCursor, originalLeftChars) {
      for (var i = guessCursor; i > 0; i--) {
        var leftChar = val.charAt(i - 1);

        if ($.isNumeric(leftChar) || val.substr(i - 2, 2) == originalLeftChars) {
          return i;
        }
      }

      return 0;
    },
    // after a reformat we need to make sure there are still the same number of digits to the right of the cursor
    _getCursorFromDigitsOnRight: function _getCursorFromDigitsOnRight(val, digitsOnRight) {
      for (var i = val.length - 1; i >= 0; i--) {
        if ($.isNumeric(val.charAt(i))) {
          if (--digitsOnRight === 0) {
            return i;
          }
        }
      }

      return 0;
    },
    // get the number of numeric digits to the right of the cursor so we can reposition the cursor correctly after the reformat has happened
    _getDigitsOnRight: function _getDigitsOnRight(val, selectionEnd) {
      var digitsOnRight = 0;

      for (var i = selectionEnd; i < val.length; i++) {
        if ($.isNumeric(val.charAt(i))) {
          digitsOnRight++;
        }
      }

      return digitsOnRight;
    },
    // listen for focus and blur
    _initFocusListeners: function _initFocusListeners() {
      var that = this;

      if (this.options.autoHideDialCode) {
        // mousedown decides where the cursor goes, so if we're focusing we must preventDefault as we'll be inserting the dial code, and we want the cursor to be at the end no matter where they click
        this.telInput.on("mousedown" + this.ns, function (e) {
          if (!that.telInput.is(":focus") && !that.telInput.val()) {
            e.preventDefault(); // but this also cancels the focus, so we must trigger that manually

            that.telInput.focus();
          }
        });
      }

      this.telInput.on("focus" + this.ns, function (e) {
        var value = that.telInput.val(); // save this to compare on blur

        that.telInput.data("focusVal", value); // on focus: if empty, insert the dial code for the currently selected flag

        if (that.options.autoHideDialCode && !value && !that.telInput.prop("readonly") && that.selectedCountryData.dialCode) {
          that._updateVal("+" + that.selectedCountryData.dialCode, null, true); // after auto-inserting a dial code, if the first key they hit is '+' then assume they are entering a new number, so remove the dial code. use keypress instead of keydown because keydown gets triggered for the shift key (required to hit the + key), and instead of keyup because that shows the new '+' before removing the old one


          that.telInput.one("keypress.plus" + that.ns, function (e) {
            if (e.which == keys.PLUS) {
              // if autoFormat is enabled, this key event will have already have been handled by another keypress listener (hence we need to add the "+"). if disabled, it will be handled after this by a keyup listener (hence no need to add the "+").
              var newVal = that.options.autoFormat && window.intlTelInputUtils ? "+" : "";
              that.telInput.val(newVal);
            }
          }); // after tabbing in, make sure the cursor is at the end we must use setTimeout to get outside of the focus handler as it seems the selection happens after that

          setTimeout(function () {
            var input = that.telInput[0];

            if (that.isGoodBrowser) {
              var len = that.telInput.val().length;
              input.setSelectionRange(len, len);
            }
          });
        }
      });
      this.telInput.on("blur" + this.ns, function () {
        if (that.options.autoHideDialCode) {
          // on blur: if just a dial code then remove it
          var value = that.telInput.val(),
              startsPlus = value.charAt(0) == "+";

          if (startsPlus) {
            var numeric = that._getNumeric(value); // if just a plus, or if just a dial code


            if (!numeric || that.selectedCountryData.dialCode == numeric) {
              that.telInput.val("");
            }
          } // remove the keypress listener we added on focus


          that.telInput.off("keypress.plus" + that.ns);
        } // if autoFormat, we must manually trigger change event if value has changed


        if (that.options.autoFormat && window.intlTelInputUtils && that.telInput.val() != that.telInput.data("focusVal")) {
          that.telInput.trigger("change");
        }
      });
    },
    // extract the numeric digits from the given string
    _getNumeric: function _getNumeric(s) {
      return s.replace(/\D/g, "");
    },
    _getClean: function _getClean(s) {
      var prefix = s.charAt(0) == "+" ? "+" : "";
      return prefix + this._getNumeric(s);
    },
    // show the dropdown
    _showDropdown: function _showDropdown() {
      this._setDropdownPosition(); // update highlighting and scroll to active list item


      var activeListItem = this.countryList.children(".active");

      if (activeListItem.length) {
        this._highlightListItem(activeListItem);
      }

      if (activeListItem.length) {
        this._scrollTo(activeListItem);
      } // bind all the dropdown-related listeners: mouseover, click, click-off, keydown


      this._bindDropdownListeners(); // update the arrow


      this.selectedFlagInner.children(".arrow").addClass("up");
    },
    // decide where to position dropdown (depends on position within viewport, and scroll)
    _setDropdownPosition: function _setDropdownPosition() {
      var showDropdownContainer = this.options.dropdownContainer && !this.isMobile;
      if (showDropdownContainer) this.dropdown.appendTo(this.options.dropdownContainer); // show the menu and grab the dropdown height

      this.dropdownHeight = this.countryList.removeClass("hide").outerHeight();
      var that = this,
          pos = this.telInput.offset(),
          inputTop = pos.top,
          windowTop = $(window).scrollTop(),
          // dropdownFitsBelow = (dropdownBottom < windowBottom)
      dropdownFitsBelow = inputTop + this.telInput.outerHeight() + this.dropdownHeight < windowTop + $(window).height(),
          dropdownFitsAbove = inputTop - this.dropdownHeight > windowTop; // by default, the dropdown will be below the input. If we want to position it above the input, we add the dropup class.

      this.countryList.toggleClass("dropup", !dropdownFitsBelow && dropdownFitsAbove); // if dropdownContainer is enabled, calculate postion

      if (showDropdownContainer) {
        // by default the dropdown will be directly over the input because it's not in the flow. If we want to position it below, we need to add some extra top value.
        var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.innerHeight(); // calculate placement

        this.dropdown.css({
          top: inputTop + extraTop,
          left: pos.left
        }); // close menu on window scroll

        $(window).on("scroll" + this.ns, function () {
          that._closeDropdown();
        });
      }
    },
    // we only bind dropdown listeners when the dropdown is open
    _bindDropdownListeners: function _bindDropdownListeners() {
      var that = this; // when mouse over a list item, just highlight that one
      // we add the class "highlight", so if they hit "enter" we know which one to select

      this.countryList.on("mouseover" + this.ns, ".country", function (e) {
        that._highlightListItem($(this));
      }); // listen for country selection

      this.countryList.on("click" + this.ns, ".country", function (e) {
        that._selectListItem($(this));
      }); // click off to close
      // (except when this initial opening click is bubbling up)
      // we cannot just stopPropagation as it may be needed to close another instance

      var isOpening = true;
      $("html").on("click" + this.ns, function (e) {
        if (!isOpening) {
          that._closeDropdown();
        }

        isOpening = false;
      }); // listen for up/down scrolling, enter to select, or letters to jump to country name.
      // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
      // just hit down and hold it to scroll down (no keyup event).
      // listen on the document because that's where key events are triggered if no input has focus

      var query = "",
          queryTimer = null;
      $(document).on("keydown" + this.ns, function (e) {
        // prevent down key from scrolling the whole page,
        // and enter key from submitting a form etc
        e.preventDefault();

        if (e.which == keys.UP || e.which == keys.DOWN) {
          // up and down to navigate
          that._handleUpDownKey(e.which);
        } else if (e.which == keys.ENTER) {
          // enter to select
          that._handleEnterKey();
        } else if (e.which == keys.ESC) {
          // esc to close
          that._closeDropdown();
        } else if (e.which >= keys.A && e.which <= keys.Z || e.which == keys.SPACE) {
          // upper case letters (note: keyup/keydown only return upper case letters)
          // jump to countries that start with the query string
          if (queryTimer) {
            clearTimeout(queryTimer);
          }

          query += String.fromCharCode(e.which);

          that._searchForCountry(query); // if the timer hits 1 second, reset the query


          queryTimer = setTimeout(function () {
            query = "";
          }, 1e3);
        }
      });
    },
    // highlight the next/prev item in the list (and ensure it is visible)
    _handleUpDownKey: function _handleUpDownKey(key) {
      var current = this.countryList.children(".highlight").first();
      var next = key == keys.UP ? current.prev() : current.next();

      if (next.length) {
        // skip the divider
        if (next.hasClass("divider")) {
          next = key == keys.UP ? next.prev() : next.next();
        }

        this._highlightListItem(next);

        this._scrollTo(next);
      }
    },
    // select the currently highlighted item
    _handleEnterKey: function _handleEnterKey() {
      var currentCountry = this.countryList.children(".highlight").first();

      if (currentCountry.length) {
        this._selectListItem(currentCountry);
      }
    },
    // find the first list item whose name starts with the query string
    _searchForCountry: function _searchForCountry(query) {
      for (var i = 0; i < this.countries.length; i++) {
        if (this._startsWith(this.countries[i].name, query)) {
          var listItem = this.countryList.children("[data-country-code=" + this.countries[i].iso2 + "]").not(".preferred"); // update highlighting and scroll

          this._highlightListItem(listItem);

          this._scrollTo(listItem, true);

          break;
        }
      }
    },
    // check if (uppercase) string a starts with string b
    _startsWith: function _startsWith(a, b) {
      return a.substr(0, b.length).toUpperCase() == b;
    },
    // update the input's value to the given val
    // if autoFormat=true, format it first according to the country-specific formatting rules
    // Note: preventConversion will be false (i.e. we allow conversion) on init and when dev calls public method setNumber
    _updateVal: function _updateVal(val, format, addSuffix, preventConversion, isAllowedKey) {
      var formatted;

      if (this.options.autoFormat && window.intlTelInputUtils && this.selectedCountryData) {
        if (typeof format == "number" && intlTelInputUtils.isValidNumber(val, this.selectedCountryData.iso2)) {
          // if user specified a format, and it's a valid number, then format it accordingly
          formatted = intlTelInputUtils.formatNumberByType(val, this.selectedCountryData.iso2, format);
        } else if (!preventConversion && this.options.nationalMode && val.charAt(0) == "+" && intlTelInputUtils.isValidNumber(val, this.selectedCountryData.iso2)) {
          // if nationalMode and we have a valid intl number, convert it to ntl
          formatted = intlTelInputUtils.formatNumberByType(val, this.selectedCountryData.iso2, intlTelInputUtils.numberFormat.NATIONAL);
        } else {
          // else do the regular AsYouType formatting
          formatted = intlTelInputUtils.formatNumber(val, this.selectedCountryData.iso2, addSuffix, this.options.allowExtensions, isAllowedKey);
        } // ensure we dont go over maxlength. we must do this here to truncate any formatting suffix, and also handle paste events


        var max = this.telInput.attr("maxlength");

        if (max && formatted.length > max) {
          formatted = formatted.substr(0, max);
        }
      } else {
        // no autoFormat, so just insert the original value
        formatted = val;
      }

      this.telInput.val(formatted);
    },
    // check if need to select a new flag based on the given number
    _updateFlagFromNumber: function _updateFlagFromNumber(number, updateDefault) {
      // if we're in nationalMode and we're on US/Canada, make sure the number starts with a +1 so _getDialCode will be able to extract the area code
      // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag from the number), that means we're initialising the plugin with a number that already has a dial code, so fine to ignore this bit
      if (number && this.options.nationalMode && this.selectedCountryData && this.selectedCountryData.dialCode == "1" && number.charAt(0) != "+") {
        if (number.charAt(0) != "1") {
          number = "1" + number;
        }

        number = "+" + number;
      } // try and extract valid dial code from input


      var dialCode = this._getDialCode(number),
          countryCode = null;

      if (dialCode) {
        // check if one of the matching countries is already selected
        var countryCodes = this.countryCodes[this._getNumeric(dialCode)],
            alreadySelected = this.selectedCountryData && $.inArray(this.selectedCountryData.iso2, countryCodes) != -1; // if a matching country is not already selected (or this is an unknown NANP area code): choose the first in the list


        if (!alreadySelected || this._isUnknownNanp(number, dialCode)) {
          // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first non-empty index
          for (var j = 0; j < countryCodes.length; j++) {
            if (countryCodes[j]) {
              countryCode = countryCodes[j];
              break;
            }
          }
        }
      } else if (number.charAt(0) == "+" && this._getNumeric(number).length) {
        // invalid dial code, so empty
        // Note: use getNumeric here because the number has not been formatted yet, so could contain bad shit
        countryCode = "";
      } else if (!number || number == "+") {
        // empty, or just a plus, so default
        countryCode = "";
      }

      if (countryCode !== null) {
        this._selectFlag(countryCode, updateDefault);
      }
    },
    // check if the given number contains an unknown area code from the North American Numbering Plan i.e. the only dialCode that could be extracted was +1 but the actual number's length is >=4
    _isUnknownNanp: function _isUnknownNanp(number, dialCode) {
      return dialCode == "+1" && this._getNumeric(number).length >= 4;
    },
    // remove highlighting from other list items and highlight the given item
    _highlightListItem: function _highlightListItem(listItem) {
      this.countryListItems.removeClass("highlight");
      listItem.addClass("highlight");
    },
    // find the country data for the given country code
    // the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
    _getCountryData: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
      var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;

      for (var i = 0; i < countryList.length; i++) {
        if (countryList[i].iso2 == countryCode) {
          return countryList[i];
        }
      }

      if (allowFail) {
        return null;
      } else {
        throw new Error("No country data for '" + countryCode + "'");
      }
    },
    // select the given flag, update the placeholder and the active list item
    _selectFlag: function _selectFlag(countryCode, updateDefault) {
      // do this first as it will throw an error and stop if countryCode is invalid
      this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {}; // update the "defaultCountry" - we only need the iso2 from now on, so just store that

      if (updateDefault && this.selectedCountryData.iso2) {
        // can't just make this equal to selectedCountryData as would be a ref to that object
        this.options.defaultCountry = {
          iso2: this.selectedCountryData.iso2
        };
      }

      this.selectedFlagInner.attr("class", "iti-flag " + countryCode); // update the selected country's title attribute

      var title = countryCode ? this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode : "Unknown";
      this.selectedFlagInner.parent().attr("title", title); // and the input's placeholder

      this._updatePlaceholder();

      if (this.isMobile) {
        this.countryList.val(countryCode);
      } else {
        // update the active list item
        this.countryListItems.removeClass("active");

        if (countryCode) {
          this.countryListItems.find(".iti-flag." + countryCode).first().closest(".country").addClass("active");
        }
      }
    },
    // update the input placeholder to an example number from the currently selected country
    _updatePlaceholder: function _updatePlaceholder() {
      if (window.intlTelInputUtils && !this.hadInitialPlaceholder && this.options.autoPlaceholder && this.selectedCountryData) {
        var iso2 = this.selectedCountryData.iso2,
            numberType = intlTelInputUtils.numberType[this.options.numberType || "FIXED_LINE"],
            placeholder = iso2 ? intlTelInputUtils.getExampleNumber(iso2, this.options.nationalMode, numberType) : "";

        if (typeof this.options.customPlaceholder === "function") {
          placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
        }

        this.telInput.attr("placeholder", placeholder);
      }
    },
    // called when the user selects a list item from the dropdown
    _selectListItem: function _selectListItem(listItem) {
      var countryCodeAttr = this.isMobile ? "value" : "data-country-code"; // update selected flag and active list item

      this._selectFlag(listItem.attr(countryCodeAttr), true);

      if (!this.isMobile) {
        this._closeDropdown();
      }

      this._updateDialCode(listItem.attr("data-dial-code"), true); // always fire the change event as even if nationalMode=true (and we haven't updated the input val), the system as a whole has still changed - see country-sync example. think of it as making a selection from a select element.


      this.telInput.trigger("change"); // focus the input

      this.telInput.focus(); // fix for FF and IE11 (with nationalMode=false i.e. auto inserting dial code), who try to put the cursor at the beginning the first time

      if (this.isGoodBrowser) {
        var len = this.telInput.val().length;
        this.telInput[0].setSelectionRange(len, len);
      }
    },
    // close the dropdown and unbind any listeners
    _closeDropdown: function _closeDropdown() {
      this.countryList.addClass("hide"); // update the arrow

      this.selectedFlagInner.children(".arrow").removeClass("up"); // unbind key events

      $(document).off(this.ns); // unbind click-off-to-close

      $("html").off(this.ns); // unbind hover and click listeners

      this.countryList.off(this.ns); // remove menu from container

      if (this.options.dropdownContainer && !this.isMobile) {
        $(window).off("scroll" + this.ns);
        this.dropdown.detach();
      }
    },
    // check if an element is visible within it's container, else scroll until it is
    _scrollTo: function _scrollTo(element, middle) {
      var container = this.countryList,
          containerHeight = container.height(),
          containerTop = container.offset().top,
          containerBottom = containerTop + containerHeight,
          elementHeight = element.outerHeight(),
          elementTop = element.offset().top,
          elementBottom = elementTop + elementHeight,
          newScrollTop = elementTop - containerTop + container.scrollTop(),
          middleOffset = containerHeight / 2 - elementHeight / 2;

      if (elementTop < containerTop) {
        // scroll up
        if (middle) {
          newScrollTop -= middleOffset;
        }

        container.scrollTop(newScrollTop);
      } else if (elementBottom > containerBottom) {
        // scroll down
        if (middle) {
          newScrollTop += middleOffset;
        }

        var heightDifference = containerHeight - elementHeight;
        container.scrollTop(newScrollTop - heightDifference);
      }
    },
    // replace any existing dial code with the new one (if not in nationalMode)
    // also we need to know if we're focusing for a couple of reasons e.g. if so, we want to add any formatting suffix, also if the input is empty and we're not in nationalMode, then we want to insert the dial code
    _updateDialCode: function _updateDialCode(newDialCode, focusing) {
      var inputVal = this.telInput.val(),
          newNumber; // save having to pass this every time

      newDialCode = "+" + newDialCode;

      if (this.options.nationalMode && inputVal.charAt(0) != "+") {
        // if nationalMode, we just want to re-format
        newNumber = inputVal;
      } else if (inputVal) {
        // if the previous number contained a valid dial code, replace it
        // (if more than just a plus character)
        var prevDialCode = this._getDialCode(inputVal);

        if (prevDialCode.length > 1) {
          newNumber = inputVal.replace(prevDialCode, newDialCode);
        } else {
          // if the previous number didn't contain a dial code, we should persist it
          var existingNumber = inputVal.charAt(0) != "+" ? $.trim(inputVal) : "";
          newNumber = newDialCode + existingNumber;
        }
      } else {
        newNumber = !this.options.autoHideDialCode || focusing ? newDialCode : "";
      }

      this._updateVal(newNumber, null, focusing);
    },
    // try and extract a valid international dial code from a full telephone number
    // Note: returns the raw string inc plus character and any whitespace/dots etc
    _getDialCode: function _getDialCode(number) {
      var dialCode = ""; // only interested in international numbers (starting with a plus)

      if (number.charAt(0) == "+") {
        var numericChars = ""; // iterate over chars

        for (var i = 0; i < number.length; i++) {
          var c = number.charAt(i); // if char is number

          if ($.isNumeric(c)) {
            numericChars += c; // if current numericChars make a valid dial code

            if (this.countryCodes[numericChars]) {
              // store the actual raw string (useful for matching later)
              dialCode = number.substr(0, i + 1);
            } // longest dial code is 4 chars


            if (numericChars.length == 4) {
              break;
            }
          }
        }
      }

      return dialCode;
    },

    /********************
    *  PUBLIC METHODS
    ********************/
    // this is called when the geoip call returns
    autoCountryLoaded: function autoCountryLoaded() {
      if (this.options.defaultCountry == "auto") {
        this.options.defaultCountry = $.fn[pluginName].autoCountry;

        this._setInitialState();

        this.autoCountryDeferred.resolve();
      }
    },
    // remove plugin
    destroy: function destroy() {
      if (!this.isMobile) {
        // make sure the dropdown is closed (and unbind listeners)
        this._closeDropdown();
      } // key events, and focus/blur events if autoHideDialCode=true


      this.telInput.off(this.ns);

      if (this.isMobile) {
        // change event on select country
        this.countryList.off(this.ns);
      } else {
        // click event to open dropdown
        this.selectedFlagInner.parent().off(this.ns); // label click hack

        this.telInput.closest("label").off(this.ns);
      } // remove markup


      var container = this.telInput.parent();
      container.before(this.telInput).remove();
    },
    // extract the phone number extension if present
    getExtension: function getExtension() {
      return this.telInput.val().split(" ext. ")[1] || "";
    },
    // format the number to the given type
    getNumber: function getNumber(type) {
      if (window.intlTelInputUtils) {
        return intlTelInputUtils.formatNumberByType(this.telInput.val(), this.selectedCountryData.iso2, type);
      }

      return "";
    },
    // get the type of the entered number e.g. landline/mobile
    getNumberType: function getNumberType() {
      if (window.intlTelInputUtils) {
        return intlTelInputUtils.getNumberType(this.telInput.val(), this.selectedCountryData.iso2);
      }

      return -99;
    },
    // get the country data for the currently selected flag
    getSelectedCountryData: function getSelectedCountryData() {
      // if this is undefined, the plugin will return it's instance instead, so in that case an empty object makes more sense
      return this.selectedCountryData || {};
    },
    // get the validation error
    getValidationError: function getValidationError() {
      if (window.intlTelInputUtils) {
        return intlTelInputUtils.getValidationError(this.telInput.val(), this.selectedCountryData.iso2);
      }

      return -99;
    },
    // validate the input val - assumes the global function isValidNumber (from utilsScript)
    isValidNumber: function isValidNumber() {
      var val = $.trim(this.telInput.val()),
          countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";

      if (window.intlTelInputUtils) {
        return intlTelInputUtils.isValidNumber(val, countryCode);
      }

      return false;
    },
    // load the utils script
    loadUtils: function loadUtils(path) {
      var that = this;
      var utilsScript = path || this.options.utilsScript;

      if (utilsScript) {
        if (!$.fn[pluginName].loadedUtilsScript) {
          // don't do this twice! (dont just check if the global intlTelInputUtils exists as if init plugin multiple times in quick succession, it may not have finished loading yet)
          $.fn[pluginName].loadedUtilsScript = true; // dont use $.getScript as it prevents caching

          $.ajax({
            url: utilsScript,
            complete: function complete() {
              // tell all instances that the utils request is complete
              $(".intl-tel-input input").intlTelInput("utilsRequestComplete");
            },
            dataType: "script",
            cache: true
          });
        }
      } else {
        this.utilsScriptDeferred.resolve();
      }
    },
    // update the selected flag, and update the input val accordingly
    selectCountry: function selectCountry(countryCode) {
      countryCode = countryCode.toLowerCase(); // check if already selected

      if (!this.selectedFlagInner.hasClass(countryCode)) {
        this._selectFlag(countryCode, true);

        this._updateDialCode(this.selectedCountryData.dialCode, false);
      }
    },
    // set the input value and update the flag
    setNumber: function setNumber(number, format, addSuffix, preventConversion, isAllowedKey) {
      // ensure starts with plus
      if (!this.options.nationalMode && number.charAt(0) != "+") {
        number = "+" + number;
      } // we must update the flag first, which updates this.selectedCountryData, which is used later for formatting the number before displaying it


      this._updateFlagFromNumber(number);

      this._updateVal(number, format, addSuffix, preventConversion, isAllowedKey);
    },
    // this is called when the utils request completes
    utilsRequestComplete: function utilsRequestComplete() {
      // if the request was successful
      if (window.intlTelInputUtils) {
        // if autoFormat is enabled and there's an initial value in the input, then format it
        if (this.options.autoFormat && this.telInput.val()) {
          this._updateVal(this.telInput.val());
        }

        this._updatePlaceholder();
      }

      this.utilsScriptDeferred.resolve();
    }
  }; // adapted to allow public functions
  // using https://github.com/jquery-boilerplate/jquery-boilerplate/wiki/Extending-jQuery-Boilerplate

  $.fn[pluginName] = function (options) {
    var args = arguments; // Is the first parameter an object (options), or was omitted,
    // instantiate a new instance of the plugin.

    if (options === undefined || (0, _typeof2.default)(options) === "object") {
      var deferreds = [];
      this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          var instance = new Plugin(this, options);

          var instanceDeferreds = instance._init(); // we now have 2 deffereds: 1 for auto country, 1 for utils script


          deferreds.push(instanceDeferreds[0]);
          deferreds.push(instanceDeferreds[1]);
          $.data(this, "plugin_" + pluginName, instance);
        }
      }); // return the promise from the "master" deferred object that tracks all the others

      return $.when.apply(null, deferreds);
    } else if (typeof options === "string" && options[0] !== "_") {
      // If the first parameter is a string and it doesn't start
      // with an underscore or "contains" the `init`-function,
      // treat this as a call to a public method.
      // Cache the method call to make it possible to return a value
      var returns;
      this.each(function () {
        var instance = $.data(this, "plugin_" + pluginName); // Tests that there's already a plugin-instance
        // and checks that the requested public method exists

        if (instance instanceof Plugin && typeof instance[options] === "function") {
          // Call the method of our plugin instance,
          // and pass it the supplied arguments.
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        } // Allow instances to be destroyed via the 'destroy' method


        if (options === "destroy") {
          $.data(this, "plugin_" + pluginName, null);
        }
      }); // If the earlier cached method gives a value back return the value,
      // otherwise return this to preserve chainability.

      return returns !== undefined ? returns : this;
    }
  };
  /********************
  *  STATIC METHODS
  ********************/
  // get the country data object


  $.fn[pluginName].getCountryData = function () {
    return allCountries;
  };

  $.fn[pluginName].version = "6.4.1"; // Tell JSHint to ignore this warning: "character may get silently deleted by one or more browsers"
  // jshint -W100
  // Array of country objects for the flag dropdown.
  // Each contains a name, country code (ISO 3166-1 alpha-2) and dial code.
  // Originally from https://github.com/mledoze/countries
  // then with a couple of manual re-arrangements to be alphabetical
  // then changed Kazakhstan from +76 to +7
  // and Vatican City from +379 to +39 (see issue 50)
  // and Caribean Netherlands from +5997 to +599
  // and Curacao from +5999 to +599
  // Removed:  Kosovo, Pitcairn Islands, South Georgia
  // UPDATE Sept 12th 2015
  // List of regions that have iso2 country codes, which I have chosen to omit:
  // (based on this information: https://en.wikipedia.org/wiki/List_of_country_calling_codes)
  // AQ - Antarctica - all different country codes depending on which "base"
  // BV - Bouvet Island - no calling code
  // GS - South Georgia and the South Sandwich Islands - "inhospitable collection of islands" - same flag and calling code as Falkland Islands
  // HM - Heard Island and McDonald Islands - no calling code
  // PN - Pitcairn - tiny population (56), same calling code as New Zealand
  // TF - French Southern Territories - no calling code
  // UM - United States Minor Outlying Islands - no calling code
  // UPDATE the criteria of supported countries or territories (see issue 297)
  // Have an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  // Have a country calling code: https://en.wikipedia.org/wiki/List_of_country_calling_codes
  // Have a flag
  // Must be supported by libphonenumber: https://github.com/googlei18n/libphonenumber
  // Update: converted objects to arrays to save bytes!
  // Update: added "priority" for countries with the same dialCode as others
  // Update: added array of area codes for countries with the same dialCode as others
  // So each country array has the following information:
  // [
  //    Country name,
  //    iso2 code,
  //    International dial code,
  //    Order (if >1 country with same dial code),
  //    Area codes (if >1 country with same dial code)
  // ]

  var allCountries = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy (Saint-Barthélemy)", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]]; // loop over all of the countries above

  for (var i = 0; i < allCountries.length; i++) {
    var c = allCountries[i];
    allCountries[i] = {
      name: c[0],
      iso2: c[1],
      dialCode: c[2],
      priority: c[3] || 0,
      areaCodes: c[4] || null
    };
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gmtConverter = exports.pageConverter = exports.getPeriod = exports.getK = void 0;

var _rawdata = _interopRequireDefault(__webpack_require__(70));

var _parseData = _interopRequireDefault(__webpack_require__(71));

// interface LeadPriority {
//   source: string,
//   medium: string,
//   fromPage: string,
// }
var kTable = (0, _parseData.default)(_rawdata.default);

var getK = function getK(kObject, analyticsCb) // : LeadPriority
{
  var kObj = {};
  var country = kObject.country,
      dayOfWeek = kObject.dayOfWeek,
      fromPage = kObject.fromPage,
      gmt = kObject.gmt,
      hour = kObject.hour,
      medium = kObject.medium,
      month = kObject.month,
      source = kObject.source,
      hash = kObject.hash;

  var getKFromTable = function getKFromTable(key, param) {
    return param ? kTable[key][param] ? kTable[key][param] : kTable[key]['none'] || 0 : kTable[key]['(not_set)'] || 0;
  };

  try {
    kObj = {
      kCountry: getKFromTable('country', country),
      kDayOfWeek: getKFromTable('dayOfWeek', dayOfWeek),
      kFromPage: getKFromTable('fromPage', fromPage),
      kGmt: getKFromTable('gmt', gmt),
      kHour: getKFromTable('hour', hour),
      kMedium: getKFromTable('medium', medium),
      kMonth: getKFromTable('month', month),
      kSource: getKFromTable('source', source),
      kHash: getKFromTable('hash', hash)
    };
  } catch (e) {
    console.error(e);
  }

  if (analyticsCb) analyticsCb(kObj);
  var kSum = kObj.kCountry + kObj.kDayOfWeek + kObj.kFromPage + kObj.kGmt + kObj.kHour + kObj.kMedium + kObj.kMonth + kObj.kSource + kObj.kHash;
  var k;

  if (kSum !== 0) {
    // main formula
    var kRaw = 1 + Math.exp(-kSum); // round to 9 decimal

    k = Math.round(1 / kRaw * Math.pow(10, 9)) / Math.pow(10, 9);
  } else {
    k = 0;
  }

  return k;
};

exports.getK = getK;

var getPeriod = function getPeriod(num) // num: number
{
  // finding high and low period
  var priorityL = 0;
  var priorityH = 1;
  var period = '';

  if (num === 0) {
    period = '0-10';
  } else if (num === 1) {
    period = '90-100';
  } else {
    priorityL = Math.floor(num * 10);
    priorityH = Math.ceil(num * 10);
    period = "".concat(priorityL, "0-").concat(priorityH, "0");
  }

  return period;
};

exports.getPeriod = getPeriod;

var pageConverter = function pageConverter(url) {
  var urlArray = url.split('/');
  var result;

  if (urlArray[1] === 'l') {
    result = ['', urlArray[1], urlArray[2], ''].join('/');
  } else if (urlArray[1] === '') {
    result = ['', ''].join('/');
  } else {
    result = ['', urlArray[1], ''].join('/');
  }

  return result;
};

exports.pageConverter = pageConverter;

var gmtConverter = function gmtConverter(timeGMTOffset) {
  var time = timeGMTOffset / 60;
  var h = parseInt(time, 10);
  var m = timeGMTOffset % 60;
  if (h === 0 && m === 0) return '0';

  if (m === 0) {
    return "".concat(Math.sign(time) === -1 ? '+' : '-').concat(Math.abs(h));
  }

  return "".concat(Math.sign(time) === -1 ? '+' : '-').concat(Math.abs(h), ":").concat(Math.abs(m));
};

exports.gmtConverter = gmtConverter;

/***/ }),
/* 70 */
/***/ (function(module) {

module.exports = [{"p":"co","v":"UA","c":"0,04818829978"},{"p":"co","v":"RU","c":"-0,03980785294"},{"p":"co","v":"US","c":"-0,2363790374"},{"p":"co","v":"PL","c":"-0,3721391452"},{"p":"co","v":"BY","c":"-0,5484169341"},{"p":"co","v":"KZ","c":"-1,706761859"},{"p":"co","v":"AZ","c":"-2,674006069"},{"p":"co","v":"UZ","c":"-2,810122672"},{"p":"co","v":"TJ","c":"-7,356898015"},{"p":"co","v":"KG","c":"-8,359869504"},{"p":"co","v":"(not_set)","c":0},{"p":"co","v":"none","c":"-0,2884381515"},{"p":"dr","v":2,"c":"-3,332467998"},{"p":"dr","v":3,"c":"-3,391471561"},{"p":"dr","v":5,"c":"-3,420528457"},{"p":"dr","v":4,"c":"-3,476651452"},{"p":"dr","v":1,"c":"-3,53491753"},{"p":"dr","v":6,"c":"-3,558080421"},{"p":"dr","v":7,"c":"-3,630533516"},{"p":"dr","v":"(not_set)","c":0},{"p":"dr","v":"none","c":0},{"p":"fh","v":"#prichiny-sluhovogo-barera","c":"9,434196346"},{"p":"fh","v":"#5","c":"7,246457657"},{"p":"fh","v":"#13","c":"6,30562288"},{"p":"fh","v":"#teachers","c":"3,96239077"},{"p":"fh","v":"#freelesson","c":"3,590407716"},{"p":"fh","v":"#application-main-page-1","c":"3,489021714"},{"p":"fh","v":"#course-goals","c":"3,216786866"},{"p":"fh","v":"#certificate","c":"3,203028427"},{"p":"fh","v":"#ed-teachers","c":"2,929161077"},{"p":"fh","v":"#reviews","c":"2,801777677"},{"p":"fh","v":"#programs","c":"2,569891722"},{"p":"fh","v":"#application-main","c":"2,291178991"},{"p":"fh","v":"#modern-approach","c":"2,074101201"},{"p":"fh","v":"#application-kids","c":"1,83745842"},{"p":"fh","v":"#","c":"1,796482982"},{"p":"fh","v":"#scroll-to-form","c":"1,283571606"},{"p":"fh","v":"#modal-form","c":"0,7314908245"},{"p":"fh","v":"#Kak_utochnit'_informaciju_o_zvonjashhem","c":"-0,01844769797"},{"p":"fh","v":"#opredelenie-sushchestvitelnogo-v-anglijskom-yazyke","c":"-0,02418687173"},{"p":"fh","v":"#chemistry-himiya","c":"-0,0251020256"},{"p":"fh","v":"#present-perfect-proshloe-ili-nastoyashchee","c":"-0,02658672004"},{"p":"fh","v":"#biologiya","c":"-0,02806321436"},{"p":"fh","v":"#srok-obucheniya-dlya-upper-intermediate","c":"-0,02905041965"},{"p":"fh","v":"#rezyume-ili-cv","c":"-0,03018391556"},{"p":"fh","v":"#ot-chego-zavisit-vremya-izucheniya-anglijskogo-yazyka","c":"-0,03072939253"},{"p":"fh","v":"#pravilo-neither-nor","c":"-0,03302515243"},{"p":"fh","v":"#top-5-anglijskih-uchebnikov","c":"-0,03384959355"},{"p":"fh","v":"#greeting-song","c":"-0,03529814922"},{"p":"fh","v":"#anglijskij-soyuz","c":"-0,03641977356"},{"p":"fh","v":"#much","c":"-0,03683142671"},{"p":"fh","v":"#kak-proverit-svoj-uroven-anglijskogo","c":"-0,03859203741"},{"p":"fh","v":"#kogda-infinitiv-upotreblyaetsya-bez-chasticy-to","c":"-0,03888987574"},{"p":"fh","v":"#osnovnye-pravila-intonacii-s-primerami","c":"-0,03895171298"},{"p":"fh","v":"#ooo","c":"-0,03926673325"},{"p":"fh","v":"#pochemu-nuzhno-uchit-delovoj-anglijskij","c":"-0,04049728646"},{"p":"fh","v":"#prepositions-of-place","c":"-0,0405455888"},{"p":"fh","v":"#skolko-uchitsya-na-pre-intermediate","c":"-0,04076577759"},{"p":"fh","v":"#materialy-i-programmy-dlya-izucheniya","c":"-0,04288300194"},{"p":"fh","v":"#work","c":"-0,04307921465"},{"p":"fh","v":"#preimushchestva-ehlektronnoj-pochty","c":"-0,04686324905"},{"p":"fh","v":"#kak-uchit-po-100-slov-v-den","c":"-0,0516202399"},{"p":"fh","v":"#:~:text=%D0%AD%D1%81%D1%81%D0%B5%20%D0%BD%D0%B0%20%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%BC%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%8C,%D0%BB%D0%B8%D0%B1%D0%BE%20%D0%B4%D1%80%D1%83%D0%B3%D0%BE%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B2%D0%BE%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B6%D0%B0%D0%BD%D1%80%D0%B0.","c":"-0,05306037009"},{"p":"fh","v":"#:~:text=%D0%A1%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D1%81%D0%BB%D0%BE%D0%B2%D0%B0%2C%20%D0%BE%D0%B1%D0%BE%D0%B7%D0%BD%D0%B0%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D0%B5%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D1%8B,%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0%20%D0%BD%D0%B0%D1%80%D0%B8%D1%86%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20(common%20nouns).","c":"-0,05679448964"},{"p":"fh","v":"#podgotovka-k-sobesedovaniyu-na-anglijskom","c":"-0,06667386186"},{"p":"fh","v":"#glagoly-have-has-had","c":"-0,0699942645"},{"p":"fh","v":"#chto-dolzhen-znat-rebenok-v-pervom-klasse","c":"-0,09532981651"},{"p":"fh","v":"#rol-prilagatelnogo-v-predlozhenii","c":"-0,1028237703"},{"p":"fh","v":"#chto-vklyuchaet-v-sebya-kurs-izucheniya-yazyka-na-urovne-elementary","c":"-0,1134392209"},{"p":"fh","v":"#glagoly-fizicheskogo-vospriyatiya-verbs-of-physical-perception","c":"-0,1663291262"},{"p":"fh","v":"#ovoshchi","c":"-0,1681641134"},{"p":"fh","v":"#s-chego-luchshe-nachat-izuchenie-anglijskogo-s-rebenkom","c":"-0,1780243263"},{"p":"fh","v":"#za-skolko-mozhno-vyuchit-anglijskij-yazyk","c":"-0,1886000355"},{"p":"fh","v":"#8","c":"-0,2088427929"},{"p":"fh","v":"#uroven-anglijskogo-pre-intermediate","c":"-0,252285856"},{"p":"fh","v":"#upotreblenie-either-neither-i-both","c":"-0,3112349984"},{"p":"fh","v":"#otvechaem-na-blagodarnost-na-anglijskom-yazyke","c":"-0,3157953259"},{"p":"fh","v":"#rol-imeni-sushchestvitelnogo","c":"-0,3952222"},{"p":"fh","v":"#prostota-zalog-uspekha","c":"-0,4670868635"},{"p":"fh","v":"#h2_5","c":"-0,4894249507"},{"p":"fh","v":"#anglijskij-dlya-volonterov-chto-ehto","c":"-0,5146790534"},{"p":"fh","v":"#9","c":"-0,5209470395"},{"p":"fh","v":"#osobennosti-anglijskogo-zakonodatelstva","c":"-0,5542044793"},{"p":"fh","v":"#skolko-vremeni-neobhodimo-dlya-izucheniya-razgovornogo-anglijskogo","c":"-0,5571175839"},{"p":"fh","v":"#srok-obucheniya-na-urovne-elementary","c":"-0,5580011412"},{"p":"fh","v":"#kak-ispolzovat-socseti-dlya-izucheniya-anglijskogo","c":"-0,5641399094"},{"p":"fh","v":"#chastini-tuluba","c":"-0,5653821708"},{"p":"fh","v":"#chto-takoe-ehkzamen-toefl","c":"-0,5704589395"},{"p":"fh","v":"#yak-priskoriti-vivchennya-angl-jsko-z-vikladachem","c":"-0,595573705"},{"p":"fh","v":"#frukty","c":"-0,6063300939"},{"p":"fh","v":"#audirovanie","c":"-0,6074226387"},{"p":"fh","v":"#anglijskij-biznes-slovar","c":"-0,6077225349"},{"p":"fh","v":"#podkasty","c":"-0,611381356"},{"p":"fh","v":"#the-good-grammar-book","c":"-0,616774629"},{"p":"fh","v":"#whose","c":"-0,6218496055"},{"p":"fh","v":"#top-7-igr-chtoby-uluchshit-razgovornyj-anglijskij","c":"-0,6621823506"},{"p":"fh","v":"#zamoviti-stolik","c":"-0,6638886234"},{"p":"fh","v":"#6","c":"-0,672054924"},{"p":"fh","v":"#koli-krashche-pochati-vivchennya-angl-jsko","c":"-0,6788697909"},{"p":"fh","v":"#polza-ot-onlajn-diktantov","c":"-0,6818142576"},{"p":"fh","v":"#programmy-dlya-izucheniya-anglijskogo-yazyka","c":"-0,6947026229"},{"p":"fh","v":"#prichini-zajmatis-angl-jskoyu-po-skajpu-z-vchitelem","c":"-0,699392511"},{"p":"fh","v":"#yak-angl-jsk-multf-lmi-dopomagayut-d-tyam-vchiti-movu","c":"-0,7024287873"},{"p":"fh","v":"#kak-video-uroki-pomogayut-detyam","c":"-0,7036188499"},{"p":"fh","v":"#tv-r-na-temu-moya-podorozh","c":"-0,7132010687"},{"p":"fh","v":"#if-you-are-happy","c":"-0,7161046569"},{"p":"fh","v":"#kak-vyuchit-anglijskij-v-domashnih-usloviyah","c":"-0,7316404625"},{"p":"fh","v":"#shcho-take-ese-z-angl-jsko","c":"-0,7323023763"},{"p":"fh","v":"#primer-delovogo-pisma","c":"-0,732742717"},{"p":"fh","v":"#tekst-i-perevod-pesni-in-my-mind","c":"-0,7397735971"},{"p":"fh","v":"#kak-izuchat-anglijskij-yazyk-vo-2-klasse-samostoyatelno","c":"-0,7428835297"},{"p":"fh","v":"#shcho-take-rezyume","c":"-0,746039908"},{"p":"fh","v":"#11","c":"-0,7564640394"},{"p":"fh","v":"#oshibki-pri-napisanii-rezyume","c":"-0,7684740163"},{"p":"fh","v":"#top-15-slov-dlya-ispolzovaniya-v-delovom-anglijskom","c":"-0,7731491557"},{"p":"fh","v":"#essay-on-my-future-career","c":"-0,7731549871"},{"p":"fh","v":"#shcho-take-past-simple","c":"-0,7886291203"},{"p":"fh","v":"#ser-ali-i-f-lmi-angl-jskoyu-movoyu","c":"-0,7939645049"},{"p":"fh","v":"#chtenie-osnovnyh-kombinacij-soglasnyh-v-anglijskom-yazyke","c":"-0,8112311131"},{"p":"fh","v":"#chto-takoe-specialnyj-vopros","c":"-0,8118022406"},{"p":"fh","v":"#delovoj-anglijskij-dlya-finansistov","c":"-0,8122594263"},{"p":"fh","v":"#kogda-luchshe-nachat-izuchenie-anglijskogo","c":"-0,8134355402"},{"p":"fh","v":"#chto-znachit-upper-intermediate","c":"-0,8279325458"},{"p":"fh","v":"#essay-my-summer-holidays","c":"-0,8432444176"},{"p":"fh","v":"#dlya-chogo-potr-bno-shvidko-vivchiti-angl-jsku","c":"-0,8541947827"},{"p":"fh","v":"#perev-r-sv-j-r-ven-angl-jsko-movi","c":"-0,8598647708"},{"p":"fh","v":"#vidi-navchalnih-gor-na-angl-jsk-j","c":"-0,8616259535"},{"p":"fh","v":"#zaklyuchenie","c":"-0,869411671"},{"p":"fh","v":"#uchebniki-dlya-it-specialistov","c":"-0,8749855142"},{"p":"fh","v":"#s-chego-luchshe-nachinat-izuchat-anglijskij-yazyk-vtoroklassniku","c":"-0,8869373345"},{"p":"fh","v":"#dlya-chego-nuzhen-razgovornyj-anglijskij","c":"-0,9027152895"},{"p":"fh","v":"#osnovnye-ponyatiya-vo-vremya-peregovorov","c":"-0,9329185306"},{"p":"fh","v":"#kak-luchshe-uchit-transkripciyu-zvukov-dlya-detej","c":"-0,9358849567"},{"p":"fh","v":"#sposoby-izucheniya-razgovornogo-anglijskogo-onlajn","c":"-0,9660036641"},{"p":"fh","v":"#uroven-intermediate-chto-ehto-znachit","c":"-0,978314632"},{"p":"fh","v":"#chto-nuzhno-osvoit-v-pervuyu-ochered","c":"-1,000779432"},{"p":"fh","v":"#7","c":"-1,007835721"},{"p":"fh","v":"#neobhodimyj-uroven-znaniya-anglijskogo-dlya-testirovshchika","c":"-1,015192094"},{"p":"fh","v":"#yak-shvidko-vivchiti-angl-jsk-slova","c":"-1,025033853"},{"p":"fh","v":"#pristegnite-remni","c":"-1,042213051"},{"p":"fh","v":"#urovni-vladeniya-anglijskim-yazykom","c":"-1,046011184"},{"p":"fh","v":"#transkripc-ya-golosnih-zvuk-v","c":"-1,05866735"},{"p":"fh","v":"#uroven-yazyka-preintermediate-chto-ehto-znachit","c":"-1,082508222"},{"p":"fh","v":"#grammaticheskie-temy","c":"-1,085267344"},{"p":"fh","v":"#second__screen","c":"-1,093806086"},{"p":"fh","v":"#chem-otlichaetsya-uroven-beginner-ot-elementary","c":"-1,098134859"},{"p":"fh","v":"#4library","c":"-1,164361519"},{"p":"fh","v":"#struktura-d-lovogo-lista","c":"-1,205783268"},{"p":"fh","v":"#preimushchestva-nashego-testa-na-znanie-anglijskogo-yazyka","c":"-1,296483028"},{"p":"fh","v":"#realno-li-vyuchit-anglijskij-za-mesyac-nedelyu-24-chasa","c":"-1,330541537"},{"p":"fh","v":"#prosto-pro-angl-jsk-chasi","c":"-1,333663171"},{"p":"fh","v":"#4","c":"-1,379761613"},{"p":"fh","v":"#5-tip-v-pitan-v-angl-jsk","c":"-1,463126143"},{"p":"fh","v":"#chitannya-osnovnih-komb-nac-j-prigolosnih-v-angl-jsk-j-mov","c":"-1,482764541"},{"p":"fh","v":"#2","c":"-1,534358765"},{"p":"fh","v":"#kak-pravilno-perevodit-s-anglijskogo","c":"-1,715610827"},{"p":"fh","v":"#aud-oknigi-angl-jskoyu-movoyu-onlajn","c":"-1,731309337"},{"p":"fh","v":"#abc-song","c":"-1,745432455"},{"p":"fh","v":"#ser-ali-angl-jskoyu-movoyu-z-subtitrami","c":"-1,772912273"},{"p":"fh","v":"#3","c":"-1,82973828"},{"p":"fh","v":"#get-bonus","c":"-1,94104332"},{"p":"fh","v":"#1","c":"-2,876710576"},{"p":"fh","v":"#application-skype-page-1","c":"-2,928793111"},{"p":"fh","v":"(not_set)","c":"1,924767653"},{"p":"fh","v":"none","c":0},{"p":"fp","v":"classes","c":"10,21047249"},{"p":"fp","v":"/l/family20","c":"6,391988141"},{"p":"fp","v":"/l/devby","c":"6,18637943"},{"p":"fp","v":"main_type-c","c":"5,874779459"},{"p":"fp","v":"contacts","c":"3,754376848"},{"p":"fp","v":"otzyvy","c":"2,87512433"},{"p":"fp","v":"process","c":"2,63239026"},{"p":"fp","v":"invited","c":"2,545087239"},{"p":"fp","v":"prices","c":"2,10609538"},{"p":"fp","v":"skype","c":"1,938236663"},{"p":"fp","v":"promo","c":"1,92118667"},{"p":"fp","v":"/l/biz","c":"1,911347058"},{"p":"fp","v":"/l/2womansdayli","c":"1,856101373"},{"p":"fp","v":"/l/english_digital","c":"1,732581846"},{"p":"fp","v":"/l/english_for_business","c":"1,706084756"},{"p":"fp","v":"/l/may19","c":"1,394837911"},{"p":"fp","v":"/","c":"1,307700181"},{"p":"fp","v":"kids","c":"1,299774562"},{"p":"fp","v":"ua","c":"1,084232425"},{"p":"fp","v":"/l/friday19","c":"1,03994242"},{"p":"fp","v":"/l/2englishchoice","c":"0,9786199388"},{"p":"fp","v":"course","c":"0,9237848819"},{"p":"fp","v":"/l/halloween20","c":"0,7947694463"},{"p":"fp","v":"/l/english_a_ukr","c":"0,7236678"},{"p":"fp","v":"home","c":"0,6399656896"},{"p":"fp","v":"/l/jedi20","c":"0,5873633084"},{"p":"fp","v":"/l/english_for_programmers","c":"0,4938913623"},{"p":"fp","v":"main_type-b","c":"0,3942681374"},{"p":"fp","v":"/l/sebova","c":"0,3791352769"},{"p":"fp","v":"learn-english","c":"0,3671738384"},{"p":"fp","v":"/l/june20","c":"0,3511755656"},{"p":"fp","v":"/l/english_august","c":"0,3370600456"},{"p":"fp","v":"/l/english-school","c":"0,3122581309"},{"p":"fp","v":"/l/english_lessons","c":"0,3057881116"},{"p":"fp","v":"/l/english_a","c":"0,2938870248"},{"p":"fp","v":"learn-effectively","c":"0,2938870248"},{"p":"fp","v":"repetitors","c":"0,2829082084"},{"p":"fp","v":"/l/levelup","c":"0,2747622241"},{"p":"fp","v":"city","c":"0,2721963951"},{"p":"fp","v":"/l/bbq20","c":"0,2473731298"},{"p":"fp","v":"/l/it20","c":"0,2058672238"},{"p":"fp","v":"angliyskiy-po-novomu","c":"0,1691250907"},{"p":"fp","v":"/l/enbox20","c":"0,1521562276"},{"p":"fp","v":"/l/school20","c":"0,1173043495"},{"p":"fp","v":"/l/it19","c":"0,1142311939"},{"p":"fp","v":"/l/english_a2","c":"0,02835037036"},{"p":"fp","v":"/l/march20","c":"0,02459702902"},{"p":"fp","v":"courses","c":"-0,02041912019"},{"p":"fp","v":"/l/onismogli20","c":"-0,06199269357"},{"p":"fp","v":"/l/switch20","c":"-0,115213238"},{"p":"fp","v":"/l/newyear20","c":"-0,3140279779"},{"p":"fp","v":"/l/stayhome20","c":"-0,332858347"},{"p":"fp","v":"/l/chugaister","c":"-0,3916837776"},{"p":"fp","v":"/l/englishbox","c":"-0,4034971902"},{"p":"fp","v":"/l/2vancouverok","c":"-0,486150441"},{"p":"fp","v":"/l/english_beginners","c":"-0,5173427969"},{"p":"fp","v":"/l/halloweenglish19","c":"-0,5479414158"},{"p":"fp","v":"/l/2partnernik","c":"-0,5696816894"},{"p":"fp","v":"main_type-d","c":"-0,6171416562"},{"p":"fp","v":"/l/youtube_main","c":"-0,6727087515"},{"p":"fp","v":"/l/english_travel","c":"-0,7611884612"},{"p":"fp","v":"/l/newyear20-2","c":"-0,7745367021"},{"p":"fp","v":"/l/english_r","c":"-0,7803370075"},{"p":"fp","v":"/l/burenok","c":"-0,7957930411"},{"p":"fp","v":"test-your-english-level","c":"-0,7971053867"},{"p":"fp","v":"/l/english_ol","c":"-1,013717775"},{"p":"fp","v":"skills","c":"-1,062432762"},{"p":"fp","v":"/l/english_it","c":"-1,183857694"},{"p":"fp","v":"online-free","c":"-1,33115525"},{"p":"fp","v":"l-youtube","c":"-1,350798451"},{"p":"fp","v":"blog","c":"-1,908019672"},{"p":"fp","v":"grammarcards","c":"-1,97851025"},{"p":"fp","v":"/l/english_kids","c":"-2,538236789"},{"p":"fp","v":"/l/english_online","c":"-2,693372382"},{"p":"fp","v":"/l/family2020","c":"-2,700286536"},{"p":"fp","v":"/l/a1an","c":"-2,88387371"},{"p":"fp","v":"/l/template-promo","c":"-3,12879818"},{"p":"fp","v":"/l/newyear20-new","c":"-3,268588778"},{"p":"fp","v":"/l/musk19","c":"-3,439452032"},{"p":"fp","v":"/l/english_native","c":"-3,454324327"},{"p":"fp","v":"/l/http:","c":"-3,585712654"},{"p":"fp","v":"/l/kids20","c":"-3,708893756"},{"p":"fp","v":"/l/youtube2","c":"-3,764385023"},{"p":"fp","v":"/l/ielts","c":"-4,094659075"},{"p":"fp","v":"/l/free-time","c":"-4,484066508"},{"p":"fp","v":"/l/vno","c":"-4,617558928"},{"p":"fp","v":"/l/speaking","c":"-4,790020106"},{"p":"fp","v":"/l/english_s","c":"-5,235739366"},{"p":"fp","v":"/l/po-serialam","c":"-5,250825743"},{"p":"fp","v":"/l/2tpynak","c":"-5,640772862"},{"p":"fp","v":"/l/goonline20","c":"-5,81737208"},{"p":"fp","v":"(not_set)","c":0},{"p":"fp","v":"none","c":0},{"p":"gm","v":-4,"c":"1,606552606"},{"p":"gm","v":-5,"c":"1,515796286"},{"p":"gm","v":"+3:30","c":"1,443930745"},{"p":"gm","v":-6,"c":"1,399446842"},{"p":"gm","v":"+2","c":"1,291831164"},{"p":"gm","v":"+11","c":"1,275310029"},{"p":"gm","v":"+10","c":"1,217347355"},{"p":"gm","v":0,"c":"1,200337454"},{"p":"gm","v":-7,"c":"1,178343014"},{"p":"gm","v":"+3","c":"1,165338755"},{"p":"gm","v":"+1","c":"1,046370227"},{"p":"gm","v":"+12","c":"0,9059402855"},{"p":"gm","v":"+9","c":"0,6283399179"},{"p":"gm","v":"+4","c":"0,4341439747"},{"p":"gm","v":"+7","c":"0,4281947586"},{"p":"gm","v":"+5","c":"0,2619904052"},{"p":"gm","v":"+8","c":"0,1416298376"},{"p":"gm","v":"+6:30","c":"-0,0008043549119"},{"p":"gm","v":-3,"c":"-0,1999441904"},{"p":"gm","v":"+6","c":"-0,7513809746"},{"p":"gm","v":-10,"c":"-1,179364994"},{"p":"gm","v":"+10:30","c":"-1,380751126"},{"p":"gm","v":-8,"c":"-1,61938369"},{"p":"gm","v":"+9:30","c":"-1,921222653"},{"p":"gm","v":"+13","c":"-3,265296194"},{"p":"gm","v":-11,"c":"-3,345435449"},{"p":"gm","v":"+4:30","c":"-3,746193805"},{"p":"gm","v":"+14","c":"-3,948195442"},{"p":"gm","v":"+5:45","c":"-4,297843424"},{"p":"gm","v":-12,"c":"-4,732011249"},{"p":"gm","v":-2,"c":"-5,369276351"},{"p":"gm","v":"+5:30","c":"-5,728390687"},{"p":"gm","v":"(not_set)","c":0},{"p":"gm","v":"none","c":0},{"p":"hr","v":9,"c":"-0,6195013766"},{"p":"hr","v":11,"c":"-0,7203838927"},{"p":"hr","v":3,"c":"-0,7303200232"},{"p":"hr","v":12,"c":"-0,7458627808"},{"p":"hr","v":13,"c":"-0,7651059811"},{"p":"hr","v":10,"c":"-0,7654145039"},{"p":"hr","v":14,"c":"-0,8028441151"},{"p":"hr","v":8,"c":"-0,8103167789"},{"p":"hr","v":4,"c":"-0,8148988837"},{"p":"hr","v":7,"c":"-0,887239599"},{"p":"hr","v":15,"c":"-0,8966505819"},{"p":"hr","v":16,"c":"-0,899749307"},{"p":"hr","v":18,"c":"-0,9456692571"},{"p":"hr","v":17,"c":"-0,9977952658"},{"p":"hr","v":0,"c":"-1,06319206"},{"p":"hr","v":5,"c":"-1,114284416"},{"p":"hr","v":19,"c":"-1,129177796"},{"p":"hr","v":6,"c":"-1,129232568"},{"p":"hr","v":2,"c":"-1,190080041"},{"p":"hr","v":21,"c":"-1,190416461"},{"p":"hr","v":20,"c":"-1,268121298"},{"p":"hr","v":22,"c":"-1,275485431"},{"p":"hr","v":23,"c":"-1,400020016"},{"p":"hr","v":1,"c":"-2,182888502"},{"p":"hr","v":"(not_set)","c":0},{"p":"hr","v":"none","c":0},{"p":"cm","v":"socialmedia+2","c":"8,907523044"},{"p":"cm","v":"mvlasenko-5e590f86af7a3","c":"8,820924824"},{"p":"cm","v":"eromgik-5f40fed79abdc","c":"8,641015595"},{"p":"cm","v":"mirlancer-5d931ae5aece8","c":"7,586026439"},{"p":"cm","v":"selevit+ed-5b13a4973a63a","c":"6,261895747"},{"p":"cm","v":"shestistrunka.rf-5ed6322892692","c":"6,037564999"},{"p":"cm","v":"tashika_05-5b0aedf80a453","c":"5,841774445"},{"p":"cm","v":"schoolrate","c":"5,583089135"},{"p":"cm","v":"jacky853-5bbdb786bd15c","c":"5,558059924"},{"p":"cm","v":"enguide","c":"5,413649817"},{"p":"cm","v":"kosareva+2","c":"5,361073443"},{"p":"cm","v":"alinoidy-5b21bffc096fb","c":"5,3575589"},{"p":"cm","v":"vladimir-5b0a9f4995d21","c":"5,241664651"},{"p":"cm","v":"vladred31207-5e2c5d23ebadc","c":"5,068512828"},{"p":"cm","v":"elena.1705-5bd188e09fbd7","c":"5,037586259"},{"p":"cm","v":"Facebook_Desktop_Feed","c":"4,942667625"},{"p":"cm","v":"vse-kursy","c":"4,850302065"},{"p":"cm","v":"brand","c":"4,765811452"},{"p":"cm","v":"yan-5ec585b044fbf","c":"4,720957829"},{"p":"cm","v":"lelang","c":"4,541434322"},{"p":"cm","v":"babcholeg-5f3c130d4b6db","c":"4,493569643"},{"p":"cm","v":"info-5ed8cef4ee436","c":"4,462594039"},{"p":"cm","v":"englisher","c":"4,445194153"},{"p":"cm","v":"scuns-134145-5cbf1b19f2a8c","c":"4,402039041"},{"p":"cm","v":"manual","c":"4,228511311"},{"p":"cm","v":"wm.morozov1-5b28d392783c8","c":"4,182350091"},{"p":"cm","v":"tpynak-5bc88fcb36ed9","c":"4,129150359"},{"p":"cm","v":"kuzser00-5e13a7784a7f1","c":"4,129036967"},{"p":"cm","v":"Vladimir+2","c":"4,0459438"},{"p":"cm","v":"kupriyanovap-5e3be04bb1de8","c":"3,92808699"},{"p":"cm","v":"goodtoknow","c":"3,477680283"},{"p":"cm","v":"tayben-5b9a52ff5b9de","c":"3,425973337"},{"p":"cm","v":"cpa+englishchoice","c":"3,425319396"},{"p":"cm","v":"fenglish.ru-5bed5be0133b4","c":"3,287568367"},{"p":"cm","v":"denis-5d62b74ac9bb0","c":"3,086112165"},{"p":"cm","v":"checklistbot","c":"3,005291534"},{"p":"cm","v":"belydmi-5efc8395e52cb","c":"2,972396671"},{"p":"cm","v":"sokratstoforandov-5f35acdc33993","c":"2,886967962"},{"p":"cm","v":"all-5bbb852b74f9e","c":"2,602058515"},{"p":"cm","v":"salid-5e7b740a293c2","c":"2,572752879"},{"p":"cm","v":"spa","c":"2,551654497"},{"p":"cm","v":"xordaooo-5d0b4f39f2802","c":"2,372165138"},{"p":"cm","v":"textback","c":"2,139902296"},{"p":"cm","v":"lead","c":"1,892637821"},{"p":"cm","v":"golicyj-5b3f4229f40d8","c":"1,856101373"},{"p":"cm","v":"intergration","c":"1,824733792"},{"p":"cm","v":"ohmyenglish","c":"1,266434874"},{"p":"cm","v":"article","c":"1,254908088"},{"p":"cm","v":"(none)","c":"1,212969368"},{"p":"cm","v":"invite","c":"2,368703333"},{"p":"cm","v":"pr","c":"1,02367064"},{"p":"cm","v":"blog","c":"0,8051024663"},{"p":"cm","v":"ira-5e3823aa46e76","c":"0,7795322195"},{"p":"cm","v":"site","c":"0,7340399958"},{"p":"cm","v":"autoemail","c":"0,7079387079"},{"p":"cm","v":"social","c":"0,6690798439"},{"p":"cm","v":"banner","c":"0,6004779873"},{"p":"cm","v":"offline","c":"0,5462675075"},{"p":"cm","v":"email","c":"0,5120924952"},{"p":"cm","v":"webpush","c":"0,3853527882"},{"p":"cm","v":"apps","c":"0,1962496227"},{"p":"cm","v":"schools_module","c":"-0,001248967949"},{"p":"cm","v":"edm250880-5e40dfa8846c0","c":"-0,001622345257"},{"p":"cm","v":"organic","c":"-0,01057812396"},{"p":"cm","v":"m.e.kotenkov-5e908856e2e61","c":"-0,01086340787"},{"p":"cm","v":"cpc","c":"-0,02294036101"},{"p":"cm","v":"webinars2020","c":"-0,03356426342"},{"p":"cm","v":"irinakozyreva131-5e9b675c921c8","c":"-0,06482418156"},{"p":"cm","v":"mbirdapp-5e4eb028a7e8f","c":"-0,0706862005"},{"p":"cm","v":"katerinau333-5c66ccdd04585","c":"-0,07460126182"},{"p":"cm","v":"best-trade24-5ec29482a4d5f","c":"-0,1183706973"},{"p":"cm","v":"dzheityuk.ad-5e340df9237fe","c":"-0,120387311"},{"p":"cm","v":"UnicornEnglishSite-5d656799a8b0c","c":"-0,1240988983"},{"p":"cm","v":"shapolov_alexey04-5d8c94d811c66","c":"-0,1375724198"},{"p":"cm","v":"Alexyone222-5f59fd6ed5172","c":"-0,1654004911"},{"p":"cm","v":"Юнистади2","c":"-0,2272133805"},{"p":"cm","v":"Vladimir%2B2","c":"-0,2274071308"},{"p":"cm","v":"maksimartemovrich-5d4af37fbbf16","c":"-0,2377760561"},{"p":"cm","v":"maksat111276-5ea2e48c94ffd","c":"-0,2605069333"},{"p":"cm","v":"ynisullivan-5ec286213d7e6","c":"-0,2948922476"},{"p":"cm","v":"integration","c":"-0,3198676689"},{"p":"cm","v":"alexgertskin-5e3bba8f532e7","c":"-0,3365762166"},{"p":"cm","v":"konstantyn.gordienko-5eecbb41454ce","c":"-0,3533367448"},{"p":"cm","v":"diagon-alley-5b75997e5c224","c":"-0,3714054376"},{"p":"cm","v":"akseltrade-5f4766150782d","c":"-0,403997986"},{"p":"cm","v":"tizer_nets2","c":"-0,4050861256"},{"p":"cm","v":"hypetraffic2018-5e9aa6f2aabfc","c":"-0,4087722073"},{"p":"cm","v":"dolby8066-5c08089178a97","c":"-0,4220984051"},{"p":"cm","v":"Email.mailing.stas.P-5e673746cc141","c":"-0,4293428714"},{"p":"cm","v":"amgrigoryan-5e8b6dc873e57","c":"-0,4445696399"},{"p":"cm","v":"ivannarcissov-5e4b943dc5a8a","c":"-0,4806695183"},{"p":"cm","v":"Eduhab-5f0f2bd6a59a0","c":"-0,5247779978"},{"p":"cm","v":"moyvizitka-5c73d3da7993a","c":"-0,5427294138"},{"p":"cm","v":"partner","c":"-0,5579575719"},{"p":"cm","v":"partnernik25-5d2b35cc6c736","c":"-0,5696816894"},{"p":"cm","v":"partners","c":"-0,5892995908"},{"p":"cm","v":"rufovpawlo-5f3a722e06f0c","c":"-0,6326832999"},{"p":"cm","v":"chatbot_sitel","c":"-0,6650101484"},{"p":"cm","v":"ruslanas.safiulinas-5e80b2a5a1d06","c":"-0,6662800745"},{"p":"cm","v":"dvolochnik-5e9c3218d8a3d","c":"-0,6814857981"},{"p":"cm","v":"nargizeka-5ecb71deaf247","c":"-0,6819882506"},{"p":"cm","v":"piskind-5ec798af664e3","c":"-0,6884292212"},{"p":"cm","v":"alexnavmksatnet-5e9dab2a74196","c":"-0,7267115097"},{"p":"cm","v":"kogtev-5b7d06e644d99","c":"-0,7561033157"},{"p":"cm","v":"alexandrartil-5e6f1f6baaa46","c":"-0,7782857613"},{"p":"cm","v":"social_target","c":"-0,7973004459"},{"p":"cm","v":"ppc_mobile","c":"-0,8000882047"},{"p":"cm","v":"Ovc13-5f0824b911d6b","c":"-0,8319608641"},{"p":"cm","v":"sergey-5d919060d771d","c":"-0,8375825562"},{"p":"cm","v":"test.partnerki.englishdom-5eb2b911433de","c":"-0,8442200502"},{"p":"cm","v":"social_cpc","c":"-0,852105515"},{"p":"cm","v":"telesnitskyi.reklama-5f1081d7715a6","c":"-0,8945236446"},{"p":"cm","v":"sales","c":"-0,8976849047"},{"p":"cm","v":"shtoikak-5b9118c7a2730","c":"-0,9127990261"},{"p":"cm","v":"port-90-5d1872d6a6225","c":"-0,9192639666"},{"p":"cm","v":"dil939-5f157fc349aa9","c":"-0,9235345185"},{"p":"cm","v":"babychvladyslav-5f2974ece5c8c","c":"-0,9263185143"},{"p":"cm","v":"psa777-5e91dbb64b208","c":"-0,931377447"},{"p":"cm","v":"denis_9703-5ec11b33d786f","c":"-0,9740688856"},{"p":"cm","v":"asmaraachmedowa2912-5f5d3aeb40bfa","c":"-0,9835794538"},{"p":"cm","v":"context","c":"-1,009502589"},{"p":"cm","v":"free_time","c":"-1,014757146"},{"p":"cm","v":"rashidsalyakaev-5cd18f958416d","c":"-1,019790335"},{"p":"cm","v":"andzela.rysaeva-5e4902b3db916","c":"-1,024351084"},{"p":"cm","v":"edelweissco-5d0b69f82b2c7","c":"-1,032338642"},{"p":"cm","v":"mail-5e43cf6793bad","c":"-1,038255333"},{"p":"cm","v":"ksyniayurjeva-5eceed1f94876","c":"-1,043715561"},{"p":"cm","v":"madam_shazly","c":"-1,066646861"},{"p":"cm","v":"SNM02051978-5d2df28fb38e2","c":"-1,106358677"},{"p":"cm","v":"bk_irina-5eb0e8985198b","c":"-1,116148865"},{"p":"cm","v":"selevit%2Bed-5b13a4973a63a","c":"-1,122345373"},{"p":"cm","v":"24232456k-5e18da9906aad","c":"-1,132951118"},{"p":"cm","v":"info-5bf267c829030","c":"-1,156593673"},{"p":"cm","v":"movietape.tg-5e8c60c442019","c":"-1,167515191"},{"p":"cm","v":"pavlo.mavrich-5e9aa55d52df8","c":"-1,183689289"},{"p":"cm","v":"zrr777zrr-5e49ab5c80f50","c":"-1,183742571"},{"p":"cm","v":"shikari2367-5e588ae294d7e","c":"-1,192999947"},{"p":"cm","v":"qa.englishdom+TEST222y-5d1c54927132a","c":"-1,221867694"},{"p":"cm","v":"zholobenko88-5e8aa88b2d70b","c":"-1,228480869"},{"p":"cm","v":"urokov100.ru-5e4245b7d09e1","c":"-1,230657918"},{"p":"cm","v":"dathos-5c8cee5453cf4","c":"-1,247407538"},{"p":"cm","v":"xorowuykanal-5df36c818dd29","c":"-1,257091041"},{"p":"cm","v":"elenaruvel","c":"-1,272601996"},{"p":"cm","v":"kireevt-5ee3b53e3325b","c":"-1,272892411"},{"p":"cm","v":"egorfedorov3-5c3072ef2e903","c":"-1,290264109"},{"p":"cm","v":"Lubov86-5f676a68b7455","c":"-1,290423523"},{"p":"cm","v":"kate.gramarye-5c66a5c7523ec","c":"-1,293644675"},{"p":"cm","v":"englisher#","c":"-1,319124888"},{"p":"cm","v":"raven2020-5dfcc3840d04f","c":"-1,320401724"},{"p":"cm","v":"ca","c":"-1,326643404"},{"p":"cm","v":"promotion.of.stores-5e9c4fa567db5","c":"-1,331392749"},{"p":"cm","v":"ppc_mobile#","c":"-1,357596428"},{"p":"cm","v":"didkovskaya","c":"-1,36154161"},{"p":"cm","v":"OlegD","c":"-1,371271837"},{"p":"cm","v":"referral","c":"-1,375479528"},{"p":"cm","v":"iuspeha-5bfd6525166d7","c":"-1,382111259"},{"p":"cm","v":"kozh.andrew-5d49c6c8e5c8f","c":"-1,388747919"},{"p":"cm","v":"Sergio2514-5dbd316cab09c","c":"-1,418650274"},{"p":"cm","v":"textbackmediumC","c":"-1,432124985"},{"p":"cm","v":"tim77177-5e973cd00a607","c":"-1,443017195"},{"p":"cm","v":"ficshteh-5f0c1cbc75d29","c":"-1,460148754"},{"p":"cm","v":"kfa59-5eb10ba8bc960","c":"-1,46363486"},{"p":"cm","v":"thebestpart-5dc413d2390d1","c":"-1,483695178"},{"p":"cm","v":"moikrug","c":"-1,484407619"},{"p":"cm","v":"allonlineschools-5d811bc0734c0","c":"-1,499168832"},{"p":"cm","v":"guruit-5e4bde6a10bba","c":"-1,502811551"},{"p":"cm","v":"viua787-5dc39cd97ffc8","c":"-1,506176806"},{"p":"cm","v":"artur.agapov-5b840b81a94bf","c":"-1,510330743"},{"p":"cm","v":"ramis797-5e4a0e7e198b5","c":"-1,518157732"},{"p":"cm","v":"sms","c":"-1,522548026"},{"p":"cm","v":"agru2-5bc63e80681f3","c":"-1,546783086"},{"p":"cm","v":"cpm","c":"-1,547132862"},{"p":"cm","v":"oxana-5f3bb3ec746ff","c":"-1,548979"},{"p":"cm","v":"samisvetim-5edc368bcf8d3","c":"-1,56232485"},{"p":"cm","v":"d.miller+nativeenglish-5d4983c6c176c","c":"-1,576035835"},{"p":"cm","v":"d.miller+225546-5ee23e1e26470","c":"-1,605570323"},{"p":"cm","v":"tiptopenglish.ru-5d762a509134c","c":"-1,636714969"},{"p":"cm","v":"infohit","c":"-1,647682737"},{"p":"cm","v":"social-target","c":"-1,662334317"},{"p":"cm","v":"dreweu-5d8f35b8a6a5d","c":"-1,664453557"},{"p":"cm","v":"vernyk1718-5f69a7c5c9332","c":"-1,670223497"},{"p":"cm","v":"av_fedoseeva-5ee8cbb308fb0","c":"-1,680369442"},{"p":"cm","v":"PPC_mobile","c":"-1,691872217"},{"p":"cm","v":"socialmedia%2B2","c":"-1,737586777"},{"p":"cm","v":"business","c":"-1,749089831"},{"p":"cm","v":"vasemenyuk-5b8fea10ccdc1","c":"-1,74975187"},{"p":"cm","v":"promo","c":"-1,831426907"},{"p":"cm","v":"pen4pals+2","c":"-1,83356579"},{"p":"cm","v":"letter","c":"-1,834322286"},{"p":"cm","v":"webmaster.dobs-5d233eab15789","c":"-1,837411014"},{"p":"cm","v":"s.konyaeva-5e9446825a958","c":"-1,866795233"},{"p":"cm","v":"gala.studio.bg-5e2595d322c81","c":"-1,887002449"},{"p":"cm","v":"irrrra-5a2f907c74fcb","c":"-1,902930455"},{"p":"cm","v":"A","c":"-1,925237964"},{"p":"cm","v":"golddirektor1-5d909cb881f64","c":"-1,965254586"},{"p":"cm","v":"digibroc-5abe9f0e14a50","c":"-2,024823319"},{"p":"cm","v":"push","c":"-2,082013662"},{"p":"cm","v":"andrekaty-5ce4f33a8950d","c":"-2,08505438"},{"p":"cm","v":"cpa","c":"-2,089188425"},{"p":"cm","v":"vasileva.EAl-5f6b7253be172","c":"-2,100400169"},{"p":"cm","v":"vsekyrsy","c":"-2,100515045"},{"p":"cm","v":"info-5bd7c4da51593","c":"-2,157284319"},{"p":"cm","v":"Instagram_Feed","c":"-2,162226085"},{"p":"cm","v":"rek-5e01de351cfa4","c":"-2,171229696"},{"p":"cm","v":"118sergey-5e528b4c1e874","c":"-2,181763695"},{"p":"cm","v":"pr_apps","c":"-2,199526494"},{"p":"cm","v":"partnerka","c":"-2,213607014"},{"p":"cm","v":"mariakross-5e9618e4c7dd0","c":"-2,287698086"},{"p":"cm","v":"privatbank","c":"-2,353214612"},{"p":"cm","v":"info-5e96d74555ba2","c":"-2,376660809"},{"p":"cm","v":"(not set)","c":"-2,383066026"},{"p":"cm","v":"Popupsmart1","c":"-2,457113379"},{"p":"cm","v":"agnaev.92-5d39e0c38b652","c":"-2,466492764"},{"p":"cm","v":"zanudenzia-5bd56e6a489b6","c":"-2,488637048"},{"p":"cm","v":"romanchervanjov","c":"-2,491357252"},{"p":"cm","v":"2020english5-5dd638b66c57d","c":"-2,583438028"},{"p":"cm","v":"Facebook_Mobile_Feed","c":"-2,593023619"},{"p":"cm","v":"lbdvwork-5e12183eca1cc","c":"-2,622525407"},{"p":"cm","v":"set","c":"-2,663850547"},{"p":"cm","v":"info-5db955adde9f8","c":"-2,693447664"},{"p":"cm","v":"info-5da3941e56434","c":"-2,704581732"},{"p":"cm","v":"learn","c":"-2,709638767"},{"p":"cm","v":"anshulzhenko-5d237a553dfaf","c":"-2,812786336"},{"p":"cm","v":"baganis-5f3d15c24f582","c":"-2,873718559"},{"p":"cm","v":"aleks.cheer96-5dd5ba048f1c8","c":"-2,890992846"},{"p":"cm","v":"hype","c":"-2,930204972"},{"p":"cm","v":"d.miller+superjob-5d9afceedc015","c":"-2,964639679"},{"p":"cm","v":"message","c":"-3,009414388"},{"p":"cm","v":"prometheusmooc-5f0c2e3bf0557","c":"-3,011439735"},{"p":"cm","v":"B","c":"-3,020999215"},{"p":"cm","v":"olexiy.fedorov-5e6f81781c22e","c":"-3,375577843"},{"p":"cm","v":"webinar","c":"-3,543914677"},{"p":"cm","v":"soundcloud","c":"-3,600311718"},{"p":"cm","v":"cmob","c":"-3,612311818"},{"p":"cm","v":"video","c":"-4,256574242"},{"p":"cm","v":"(not_set)","c":"0,8830816665"},{"p":"cm","v":"none","c":0},{"p":"mr","v":10,"c":"-1,817266225"},{"p":"mr","v":9,"c":"-1,819718123"},{"p":"mr","v":8,"c":"-1,835928406"},{"p":"mr","v":11,"c":"-1,900056661"},{"p":"mr","v":5,"c":"-1,978916401"},{"p":"mr","v":12,"c":"-2,041453987"},{"p":"mr","v":7,"c":"-2,041724608"},{"p":"mr","v":1,"c":"-2,076167038"},{"p":"mr","v":2,"c":"-2,165412447"},{"p":"mr","v":4,"c":"-2,201108517"},{"p":"mr","v":3,"c":"-2,228467445"},{"p":"mr","v":6,"c":"-2,238431077"},{"p":"mr","v":"(not_set)","c":0},{"p":"mr","v":"none","c":0},{"p":"cs","v":"actualtraffic.ru","c":"9,834533124"},{"p":"cs","v":"online.qaday.org","c":"9,740879681"},{"p":"cs","v":"miralinks.ru","c":"9,049890253"},{"p":"cs","v":"minfin","c":"8,716132887"},{"p":"cs","v":"google.ru","c":"8,530585092"},{"p":"cs","v":"nielsen.primezone.ru","c":"8,501850011"},{"p":"cs","v":"s3.sharewood.ws","c":"8,423127835"},{"p":"cs","v":"otvet.mail.ru","c":"8,250517633"},{"p":"cs","v":"jobik.net","c":"8,199441853"},{"p":"cs","v":"ain.ua","c":"8,1212826"},{"p":"cs","v":"lamoda.primezone.ru","c":"8,04990646"},{"p":"cs","v":"englishdom.page.link","c":"7,748115434"},{"p":"cs","v":"jobs.dou.ua","c":"7,542642285"},{"p":"cs","v":"pfizer.primezone.ru","c":"7,180275726"},{"p":"cs","v":"lvov.bodo.ua","c":"7,165027345"},{"p":"cs","v":"youtub","c":"7,120685463"},{"p":"cs","v":"s7.primezone.ru","c":"6,944999925"},{"p":"cs","v":"aspira.atlassian.net","c":"5,473501866"},{"p":"cs","v":"brochure","c":"5,310378246"},{"p":"cs","v":"web.skype.com","c":"5,031103279"},{"p":"cs","v":"my.privatbank.ua","c":"4,644509609"},{"p":"cs","v":"vc.ru","c":"4,613376099"},{"p":"cs","v":"words_mobile-courses-ios","c":"4,589243054"},{"p":"cs","v":"enguide.ua","c":"4,47342284"},{"p":"cs","v":"dou.ua","c":"4,45430786"},{"p":"cs","v":"secureurl.ukr.net","c":"4,391199141"},{"p":"cs","v":"raiffeisenbank.primezone.ru","c":"4,328624667"},{"p":"cs","v":"study","c":"4,318698084"},{"p":"cs","v":"sendpulse","c":"4,307336011"},{"p":"cs","v":"linkedin.com","c":"4,236750032"},{"p":"cs","v":"itvdn","c":"4,220243124"},{"p":"cs","v":"angliyskiyazik.ru","c":"4,216780172"},{"p":"cs","v":"enguide-ua.cdn.ampproject.org","c":"4,14745713"},{"p":"cs","v":"study.ru","c":"3,629474205"},{"p":"cs","v":"native-english.ru","c":"3,62650704"},{"p":"cs","v":"rabota.ua","c":"3,615589751"},{"p":"cs","v":"ca","c":"3,610009461"},{"p":"cs","v":"cpcutm_campaign=Akcia_Star_Warst","c":"3,563034003"},{"p":"cs","v":"slb.primezone.ru","c":"3,496039777"},{"p":"cs","v":"m.facebook.com","c":"3,104167149"},{"p":"cs","v":"zen.yandex.ru","c":"2,997044209"},{"p":"cs","v":"wikium","c":"2,94962957"},{"p":"cs","v":"transaction_notification_info","c":"2,850795017"},{"p":"cs","v":"words_mobile-edwords-ios","c":"2,828735988"},{"p":"cs","v":"catchenglish","c":"2,766785828"},{"p":"cs","v":"dou","c":"2,762019402"},{"p":"cs","v":"youtube.com","c":"2,761916466"},{"p":"cs","v":"tripmydream","c":"2,727544073"},{"p":"cs","v":"mc.today","c":"2,656793196"},{"p":"cs","v":"4brain","c":"2,601556746"},{"p":"cs","v":"duckduckgo","c":"2,594871739"},{"p":"cs","v":"crm","c":"2,523494762"},{"p":"cs","v":"yandex.kz","c":"2,518754128"},{"p":"cs","v":"native-english","c":"2,491496282"},{"p":"cs","v":"l.facebook.com","c":"2,442339517"},{"p":"cs","v":"vodafone","c":"2,412457671"},{"p":"cs","v":"ain","c":"2,269923015"},{"p":"cs","v":"mastercard","c":"2,240336401"},{"p":"cs","v":"geekbrains.ru","c":"2,157566291"},{"p":"cs","v":"platforma","c":"2,155968205"},{"p":"cs","v":"site_bot","c":"2,139902296"},{"p":"cs","v":"habr.com","c":"2,135786029"},{"p":"cs","v":"bing","c":"2,128867051"},{"p":"cs","v":"sbidea.ru","c":"2,083953911"},{"p":"cs","v":"google","c":"1,989443373"},{"p":"cs","v":"yandex","c":"1,987027947"},{"p":"cs","v":"marketing_promo","c":"1,832983665"},{"p":"cs","v":"edugram","c":"1,80406401"},{"p":"cs","v":"mctoday","c":"1,791123753"},{"p":"cs","v":"netology","c":"1,756327783"},{"p":"cs","v":"privatbank","c":"1,724533618"},{"p":"cs","v":"pressrelease","c":"1,68873702"},{"p":"cs","v":"skillfactory_college","c":"1,66212011"},{"p":"cs","v":"happymonday","c":"1,653859422"},{"p":"cs","v":"landing","c":"1,651772013"},{"p":"cs","v":"facebook.com","c":"1,633948131"},{"p":"cs","v":"campaigns_weekly","c":"1,586195262"},{"p":"cs","v":"mybook","c":"1,533137781"},{"p":"cs","v":"edera","c":"1,519235167"},{"p":"cs","v":"forumdaily.com","c":"1,47888486"},{"p":"cs","v":"yahoo","c":"1,464554416"},{"p":"cs","v":"geektimes","c":"1,452906399"},{"p":"cs","v":"habra","c":"1,431829892"},{"p":"cs","v":"podcast","c":"1,419540954"},{"p":"cs","v":"skillfactory","c":"1,399439756"},{"p":"cs","v":"skillbox","c":"1,385492492"},{"p":"cs","v":"telegram","c":"1,327313615"},{"p":"cs","v":"instagram","c":"1,270715324"},{"p":"cs","v":"(direct)","c":"1,212969368"},{"p":"cs","v":"youtube","c":"1,167802564"},{"p":"cs","v":"englisher","c":"1,153641927"},{"p":"cs","v":"transaction_notification_pay","c":"1,04709943"},{"p":"cs","v":"facebook_instagram","c":"1,022556116"},{"p":"cs","v":"facebook","c":"0,8990075394"},{"p":"cs","v":"habrahabr","c":"0,8051024663"},{"p":"cs","v":"blogs","c":"0,7957535326"},{"p":"cs","v":"smart-line","c":"0,7340399958"},{"p":"cs","v":"pinterest","c":"0,5903370751"},{"p":"cs","v":"transaction_marketing","c":"0,584687318"},{"p":"cs","v":"cpm","c":"0,5462675075"},{"p":"cs","v":"go.mail.ru","c":"0,4654143902"},{"p":"cs","v":"viber","c":"0,1435557195"},{"p":"cs","v":"vk","c":"0,1294249911"},{"p":"cs","v":"turbo","c":"-0,001248967949"},{"p":"cs","v":"gamerground.ru","c":"-0,007430218834"},{"p":"cs","v":"whatsapp","c":"-0,008832247169"},{"p":"cs","v":"int.search.tb.ask.com","c":"-0,01753261974"},{"p":"cs","v":"webinar","c":"-0,03356426342"},{"p":"cs","v":"au.search.yahoo.com","c":"-0,04850546239"},{"p":"cs","v":"lm.facebook.com","c":"-0,04874385217"},{"p":"cs","v":"vbpk47.ru","c":"-0,07249892819"},{"p":"cs","v":"m.youtube.com","c":"-0,104634727"},{"p":"cs","v":"s2.rhsw.biz","c":"-0,112011531"},{"p":"cs","v":"statwatch.ru","c":"-0,1176161734"},{"p":"cs","v":"accounts.youtube.com","c":"-0,1413060911"},{"p":"cs","v":"s3.rhsw.biz","c":"-0,153415637"},{"p":"cs","v":"talkrooms.ru","c":"-0,1620755562"},{"p":"cs","v":"search-7.com","c":"-0,1633442698"},{"p":"cs","v":"vmodenov.blogspot.com","c":"-0,1704621882"},{"p":"cs","v":"dnevnik.ru","c":"-0,1754640594"},{"p":"cs","v":"business.facebook.com","c":"-0,1866380188"},{"p":"cs","v":"rambler","c":"-0,1965648072"},{"p":"cs","v":"pdf","c":"-0,2082156283"},{"p":"cs","v":"school.mosreg.ru","c":"-0,223285225"},{"p":"cs","v":"yandex.com.tr","c":"-0,2235443827"},{"p":"cs","v":"redipath.com","c":"-0,226822736"},{"p":"cs","v":"yandex.com","c":"-0,2369689765"},{"p":"cs","v":"ar.egemen.kz","c":"-0,2380347889"},{"p":"cs","v":"kyporenkokateryna.blogspot.com","c":"-0,2499083704"},{"p":"cs","v":"sites.ziyonet.uz","c":"-0,2857146071"},{"p":"cs","v":"formdesigner","c":"-0,3068184384"},{"p":"cs","v":"record","c":"-0,321129444"},{"p":"cs","v":"google_plus","c":"-0,3223392673"},{"p":"cs","v":"el.istu.edu","c":"-0,3289378893"},{"p":"cs","v":"englishguru","c":"-0,3516625171"},{"p":"cs","v":"ig","c":"-0,3591828405"},{"p":"cs","v":"classroom.google.com","c":"-0,3887844256"},{"p":"cs","v":"(not set)","c":"-0,4031312645"},{"p":"cs","v":"formdesigner.ru","c":"-0,4693027059"},{"p":"cs","v":"zen","c":"-0,5043731498"},{"p":"cs","v":"youtub...","c":"-0,5168737407"},{"p":"cs","v":"presentation_webinar","c":"-0,524567455"},{"p":"cs","v":"search.startpage.media","c":"-0,5458765155"},{"p":"cs","v":"pinterest.com","c":"-0,5517958604"},{"p":"cs","v":"mtt.nammqi.uz","c":"-0,5811736244"},{"p":"cs","v":"egemen.kz","c":"-0,6322224264"},{"p":"cs","v":"yandex.uz","c":"-0,662149276"},{"p":"cs","v":"cbsearch.site","c":"-0,6650548064"},{"p":"cs","v":"brainum.ru","c":"-0,6656506724"},{"p":"cs","v":"files.smotriuchis.ru","c":"-0,6952114783"},{"p":"cs","v":"poshukach.com","c":"-0,721085204"},{"p":"cs","v":"accounts.google.ru","c":"-0,7303085014"},{"p":"cs","v":"webmail.aruba.it","c":"-0,7419108394"},{"p":"cs","v":"app.clickup.com","c":"-0,7657149788"},{"p":"cs","v":"in.search.yahoo.com","c":"-0,7740332078"},{"p":"cs","v":"blogs^_^amp^_^utm_medium=pr^_^amp^_^utm_campaign=habr^_^amp^_^utm_content=memes","c":"-0,7745308641"},{"p":"cs","v":"digift","c":"-0,8368203275"},{"p":"cs","v":"merriam-webster.com","c":"-0,850397572"},{"p":"cs","v":"Facebook_Instagram","c":"-0,8523882203"},{"p":"cs","v":"zloy_hr","c":"-0,8759805681"},{"p":"cs","v":"email","c":"-0,896447147"},{"p":"cs","v":"pro.similarweb.com","c":"-0,8968773615"},{"p":"cs","v":"s5.rhsw.biz","c":"-0,8977420929"},{"p":"cs","v":"img.ucweb.com","c":"-0,9197306596"},{"p":"cs","v":"kwork.ru","c":"-0,9453280048"},{"p":"cs","v":"topthinkblog.ru","c":"-0,9454663397"},{"p":"cs","v":"vimbox.skyeng.ru","c":"-0,9560385113"},{"p":"cs","v":"bbiz.org","c":"-0,9767251264"},{"p":"cs","v":"us.search.yahoo.com","c":"-0,981088815"},{"p":"cs","v":"ikids.su","c":"-1,003834776"},{"p":"cs","v":"share-wood.pro","c":"-1,007776422"},{"p":"cs","v":"lolzteam.online","c":"-1,015969649"},{"p":"cs","v":"cpc","c":"-1,06594655"},{"p":"cs","v":"the--steppe-com.cdn.ampproject.org","c":"-1,071058075"},{"p":"cs","v":"lead-magnet.affise.com","c":"-1,084999849"},{"p":"cs","v":"ask","c":"-1,087145128"},{"p":"cs","v":"employmentcenter.ru","c":"-1,119697079"},{"p":"cs","v":"delo","c":"-1,149529763"},{"p":"cs","v":"marinarusakova.biz","c":"-1,192566872"},{"p":"cs","v":"account.admitad.com","c":"-1,275877943"},{"p":"cs","v":"latifundist.fb1","c":"-1,2926111"},{"p":"cs","v":"uk.search.yahoo.com","c":"-1,305829831"},{"p":"cs","v":"kniga_biz","c":"-1,311617551"},{"p":"cs","v":"latifundist.tl","c":"-1,314769927"},{"p":"cs","v":"itvdn.com","c":"-1,31674769"},{"p":"cs","v":"amo.si","c":"-1,337518676"},{"p":"cs","v":"megogo.net","c":"-1,355171549"},{"p":"cs","v":"ofigenno.com","c":"-1,381555056"},{"p":"cs","v":"tagmanager.google.com","c":"-1,393776046"},{"p":"cs","v":"ua.jooble.org","c":"-1,395823646"},{"p":"cs","v":"online-hotel-school-rhg.davintoo.com","c":"-1,398078387"},{"p":"cs","v":"brontp.yandex.ru","c":"-1,418186183"},{"p":"cs","v":"mytarget","c":"-1,429075929"},{"p":"cs","v":"my.e-klase.lv","c":"-1,437311407"},{"p":"cs","v":"ok.ru","c":"-1,43786058"},{"p":"cs","v":"pikabu.ru","c":"-1,455343401"},{"p":"cs","v":"eddev.cf","c":"-1,464316047"},{"p":"cs","v":"moikrug.ru","c":"-1,484407619"},{"p":"cs","v":"pirat.biz","c":"-1,493342684"},{"p":"cs","v":"jcoffee.benefactory.ru","c":"-1,499788292"},{"p":"cs","v":"s3.sharewood.bz","c":"-1,54317922"},{"p":"cs","v":"offline","c":"-1,547132862"},{"p":"cs","v":"pubg.best","c":"-1,565687778"},{"p":"cs","v":"admitad.com","c":"-1,568849018"},{"p":"cs","v":"klasnaocinka.com.ua","c":"-1,585321849"},{"p":"cs","v":"audio-class.ru","c":"-1,587254235"},{"p":"cs","v":"pepper.ru","c":"-1,599847922"},{"p":"cs","v":"em.ubrr.ru","c":"-1,601460896"},{"p":"cs","v":"forum.duolingo.com","c":"-1,604186708"},{"p":"cs","v":"textback","c":"-1,604911925"},{"p":"cs","v":"goodairlanguage.com","c":"-1,604978285"},{"p":"cs","v":"customerio","c":"-1,612894818"},{"p":"cs","v":"s4.rhsw.biz","c":"-1,613445002"},{"p":"cs","v":"21school","c":"-1,616618736"},{"p":"cs","v":"vsemdobra.su","c":"-1,629120228"},{"p":"cs","v":"bodo.ua","c":"-1,63549528"},{"p":"cs","v":"semeynoe.com","c":"-1,639848218"},{"p":"cs","v":"aksioma24.ru","c":"-1,642705757"},{"p":"cs","v":"s1.rhsw.biz","c":"-1,645666882"},{"p":"cs","v":"dnepropetrovsk.bodo.ua","c":"-1,658132484"},{"p":"cs","v":"facebook-instagram","c":"-1,662334317"},{"p":"cs","v":"techrocks.ru","c":"-1,668816747"},{"p":"cs","v":"bigsmm","c":"-1,66970274"},{"p":"cs","v":"ge.primezone.ru","c":"-1,670482901"},{"p":"cs","v":"itea","c":"-1,675340784"},{"p":"cs","v":"traktor.cc","c":"-1,67704492"},{"p":"cs","v":"the-steppe.com","c":"-1,687654656"},{"p":"cs","v":"s1.sharewood.xyz","c":"-1,69020902"},{"p":"cs","v":"podcasts.google.com","c":"-1,69133413"},{"p":"cs","v":"Test2","c":"-1,691872217"},{"p":"cs","v":"aravot.am","c":"-1,693824991"},{"p":"cs","v":"business.google.com","c":"-1,749089831"},{"p":"cs","v":"ampproject.org","c":"-1,759315229"},{"p":"cs","v":"facebook/instagram","c":"-1,767135452"},{"p":"cs","v":"school-58.klasna.com","c":"-1,777490438"},{"p":"cs","v":"lolzteam.net","c":"-1,781920594"},{"p":"cs","v":"cityads.com","c":"-1,782950718"},{"p":"cs","v":"x5.primezone.ru","c":"-1,783255472"},{"p":"cs","v":"finacademy","c":"-1,792769029"},{"p":"cs","v":"chrome.google.com","c":"-1,803390758"},{"p":"cs","v":"giftonline4u.com","c":"-1,818667886"},{"p":"cs","v":"ping-sso.schneider-electric.com","c":"-1,830437156"},{"p":"cs","v":"theoryandpractice","c":"-1,831426907"},{"p":"cs","v":"s4.sharewood.ws","c":"-1,846176527"},{"p":"cs","v":"schoolrate","c":"-1,849524109"},{"p":"cs","v":"clc.am","c":"-1,853923866"},{"p":"cs","v":"slivup.me","c":"-1,857014271"},{"p":"cs","v":"kefline.ru","c":"-1,861719829"},{"p":"cs","v":"ru.search.yahoo.com","c":"-1,86641413"},{"p":"cs","v":"timelessenglish.com","c":"-1,874851939"},{"p":"cs","v":"apps.apple.com","c":"-1,89936129"},{"p":"cs","v":"sharewood.band","c":"-1,913148712"},{"p":"cs","v":"lavasoft.gosearchresults.com","c":"-1,915608398"},{"p":"cs","v":"telegra.ph","c":"-1,923909231"},{"p":"cs","v":"etxt.ru","c":"-1,92680761"},{"p":"cs","v":"s1.sharewood.bz","c":"-1,945540513"},{"p":"cs","v":"englishdom.amocrm.ru","c":"-1,971300927"},{"p":"cs","v":"news.xopom.com","c":"-1,976225608"},{"p":"cs","v":"pg.primezone.ru","c":"-1,980627953"},{"p":"cs","v":"facebook_event","c":"-2,007299732"},{"p":"cs","v":"inner","c":"-2,020083016"},{"p":"cs","v":"superdeal.ua","c":"-2,021307706"},{"p":"cs","v":"wikium.ru","c":"-2,041738026"},{"p":"cs","v":"t.co","c":"-2,044034016"},{"p":"cs","v":"prostosdelaj.ru","c":"-2,066276575"},{"p":"cs","v":"gravitec","c":"-2,082013662"},{"p":"cs","v":"start.ubrr.ru","c":"-2,106075576"},{"p":"cs","v":"giftmall.com.ua","c":"-2,122179508"},{"p":"cs","v":"englishdom.com","c":"-2,13554577"},{"p":"cs","v":"push","c":"-2,157684633"},{"p":"cs","v":"pioneer.primezone.ru","c":"-2,158101201"},{"p":"cs","v":"belaya-tserkov.hh.ua","c":"-2,160521001"},{"p":"cs","v":"avia","c":"-2,194784016"},{"p":"cs","v":"sharewood.pro","c":"-2,195105042"},{"p":"cs","v":"boominfo.ru","c":"-2,196922511"},{"p":"cs","v":"enguide","c":"-2,199526494"},{"p":"cs","v":"vkontakte","c":"-2,203178255"},{"p":"cs","v":"sf_education","c":"-2,207150086"},{"p":"cs","v":"goIT","c":"-2,213607014"},{"p":"cs","v":"lm.workplace.com","c":"-2,218819363"},{"p":"cs","v":"supermamki.ru","c":"-2,230165436"},{"p":"cs","v":"stud_point","c":"-2,241211732"},{"p":"cs","v":"openssource.info","c":"-2,261860157"},{"p":"cs","v":"ukrainianconf","c":"-2,265302957"},{"p":"cs","v":"mail.aet.in.ua","c":"-2,265861842"},{"p":"cs","v":"etxtru","c":"-2,3516757"},{"p":"cs","v":"prostor.mts.com.ua","c":"-2,354757359"},{"p":"cs","v":"otus","c":"-2,374669082"},{"p":"cs","v":"pro_mandri","c":"-2,388483202"},{"p":"cs","v":"mail.google.com","c":"-2,417685043"},{"p":"cs","v":"liga","c":"-2,423635606"},{"p":"cs","v":"blogger","c":"-2,428188471"},{"p":"cs","v":"searchtds.ru","c":"-2,469882075"},{"p":"cs","v":"m.vk.com","c":"-2,47236205"},{"p":"cs","v":"app.schoology.com","c":"-2,553965834"},{"p":"cs","v":"600l_2_gr","c":"-2,583957689"},{"p":"cs","v":"www-forumdaily-com.cdn.ampproject.org","c":"-2,598319288"},{"p":"cs","v":"ac.formdesigner.ru","c":"-2,602058293"},{"p":"cs","v":"m.habr.com","c":"-2,617998712"},{"p":"cs","v":"yandex.fr","c":"-2,625205242"},{"p":"cs","v":"vse-kursy","c":"-2,707122576"},{"p":"cs","v":"work.ua","c":"-2,713714475"},{"p":"cs","v":"linkedin","c":"-2,73200719"},{"p":"cs","v":"mif","c":"-2,745333971"},{"p":"cs","v":"yandex.by","c":"-2,765560825"},{"p":"cs","v":"DonanimHaber","c":"-2,810181554"},{"p":"cs","v":"press-release","c":"-2,868805376"},{"p":"cs","v":"MIB","c":"-2,894194448"},{"p":"cs","v":"s1.sharewood.ws","c":"-2,939451769"},{"p":"cs","v":"m.rabota.ua","c":"-2,9659959"},{"p":"cs","v":"web-alisa","c":"-3,009414388"},{"p":"cs","v":"fbinst","c":"-3,115539049"},{"p":"cs","v":"headhunter","c":"-3,138555242"},{"p":"cs","v":"check_list","c":"-3,152306051"},{"p":"cs","v":"book24","c":"-3,165175453"},{"p":"cs","v":"201940_digest_orig_promo","c":"-3,170944998"},{"p":"cs","v":"201940_digest_adv_promo","c":"-3,206997123"},{"p":"cs","v":"mel-fm.cdn.ampproject.org","c":"-3,211430248"},{"p":"cs","v":"mel.fm","c":"-3,251305428"},{"p":"cs","v":"prog_kiev","c":"-3,25179199"},{"p":"cs","v":"words_mobile-courses-android","c":"-3,346737359"},{"p":"cs","v":"bilingual","c":"-3,354340942"},{"p":"cs","v":"yandex.ua","c":"-3,460895718"},{"p":"cs","v":"l.instagram.com","c":"-3,492105636"},{"p":"cs","v":"viber_bot","c":"-3,52920351"},{"p":"cs","v":"geekbrains","c":"-3,693267197"},{"p":"cs","v":"partners","c":"-3,821574007"},{"p":"cs","v":"words_mobile-edwords-android","c":"-3,874992061"},{"p":"cs","v":"sharewood.biz","c":"-3,937593501"},{"p":"cs","v":"lifehacker","c":"-4,046429449"},{"p":"cs","v":"campaigns_marketing","c":"-4,094871323"},{"p":"cs","v":"mgid.com","c":"-4,112958502"},{"p":"cs","v":"nachasi","c":"-4,208744325"},{"p":"cs","v":"(not_set)","c":"0,8830816665"},{"p":"cs","v":"none","c":0}];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(rawDataJSON) {
  var kTable = {};
  rawDataJSON.forEach(function (item) {
    var param = item.p;
    var value = item.v;
    var coef = item.c;
    /*
      country - co
      dayofweek_req - dr
      from_page_hash - fh
      from_page_pretty - fp
      gmt - gm
      hour_req - hr
      Medium - cm
      month_req - mr
      Source - cs
    * */

    switch (param) {
      case 'fh':
        param = 'hash';
        break;

      case 'cs':
        param = 'source';
        break;

      case 'hr':
        param = 'hour';
        break;

      case 'gm':
        param = 'gmt';
        break;

      case 'fp':
        param = 'fromPage';
        break;

      case 'co':
        param = 'country';
        break;

      case 'dr':
        param = 'dayOfWeek';
        break;

      case 'cm':
        param = 'medium';
        break;

      case 'mr':
        param = 'month';
        break;

      default:
        param = item.parameter;
    }

    if (!kTable[param]) kTable[param] = {}; // add slashes

    if (param === 'fromPage') {
      if (value !== '/' && value.indexOf('#') !== 0) {
        if (value.indexOf('/l/') === 0) {
          value = "".concat(value, "/");
        } else {
          value = "/".concat(value, "/");
        }
      }
    } // not add hashs


    if (!(param === 'fromPage' && value.indexOf('#') === 0)) {
      if (coef === 0) {
        kTable[param][value] = coef;
      } else {
        kTable[param][value] = parseFloat(coef.replace(',', '.'));
      }
    }
  });
  return kTable;
};

exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=form-logic.js.map