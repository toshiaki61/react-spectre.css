var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';var babelPluginFlowReactPropTypes_proptype_ContainerProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string, xs: require('prop-types').bool, sm: require('prop-types').bool, md: require('prop-types').bool, lg: require('prop-types').bool, xl: require('prop-types').bool };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_ContainerProps', { value: babelPluginFlowReactPropTypes_proptype_ContainerProps, configurable: true, enumerable: true });










var Container = function Container(_ref)








{var children = _ref.children,className = _ref.className,xs = _ref.xs,sm = _ref.sm,md = _ref.md,lg = _ref.lg,xl = _ref.xl,props = _objectWithoutProperties(_ref, ['children', 'className', 'xs', 'sm', 'md', 'lg', 'xl']);
  var classes = classnames('container', {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl },
  className);
  return (
    React.createElement('section', _extends({ className: classes }, props),
      children));


};Container.propTypes = babelPluginFlowReactPropTypes_proptype_ContainerProps;
Container.defaultProps = {
  className: '',
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false };


export default Container;