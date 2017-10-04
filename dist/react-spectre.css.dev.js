this['react-spectre'] = this['react-spectre'] || {};
this['react-spectre'].css = (function (exports) {
'use strict';

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

{
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';





/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler$1 = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler$1 = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? invariant_1(false, 'Trying to release an instance into a pool of a different type.') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler$1,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler$1
};

var PooledClass_1 = PooledClass;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

var ReactCurrentOwner_1 = ReactCurrentOwner;

"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

{
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var canDefineProperty$1 = false;
{
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty$1 = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

var canDefineProperty_1 = canDefineProperty$1;

/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var ReactElementSymbol = REACT_ELEMENT_TYPE;

/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';







var hasOwnProperty$1 = Object.prototype.hasOwnProperty;



var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty$1.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty$1.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning_1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning_1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: ReactElementSymbol,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty_1) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== ReactElementSymbol) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = objectAssign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner_1.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === ReactElementSymbol;
};

var ReactElement_1 = ReactElement;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var getIteratorFn_1 = getIteratorFn;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

var KeyEscapeUtils_1 = KeyEscapeUtils;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';











var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils_1.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === ReactElementSymbol) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn_1(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner_1.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner_1.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          warning_1(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum);
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils_1.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner_1.current) {
          var name = ReactCurrentOwner_1.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      invariant_1(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

var traverseAllChildren_1 = traverseAllChildren;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';







var twoArgumentPooler = PooledClass_1.twoArgumentPooler;
var fourArgumentPooler = PooledClass_1.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren_1(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction_1.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement_1.isValidElement(mappedChild)) {
      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren_1(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren_1(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction_1.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

var ReactChildren_1 = ReactChildren;

/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';



function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    warning_1(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';










/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant_1(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty_1) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          warning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

var ReactComponent_1 = ReactComponent;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';








/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent_1.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
objectAssign(ReactPureComponent.prototype, ReactComponent_1.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

var ReactPureComponent_1 = ReactPureComponent;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var ReactPropTypeLocationNames = {};

{
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

var ReactPropTypeLocationNames_1 = ReactPropTypeLocationNames;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';












var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

/**
 * Policies that describe methods in `ReactClassInterface`.
 */


var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */
var ReactClassInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: 'DEFINE_MANY',

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: 'DEFINE_MANY',

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: 'DEFINE_MANY',

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: 'DEFINE_MANY',

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: 'DEFINE_MANY',

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: 'DEFINE_MANY_MERGED',

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: 'DEFINE_MANY_MERGED',

  /**
   * @return {object}
   * @optional
   */
  getChildContext: 'DEFINE_MANY_MERGED',

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @required
   */
  render: 'DEFINE_ONCE',

  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: 'DEFINE_MANY',

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: 'DEFINE_MANY',

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: 'DEFINE_MANY',

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: 'DEFINE_ONCE',

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: 'DEFINE_MANY',

  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: 'OVERRIDE_BASE'

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function (Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function (Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function (Constructor, childContextTypes) {
    {
      validateTypeDef(Constructor, childContextTypes, 'childContext');
    }
    Constructor.childContextTypes = objectAssign({}, Constructor.childContextTypes, childContextTypes);
  },
  contextTypes: function (Constructor, contextTypes) {
    {
      validateTypeDef(Constructor, contextTypes, 'context');
    }
    Constructor.contextTypes = objectAssign({}, Constructor.contextTypes, contextTypes);
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function (Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function (Constructor, propTypes) {
    {
      validateTypeDef(Constructor, propTypes, 'prop');
    }
    Constructor.propTypes = objectAssign({}, Constructor.propTypes, propTypes);
  },
  statics: function (Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);
  },
  autobind: function () {} };

function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but only in __DEV__
      warning_1(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames_1[location], propName);
    }
  }
}

function validateMethodOverride(isAlreadyDefined, name) {
  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactClassMixin.hasOwnProperty(name)) {
    !(specPolicy === 'OVERRIDE_BASE') ? invariant_1(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : void 0;
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (isAlreadyDefined) {
    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? invariant_1(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : void 0;
  }
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    {
      var typeofSpec = typeof spec;
      var isMixinValid = typeofSpec === 'object' && spec !== null;

      warning_1(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec);
    }

    return;
  }

  !(typeof spec !== 'function') ? invariant_1(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : void 0;
  !!ReactElement_1.isValidElement(spec) ? invariant_1(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : void 0;

  var proto = Constructor.prototype;
  var autoBindPairs = proto.__reactAutoBindPairs;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;
    }

    var property = spec[name];
    var isAlreadyDefined = proto.hasOwnProperty(name);
    validateMethodOverride(isAlreadyDefined, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

      if (shouldAutoBind) {
        autoBindPairs.push(name, property);
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? invariant_1(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : void 0;

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === 'DEFINE_MANY_MERGED') {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === 'DEFINE_MANY') {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in RESERVED_SPEC_KEYS;
    !!isReserved ? invariant_1(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : void 0;

    var isInherited = name in Constructor;
    !!isInherited ? invariant_1(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : void 0;
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeIntoWithNoDuplicateKeys(one, two) {
  !(one && two && typeof one === 'object' && typeof two === 'object') ? invariant_1(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : void 0;

  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      !(one[key] === undefined) ? invariant_1(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : void 0;
      one[key] = two[key];
    }
  }
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    var c = {};
    mergeIntoWithNoDuplicateKeys(c, a);
    mergeIntoWithNoDuplicateKeys(c, b);
    return c;
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    boundMethod.bind = function (newThis) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // User is trying to bind() an autobound method; we effectively will
      // ignore the value of "this" that the user is trying to use, so
      // let's warn.
      if (newThis !== component && newThis !== null) {
        warning_1(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName);
      } else if (!args.length) {
        warning_1(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName);
        return boundMethod;
      }
      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;
    };
  }
  return boundMethod;
}

/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */
function bindAutoBindMethods(component) {
  var pairs = component.__reactAutoBindPairs;
  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];
    var method = pairs[i + 1];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var ReactClassMixin = {

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function (newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'replaceState');
    }
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function () {
    return this.updater.isMounted(this);
  }
};

var ReactClassComponent = function () {};
objectAssign(ReactClassComponent.prototype, ReactComponent_1.prototype, ReactClassMixin);

var didWarnDeprecated = false;

/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var ReactClass = {

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function (spec) {
    {
      warning_1(didWarnDeprecated, '%s: React.createClass is deprecated and will be removed in version 16. ' + 'Use plain JavaScript classes instead. If you\'re not yet ready to ' + 'migrate, create-react-class is available on npm as a ' + 'drop-in replacement.', spec && spec.displayName || 'A Component');
      didWarnDeprecated = true;
    }

    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      {
        warning_1(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory');
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject_1;
      this.updater = updater || ReactNoopUpdateQueue_1;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? invariant_1(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : void 0;

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    !Constructor.prototype.render ? invariant_1(false, 'createClass(...): Class specification must implement a `render` method.') : void 0;

    {
      warning_1(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component');
      warning_1(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component');
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  },

  injection: {
    injectMixin: function (mixin) {
      injectedMixins.push(mixin);
    }
  }

};

var ReactClass_1 = ReactClass;

/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';








function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  warning_1(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? invariant_1(false, 'Item must have been set') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? invariant_1(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant_1(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
      !nextChild.isMounted ? invariant_1(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? invariant_1(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? invariant_1(false, 'Item must have been set') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner_1.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

var ReactComponentTreeHook_1 = ReactComponentTreeHook;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';









var ReactComponentTreeHook$1;

if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? invariant_1(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret_1);
      } catch (ex) {
        error = ex;
      }
      warning_1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName, typeof error);
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        {
          if (!ReactComponentTreeHook$1) {
            ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getCurrentStackAddendum(element);
          }
        }

        warning_1(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo);
      }
    }
  }
}

var checkReactTypeSpec_1 = checkReactTypeSpec;

/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

'use strict';











function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner_1.current) {
    var name = ReactCurrentOwner_1.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  warning_1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook_1.getCurrentStackAddendum(element));
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement_1.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement_1.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn_1(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement_1.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec_1(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning_1(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

var ReactElementValidator$2 = {

  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook_1.getCurrentStackAddendum();

        warning_1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
      }
    }

    var element = ReactElement_1.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator$2.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    {
      if (canDefineProperty_1) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            warning_1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }

};

var ReactElementValidator_1 = ReactElementValidator$2;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';



/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement_1.createFactory;
{
  var ReactElementValidator$1 = ReactElementValidator_1;
  createDOMFactory = ReactElementValidator$1.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

var ReactDOMFactories_1 = ReactDOMFactories;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

const ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1$2 = ReactPropTypesSecret$2;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';






var loggedTypeFailures$1 = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant_1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret_1$2);
        } catch (ex) {
          error = ex;
        }
        warning_1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures$1[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning_1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';








var factory = function (isValidElement) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  var ReactPropTypes;

  {
    // Keep in sync with production version below
    ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker
    };
  }

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      {
        if (secret !== ReactPropTypesSecret_1$2 && typeof console !== 'undefined') {
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey]) {
            warning_1(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$2);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$2) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var isValidElement = ReactElement_1.isValidElement;



var ReactPropTypes = factory(isValidElement);

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var ReactVersion = '15.5.0';

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';







/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement_1.isValidElement(children) ? invariant_1(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var onlyChild_1 = onlyChild;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';















var createElement = ReactElement_1.createElement;
var createFactory = ReactElement_1.createFactory;
var cloneElement = ReactElement_1.cloneElement;

{
  var canDefineProperty = canDefineProperty_1;
  var ReactElementValidator = ReactElementValidator_1;
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = objectAssign;

{
  var warned = false;
  __spread = function () {
    warning_1(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warned = true;
    return objectAssign.apply(null, arguments);
  };
}

var React$1 = {

  // Modern

  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },

  Component: ReactComponent_1,
  PureComponent: ReactPureComponent_1,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: ReactClass_1.createClass,
  createFactory: createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories_1,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

// TODO: Fix tests so that this deprecation warning doesn't cause failures.
{
  if (canDefineProperty) {
    Object.defineProperty(React$1, 'PropTypes', {
      get: function () {
        warning_1(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated. Use ' + 'the prop-types package from npm instead.');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });
  }
}

var React_1 = React$1;

'use strict';

var react = React_1;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();













var defineProperty = function (obj, key, value) {
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
};













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var _jsxFileName = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/ComparisonSlider.jsx';
var _this = undefined;

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['src', 'alt', 'className']);
  return react.createElement('img', Object.assign({ src: src, className: classnames('rounded', className), alt: alt }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: _this
  }));
};
Image.defaultProps = {
  alt: '',
  className: ''
};

var ComparisonSlider = function ComparisonSlider(_ref2) {
  var before = _ref2.before,
      after = _ref2.after;
  return react.createElement(
    'div',
    { className: 'comparison-slider', __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: _this
    },
    react.createElement(
      'figure',
      { className: 'comparison-before', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: _this
      },
      react.createElement(Image, Object.assign({}, before, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      })),
      react.createElement(
        'div',
        { className: 'comparison-label', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: _this
        },
        'Before'
      )
    ),
    react.createElement(
      'figure',
      { className: 'comparison-after', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: _this
      },
      react.createElement(Image, Object.assign({}, after, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: _this
      })),
      react.createElement(
        'div',
        { className: 'comparison-label', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: _this
        },
        'After'
      ),
      react.createElement('textarea', { className: 'comparison-resizer', readOnly: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: _this
      })
    )
  );
};

var _jsxFileName$1 = "/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/Filter.jsx";
var _this$1 = undefined;

var Filter = function Filter(_ref) {
  var tags = _ref.tags,
      data = _ref.data,
      active = _ref.active,
      onChange = _ref.onChange;
  return react.createElement(
    "div",
    { className: "filter", __source: {
        fileName: _jsxFileName$1,
        lineNumber: 16
      },
      __self: _this$1
    },
    Object.keys(tags).map(function (key) {
      return react.createElement("input", {
        key: key + "_input",
        id: key,
        className: "filter-tag",
        name: "filter-radio",
        checked: key === active,
        type: "radio",
        hidden: true,
        onChange: function (_onChange) {
          function onChange(_x) {
            return _onChange.apply(this, arguments);
          }

          onChange.toString = function () {
            return _onChange.toString();
          };

          return onChange;
        }(function (e) {
          return onChange(e, key);
        }),
        __source: {
          fileName: _jsxFileName$1,
          lineNumber: 18
        },
        __self: _this$1
      });
    }),
    react.createElement(
      "div",
      { className: "filter-nav", __source: {
          fileName: _jsxFileName$1,
          lineNumber: 30
        },
        __self: _this$1
      },
      Object.keys(tags).map(function (key) {
        return react.createElement(
          "label",
          {
            key: key + "_nav",
            className: "chip",
            htmlFor: key,
            __source: {
              fileName: _jsxFileName$1,
              lineNumber: 32
            },
            __self: _this$1
          },
          tags[key]
        );
      })
    ),
    react.createElement(
      "div",
      { className: "filter-body columns", __source: {
          fileName: _jsxFileName$1,
          lineNumber: 39
        },
        __self: _this$1
      },
      data.map(function (_ref2, i) {
        var tag = _ref2.tag,
            title = _ref2.title,
            subtitle = _ref2.subtitle;

        var key = "card_" + i;
        return react.createElement(
          "div",
          { key: key, className: "column col-4 filter-item", "data-tag": tag, __source: {
              fileName: _jsxFileName$1,
              lineNumber: 43
            },
            __self: _this$1
          },
          react.createElement(
            "div",
            { className: "card", style: { marginBottom: '0.4rem' }, __source: {
                fileName: _jsxFileName$1,
                lineNumber: 44
              },
              __self: _this$1
            },
            react.createElement(
              "div",
              { className: "card-header", __source: {
                  fileName: _jsxFileName$1,
                  lineNumber: 45
                },
                __self: _this$1
              },
              react.createElement(
                "div",
                { className: "card-title", __source: {
                    fileName: _jsxFileName$1,
                    lineNumber: 46
                  },
                  __self: _this$1
                },
                title
              ),
              react.createElement(
                "div",
                { className: "card-subtitle", __source: {
                    fileName: _jsxFileName$1,
                    lineNumber: 47
                  },
                  __self: _this$1
                },
                subtitle
              )
            )
          )
        );
      })
    )
  );
};

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set$1 (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$2(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get$1(this, unit);
        }
    };
}

function get$1 (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$2 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get$1(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults$1(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults$1(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults$1(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults$1(w.W, 1);
        weekday = defaults$1(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults$1(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults$1(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$2(mom, 'Date', get$1(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get$1(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray$2 () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject$1 () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray$2;
proto.toObject          = toObject$1;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set$1;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$2 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$2(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$2(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$2(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$2(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$3 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$3;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize include="noop" exports="npm" -o ./foo`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A no-operation function that returns `undefined` regardless of the
 * arguments it receives.
 *
 * @static
 * @memberOf _
 * @category Util
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.noop(object) === undefined;
 * // => true
 */
function noop() {
  // No operation performed.
}

var lodash_noop = noop;

var _jsxFileName$3 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/Button.jsx';
var _this$3 = undefined;

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      loading = _ref.loading,
      href = _ref.href,
      lg = _ref.lg,
      sm = _ref.sm,
      block = _ref.block,
      inputGroup = _ref.inputGroup,
      primary = _ref.primary,
      clear = _ref.clear,
      link = _ref.link,
      action = _ref.action,
      circle = _ref.circle,
      props = objectWithoutProperties(_ref, ['children', 'className', 'loading', 'href', 'lg', 'sm', 'block', 'inputGroup', 'primary', 'clear', 'link', 'action', 'circle']);

  var linkButton = link || href;
  var classes = classnames('btn', {
    loading: loading,
    'btn-lg': lg,
    'btn-sm': sm,
    'btn-block': block,
    'input-group-btn': inputGroup,
    'btn-primary': primary,
    'btn-clear': clear,
    'btn-link': linkButton && !primary,
    'btn-action': action,
    circle: circle
  }, className);

  var toReturn = null;
  if (href) {
    toReturn = react.createElement(
      'a',
      Object.assign({ href: href, className: classes }, props, {
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 53
        },
        __self: _this$3
      }),
      children
    );
  } else {
    toReturn = react.createElement(
      'button',
      Object.assign({ className: classes }, props, {
        __source: {
          fileName: _jsxFileName$3,
          lineNumber: 55
        },
        __self: _this$3
      }),
      children
    );
  }

  return toReturn;
};

var _jsxFileName$4 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/Icon.jsx';
var _this$4 = undefined;

var Icon = function Icon(_ref) {
  var _classnames;

  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? '' : _ref$size,
      _ref$name = _ref.name,
      name = _ref$name === undefined ? '' : _ref$name,
      arrowUp = _ref.arrowUp,
      arrowRight = _ref.arrowRight,
      arrowDown = _ref.arrowDown,
      arrowLeft = _ref.arrowLeft,
      upward = _ref.upward,
      forward = _ref.forward,
      downward = _ref.downward,
      back = _ref.back,
      caret = _ref.caret,
      menu = _ref.menu,
      apps = _ref.apps,
      moreHoriz = _ref.moreHoriz,
      moreVert = _ref.moreVert,
      resizeHoriz = _ref.resizeHoriz,
      resizeVert = _ref.resizeVert,
      plus = _ref.plus,
      minus = _ref.minus,
      cross = _ref.cross,
      check = _ref.check,
      stop = _ref.stop,
      shutdown = _ref.shutdown,
      refresh = _ref.refresh,
      search = _ref.search,
      flag = _ref.flag,
      bookmark = _ref.bookmark,
      edit = _ref.edit,
      del = _ref.del,
      share = _ref.share,
      download = _ref.download,
      upload = _ref.upload,
      mail = _ref.mail,
      people = _ref.people,
      message = _ref.message,
      photo = _ref.photo,
      time = _ref.time,
      location = _ref.location,
      link = _ref.link,
      emoji = _ref.emoji,
      form = _ref.form,
      loading = _ref.loading,
      props = objectWithoutProperties(_ref, ['className', 'size', 'name', 'arrowUp', 'arrowRight', 'arrowDown', 'arrowLeft', 'upward', 'forward', 'downward', 'back', 'caret', 'menu', 'apps', 'moreHoriz', 'moreVert', 'resizeHoriz', 'resizeVert', 'plus', 'minus', 'cross', 'check', 'stop', 'shutdown', 'refresh', 'search', 'flag', 'bookmark', 'edit', 'del', 'share', 'download', 'upload', 'mail', 'people', 'message', 'photo', 'time', 'location', 'link', 'emoji', 'form', 'loading']);

  var classes = classnames((_classnames = {
    icon: !form,
    'form-icon': form,
    loading: loading
  }, defineProperty(_classnames, 'icon-' + name, name), defineProperty(_classnames, 'icon-' + size, size), defineProperty(_classnames, 'icon-arrow-up', arrowUp), defineProperty(_classnames, 'icon-arrow-right', arrowRight), defineProperty(_classnames, 'icon-arrow-down', arrowDown), defineProperty(_classnames, 'icon-arrow-left', arrowLeft), defineProperty(_classnames, 'icon-upward', upward), defineProperty(_classnames, 'icon-forward', forward), defineProperty(_classnames, 'icon-downward', downward), defineProperty(_classnames, 'icon-back', back), defineProperty(_classnames, 'icon-caret', caret), defineProperty(_classnames, 'icon-menu', menu), defineProperty(_classnames, 'icon-apps', apps), defineProperty(_classnames, 'icon-more-horiz', moreHoriz), defineProperty(_classnames, 'icon-more-vert', moreVert), defineProperty(_classnames, 'icon-resize-horiz', resizeHoriz), defineProperty(_classnames, 'icon-resize-vert', resizeVert), defineProperty(_classnames, 'icon-plus', plus), defineProperty(_classnames, 'icon-minus', minus), defineProperty(_classnames, 'icon-cross', cross), defineProperty(_classnames, 'icon-check', check), defineProperty(_classnames, 'icon-stop', stop), defineProperty(_classnames, 'icon-shutdown', shutdown), defineProperty(_classnames, 'icon-refresh', refresh), defineProperty(_classnames, 'icon-search', search), defineProperty(_classnames, 'icon-flag', flag), defineProperty(_classnames, 'icon-bookmark', bookmark), defineProperty(_classnames, 'icon-edit', edit), defineProperty(_classnames, 'icon-delete', del), defineProperty(_classnames, 'icon-share', share), defineProperty(_classnames, 'icon-download', download), defineProperty(_classnames, 'icon-upload', upload), defineProperty(_classnames, 'icon-mail', mail), defineProperty(_classnames, 'icon-people', people), defineProperty(_classnames, 'icon-message', message), defineProperty(_classnames, 'icon-photo', photo), defineProperty(_classnames, 'icon-time', time), defineProperty(_classnames, 'icon-location', location), defineProperty(_classnames, 'icon-link', link), defineProperty(_classnames, 'icon-emoji', emoji), _classnames), className);
  return react.createElement('i', Object.assign({ className: classes }, props, {
    __source: {
      fileName: _jsxFileName$4,
      lineNumber: 142
    },
    __self: _this$4
  }));
};
Icon.defaultProps = {
  className: '',
  name: '',
  arrowUp: false,
  arrowRight: false,
  arrowDown: false,
  arrowLeft: false,
  upward: false,
  forward: false,
  downward: false,
  back: false,
  caret: false,
  menu: false,
  apps: false,
  moreHoriz: false,
  moreVert: false,
  resizeHoriz: false,
  resizeVert: false,
  plus: false,
  minus: false,
  cross: false,
  check: false,
  stop: false,
  shutdown: false,
  refresh: false,
  search: false,
  flag: false,
  bookmark: false,
  edit: false,
  del: false,
  share: false,
  download: false,
  upload: false,
  mail: false,
  people: false,
  message: false,
  photo: false,
  time: false,
  location: false,
  link: false,
  emoji: false,
  form: false,
  loading: false
};

var _jsxFileName$2 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/Calendar.jsx';
var _this$2 = undefined;

var Nav = function Nav(_ref) {
  var current = _ref.current,
      navFormat = _ref.navFormat,
      _ref$onMonthClick = _ref.onMonthClick,
      onMonthClick = _ref$onMonthClick === undefined ? lodash_noop : _ref$onMonthClick;
  return react.createElement(
    'div',
    { className: 'calendar-nav navbar', __source: {
        fileName: _jsxFileName$2,
        lineNumber: 20
      },
      __self: _this$2
    },
    react.createElement(
      Button,
      { action: true, link: true, lg: true, onClick: function onClick(e) {
          return onMonthClick(e, current.clone().add(-1, 'month'));
        }, __source: {
          fileName: _jsxFileName$2,
          lineNumber: 21
        },
        __self: _this$2
      },
      react.createElement(Icon, { arrowLeft: true, __source: {
          fileName: _jsxFileName$2,
          lineNumber: 21
        },
        __self: _this$2
      })
    ),
    react.createElement(
      Button,
      { link: true, lg: true, onClick: function onClick(e) {
          return onMonthClick(e, current.clone());
        }, __source: {
          fileName: _jsxFileName$2,
          lineNumber: 22
        },
        __self: _this$2
      },
      current.format(navFormat)
    ),
    react.createElement(
      Button,
      { action: true, link: true, lg: true, onClick: function onClick(e) {
          return onMonthClick(e, current.clone().add(1, 'month'));
        }, __source: {
          fileName: _jsxFileName$2,
          lineNumber: 23
        },
        __self: _this$2
      },
      react.createElement(Icon, { arrowRight: true, __source: {
          fileName: _jsxFileName$2,
          lineNumber: 23
        },
        __self: _this$2
      })
    )
  );
};
Nav.defaultProps = {
  current: hooks(),
  navFormat: 'MMMM YYYY',
  onMonthClick: lodash_noop
};

var Header = function Header(_ref2) {
  var weekdays = _ref2.weekdays;
  return react.createElement(
    'div',
    { className: 'calendar-header', __source: {
        fileName: _jsxFileName$2,
        lineNumber: 36
      },
      __self: _this$2
    },
    weekdays.map(function (d, i) {
      var key = 'weekday-' + i;
      return react.createElement(
        'div',
        { key: key, className: 'calendar-date', __source: {
            fileName: _jsxFileName$2,
            lineNumber: 40
          },
          __self: _this$2
        },
        d
      );
    })
  );
};
Header.defaultProps = {};

var Body = function Body(_ref3) {
  var current = _ref3.current,
      start = _ref3.start,
      end = _ref3.end,
      options = _ref3.options,
      dateFormat = _ref3.dateFormat,
      onDateClick = _ref3.onDateClick;

  var dates = [];

  var _loop = function _loop(_d) {
    var before = _d.isBefore(current, 'month');
    var after = _d.isAfter(current, 'month');
    var datum = options.data && options.data.find(function (_ref4) {
      var date = _ref4.date;
      return _d.isSame(date, 'date');
    });
    var range = options.range && options.range.find(function (r) {
      return _d.isBetween(r.start, r.end, 'date', '[]');
    });
    var rangeStart = range && _d.isSame(range.start, 'date');
    var rangeEnd = range && _d.isSame(range.end, 'date');
    var classes = classnames('calendar-date', {
      'prev-month': before,
      'current-month': _d.isSame(current, 'month'),
      'next-month': after,
      'calendar-range': range,
      'range-start': rangeStart,
      'range-end': rangeEnd,
      tooltip: datum,
      disabled: before || after
    });
    var btnClasses = classnames('date-item', {
      active: rangeStart || rangeEnd,
      badge: datum && datum.type === 'badge',
      'date-today': datum && datum.type === 'today'
    });
    var date = _d.clone();
    dates.push(react.createElement(
      'div',
      { key: date.format(), className: classes, 'data-tooltip': datum && datum.tooltip, __source: {
          fileName: _jsxFileName$2,
          lineNumber: 92
        },
        __self: _this$2
      },
      react.createElement(
        Button,
        {
          disabled: datum && datum.type === 'disabled',
          className: btnClasses,
          onClick: function onClick(e) {
            return onDateClick(e, date);
          },
          __source: {
            fileName: _jsxFileName$2,
            lineNumber: 93
          },
          __self: _this$2
        },
        date.format(dateFormat)
      )
    ));
  };

  for (var _d = start.clone(); _d.isSameOrBefore(end, 'date'); _d.add(1, 'day')) {
    _loop(_d);
  }
  // console.log(dates, current, options);
  return react.createElement(
    'div',
    { className: 'calendar-body', __source: {
        fileName: _jsxFileName$2,
        lineNumber: 103
      },
      __self: _this$2
    },
    dates
  );
};
Body.defaultProps = {
  current: undefined,
  start: undefined,
  end: undefined,
  options: {},
  dateFormat: 'D',
  onDateClick: lodash_noop
};

var Calendar = function Calendar(_ref5) {
  var navFormat = _ref5.navFormat,
      start = _ref5.start,
      end = _ref5.end,
      options = _ref5.options,
      onMonthClick = _ref5.onMonthClick,
      onDateClick = _ref5.onDateClick,
      current = _ref5.current,
      weekdays = _ref5.weekdays,
      props = objectWithoutProperties(_ref5, ['navFormat', 'start', 'end', 'options', 'onMonthClick', 'onDateClick', 'current', 'weekdays']);

  if (!current) {
    return null;
  }
  return react.createElement(
    'div',
    { className: 'calendar', __source: {
        fileName: _jsxFileName$2,
        lineNumber: 134
      },
      __self: _this$2
    },
    react.createElement(Nav, {
      current: current,
      navFormat: navFormat,
      onMonthClick: onMonthClick,
      __source: {
        fileName: _jsxFileName$2,
        lineNumber: 135
      },
      __self: _this$2
    }),
    react.createElement(
      'div',
      { className: 'calendar-container', __source: {
          fileName: _jsxFileName$2,
          lineNumber: 140
        },
        __self: _this$2
      },
      react.createElement(Header, { weekdays: weekdays, __source: {
          fileName: _jsxFileName$2,
          lineNumber: 141
        },
        __self: _this$2
      }),
      react.createElement(Body, Object.assign({}, props, {
        current: current,
        start: start || current.clone().startOf('month').startOf('week'),
        end: end || current.clone().endOf('month').endOf('week'),
        options: options,
        onDateClick: onDateClick,
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 142
        },
        __self: _this$2
      }))
    )
  );
};
Calendar.defaultProps = Object.assign({}, Nav.defaultProps, Header.defaultProps, Body.defaultProps);

var _jsxFileName$5 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/Timeline.jsx';
var _this$5 = undefined;

var Timeline = function Timeline(_ref) {
  var children = _ref.children,
      timelines = _ref.timelines;

  var timeline = children.map(function (child, i) {
    var key = 'timeline-' + i;
    var first = i === 0;
    return react.createElement(
      'div',
      { key: key, className: 'timeline-item', id: key, __source: {
          fileName: _jsxFileName$5,
          lineNumber: 16
        },
        __self: _this$5
      },
      react.createElement(
        'div',
        { className: classnames('timeline-left', { 'icon-lg': first }), __source: {
            fileName: _jsxFileName$5,
            lineNumber: 17
          },
          __self: _this$5
        },
        react.createElement(
          'a',
          {
            href: '#' + key,
            className: classnames('timeline-icon', 'tooltip', { 'icon-lg': !first }),
            'data-tooltip': timelines[i] || '',
            __source: {
              fileName: _jsxFileName$5,
              lineNumber: 18
            },
            __self: _this$5
          },
          react.createElement(Icon, { check: !first, __source: {
              fileName: _jsxFileName$5,
              lineNumber: 22
            },
            __self: _this$5
          })
        )
      ),
      react.createElement(
        'div',
        { className: 'timeline-content', __source: {
            fileName: _jsxFileName$5,
            lineNumber: 24
          },
          __self: _this$5
        },
        child
      )
    );
  });
  return react.createElement(
    'div',
    { className: 'timeline', __source: {
        fileName: _jsxFileName$5,
        lineNumber: 31
      },
      __self: _this$5
    },
    timeline
  );
};
Timeline.defaultProps = {
  children: [],
  timelines: []
};

var _jsxFileName$6 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/Carousel.jsx';
var _this$6 = undefined;

var Carousel = function Carousel(_ref) {
  var slides = _ref.slides,
      active = _ref.active,
      onChange = _ref.onChange;

  if (!slides || slides.length === 0) {
    return null;
  }
  return react.createElement(
    'div',
    { className: 'carousel', __source: {
        fileName: _jsxFileName$6,
        lineNumber: 21
      },
      __self: _this$6
    },
    slides.map(function (slide, i) {
      var id = 'slide-' + i;
      return react.createElement('input', {
        key: id + '_locator',
        id: id,
        name: 'carousel-radio',
        className: 'carousel-locator',
        checked: id === active,
        type: 'radio',
        hidden: true,
        onChange: function (_onChange) {
          function onChange(_x) {
            return _onChange.apply(this, arguments);
          }

          onChange.toString = function () {
            return _onChange.toString();
          };

          return onChange;
        }(function (e) {
          return onChange(e, id);
        }),
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 25
        },
        __self: _this$6
      });
    }),
    react.createElement(
      'div',
      { className: 'carousel-container', __source: {
          fileName: _jsxFileName$6,
          lineNumber: 37
        },
        __self: _this$6
      },
      slides.map(function (slide, i) {
        var key = 'slide-' + i + '_item';
        var prev = i === 0 ? slides.length - 1 : i - 1;
        var next = i === slides.length - 1 ? 0 : i + 1;
        return react.createElement(
          'figure',
          { key: key, className: 'carousel-item', __source: {
              fileName: _jsxFileName$6,
              lineNumber: 43
            },
            __self: _this$6
          },
          react.createElement(
            'label',
            { className: 'item-prev btn btn-action btn-lg', htmlFor: 'slide-' + prev, __source: {
                fileName: _jsxFileName$6,
                lineNumber: 44
              },
              __self: _this$6
            },
            react.createElement(Icon, { arrowLeft: true, __source: {
                fileName: _jsxFileName$6,
                lineNumber: 45
              },
              __self: _this$6
            })
          ),
          react.createElement(
            'label',
            { className: 'item-next btn btn-action btn-lg', htmlFor: 'slide-' + next, __source: {
                fileName: _jsxFileName$6,
                lineNumber: 47
              },
              __self: _this$6
            },
            react.createElement(Icon, { arrowRight: true, __source: {
                fileName: _jsxFileName$6,
                lineNumber: 48
              },
              __self: _this$6
            })
          ),
          react.createElement('img', { src: slide.src, className: 'img-responsive rounded', alt: slide.alt, __source: {
              fileName: _jsxFileName$6,
              lineNumber: 50
            },
            __self: _this$6
          })
        );
      })
    ),
    react.createElement(
      'div',
      { className: 'carousel-nav', __source: {
          fileName: _jsxFileName$6,
          lineNumber: 55
        },
        __self: _this$6
      },
      slides.map(function (slide, i) {
        var id = 'slide-' + i;
        return react.createElement(
          'label',
          { key: id + '_nav', className: 'nav-item text-hide c-hand', htmlFor: id, __source: {
              fileName: _jsxFileName$6,
              lineNumber: 59
            },
            __self: _this$6
          },
          i + 1
        );
      })
    )
  );
};
Carousel.defaultProps = {
  slides: [],
  active: 'slide-0',
  onChange: lodash_noop
};

var _jsxFileName$7 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/OffCanvas.jsx';
var _this$7 = undefined;

var OffCanvas = function OffCanvas(_ref) {
  var children = _ref.children,
      sidebar = _ref.sidebar,
      props = objectWithoutProperties(_ref, ['children', 'sidebar']);
  return react.createElement(
    'div',
    Object.assign({ className: 'off-canvas' }, props, {
      __source: {
        fileName: _jsxFileName$7,
        lineNumber: 16
      },
      __self: _this$7
    }),
    react.createElement('input', { type: 'checkbox', className: 'off-canvas-checkbox', id: 'sidebar-checkbox', name: 'sidebar-checkbox', hidden: true, __source: {
        fileName: _jsxFileName$7,
        lineNumber: 17
      },
      __self: _this$7
    }),
    react.createElement(
      'label',
      { className: 'off-canvas-toggle btn btn-primary btn-lg', htmlFor: 'sidebar-checkbox', __source: {
          fileName: _jsxFileName$7,
          lineNumber: 18
        },
        __self: _this$7
      },
      react.createElement(Icon, { menu: true, __source: {
          fileName: _jsxFileName$7,
          lineNumber: 19
        },
        __self: _this$7
      })
    ),
    react.createElement(
      'div',
      { className: classnames('off-canvas-sidebar', sidebar.className || ''), __source: {
          fileName: _jsxFileName$7,
          lineNumber: 22
        },
        __self: _this$7
      },
      sidebar.content
    ),
    react.createElement(
      'div',
      { className: 'off-canvas-content', __source: {
          fileName: _jsxFileName$7,
          lineNumber: 25
        },
        __self: _this$7
      },
      children
    )
  );
};

var _jsxFileName$8 = "/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/Progress.jsx";
var _this$8 = undefined;

var Progress = function Progress(_ref) {
  var max = _ref.max,
      props = objectWithoutProperties(_ref, ["max"]);
  return react.createElement("progress", Object.assign({ className: "progress", max: max }, props, {
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 8
    },
    __self: _this$8
  }));
};
Progress.defaultProps = {
  max: 100
};

var _jsxFileName$11 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/form/Form.jsx';
var _this$11 = undefined;

var Form = function Form(_ref) {
  var children = _ref.children,
      className = _ref.className,
      horizontal = _ref.horizontal,
      props = objectWithoutProperties(_ref, ['children', 'className', 'horizontal']);

  var classes = classnames(className, { 'form-horizontal': horizontal });
  return react.createElement(
    'form',
    Object.assign({}, props, { className: classes, __source: {
        fileName: _jsxFileName$11,
        lineNumber: 13
      },
      __self: _this$11
    }),
    children
  );
};
Form.defaultProps = {
  className: '',
  horizontal: false
};

var Group$2 = function Group(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      success = _ref2.success,
      danger = _ref2.danger,
      props = objectWithoutProperties(_ref2, ['children', 'className', 'success', 'danger']);

  var classes = classnames('form-group', className, { 'has-success': success, 'has-danger': danger });
  return react.createElement(
    'div',
    Object.assign({}, props, { className: classes, __source: {
        fileName: _jsxFileName$11,
        lineNumber: 34
      },
      __self: _this$11
    }),
    children
  );
};
Group$2.defaultProps = {
  className: '',
  success: false,
  danger: false
};

var Label = function Label(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      htmlFor = _ref3.htmlFor,
      props = objectWithoutProperties(_ref3, ['children', 'className', 'htmlFor']);

  var classes = classnames('form-label', className);
  if (htmlFor) {
    return react.createElement(
      'label',
      Object.assign({}, props, { className: classes, htmlFor: htmlFor, __source: {
          fileName: _jsxFileName$11,
          lineNumber: 54
        },
        __self: _this$11
      }),
      children
    );
  }
  return react.createElement(
    'span',
    Object.assign({}, props, { className: classes, __source: {
        fileName: _jsxFileName$11,
        lineNumber: 60
      },
      __self: _this$11
    }),
    children
  );
};
Label.defaultProps = {
  className: '',
  htmlFor: ''
};

var current = {};
var uniqueId = function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!current[prefix]) {
    current[prefix] = 0;
  }
  // eslint-disable-next-line no-return-assign
  return prefix + '-' + (current[prefix] += 1);
};

var _jsxFileName$10 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/form/Input.jsx';
var _this$10 = undefined;

var BaseInput = function BaseInput(_ref) {
  var className = _ref.className,
      success = _ref.success,
      danger = _ref.danger,
      textarea = _ref.textarea,
      slider = _ref.slider,
      sm = _ref.sm,
      lg = _ref.lg,
      props = objectWithoutProperties(_ref, ['className', 'success', 'danger', 'textarea', 'slider', 'sm', 'lg']);

  var classes = classnames(className, {
    'form-input': !slider,
    'is-success': success,
    'is-danger': danger,
    'input-lg': lg,
    'input-sm': sm
  });
  if (textarea) {
    return react.createElement('textarea', Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$10,
        lineNumber: 28
      },
      __self: _this$10
    }));
  }
  if (slider) {
    return react.createElement('input', Object.assign({}, props, { type: 'range', className: 'slider tooltip', __source: {
        fileName: _jsxFileName$10,
        lineNumber: 31
      },
      __self: _this$10
    }));
  }
  return react.createElement('input', Object.assign({}, props, { className: classes, __source: {
      fileName: _jsxFileName$10,
      lineNumber: 33
    },
    __self: _this$10
  }));
};
BaseInput.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  slider: false
};

var Input = function Input(_ref2) {
  var label = _ref2.label,
      id = _ref2.id,
      props = objectWithoutProperties(_ref2, ['label', 'id']);

  var elementId = id || uniqueId('input');
  var content = react.createElement(BaseInput, Object.assign({ id: elementId }, props, {
    __source: {
      fileName: _jsxFileName$10,
      lineNumber: 57
    },
    __self: _this$10
  }));
  if (label) {
    return react.createElement(
      Group$2,
      {
        __source: {
          fileName: _jsxFileName$10,
          lineNumber: 60
        },
        __self: _this$10
      },
      react.createElement(
        Label,
        { htmlFor: elementId, __source: {
            fileName: _jsxFileName$10,
            lineNumber: 61
          },
          __self: _this$10
        },
        label
      ),
      content
    );
  }
  return content;
};
Input.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  label: '',
  id: ''
};

var _jsxFileName$9 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/Slider.jsx';
var _this$9 = undefined;

var Slider = function Slider(_ref) {
  var min = _ref.min,
      max = _ref.max,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ['min', 'max', 'value']);
  return react.createElement(Input, Object.assign({ slider: true, min: min, max: max, defaultValue: value, 'data-tooltip': value }, props, {
    __source: {
      fileName: _jsxFileName$9,
      lineNumber: 12
    },
    __self: _this$9
  }));
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  value: undefined
};

var _jsxFileName$12 = "/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/Meter.jsx";
var _this$12 = undefined;

var Meter = function Meter(_ref) {
  var value = _ref.value,
      optimum = _ref.optimum,
      min = _ref.min,
      max = _ref.max,
      low = _ref.low,
      high = _ref.high;
  return react.createElement("meter", { className: "meter", value: value, optimum: optimum, min: min, max: max, low: low, high: high, __source: {
      fileName: _jsxFileName$12,
      lineNumber: 13
    },
    __self: _this$12
  });
};
Meter.defaultProps = {
  value: 0,
  optimum: 90,
  min: 0,
  max: 100,
  low: 30,
  high: 80
};

var _jsxFileName$13 = "/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/experimentals/Parallax.jsx";
var _this$13 = undefined;

var Parallax = function Parallax(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      title = _ref.title;
  return react.createElement(
    "div",
    { className: "parallax", __source: {
        fileName: _jsxFileName$13,
        lineNumber: 10
      },
      __self: _this$13
    },
    react.createElement("div", { className: "parallax-top-left", __source: {
        fileName: _jsxFileName$13,
        lineNumber: 11
      },
      __self: _this$13
    }),
    react.createElement("div", { className: "parallax-top-right", __source: {
        fileName: _jsxFileName$13,
        lineNumber: 12
      },
      __self: _this$13
    }),
    react.createElement("div", { className: "parallax-bottom-left", __source: {
        fileName: _jsxFileName$13,
        lineNumber: 13
      },
      __self: _this$13
    }),
    react.createElement("div", { className: "parallax-bottom-right", __source: {
        fileName: _jsxFileName$13,
        lineNumber: 14
      },
      __self: _this$13
    }),
    react.createElement(
      "div",
      { className: "parallax-content", __source: {
          fileName: _jsxFileName$13,
          lineNumber: 15
        },
        __self: _this$13
      },
      react.createElement(
        "div",
        { className: "parallax-front", __source: {
            fileName: _jsxFileName$13,
            lineNumber: 16
          },
          __self: _this$13
        },
        react.createElement(
          "h2",
          {
            __source: {
              fileName: _jsxFileName$13,
              lineNumber: 17
            },
            __self: _this$13
          },
          title
        )
      ),
      react.createElement(
        "div",
        { className: "parallax-back", __source: {
            fileName: _jsxFileName$13,
            lineNumber: 19
          },
          __self: _this$13
        },
        react.createElement("img", { src: src, className: "img-responsive rounded", alt: alt, __source: {
            fileName: _jsxFileName$13,
            lineNumber: 20
          },
          __self: _this$13
        })
      )
    )
  );
};
Parallax.defaultProps = {
  src: 'https://picturepan2.github.io/spectre/img/osx-yosemite-2.jpg',
  alt: 'macOS Yosemite Wallpaper',
  title: 'tvOS parallax demo'
};

var _jsxFileName$14 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/form/Switch.jsx';
var _this$14 = undefined;

var Switch = function Switch(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classnames('form-switch', className);
  var id = uniqueId('switch');
  return react.createElement(
    'label',
    { className: classes, htmlFor: id, __source: {
        fileName: _jsxFileName$14,
        lineNumber: 15
      },
      __self: _this$14
    },
    react.createElement('input', Object.assign({ type: 'checkbox' }, props, { id: id, __source: {
        fileName: _jsxFileName$14,
        lineNumber: 16
      },
      __self: _this$14
    })),
    react.createElement('i', { className: 'form-icon', __source: {
        fileName: _jsxFileName$14,
        lineNumber: 17
      },
      __self: _this$14
    }),
    ' ',
    children
  );
};
Switch.defaultProps = {
  className: ''
};

var _jsxFileName$15 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/form/Select.jsx';
var _this$15 = undefined;

var SelectOnly = function SelectOnly(_ref) {
  var children = _ref.children,
      className = _ref.className,
      sm = _ref.sm,
      lg = _ref.lg,
      props = objectWithoutProperties(_ref, ['children', 'className', 'sm', 'lg']);

  var classes = classnames('form-select', className, {
    'select-sm': sm,
    'select-lg': lg
  });
  return react.createElement(
    'select',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$15,
        lineNumber: 23
      },
      __self: _this$15
    }),
    children
  );
};
SelectOnly.defaultProps = {
  children: null,
  className: '',
  sm: false,
  lg: false
};

var Select = function Select(_ref2) {
  var children = _ref2.children,
      label = _ref2.label,
      options = _ref2.options,
      props = objectWithoutProperties(_ref2, ['children', 'label', 'options']);

  var labelNode = label ? react.createElement(
    Label,
    {
      __source: {
        fileName: _jsxFileName$15,
        lineNumber: 42
      },
      __self: _this$15
    },
    label
  ) : null;
  var keys = Object.keys(options);
  if (keys.length > 0) {
    return react.createElement(
      Group$2,
      {
        __source: {
          fileName: _jsxFileName$15,
          lineNumber: 46
        },
        __self: _this$15
      },
      labelNode,
      react.createElement(
        SelectOnly,
        Object.assign({}, props, {
          __source: {
            fileName: _jsxFileName$15,
            lineNumber: 48
          },
          __self: _this$15
        }),
        keys.map(function (key) {
          return react.createElement(
            'option',
            { key: key, __source: {
                fileName: _jsxFileName$15,
                lineNumber: 50
              },
              __self: _this$15
            },
            options[key]
          );
        })
      )
    );
  }
  return react.createElement(
    SelectOnly,
    Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName$15,
        lineNumber: 57
      },
      __self: _this$15
    }),
    children
  );
};
Select.defaultProps = {
  label: '',
  options: {}
};

var _jsxFileName$16 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/form/Checkbox.jsx';
var _this$16 = undefined;

var CheckboxSingle = function CheckboxSingle(_ref) {
  var label = _ref.label,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['label', 'className']);

  var classes = classnames('form-checkbox', className);
  var id = uniqueId('checkbox');
  return react.createElement(
    'label',
    Object.assign({ className: classes, htmlFor: id }, props, {
      __source: {
        fileName: _jsxFileName$16,
        lineNumber: 15
      },
      __self: _this$16
    }),
    react.createElement('input', { id: id, type: 'checkbox', __source: {
        fileName: _jsxFileName$16,
        lineNumber: 16
      },
      __self: _this$16
    }),
    react.createElement('i', { className: 'form-icon', __source: {
        fileName: _jsxFileName$16,
        lineNumber: 17
      },
      __self: _this$16
    }),
    ' ',
    label
  );
};
CheckboxSingle.defaultProps = {
  className: ''
};

var Checkbox = function Checkbox(_ref2) {
  var className = _ref2.className,
      label = _ref2.label,
      options = _ref2.options,
      props = objectWithoutProperties(_ref2, ['className', 'label', 'options']);

  var keys = Object.keys(options);
  if (keys.length === 0) {
    return react.createElement(CheckboxSingle, Object.assign({ label: label, className: className }, props, {
      __source: {
        fileName: _jsxFileName$16,
        lineNumber: 33
      },
      __self: _this$16
    }));
  }
  var list = keys.map(function (key) {
    return react.createElement(CheckboxSingle, Object.assign({ key: key, label: options[key], className: className, value: key }, props, {
      __source: {
        fileName: _jsxFileName$16,
        lineNumber: 36
      },
      __self: _this$16
    }));
  });
  return react.createElement(
    'div',
    { className: 'form-group', __source: {
        fileName: _jsxFileName$16,
        lineNumber: 38
      },
      __self: _this$16
    },
    react.createElement(
      'span',
      { className: 'form-label', __source: {
          fileName: _jsxFileName$16,
          lineNumber: 39
        },
        __self: _this$16
      },
      label
    ),
    list
  );
};
Checkbox.defaultProps = {
  options: {}
};

var _jsxFileName$17 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/form/Radio.jsx';
var _this$17 = undefined;

var RadioSingle = function RadioSingle(_ref) {
  var label = _ref.label,
      className = _ref.className,
      name = _ref.name,
      checked = _ref.checked,
      props = objectWithoutProperties(_ref, ['label', 'className', 'name', 'checked']);

  var classes = classnames('form-radio', className);
  var id = uniqueId('radio');
  return react.createElement(
    'label',
    { className: classes, htmlFor: id, __source: {
        fileName: _jsxFileName$17,
        lineNumber: 17
      },
      __self: _this$17
    },
    react.createElement('input', Object.assign({ type: 'radio', name: name, checked: checked, id: id }, props, {
      __source: {
        fileName: _jsxFileName$17,
        lineNumber: 18
      },
      __self: _this$17
    })),
    react.createElement('i', { className: 'form-icon', __source: {
        fileName: _jsxFileName$17,
        lineNumber: 19
      },
      __self: _this$17
    }),
    ' ',
    label
  );
};
RadioSingle.defaultProps = {
  label: '',
  className: '',
  checked: false
};

var Radio = function Radio(_ref2) {
  var name = _ref2.name,
      label = _ref2.label,
      options = _ref2.options,
      props = objectWithoutProperties(_ref2, ['name', 'label', 'options']);

  var keys = Object.keys(options);
  if (keys.length === 0) {
    return react.createElement(RadioSingle, Object.assign({ label: label, name: name }, props, {
      __source: {
        fileName: _jsxFileName$17,
        lineNumber: 37
      },
      __self: _this$17
    }));
  }
  var list = keys.map(function (key) {
    return react.createElement(RadioSingle, Object.assign({ key: key, label: options[key], name: name, value: key }, props, {
      __source: {
        fileName: _jsxFileName$17,
        lineNumber: 40
      },
      __self: _this$17
    }));
  });
  return react.createElement(
    'div',
    { className: 'form-group', __source: {
        fileName: _jsxFileName$17,
        lineNumber: 42
      },
      __self: _this$17
    },
    react.createElement(
      'span',
      { className: 'form-label', __source: {
          fileName: _jsxFileName$17,
          lineNumber: 43
        },
        __self: _this$17
      },
      label
    ),
    list
  );
};
Radio.defaultProps = {
  options: {}
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret$4 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1$4 = ReactPropTypesSecret$4;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

{
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$5 = ReactPropTypesSecret_1$4;
  var loggedTypeFailures$2 = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$2(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$5);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures$2)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures$2[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1$2 = checkPropTypes$2;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';









var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1$4) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$4);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$4);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$4) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$4);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$4);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1$2;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
});

var _jsxFileName$18 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/layout/Column.jsx';
var _this$18 = undefined;

var Column = function Column(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      size = _ref.size,
      props = objectWithoutProperties(_ref, ['children', 'className', 'xs', 'sm', 'md', 'lg', 'xl', 'size']);

  var classes = classnames('column', (_classnames = {}, defineProperty(_classnames, 'col-xs-' + (xs || 0), !!xs), defineProperty(_classnames, 'col-sm-' + (sm || 0), !!sm), defineProperty(_classnames, 'col-md-' + (md || 0), !!md), defineProperty(_classnames, 'col-lg-' + (lg || 0), !!lg), defineProperty(_classnames, 'col-xl-' + (xl || 0), !!xl), defineProperty(_classnames, 'col-' + (size || 0), !!size), _classnames), className);

  return react.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$18,
        lineNumber: 30
      },
      __self: _this$18
    }),
    children
  );
};
Column.defaultProps = {
  children: null,
  className: '',
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  size: 0
};



var _ref2 = function () {
  var toExport = {};

  var _loop = function _loop(i) {
    var func = function func(_ref3) {
      var children = _ref3.children,
          props = objectWithoutProperties(_ref3, ['children']);
      return react.createElement(
        Column,
        Object.assign({ size: i }, props, {
          __source: {
            fileName: _jsxFileName$18,
            lineNumber: 80
          },
          __self: _this$18
        }),
        children
      );
    };
    func.propTypes = { children: propTypes.node };
    func.defaultProps = { children: null };
    func.funcName = 'Column' + i;
    toExport['Column' + i] = func;
  };

  for (var i = 12; i > 0; i -= 1) {
    _loop(i);
  }
  return toExport;
}();
var Column12 = _ref2.Column12;
var Column11 = _ref2.Column11;
var Column10 = _ref2.Column10;
var Column9 = _ref2.Column9;
var Column8 = _ref2.Column8;
var Column7 = _ref2.Column7;
var Column6 = _ref2.Column6;
var Column5 = _ref2.Column5;
var Column4 = _ref2.Column4;
var Column3 = _ref2.Column3;
var Column2 = _ref2.Column2;
var Column1 = _ref2.Column1;

var _jsxFileName$19 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/layout/Container.jsx';
var _this$19 = undefined;

var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      props = objectWithoutProperties(_ref, ['children', 'className', 'xs', 'sm', 'md', 'lg', 'xl']);

  var classes = classnames('container', {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl
  }, className);
  return react.createElement(
    'section',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$19,
        lineNumber: 25
      },
      __self: _this$19
    }),
    children
  );
};
Container.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};

var _jsxFileName$21 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/layout/Columns.jsx';
var _this$21 = undefined;

var ColumnsWithoutContainer = function ColumnsWithoutContainer(_ref) {
  var children = _ref.children,
      gapless = _ref.gapless,
      oneline = _ref.oneline,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'gapless', 'oneline', 'className']);

  var classes = classnames('columns', {
    'col-gapless': gapless,
    'col-oneline': oneline
  }, className);

  return react.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$21,
        lineNumber: 19
      },
      __self: _this$21
    }),
    children
  );
};
ColumnsWithoutContainer.defaultProps = {
  className: '',
  gapless: false,
  oneline: false
};

function acquireContainerProps(option) {
  switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
    case 'boolean':
      return null;
    case 'string':
      return defineProperty({}, option, true);
    default:
      return option;
  }
}

var Columns = function Columns(_ref3) {
  var children = _ref3.children,
      container = _ref3.container,
      props = objectWithoutProperties(_ref3, ['children', 'container']);

  var content = react.createElement(
    ColumnsWithoutContainer,
    Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName$21,
        lineNumber: 57
      },
      __self: _this$21
    }),
    children
  );

  if (!container) {
    return content;
  }
  var containerProps = acquireContainerProps(container);
  return react.createElement(
    Container,
    Object.assign({}, containerProps, {
      __source: {
        fileName: _jsxFileName$21,
        lineNumber: 64
      },
      __self: _this$21
    }),
    content
  );
};
Columns.defaultProps = {
  container: false
};

var _jsxFileName$20 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/layout/Navbar.jsx';
var _this$20 = undefined;

var NavbarWithoutContainer = function NavbarWithoutContainer(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = objectWithoutProperties(_ref2, ['children', 'className']);

  var classes = classnames('navbar', className);

  return react.createElement(
    'header',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$20,
        lineNumber: 37
      },
      __self: _this$20
    }),
    children
  );
};
NavbarWithoutContainer.defaultProps = {
  className: ''
};

var Navbar = function Navbar(_ref3) {
  var children = _ref3.children,
      container = _ref3.container,
      props = objectWithoutProperties(_ref3, ['children', 'container']);

  var content = react.createElement(
    NavbarWithoutContainer,
    Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName$20,
        lineNumber: 61
      },
      __self: _this$20
    }),
    children
  );

  if (!container) {
    return content;
  }
  var containerProps = acquireContainerProps(container);

  return react.createElement(
    Container,
    Object.assign({}, containerProps, {
      __source: {
        fileName: _jsxFileName$20,
        lineNumber: 69
      },
      __self: _this$20
    }),
    content
  );
};
Navbar.defaultProps = {
  container: false
};

function display(_ref, className) {
  var block = _ref.block,
      inline = _ref.inline,
      inlineBlock = _ref.inlineBlock,
      flex = _ref.flex,
      inlineFlex = _ref.inlineFlex,
      none = _ref.none,
      hide = _ref.hide,
      visible = _ref.visible,
      invisible = _ref.invisible,
      textHide = _ref.textHide,
      assistive = _ref.assistive;

  return classnames({
    'd-block': block,
    'd-inline': inline,
    'd-inline-block': inlineBlock,
    'd-flex': flex,
    'd-inline-flex': inlineFlex,
    'd-none': none,
    'd-hide': hide,
    'd-visible': visible,
    'd-invisible': invisible,
    'text-hide': textHide,
    'text-assistive': assistive
  }, className);
}

function text(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      gray = _ref.gray,
      light = _ref.light,
      success = _ref.success,
      warning = _ref.warning,
      error = _ref.error;
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return classnames({
    'text-primary': primary,
    'text-secondary': secondary,
    'text-gray': gray,
    'text-light': light,
    'text-success': success,
    'text-warning': warning,
    'text-error': error
  }, className);
}

function background(_ref2) {
  var primary = _ref2.primary,
      secondary = _ref2.secondary,
      gray = _ref2.gray,
      light = _ref2.light,
      success = _ref2.success,
      warning = _ref2.warning,
      error = _ref2.error;
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return classnames({
    'bg-primary': primary,
    'bg-secondary': secondary,
    'bg-gray': gray,
    'bg-light': light,
    'bg-success': success,
    'bg-warning': warning,
    'bg-error': error
  }, className);
}



var color = Object.freeze({
	text: text,
	background: background
});

function cursor(_ref, className) {
  var hand = _ref.hand,
      move = _ref.move,
      zoomIn = _ref.zoomIn,
      zoomOut = _ref.zoomOut,
      notAllowed = _ref.notAllowed,
      auto = _ref.auto;

  return classnames({
    'c-hand': hand,
    'c-move': move,
    'c-zoom-in': zoomIn,
    'c-zoom-out': zoomOut,
    'c-not-allowed': notAllowed,
    'c-auto': auto
  }, className);
}

var _jsxFileName$22 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/utilities/Divider.jsx';
var _this$22 = undefined;

var Divider = function Divider(_ref) {
  var content = _ref.content,
      vertical = _ref.vertical,
      li = _ref.li,
      center = _ref.center,
      className = _ref.className;

  var classes = classnames({
    divider: !vertical,
    'divider-vert': vertical,
    'text-center': center
  }, className);
  if (li) {
    return react.createElement('li', { className: classes, 'data-content': content, __source: {
        fileName: _jsxFileName$22,
        lineNumber: 19
      },
      __self: _this$22
    });
  }
  return react.createElement('div', { className: classes, 'data-content': content, __source: {
      fileName: _jsxFileName$22,
      lineNumber: 22
    },
    __self: _this$22
  });
};
Divider.defaultProps = {
  content: '',
  vertical: false,
  li: false,
  center: false,
  className: ''
};

var _jsxFileName$23 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/utilities/Loading.jsx';
var _this$23 = undefined;

var Loading = function Loading(_ref) {
  var large = _ref.large,
      className = _ref.className;

  var classes = classnames('loading', {
    'loading-lg': large
  }, className);
  return react.createElement('div', { className: classes, __source: {
      fileName: _jsxFileName$23,
      lineNumber: 14
    },
    __self: _this$23
  });
};
Loading.defaultProps = {
  large: false,
  className: ''
};

function shape(_ref) {
  var rounded = _ref.rounded,
      circle = _ref.circle;
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return classnames({
    rounded: rounded,
    circle: circle
  }, className);
}

function text$1(_ref, className) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      justify = _ref.justify,
      lowercase = _ref.lowercase,
      uppercase = _ref.uppercase,
      capitalize = _ref.capitalize,
      normal = _ref.normal,
      bold = _ref.bold,
      italic = _ref.italic,
      large = _ref.large,
      ellipsis = _ref.ellipsis,
      clip = _ref.clip,
      textBreak = _ref.textBreak;

  return classnames({
    'text-left': left,
    'text-center': center,
    'text-right': right,
    'text-justify': justify,
    'text-lowercase': lowercase,
    'text-uppercase': uppercase,
    'text-capitalize': capitalize,
    'text-normal': normal,
    'text-bold': bold,
    'text-italic': italic,
    'text-large': large,
    'text-ellipsis': ellipsis,
    'text-clip': clip,
    'text-break': textBreak
  }, className);
}

function position(_ref) {
  var clearfix = _ref.clearfix,
      floatLeft = _ref.floatLeft,
      floatRight = _ref.floatRight,
      relative = _ref.relative,
      absolute = _ref.absolute,
      fixed = _ref.fixed,
      centered = _ref.centered,
      margin = _ref.margin,
      marginMore = _ref.marginMore,
      marginTop = _ref.marginTop,
      marginTopMore = _ref.marginTopMore,
      marginBottom = _ref.marginBottom,
      marginBottomMore = _ref.marginBottomMore,
      marginLeft = _ref.marginLeft,
      marginLeftMore = _ref.marginLeftMore,
      marginRight = _ref.marginRight,
      marginRightMore = _ref.marginRightMore,
      marginWidth = _ref.marginWidth,
      marginWidthMore = _ref.marginWidthMore,
      marginHeight = _ref.marginHeight,
      marginHeightMore = _ref.marginHeightMore,
      padding = _ref.padding,
      paddingMore = _ref.paddingMore,
      paddingTop = _ref.paddingTop,
      paddingTopMore = _ref.paddingTopMore,
      paddingBottom = _ref.paddingBottom,
      paddingBottomMore = _ref.paddingBottomMore,
      paddingLeft = _ref.paddingLeft,
      paddingLeftMore = _ref.paddingLeftMore,
      paddingRight = _ref.paddingRight,
      paddingRightMore = _ref.paddingRightMore,
      paddingWidth = _ref.paddingWidth,
      paddingWidthMore = _ref.paddingWidthMore,
      paddingHeight = _ref.paddingHeight,
      paddingHeightMore = _ref.paddingHeightMore;
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return classnames({
    clearfix: clearfix,
    'float-left': floatLeft,
    'float-right': floatRight,
    relative: relative,
    absolute: absolute,
    fixed: fixed,
    centered: centered,
    'm-1': margin,
    'm-2': marginMore,
    'mt-1': marginTop,
    'mt-2': marginTopMore,
    'mb-1': marginBottom,
    'mb-2': marginBottomMore,
    'ml-1': marginLeft,
    'ml-2': marginLeftMore,
    'mr-1': marginRight,
    'mr-2': marginRightMore,
    'mx-1': marginWidth,
    'mx-2': marginWidthMore,
    'my-1': marginHeight,
    'my-2': marginHeightMore,
    'p-1': padding,
    'p-2': paddingMore,
    'pt-1': paddingTop,
    'pt-2': paddingTopMore,
    'pb-1': paddingBottom,
    'pb-2': paddingBottomMore,
    'pl-1': paddingLeft,
    'pl-2': paddingLeftMore,
    'pr-1': paddingRight,
    'pr-2': paddingRightMore,
    'px-1': paddingWidth,
    'px-2': paddingWidthMore,
    'py-1': paddingHeight,
    'py-2': paddingHeightMore
  }, className);
}

var _jsxFileName$24 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Menu.jsx';
var _this$24 = undefined;

var Badge = function Badge(_ref) {
  var content = _ref.content;

  if (!content) {
    return null;
  }
  return react.createElement(
    'div',
    { className: 'menu-badge', __source: {
        fileName: _jsxFileName$24,
        lineNumber: 16
      },
      __self: _this$24
    },
    react.createElement(
      'span',
      { className: 'label label-primary', __source: {
          fileName: _jsxFileName$24,
          lineNumber: 17
        },
        __self: _this$24
      },
      content
    )
  );
};

var Item = function Item(_ref2) {
  var id = _ref2.id,
      link = _ref2.link,
      content = _ref2.content,
      className = _ref2.className,
      divider = _ref2.divider,
      active = _ref2.active,
      badge = _ref2.badge,
      onClick = _ref2.onClick,
      props = objectWithoutProperties(_ref2, ['id', 'link', 'content', 'className', 'divider', 'active', 'badge', 'onClick']);

  var classes = classnames('menu-item', className);
  if (divider) {
    return react.createElement(Divider, { className: className, content: typeof divider === 'string' ? divider : '', __source: {
        fileName: _jsxFileName$24,
        lineNumber: 45
      },
      __self: _this$24
    });
  }
  return react.createElement(
    'li',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$24,
        lineNumber: 48
      },
      __self: _this$24
    }),
    react.createElement(Badge, { content: badge, __source: {
        fileName: _jsxFileName$24,
        lineNumber: 49
      },
      __self: _this$24
    }),
    react.createElement(
      'a',
      { href: link, className: classnames({ active: active }), onClick: function (_onClick) {
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, id);
        }), __source: {
          fileName: _jsxFileName$24,
          lineNumber: 50
        },
        __self: _this$24
      },
      content
    )
  );
};
Item.defaultProps = {
  link: '',
  content: '',
  className: '',
  divider: false,
  active: false,
  badge: 0,
  onClick: lodash_noop
};

var Menu = function Menu(_ref3) {
  var className = _ref3.className,
      nav = _ref3.nav,
      contents = _ref3.contents,
      onClick = _ref3.onClick,
      props = objectWithoutProperties(_ref3, ['className', 'nav', 'contents', 'onClick']);

  var classes = classnames('menu', {
    'menu-nav': nav
  }, className);
  var ulProps = Object.keys(props).filter(function (p) {
    return p !== 'header';
  }).reduce(function (memo, p) {
    return Object.assign(memo, defineProperty({}, p, props[p]));
  }, {});
  return react.createElement(
    'ul',
    Object.assign({ className: classes }, ulProps, {
      __source: {
        fileName: _jsxFileName$24,
        lineNumber: 79
      },
      __self: _this$24
    }),
    contents.map(function (content, i) {
      var key = content.id || 'menu-item_' + i;
      return react.createElement(Item, Object.assign({ key: key }, content, { onClick: onClick, __source: {
          fileName: _jsxFileName$24,
          lineNumber: 83
        },
        __self: _this$24
      }));
    })
  );
};
Menu.defaultProps = {
  className: '',
  nav: false,
  contents: [],
  onClick: lodash_noop
};

var _jsxFileName$25 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Avatar.jsx';
var _this$25 = undefined;

var Presence = function Presence(_ref2) {
  var presence = _ref2.presence;
  return react.createElement('i', { className: classnames('avatar-presence', presence), __source: {
      fileName: _jsxFileName$25,
      lineNumber: 25
    },
    __self: _this$25
  });
};

var Avatar = function Avatar(_ref3) {
  var className = _ref3.className,
      xl = _ref3.xl,
      lg = _ref3.lg,
      sm = _ref3.sm,
      xs = _ref3.xs,
      initial = _ref3.initial,
      img = _ref3.img,
      icon = _ref3.icon,
      alt = _ref3.alt,
      presence = _ref3.presence,
      props = objectWithoutProperties(_ref3, ['className', 'xl', 'lg', 'sm', 'xs', 'initial', 'img', 'icon', 'alt', 'presence']);

  var classes = classnames('avatar', {
    'avatar-xl': xl,
    'avatar-lg': lg,
    'avatar-sm': sm,
    'avatar-xs': xs
  }, className);
  return react.createElement(
    'figure',
    Object.assign({ className: classes, 'data-initial': initial }, props, {
      __source: {
        fileName: _jsxFileName$25,
        lineNumber: 64
      },
      __self: _this$25
    }),
    img ? react.createElement('img', { src: img, alt: alt, __source: {
        fileName: _jsxFileName$25,
        lineNumber: 65
      },
      __self: _this$25
    }) : null,
    icon ? react.createElement(Avatar, { className: 'avatar-icon', initial: icon.initial, src: icon.src, alt: icon.alt, __source: {
        fileName: _jsxFileName$25,
        lineNumber: 66
      },
      __self: _this$25
    }) : null,
    presence ? react.createElement(Presence, { presence: presence, __source: {
        fileName: _jsxFileName$25,
        lineNumber: 67
      },
      __self: _this$25
    }) : null
  );
};

Avatar.defaultProps = {
  className: '',
  xl: false,
  lg: false,
  sm: false,
  xs: false,
  initial: '',
  img: '',
  icon: undefined,
  alt: '',
  presence: ''
};

var _jsxFileName$26 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Dropdown.jsx';
var _this$26 = undefined;

var Dropdown = function Dropdown(_ref) {
  var className = _ref.className,
      active = _ref.active,
      right = _ref.right,
      initialValue = _ref.initialValue,
      contents = _ref.contents,
      onClick = _ref.onClick,
      onMenuClick = _ref.onMenuClick,
      props = objectWithoutProperties(_ref, ['className', 'active', 'right', 'initialValue', 'contents', 'onClick', 'onMenuClick']);

  var classes = classnames('dropdown', {
    'dropdown-right': right,
    active: active
  }, className);
  return react.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$26,
        lineNumber: 36
      },
      __self: _this$26
    }),
    react.createElement(
      Button,
      { link: true, className: 'dropdown-toggle', tabIndex: '0', onClick: onClick, __source: {
          fileName: _jsxFileName$26,
          lineNumber: 37
        },
        __self: _this$26
      },
      initialValue,
      ' ',
      react.createElement(Icon, { caret: true, __source: {
          fileName: _jsxFileName$26,
          lineNumber: 38
        },
        __self: _this$26
      })
    ),
    react.createElement(Menu, { onClick: onMenuClick, contents: contents, __source: {
        fileName: _jsxFileName$26,
        lineNumber: 40
      },
      __self: _this$26
    })
  );
};
Dropdown.defaultProps = {
  className: '',
  active: false,
  right: false,
  initialValue: '',
  contents: [],
  onClick: lodash_noop
};

var _jsxFileName$27 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Breadcrumb.jsx';
var _this$27 = undefined;

var Item$1 = function Item(_ref) {
  var link = _ref.link,
      content = _ref.content;
  return react.createElement(
    'li',
    { className: 'breadcrumb-item', __source: {
        fileName: _jsxFileName$27,
        lineNumber: 9
      },
      __self: _this$27
    },
    react.createElement(
      'a',
      { href: link, __source: {
          fileName: _jsxFileName$27,
          lineNumber: 10
        },
        __self: _this$27
      },
      content
    )
  );
};
Item$1.defaultProps = {
  link: '#',
  content: ''
};

var Breadcrumb = function Breadcrumb(_ref2) {
  var items = _ref2.items;

  if (items.length === 0) {
    return null;
  }
  return react.createElement(
    'ul',
    { className: 'breadcrumb', __source: {
        fileName: _jsxFileName$27,
        lineNumber: 26
      },
      __self: _this$27
    },
    items.map(function (item, i) {
      var key = 'breadcrumb-' + i;
      return react.createElement(Item$1, Object.assign({ key: key }, item, {
        __source: {
          fileName: _jsxFileName$27,
          lineNumber: 29
        },
        __self: _this$27
      }));
    })
  );
};
Breadcrumb.defaultProps = {
  items: []
};

var _jsxFileName$28 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Panel.jsx';
var _this$28 = undefined;

var Panel = function Panel(_ref) {
  var header = _ref.header,
      nav = _ref.nav,
      content = _ref.content,
      footer = _ref.footer,
      headerClass = _ref.headerClass;

  var headerClasses = classnames('panel-header', headerClass);
  return react.createElement(
    'div',
    { className: 'panel', __source: {
        fileName: _jsxFileName$28,
        lineNumber: 15
      },
      __self: _this$28
    },
    header ? react.createElement(
      'div',
      { className: headerClasses, __source: {
          fileName: _jsxFileName$28,
          lineNumber: 16
        },
        __self: _this$28
      },
      typeof header === 'string' ? react.createElement(
        'div',
        { className: 'panel-title', __source: {
            fileName: _jsxFileName$28,
            lineNumber: 17
          },
          __self: _this$28
        },
        header
      ) : header
    ) : null,
    nav ? react.createElement(
      'div',
      { className: 'panel-nav', __source: {
          fileName: _jsxFileName$28,
          lineNumber: 19
        },
        __self: _this$28
      },
      nav
    ) : null,
    content ? react.createElement(
      'div',
      { className: 'panel-body', __source: {
          fileName: _jsxFileName$28,
          lineNumber: 22
        },
        __self: _this$28
      },
      content
    ) : null,
    footer ? react.createElement(
      'div',
      { className: 'panel-footer', __source: {
          fileName: _jsxFileName$28,
          lineNumber: 25
        },
        __self: _this$28
      },
      footer
    ) : null
  );
};
Panel.defaultProps = {
  header: null,
  nav: null,
  content: null,
  footer: null,
  headerClass: ''
};

var _jsxFileName$30 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Chip.jsx';
var _this$29 = undefined;

var Chip = function Chip(_ref) {
  var clear = _ref.clear,
      icon = _ref.icon,
      avatar = _ref.avatar,
      content = _ref.content,
      className = _ref.className,
      onClearClick = _ref.onClearClick,
      props = objectWithoutProperties(_ref, ['clear', 'icon', 'avatar', 'content', 'className', 'onClearClick']);

  var classes = classnames('chip', className);
  return react.createElement(
    'span',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$30,
        lineNumber: 22
      },
      __self: _this$29
    }),
    icon,
    avatar ? react.createElement(Avatar, { sm: true, initial: avatar.initial, img: avatar.img, alt: avatar.alt, __source: {
        fileName: _jsxFileName$30,
        lineNumber: 24
      },
      __self: _this$29
    }) : null,
    content,
    clear ? react.createElement(Button, { clear: true, onClick: onClearClick, __source: {
        fileName: _jsxFileName$30,
        lineNumber: 26
      },
      __self: _this$29
    }) : null
  );
};
Chip.defaultProps = {
  className: '',
  clear: false,
  icon: null,
  avatar: null,
  content: '',
  onClearClick: lodash_noop
};

var _jsxFileName$31 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Tile.jsx';
var _this$30 = undefined;

var Tile = function Tile(_ref) {
  var compact = _ref.compact,
      title = _ref.title,
      subtitle = _ref.subtitle,
      content = _ref.content,
      icon = _ref.icon,
      action = _ref.action;

  var classes = classnames('tile', { 'tile-centered': compact });
  return react.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName$31,
        lineNumber: 16
      },
      __self: _this$30
    },
    icon ? react.createElement(
      'div',
      { className: 'tile-icon', __source: {
          fileName: _jsxFileName$31,
          lineNumber: 17
        },
        __self: _this$30
      },
      icon
    ) : null,
    react.createElement(
      'div',
      { className: 'tile-content', __source: {
          fileName: _jsxFileName$31,
          lineNumber: 20
        },
        __self: _this$30
      },
      title ? react.createElement(
        'p',
        { className: 'tile-title', __source: {
            fileName: _jsxFileName$31,
            lineNumber: 21
          },
          __self: _this$30
        },
        title
      ) : null,
      subtitle ? react.createElement(
        'p',
        { className: 'tile-subtitle text-gray', __source: {
            fileName: _jsxFileName$31,
            lineNumber: 22
          },
          __self: _this$30
        },
        subtitle
      ) : null,
      content
    ),
    action ? react.createElement(
      'div',
      { className: 'tile-action', __source: {
          fileName: _jsxFileName$31,
          lineNumber: 25
        },
        __self: _this$30
      },
      action
    ) : null
  );
};
Tile.defaultProps = {
  compact: false,
  title: '',
  subtitle: '',
  content: '',
  icon: null,
  action: null
};

var _jsxFileName$29 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Autocomplete.jsx';
var _this2 = undefined;

var delimiter = '______';
function mark(target, search) {
  var _this = this;

  if (!search) {
    return target;
  }
  var regex = new RegExp('(' + search + ')', 'ig');
  return target.replace(regex, delimiter + '$1' + delimiter).replace(new RegExp('^' + delimiter + '|' + delimiter + '$', 'g'), '').split(delimiter).filter(function (row) {
    return row !== '';
  }).map(function (row, i) {
    if (regex.test(row)) {
      var key = 'mark-' + i;
      return react.createElement(
        'mark',
        { key: key, __source: {
            fileName: _jsxFileName$29,
            lineNumber: 23
          },
          __self: _this
        },
        row
      );
    }
    return row;
  });
}
function filter(word, key) {
  var regex = new RegExp(word, 'ig');
  return function search(value) {
    if (word === '') {
      return true;
    }
    return regex.test(value[key]);
  };
}

var Autocomplete = function Autocomplete(_ref) {
  var placeholder = _ref.placeholder,
      active = _ref.active,
      selected = _ref.selected,
      suggests = _ref.suggests,
      input = _ref.input,
      loading = _ref.loading,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onClearClick = _ref.onClearClick,
      onSelected = _ref.onSelected;

  var classes = classnames('form-autocomplete-input form-input', {
    'is-focused': active
  });
  var inputNode = react.createElement('input', {
    className: 'form-input',
    type: 'text',
    placeholder: placeholder,
    value: input,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName$29,
      lineNumber: 73
    },
    __self: _this2
  });
  return react.createElement(
    'div',
    {
      className: 'form-autocomplete',
      onFocus: onFocus,
      onBlur: onBlur,
      __source: {
        fileName: _jsxFileName$29,
        lineNumber: 82
      },
      __self: _this2
    },
    react.createElement(
      'div',
      { className: classes, __source: {
          fileName: _jsxFileName$29,
          lineNumber: 87
        },
        __self: _this2
      },
      selected.map(function (_ref2) {
        var id = _ref2.id,
            name = _ref2.name,
            img = _ref2.img,
            initial = _ref2.initial;
        return react.createElement(Chip, {
          key: id,
          avatar: { initial: initial, img: img, alt: name },
          content: name,
          clear: active,
          onClearClick: function (_onClearClick) {
            function onClearClick(_x) {
              return _onClearClick.apply(this, arguments);
            }

            onClearClick.toString = function () {
              return _onClearClick.toString();
            };

            return onClearClick;
          }(function (e) {
            return onClearClick(e, id);
          }),
          __source: {
            fileName: _jsxFileName$29,
            lineNumber: 89
          },
          __self: _this2
        });
      }),
      loading ? react.createElement(
        'div',
        { className: 'has-icon-left', __source: {
            fileName: _jsxFileName$29,
            lineNumber: 97
          },
          __self: _this2
        },
        inputNode,
        react.createElement(Icon, { form: true, loading: true, __source: {
            fileName: _jsxFileName$29,
            lineNumber: 97
          },
          __self: _this2
        })
      ) : inputNode
    ),
    react.createElement(
      'ul',
      { className: 'menu', style: { position: active ? 'static' : 'absolute' }, __source: {
          fileName: _jsxFileName$29,
          lineNumber: 99
        },
        __self: _this2
      },
      suggests.filter(filter(input, 'name')).map(function (_ref3) {
        var id = _ref3.id,
            name = _ref3.name,
            img = _ref3.img,
            initial = _ref3.initial;
        return react.createElement(
          'li',
          { key: id, className: 'menu-item', __source: {
              fileName: _jsxFileName$29,
              lineNumber: 101
            },
            __self: _this2
          },
          react.createElement(
            Button,
            { href: '#', onClick: function onClick(e) {
                return onSelected(e, id);
              }, __source: {
                fileName: _jsxFileName$29,
                lineNumber: 102
              },
              __self: _this2
            },
            react.createElement(Tile, {
              compact: true,
              content: mark(name, input),
              icon: react.createElement(Avatar, { sm: true, initial: initial, img: img, alt: name, __source: {
                  fileName: _jsxFileName$29,
                  lineNumber: 106
                },
                __self: _this2
              }),
              __source: {
                fileName: _jsxFileName$29,
                lineNumber: 103
              },
              __self: _this2
            })
          )
        );
      })
    )
  );
};
Autocomplete.defaultProps = {
  placeholder: 'typing here',
  active: false,
  selected: [],
  suggests: [],
  input: '',
  loading: false
};

var _jsxFileName$32 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Toast.jsx';
var _this$31 = undefined;

var Toast = function Toast(_ref) {
  var title = _ref.title,
      content = _ref.content,
      onClearClick = _ref.onClearClick,
      primary = _ref.primary,
      success = _ref.success,
      warning = _ref.warning,
      error = _ref.error;

  var classes = classnames('toast', {
    'toast-primary': primary,
    'toast-success': success,
    'toast-warning': warning,
    'toast-error': error
  });
  return react.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName$32,
        lineNumber: 24
      },
      __self: _this$31
    },
    onClearClick ? react.createElement(Button, { clear: true, className: 'float-right', onClick: onClearClick, __source: {
        fileName: _jsxFileName$32,
        lineNumber: 25
      },
      __self: _this$31
    }) : null,
    title ? react.createElement(
      'h5',
      {
        __source: {
          fileName: _jsxFileName$32,
          lineNumber: 26
        },
        __self: _this$31
      },
      title
    ) : null,
    content
  );
};
Toast.defaultProps = {
  title: '',
  onClearClick: undefined,
  primary: false,
  success: false,
  warning: false,
  error: false
};

var _jsxFileName$33 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Modal.jsx';
var _this$32 = undefined;

var Modal = function Modal(_ref) {
  var active = _ref.active,
      title = _ref.title,
      content = _ref.content,
      footer = _ref.footer,
      small = _ref.small,
      large = _ref.large,
      onClearClick = _ref.onClearClick,
      props = objectWithoutProperties(_ref, ['active', 'title', 'content', 'footer', 'small', 'large', 'onClearClick']);

  var classes = classnames('modal', {
    active: active,
    'modal-sm': small,
    'modal-lg': large
  });
  return react.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$33,
        lineNumber: 33
      },
      __self: _this$32
    }),
    react.createElement('div', { className: 'modal-overlay', __source: {
        fileName: _jsxFileName$33,
        lineNumber: 34
      },
      __self: _this$32
    }),
    react.createElement(
      'div',
      { className: 'modal-container', __source: {
          fileName: _jsxFileName$33,
          lineNumber: 35
        },
        __self: _this$32
      },
      react.createElement(
        'div',
        { className: 'modal-header', __source: {
            fileName: _jsxFileName$33,
            lineNumber: 36
          },
          __self: _this$32
        },
        react.createElement(Button, { clear: true, className: 'float-right', onClick: onClearClick, __source: {
            fileName: _jsxFileName$33,
            lineNumber: 37
          },
          __self: _this$32
        }),
        title ? react.createElement(
          'div',
          { className: 'modal-title h5', __source: {
              fileName: _jsxFileName$33,
              lineNumber: 38
            },
            __self: _this$32
          },
          title
        ) : null
      ),
      content ? react.createElement(
        'div',
        { className: 'modal-body', __source: {
            fileName: _jsxFileName$33,
            lineNumber: 40
          },
          __self: _this$32
        },
        react.createElement(
          'div',
          { className: 'content', __source: {
              fileName: _jsxFileName$33,
              lineNumber: 41
            },
            __self: _this$32
          },
          content
        )
      ) : null,
      footer ? react.createElement(
        'div',
        { className: 'modal-footer', __source: {
            fileName: _jsxFileName$33,
            lineNumber: 45
          },
          __self: _this$32
        },
        footer
      ) : null
    )
  );
};
Modal.defaultProps = {
  active: false,
  title: '',
  content: null,
  footer: null,
  small: false,
  large: false,
  onClearClick: lodash_noop
};

var _jsxFileName$34 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Bar.jsx';
var _this$33 = undefined;

var Item$2 = function Item(_ref) {
  var small = _ref.small,
      tooltip = _ref.tooltip,
      content = _ref.content,
      props = objectWithoutProperties(_ref, ['small', 'tooltip', 'content']);

  var classes = classnames('bar-item', { tooltip: tooltip });
  return react.createElement(
    'div',
    Object.assign({
      className: classes,
      'data-tooltip': tooltip
    }, props, {
      __source: {
        fileName: _jsxFileName$34,
        lineNumber: 15
      },
      __self: _this$33
    }),
    small ? null : content
  );
};
Item$2.defaultProps = {
  small: false,
  tooltip: '',
  content: ''
};

var Bar = function Bar(_ref2) {
  var className = _ref2.className,
      small = _ref2.small,
      slider = _ref2.slider,
      items = _ref2.items;

  var classes = classnames('bar', {
    'bar-sm': small,
    'bar-slider': slider
  }, className);
  return react.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName$34,
        lineNumber: 46
      },
      __self: _this$33
    },
    items.map(function (item, i) {
      var key = 'bar-item-' + i;
      if (slider) {
        var _value = item.value + '%';
        Object.assign(item, {
          role: 'progressbar',
          style: { width: _value },
          content: react.createElement(Button, { className: 'bar-slider-btn tooltip', 'data-tooltip': _value, __source: {
              fileName: _jsxFileName$34,
              lineNumber: 54
            },
            __self: _this$33
          })
        });
      }
      return react.createElement(Item$2, Object.assign({ key: key, small: small }, item, {
        __source: {
          fileName: _jsxFileName$34,
          lineNumber: 58
        },
        __self: _this$33
      }));
    })
  );
};
Bar.defaultProps = {
  className: '',
  small: false,
  slider: false,
  items: []
};

var _jsxFileName$35 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Popover.jsx';
var _this$34 = undefined;

var Popover = function Popover(_ref) {
  var target = _ref.target,
      children = _ref.children,
      right = _ref.right,
      left = _ref.left,
      bottom = _ref.bottom;

  var classes = classnames('popover', {
    'popover-right': right,
    'popover-left': left,
    'popover-bottom': bottom
  });
  return react.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName$35,
        lineNumber: 19
      },
      __self: _this$34
    },
    target,
    react.createElement(
      'div',
      { className: 'popover-container', __source: {
          fileName: _jsxFileName$35,
          lineNumber: 21
        },
        __self: _this$34
      },
      children
    )
  );
};
Popover.defaultProps = {
  right: false,
  left: false,
  bottom: false
};

var _jsxFileName$36 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Card.jsx';
var _this$35 = undefined;

var Item$3 = function Item(_ref) {
  var type = _ref.type,
      content = _ref.content;

  switch (type) {
    case 'image':
      return react.createElement(
        'div',
        { className: 'card-image', __source: {
            fileName: _jsxFileName$36,
            lineNumber: 17
          },
          __self: _this$35
        },
        content
      );
    case 'body':
      return react.createElement(
        'div',
        { className: 'card-body', __source: {
            fileName: _jsxFileName$36,
            lineNumber: 23
          },
          __self: _this$35
        },
        content
      );
    case 'footer':
    default:
      return react.createElement(
        'div',
        { className: 'card-footer', __source: {
            fileName: _jsxFileName$36,
            lineNumber: 30
          },
          __self: _this$35
        },
        content
      );
  }
};
Item$3.defaultProps = {
  type: '',
  content: null
};

var Card = function Card(_ref2) {
  var items = _ref2.items;
  return react.createElement(
    'div',
    { className: 'card', __source: {
        fileName: _jsxFileName$36,
        lineNumber: 45
      },
      __self: _this$35
    },
    items.map(function (item, i) {
      var key = 'card-' + i;
      if (item.type === 'header') {
        return react.createElement(
          'div',
          { key: key, className: 'card-header', __source: {
              fileName: _jsxFileName$36,
              lineNumber: 50
            },
            __self: _this$35
          },
          item.content.button,
          item.content.title ? react.createElement(
            'div',
            { className: 'card-title h5', __source: {
                fileName: _jsxFileName$36,
                lineNumber: 52
              },
              __self: _this$35
            },
            item.content.title
          ) : null,
          item.content.subtitle ? react.createElement(
            'div',
            { className: 'card-subtitle text-gray', __source: {
                fileName: _jsxFileName$36,
                lineNumber: 53
              },
              __self: _this$35
            },
            item.content.subtitle
          ) : null
        );
      }
      return react.createElement(Item$3, Object.assign({ key: key }, item, {
        __source: {
          fileName: _jsxFileName$36,
          lineNumber: 58
        },
        __self: _this$35
      }));
    })
  );
};
Card.defaultProps = {
  items: []
};

var _jsxFileName$37 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Pagination.jsx';
var _this$36 = undefined;

function calculateStartAndEnd(current, total, each) {
  if (total <= 2 * each + 5) {
    return { start: 1, end: total };
  } else if (current <= each + 3) {
    return { start: 1, end: 2 * each + 3 };
  } else if (current >= total - (each + 2)) {
    return { start: total - 2 * each - 2, end: total };
  }
  return { start: current - each, end: current + each };
}

function pages(current, total) {
  var each = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '...';

  var page = calculateStartAndEnd(current, total, each);
  var result = [];
  if (page.start > 1) {
    result.push({ label: '1', value: 1 });
  }
  if (page.start > 2) {
    result.push({ label: skip, value: 0 });
  }
  for (var i = page.start; i <= page.end; i += 1) {
    result.push({ label: '' + i, value: i });
  }
  if (page.end < total - 1) {
    result.push({ label: skip, value: 0 });
  }
  if (page.end < total) {
    result.push({ label: '' + total, value: total });
  }
  return result;
}

var Item$4 = function Item(_ref) {
  var current = _ref.current,
      value = _ref.value,
      label = _ref.label,
      disabled = _ref.disabled,
      onClick = _ref.onClick;

  var classes = classnames('page-item', {
    disabled: disabled,
    active: value === current
  });
  var linkProp = {};
  if (disabled) {
    linkProp.tabIndex = -1;
  }
  return react.createElement(
    'li',
    { className: classes, __source: {
        fileName: _jsxFileName$37,
        lineNumber: 59
      },
      __self: _this$36
    },
    react.createElement(
      'a',
      Object.assign({ href: '#' }, linkProp, { onClick: function (_onClick) {
          function onClick(_x3) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, value);
        }), __source: {
          fileName: _jsxFileName$37,
          lineNumber: 60
        },
        __self: _this$36
      }),
      label
    )
  );
};
Item$4.defaultProps = {
  value: 1,
  disabled: false,
  onClick: lodash_noop
};

var Title = function Title(_ref2) {
  var title = _ref2.title,
      subtitle = _ref2.subtitle,
      current = _ref2.current,
      value = _ref2.value,
      onClick = _ref2.onClick;

  var classes = classnames('page-item', {
    'page-prev': current > value,
    'page-next': current < value
  });
  return react.createElement(
    'li',
    { className: classes, __source: {
        fileName: _jsxFileName$37,
        lineNumber: 83
      },
      __self: _this$36
    },
    react.createElement(
      'a',
      { href: '#', onClick: function (_onClick2) {
          function onClick(_x4) {
            return _onClick2.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick2.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, value);
        }), __source: {
          fileName: _jsxFileName$37,
          lineNumber: 84
        },
        __self: _this$36
      },
      react.createElement(
        'div',
        { className: 'page-item-subtitle', __source: {
            fileName: _jsxFileName$37,
            lineNumber: 85
          },
          __self: _this$36
        },
        subtitle
      ),
      react.createElement(
        'div',
        { className: 'page-item-title h5', __source: {
            fileName: _jsxFileName$37,
            lineNumber: 86
          },
          __self: _this$36
        },
        title
      )
    )
  );
};

var Pagination = function Pagination(_ref3) {
  var label = _ref3.label,
      current = _ref3.current,
      total = _ref3.total,
      each = _ref3.each,
      title = _ref3.title,
      onClick = _ref3.onClick;

  if (title) {
    return react.createElement(
      'ul',
      { className: 'pagination', __source: {
          fileName: _jsxFileName$37,
          lineNumber: 110
        },
        __self: _this$36
      },
      react.createElement(Title, {
        title: title.prev.title,
        subtitle: title.prev.subtitle,
        current: current,
        value: current - 1,
        onClick: onClick,
        __source: {
          fileName: _jsxFileName$37,
          lineNumber: 111
        },
        __self: _this$36
      }),
      react.createElement(Title, {
        title: title.next.title,
        subtitle: title.next.subtitle,
        current: current,
        value: current + 1,
        onClick: onClick,
        __source: {
          fileName: _jsxFileName$37,
          lineNumber: 118
        },
        __self: _this$36
      })
    );
  }
  var list = pages(current, total, each, label.skip);
  return react.createElement(
    'ul',
    { className: 'pagination', __source: {
        fileName: _jsxFileName$37,
        lineNumber: 130
      },
      __self: _this$36
    },
    react.createElement(Item$4, {
      current: current,
      label: label.previous,
      disabled: current === 1,
      value: current - 1,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName$37,
        lineNumber: 131
      },
      __self: _this$36
    }),
    list.map(function (row, i) {
      var key = 'paging-' + i;
      return react.createElement(Item$4, Object.assign({ key: key }, row, { current: current, disabled: !row.value, onClick: onClick, __source: {
          fileName: _jsxFileName$37,
          lineNumber: 141
        },
        __self: _this$36
      }));
    }),
    react.createElement(Item$4, {
      current: current,
      label: label.next,
      disabled: current === total,
      value: current + 1,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName$37,
        lineNumber: 144
      },
      __self: _this$36
    })
  );
};
Pagination.defaultProps = {
  label: { previous: 'Previous', next: 'Next', skip: '...' },
  total: 1,
  current: 1,
  each: 1,
  title: undefined,
  onClick: lodash_noop
};

var _jsxFileName$38 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Nav.jsx';
var _this$37 = undefined;

var Item$5 = function Item(_ref) {
  var id = _ref.id,
      name = _ref.name,
      items = _ref.items,
      active = _ref.active,
      onClick = _ref.onClick;
  return react.createElement(
    'li',
    { className: classnames('nav-item', { active: active }), __source: {
        fileName: _jsxFileName$38,
        lineNumber: 16
      },
      __self: _this$37
    },
    react.createElement(
      Button,
      {
        href: '#',
        onClick: function (_onClick) {
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, id);
        }),
        __source: {
          fileName: _jsxFileName$38,
          lineNumber: 17
        },
        __self: _this$37
      },
      name
    ),
    items && items.length ? react.createElement(Nav$1, { items: items, onClick: onClick, __source: {
        fileName: _jsxFileName$38,
        lineNumber: 21
      },
      __self: _this$37
    }) : null
  );
};
Item$5.defaultProps = {
  items: [],
  active: false,
  onClick: lodash_noop
};

var Nav$1 = function Nav(_ref2) {
  var items = _ref2.items,
      active = _ref2.active,
      onClick = _ref2.onClick;
  return react.createElement(
    'ul',
    { className: 'nav', __source: {
        fileName: _jsxFileName$38,
        lineNumber: 36
      },
      __self: _this$37
    },
    items.map(function (item) {
      return react.createElement(Item$5, Object.assign({ key: item.id }, item, { active: active === item.id, onClick: onClick, __source: {
          fileName: _jsxFileName$38,
          lineNumber: 38
        },
        __self: _this$37
      }));
    })
  );
};
Nav$1.defaultProps = {
  items: [],
  active: '',
  onClick: lodash_noop
};

var _jsxFileName$39 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Step.jsx';
var _this$38 = undefined;

var Step = function Step(_ref) {
  var items = _ref.items,
      active = _ref.active;

  if (!items.length) {
    return null;
  }
  return react.createElement(
    'ul',
    { className: 'step', __source: {
        fileName: _jsxFileName$39,
        lineNumber: 19
      },
      __self: _this$38
    },
    items.map(function (_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          tooltip = _ref2.tooltip;

      var key = 'step-' + id;
      return react.createElement(
        'li',
        { key: key, className: classnames('step-item', { active: id === active }), __source: {
            fileName: _jsxFileName$39,
            lineNumber: 23
          },
          __self: _this$38
        },
        react.createElement(
          'a',
          { href: '#', className: 'tooltip', 'data-tooltip': tooltip, __source: {
              fileName: _jsxFileName$39,
              lineNumber: 24
            },
            __self: _this$38
          },
          name
        )
      );
    })
  );
};
Step.defaultProps = {
  items: [],
  active: ''
};

var _jsxFileName$40 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Empty.jsx';
var _this$39 = undefined;

var Title$1 = function Title(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classnames('empty-title', 'h5', className);
  return react.createElement(
    'p',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$40,
        lineNumber: 14
      },
      __self: _this$39
    }),
    children
  );
};
Title$1.defaultProps = {
  className: ''
};

var Subtitle = function Subtitle(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = objectWithoutProperties(_ref2, ['children', 'className']);

  var classes = classnames('empty-subtitle', className);
  return react.createElement(
    'p',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$40,
        lineNumber: 30
      },
      __self: _this$39
    }),
    children
  );
};
Subtitle.defaultProps = {
  children: null,
  className: ''
};

var Empty = function Empty(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      icon = _ref3.icon,
      title = _ref3.title,
      subtitle = _ref3.subtitle,
      props = objectWithoutProperties(_ref3, ['children', 'className', 'icon', 'title', 'subtitle']);

  var classes = classnames('empty', className);
  return react.createElement(
    'div',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$40,
        lineNumber: 50
      },
      __self: _this$39
    }),
    icon ? react.createElement(Icon, { className: 'icon-' + icon, style: { fontSize: '4rem' }, __source: {
        fileName: _jsxFileName$40,
        lineNumber: 51
      },
      __self: _this$39
    }) : null,
    title ? react.createElement(
      Title$1,
      {
        __source: {
          fileName: _jsxFileName$40,
          lineNumber: 52
        },
        __self: _this$39
      },
      title
    ) : null,
    subtitle ? react.createElement(
      Subtitle,
      {
        __source: {
          fileName: _jsxFileName$40,
          lineNumber: 53
        },
        __self: _this$39
      },
      subtitle
    ) : null,
    children
  );
};
Empty.defaultProps = {
  children: null,
  className: '',
  icon: '',
  title: null,
  subtitle: null
};

var _jsxFileName$41 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Accordion.jsx';
var _this$40 = undefined;

var Item$6 = function Item(_ref) {
  var contents = _ref.contents,
      className = _ref.className,
      exclusive = _ref.exclusive,
      useIcon = _ref.useIcon,
      header = _ref.header;

  var classes = classnames('accordion-item', className);
  var id = uniqueId('accordion-item');
  var type = exclusive ? 'radio' : 'checkbox';
  var inputProps = { id: id, type: type, name: 'accordion-' + type };
  var icon = useIcon ? react.createElement(Icon, { className: position({ marginRight: true }), arrowRight: true, __source: {
      fileName: _jsxFileName$41,
      lineNumber: 24
    },
    __self: _this$40
  }) : null;
  return react.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName$41,
        lineNumber: 26
      },
      __self: _this$40
    },
    react.createElement('input', Object.assign({}, inputProps, { hidden: true, __source: {
        fileName: _jsxFileName$41,
        lineNumber: 27
      },
      __self: _this$40
    })),
    react.createElement(
      'label',
      { className: 'accordion-header', htmlFor: id, __source: {
          fileName: _jsxFileName$41,
          lineNumber: 28
        },
        __self: _this$40
      },
      icon,
      header
    ),
    react.createElement(
      'div',
      { className: 'accordion-body', __source: {
          fileName: _jsxFileName$41,
          lineNumber: 32
        },
        __self: _this$40
      },
      react.createElement(Menu, { nav: true, contents: contents, __source: {
          fileName: _jsxFileName$41,
          lineNumber: 33
        },
        __self: _this$40
      })
    )
  );
};
Item$6.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false
};

var Accordion = function Accordion(_ref2) {
  var menus = _ref2.menus,
      className = _ref2.className,
      exclusive = _ref2.exclusive,
      useIcon = _ref2.useIcon;

  var classes = classnames('accordion', className);
  return react.createElement(
    'div',
    { className: classes, __source: {
        fileName: _jsxFileName$41,
        lineNumber: 53
      },
      __self: _this$40
    },
    menus.map(function (_ref3, i) {
      var header = _ref3.header,
          contents = _ref3.contents,
          menu = objectWithoutProperties(_ref3, ['header', 'contents']);

      var key = 'accordion_' + i;
      return react.createElement(Item$6, Object.assign({
        key: key,
        exclusive: exclusive,
        useIcon: useIcon,
        header: header,
        contents: contents
      }, menu, {
        __source: {
          fileName: _jsxFileName$41,
          lineNumber: 57
        },
        __self: _this$40
      }));
    })
  );
};
Accordion.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false
};

var _jsxFileName$42 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/components/Tab.jsx';
var _this$41 = undefined;

var Tab = function Tab(_ref) {
  var items = _ref.items,
      active = _ref.active,
      onClick = _ref.onClick,
      action = _ref.action;

  if (!items.length) {
    return null;
  }
  return react.createElement(
    'ul',
    { className: 'tab tab-block', __source: {
        fileName: _jsxFileName$42,
        lineNumber: 27
      },
      __self: _this$41
    },
    items.map(function (_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          badge = _ref2.badge;

      var key = 'tab-' + id;
      var linkProp = {
        onClick: function (_onClick) {
          function onClick(_x) {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function (e) {
          return onClick(e, id);
        })
      };
      if (badge) {
        linkProp.className = 'badge';
        linkProp['data-badge'] = badge;
      }
      return react.createElement(
        'li',
        { key: key, className: classnames('tab-item', { active: id === active }), __source: {
            fileName: _jsxFileName$42,
            lineNumber: 38
          },
          __self: _this$41
        },
        react.createElement(
          'a',
          Object.assign({ href: '#' }, linkProp, {
            __source: {
              fileName: _jsxFileName$42,
              lineNumber: 39
            },
            __self: _this$41
          }),
          name
        )
      );
    }),
    action ? react.createElement(
      'li',
      { className: 'tab-item tab-action', __source: {
          fileName: _jsxFileName$42,
          lineNumber: 43
        },
        __self: _this$41
      },
      action
    ) : null
  );
};
Tab.defaultProps = {
  items: [],
  active: '',
  onClick: lodash_noop,
  action: null
};

var _jsxFileName$43 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/Table.jsx';
var _this$42 = undefined;

var Table = function Table(_ref) {
  var header = _ref.header,
      contents = _ref.contents,
      className = _ref.className,
      striped = _ref.striped,
      hover = _ref.hover,
      props = objectWithoutProperties(_ref, ['header', 'contents', 'className', 'striped', 'hover']);

  var classes = classnames('table', {
    'table-striped': striped,
    'table-hover': hover
  }, className);
  return react.createElement(
    'table',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$43,
        lineNumber: 22
      },
      __self: _this$42
    }),
    react.createElement(
      'thead',
      {
        __source: {
          fileName: _jsxFileName$43,
          lineNumber: 23
        },
        __self: _this$42
      },
      react.createElement(
        'tr',
        {
          __source: {
            fileName: _jsxFileName$43,
            lineNumber: 24
          },
          __self: _this$42
        },
        header.map(function (row, i) {
          var key = 'header-' + i;
          return react.createElement(
            'th',
            { key: key, __source: {
                fileName: _jsxFileName$43,
                lineNumber: 28
              },
              __self: _this$42
            },
            row
          );
        })
      )
    ),
    react.createElement(
      'tbody',
      {
        __source: {
          fileName: _jsxFileName$43,
          lineNumber: 33
        },
        __self: _this$42
      },
      contents.map(function (content, i) {
        var rowKey = 'row-' + i;
        return react.createElement(
          'tr',
          { key: rowKey, __source: {
              fileName: _jsxFileName$43,
              lineNumber: 37
            },
            __self: _this$42
          },
          content.map(function (column, j) {
            var columnKey = 'column-' + j;
            return react.createElement(
              'td',
              { key: columnKey, __source: {
                  fileName: _jsxFileName$43,
                  lineNumber: 41
                },
                __self: _this$42
              },
              column
            );
          })
        );
      })
    )
  );
};
Table.defaultProps = {
  className: '',
  striped: false,
  hover: false
};

var _jsxFileName$44 = '/Users/saekitoshiaki/Workspace/git/react-spectre.css/src/elements/Label.jsx';
var _this$43 = undefined;

var Label$1 = function Label(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rounded = _ref.rounded,
      primary = _ref.primary,
      secondary = _ref.secondary,
      success = _ref.success,
      warning = _ref.warning,
      error = _ref.error,
      props = objectWithoutProperties(_ref, ['children', 'className', 'rounded', 'primary', 'secondary', 'success', 'warning', 'error']);

  var classes = classnames('label', {
    'label-rounded': rounded,
    'label-primary': primary,
    'label-secondary': secondary,
    'label-success': success,
    'label-warning': warning,
    'label-error': error
  }, className);
  return react.createElement(
    'span',
    Object.assign({ className: classes }, props, {
      __source: {
        fileName: _jsxFileName$44,
        lineNumber: 35
      },
      __self: _this$43
    }),
    children
  );
};
Label$1.defaultProps = {
  className: '',
  rounded: false,
  primary: false,
  secondary: false,
  success: false,
  warning: false,
  error: false
};

exports.ComparisonSlider = ComparisonSlider;
exports.Filter = Filter;
exports.Calendar = Calendar;
exports.Timeline = Timeline;
exports.Carousel = Carousel;
exports.OffCanvas = OffCanvas;
exports.Progress = Progress;
exports.Slider = Slider;
exports.Meter = Meter;
exports.Parallax = Parallax;
exports.Switch = Switch;
exports.Form = Form;
exports.Input = Input;
exports.Select = Select;
exports.Checkbox = Checkbox;
exports.uniqueId = uniqueId;
exports.Radio = Radio;
exports.Column = Column;
exports.Container = Container;
exports.Navbar = Navbar;
exports.Columns = Columns;
exports.display = display;
exports.color = color;
exports.cursor = cursor;
exports.Divider = Divider;
exports.shape = shape;
exports.text = text$1;
exports.position = position;
exports.Menu = Menu;
exports.Avatar = Avatar;
exports.Dropdown = Dropdown;
exports.Breadcrumb = Breadcrumb;
exports.Panel = Panel;
exports.Autocomplete = Autocomplete;
exports.Toast = Toast;
exports.Modal = Modal;
exports.Bar = Bar;
exports.Tile = Tile;
exports.Popover = Popover;
exports.Card = Card;
exports.Pagination = Pagination;
exports.Nav = Nav$1;
exports.Step = Step;
exports.Chip = Chip;
exports.Empty = Empty;
exports.Accordion = Accordion;
exports.Tab = Tab;
exports.Button = Button;
exports.Table = Table;
exports.Loading = Loading;
exports.Icon = Icon;
exports.Label = Label$1;
exports.Column1 = Column1;
exports.Column2 = Column2;
exports.Column3 = Column3;
exports.Column4 = Column4;
exports.Column5 = Column5;
exports.Column6 = Column6;
exports.Column7 = Column7;
exports.Column8 = Column8;
exports.Column9 = Column9;
exports.Column10 = Column10;
exports.Column11 = Column11;
exports.Column12 = Column12;

return exports;

}({}));
