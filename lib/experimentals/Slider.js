var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';

import Input from '../elements/form/Input';var babelPluginFlowReactPropTypes_proptype_SliderProps = { min: require('prop-types').number.isRequired, max: require('prop-types').number.isRequired, value: require('prop-types').number.isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_SliderProps', { value: babelPluginFlowReactPropTypes_proptype_SliderProps, configurable: true, enumerable: true });






var Slider = function Slider(_ref) {var min = _ref.min,max = _ref.max,value = _ref.value,props = _objectWithoutProperties(_ref, ['min', 'max', 'value']);return (
    React.createElement(Input, _extends({ slider: true, min: min, max: max, defaultValue: value, 'data-tooltip': value }, props)));};Slider.propTypes = babelPluginFlowReactPropTypes_proptype_SliderProps;

Slider.defaultProps = {};

export default Slider;