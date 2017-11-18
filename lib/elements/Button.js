var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}import React from 'react';
import classnames from 'classnames';














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
};






var Group = function Group(_ref2) {var children = _ref2.children,className = _ref2.className,block = _ref2.block;
  var classes = classnames(
  'btn-group',
  { 'btn-group-block': block },
  className);


  return (
    React.createElement('div', { className: classes },
      children));


};
Group.defaultProps = {
  className: '',
  block: false };


Button.Group = Group;

export default Button;