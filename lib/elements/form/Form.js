var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_FormProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string, horizontal: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_FormProps', { value: babelPluginFlowReactPropTypes_proptype_FormProps, configurable: true, enumerable: true });






var Form = function Form(_ref) {var children = _ref.children,className = _ref.className,horizontal = _ref.horizontal,props = _objectWithoutProperties(_ref, ['children', 'className', 'horizontal']);
  var classes = classnames(className, { 'form-horizontal': horizontal });
  return (
    React.createElement('form', _extends({}, props, { className: classes }),
      children));


};Form.propTypes = babelPluginFlowReactPropTypes_proptype_FormProps;
Form.defaultProps = {
  className: '',
  horizontal: false };var babelPluginFlowReactPropTypes_proptype_GroupProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string, success: require('prop-types').bool, danger: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_GroupProps', { value: babelPluginFlowReactPropTypes_proptype_GroupProps, configurable: true, enumerable: true });








var Group = function Group(_ref2)





{var children = _ref2.children,className = _ref2.className,success = _ref2.success,danger = _ref2.danger,props = _objectWithoutProperties(_ref2, ['children', 'className', 'success', 'danger']);
  var classes = classnames('form-group', className, { 'has-success': success, 'has-danger': danger });
  return (
    React.createElement('div', _extends({}, props, { className: classes }),
      children));


};Group.propTypes = babelPluginFlowReactPropTypes_proptype_GroupProps;
Group.defaultProps = {
  className: '',
  success: false,
  danger: false };var babelPluginFlowReactPropTypes_proptype_LabelProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string, htmlFor: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_LabelProps', { value: babelPluginFlowReactPropTypes_proptype_LabelProps, configurable: true, enumerable: true });







var Label = function Label(_ref3) {var children = _ref3.children,className = _ref3.className,htmlFor = _ref3.htmlFor,props = _objectWithoutProperties(_ref3, ['children', 'className', 'htmlFor']);
  var classes = classnames('form-label', className);
  if (htmlFor) {
    return (
      React.createElement('label', _extends({}, props, { className: classes, htmlFor: htmlFor }),
        children));


  }
  return (
    React.createElement('span', _extends({}, props, { className: classes }),
      children));


};Label.propTypes = babelPluginFlowReactPropTypes_proptype_LabelProps;
Label.defaultProps = {
  className: '',
  htmlFor: '' };


Form.Group = Group;
Form.Label = Label;

export default Form;