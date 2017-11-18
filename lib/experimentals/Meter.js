
import React from 'react';









var Meter = function Meter(_ref) {var value = _ref.value,optimum = _ref.optimum,min = _ref.min,max = _ref.max,low = _ref.low,high = _ref.high;return (
    React.createElement("meter", { className: "meter", value: value, optimum: optimum, min: min, max: max, low: low, high: high }));};

Meter.defaultProps = {
  value: 0,
  optimum: 90,
  min: 0,
  max: 100,
  low: 30,
  high: 80 };


export default Meter;