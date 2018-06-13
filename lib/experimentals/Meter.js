var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';var bpfrpt_proptype_MeterProps = { value: PropTypes.number.isRequired, optimum: PropTypes.number, min: PropTypes.number, max: PropTypes.number, low: PropTypes.number, high: PropTypes.number };









var Meter = function Meter(_ref) {var value = _ref.value,props = _objectWithoutProperties(_ref, ["value"]);return (
    React.createElement("meter", _extends({ className: "meter", value: value }, props)));};Meter.propTypes = bpfrpt_proptype_MeterProps;

Meter.defaultProps = {
  min: 0,
  max: 100 };


export default Meter;import PropTypes from "prop-types";export { bpfrpt_proptype_MeterProps };