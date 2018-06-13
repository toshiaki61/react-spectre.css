var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';var bpfrpt_proptype_ProgressProps = { max: PropTypes.number };




var Progress = function Progress(_ref) {var max = _ref.max,props = _objectWithoutProperties(_ref, ["max"]);return (
    React.createElement("progress", _extends({ className: "progress", max: max }, props)));};Progress.propTypes = bpfrpt_proptype_ProgressProps;

Progress.defaultProps = { max: 100 };

export default Progress;import PropTypes from "prop-types";export { bpfrpt_proptype_ProgressProps };