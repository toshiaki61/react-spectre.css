var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';










var Container = function Container(_ref) {var children = _ref.children,className = _ref.className,xs = _ref.xs,sm = _ref.sm,md = _ref.md,lg = _ref.lg,xl = _ref.xl,props = _objectWithoutProperties(_ref, ['children', 'className', 'xs', 'sm', 'md', 'lg', 'xl']);
  var classes = classnames(
  'container', {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl },
  className);

  return (
    React.createElement('section', _extends({ className: classes }, props),
      children));


};
Container.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false };


export default Container;