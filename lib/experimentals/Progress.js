var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';var babelPluginFlowReactPropTypes_proptype_ProgressProps = { max: require("prop-types").number.isRequired };if (typeof exports !== "undefined") Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_ProgressProps", { value: babelPluginFlowReactPropTypes_proptype_ProgressProps, configurable: true, enumerable: true });




var Progress = function Progress(_ref) {var max = _ref.max,props = _objectWithoutProperties(_ref, ["max"]);return (
    React.createElement("progress", _extends({ className: "progress", max: max }, props)));};Progress.propTypes = babelPluginFlowReactPropTypes_proptype_ProgressProps;

Progress.defaultProps = {};

export default Progress;