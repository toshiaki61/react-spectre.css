var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_ButtonProps = { children: require('prop-types').node, className: require('prop-types').string, loading: require('prop-types').bool, href: require('prop-types').string, lg: require('prop-types').bool, sm: require('prop-types').bool, block: require('prop-types').bool, inputGroup: require('prop-types').bool, primary: require('prop-types').bool, clear: require('prop-types').bool, link: require('prop-types').bool, action: require('prop-types').bool, circle: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ButtonProps', { value: babelPluginFlowReactPropTypes_proptype_ButtonProps, configurable: true, enumerable: true });
















var Button = function Button(_ref)














{var children = _ref.children,className = _ref.className,loading = _ref.loading,href = _ref.href,lg = _ref.lg,sm = _ref.sm,block = _ref.block,inputGroup = _ref.inputGroup,primary = _ref.primary,clear = _ref.clear,link = _ref.link,action = _ref.action,circle = _ref.circle,props = _objectWithoutProperties(_ref, ['children', 'className', 'loading', 'href', 'lg', 'sm', 'block', 'inputGroup', 'primary', 'clear', 'link', 'action', 'circle']);
  var linkButton = link || href;
  var classes = classnames(
  'btn',
  {
    loading: loading,
    'btn-lg': lg,
    'btn-sm': sm,
    'btn-block': block,
    'input-group-btn': inputGroup,
    'btn-primary': primary,
    'btn-clear': clear,
    'btn-link': linkButton && !primary,
    'btn-action': action,
    circle: circle },

  className);


  var toReturn = null;
  if (href) {
    toReturn = React.createElement('a', _extends({ href: href, className: classes }, props), children);
  } else {
    toReturn = React.createElement('button', _extends({ className: classes }, props), children);
  }

  return toReturn;
};Button.propTypes = babelPluginFlowReactPropTypes_proptype_ButtonProps;var babelPluginFlowReactPropTypes_proptype_GroupProps = { children: require('prop-types').node.isRequired, className: require('prop-types').string, block: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_GroupProps', { value: babelPluginFlowReactPropTypes_proptype_GroupProps, configurable: true, enumerable: true });






var Group = function Group(_ref2) {var children = _ref2.children,className = _ref2.className,block = _ref2.block;
  var classes = classnames(
  'btn-group',
  { 'btn-group-block': block },
  className);


  return (
    React.createElement('div', { className: classes },
      children));


};Group.propTypes = babelPluginFlowReactPropTypes_proptype_GroupProps;
Group.defaultProps = {
  className: '',
  block: false };


Button.Group = Group;

export default Button;