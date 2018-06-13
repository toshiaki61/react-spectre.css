var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';

import Input from '../elements/form/Input';var bpfrpt_proptype_SliderProps = { min: PropTypes.number.isRequired, max: PropTypes.number.isRequired, value: PropTypes.number.isRequired, onChange: PropTypes.func.isRequired };







var Slider = function Slider(_ref) {var
  min = _ref.min,
  max = _ref.max,
  value = _ref.value,
  onChange = _ref.onChange,
  props = _objectWithoutProperties(_ref, ['min', 'max', 'value', 'onChange']);return (

    React.createElement(Input, _extends({
      slider: true,
      min: min,
      max: max,
      value: value,
      onChange: onChange,
      'data-tooltip': value },
    props)));};Slider.propTypes = bpfrpt_proptype_SliderProps;


Slider.defaultProps = { min: 0, max: 100 };

export default Slider;import PropTypes from 'prop-types';export { bpfrpt_proptype_SliderProps };