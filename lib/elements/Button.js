var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var bpfrpt_proptype_ButtonProps = { children: PropTypes.node, className: PropTypes.string, loading: PropTypes.bool, href: PropTypes.string, lg: PropTypes.bool, sm: PropTypes.bool, block: PropTypes.bool, inputGroup: PropTypes.bool, primary: PropTypes.bool, clear: PropTypes.bool, link: PropTypes.bool, action: PropTypes.bool, circle: PropTypes.bool };
















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
    toReturn =
    React.createElement('a', _extends({ href: href, className: classes }, props),
      children);


  } else {
    toReturn =
    React.createElement('button', _extends({ className: classes }, props),
      children);


  }

  return toReturn;
};Button.propTypes = bpfrpt_proptype_ButtonProps;var bpfrpt_proptype_GroupProps = { children: PropTypes.node.isRequired, className: PropTypes.string, block: PropTypes.bool };






var Group = function Group(_ref2) {var children = _ref2.children,className = _ref2.className,block = _ref2.block;
  var classes = classnames('btn-group', { 'btn-group-block': block }, className);

  return React.createElement('div', { className: classes }, children);
};Group.propTypes = bpfrpt_proptype_GroupProps;
Group.defaultProps = {
  className: '',
  block: false };


Button.Group = Group;

export default Button;import PropTypes from 'prop-types';export { bpfrpt_proptype_ButtonProps };export { bpfrpt_proptype_GroupProps };