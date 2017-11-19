
import * as React from 'react';var babelPluginFlowReactPropTypes_proptype_MeterProps = { value: require("prop-types").number.isRequired, optimum: require("prop-types").number.isRequired, min: require("prop-types").number.isRequired, max: require("prop-types").number.isRequired, low: require("prop-types").number.isRequired, high: require("prop-types").number.isRequired };if (typeof exports !== "undefined") Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_MeterProps", { value: babelPluginFlowReactPropTypes_proptype_MeterProps, configurable: true, enumerable: true });









var Meter = function Meter(_ref) {var value = _ref.value,optimum = _ref.optimum,min = _ref.min,max = _ref.max,low = _ref.low,high = _ref.high;return (
    React.createElement("meter", { className: "meter", value: value, optimum: optimum, min: min, max: max, low: low, high: high }));};Meter.propTypes = babelPluginFlowReactPropTypes_proptype_MeterProps;

Meter.defaultProps = {};

export default Meter;