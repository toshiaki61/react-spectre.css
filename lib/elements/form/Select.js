var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Form from './Form';var bpfrpt_proptype_SelectOnlyProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, className: PropTypes.string, sm: PropTypes.bool, lg: PropTypes.bool };







var SelectOnly = function SelectOnly(_ref)





{var children = _ref.children,className = _ref.className,sm = _ref.sm,lg = _ref.lg,props = _objectWithoutProperties(_ref, ['children', 'className', 'sm', 'lg']);
  var classes = classnames('form-select', className, {
    'select-sm': sm,
    'select-lg': lg });

  return (
    React.createElement('select', _extends({ className: classes }, props),
      children));


};SelectOnly.propTypes = bpfrpt_proptype_SelectOnlyProps;
SelectOnly.defaultProps = {
  children: null,
  className: '',
  sm: false,
  lg: false };var bpfrpt_proptype_SelectProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, className: PropTypes.string, sm: PropTypes.bool, lg: PropTypes.bool, label: PropTypes.string, options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired };








var Select = function Select(_ref2)




{var children = _ref2.children,label = _ref2.label,options = _ref2.options,props = _objectWithoutProperties(_ref2, ['children', 'label', 'options']);
  var labelNode = label ? React.createElement(Form.Label, null, label) : null;
  var keys = Object.keys(options);
  if (keys.length > 0) {
    return (
      React.createElement(Form.Group, null,
        labelNode,
        React.createElement(SelectOnly, props,
          keys.map(function (key) {return React.createElement('option', { key: key }, options[key]);}))));



  }
  return React.createElement(SelectOnly, props, children);
};Select.propTypes = bpfrpt_proptype_SelectProps;
Select.defaultProps = {
  label: '',
  options: {} };


export default Select;import PropTypes from 'prop-types';export { bpfrpt_proptype_SelectOnlyProps };export { bpfrpt_proptype_SelectProps };