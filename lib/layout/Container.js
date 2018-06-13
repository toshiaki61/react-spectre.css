var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var bpfrpt_proptype_ContainerProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string, xs: PropTypes.bool, sm: PropTypes.bool, md: PropTypes.bool, lg: PropTypes.bool, xl: PropTypes.bool };










var Container = function Container(_ref)









{var children = _ref.children,className = _ref.className,xs = _ref.xs,sm = _ref.sm,md = _ref.md,lg = _ref.lg,xl = _ref.xl,props = _objectWithoutProperties(_ref, ['children', 'className', 'xs', 'sm', 'md', 'lg', 'xl']);
  var classes = classnames(
  'container',
  {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl },

  className);

  return (
    React.createElement('section', _extends({ className: classes }, props),
      children));


};Container.propTypes = bpfrpt_proptype_ContainerProps;
Container.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false };


export default Container;import PropTypes from 'prop-types';export { bpfrpt_proptype_ContainerProps };