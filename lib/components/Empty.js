var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Icon from '../elements/Icon';var babelPluginFlowReactPropTypes_proptype_TitleProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM).isRequired : require('prop-types').any.isRequired, className: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_TitleProps', { value: babelPluginFlowReactPropTypes_proptype_TitleProps, configurable: true, enumerable: true });





var Title = function Title(_ref) {var children = _ref.children,className = _ref.className,props = _objectWithoutProperties(_ref, ['children', 'className']);
  var classes = classnames('empty-title', 'h5', className);
  return (
    React.createElement('p', _extends({ className: classes }, props),
      children));


};Title.propTypes = babelPluginFlowReactPropTypes_proptype_TitleProps;
Title.defaultProps = {
  className: '' };var babelPluginFlowReactPropTypes_proptype_SubtitleProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, className: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_SubtitleProps', { value: babelPluginFlowReactPropTypes_proptype_SubtitleProps, configurable: true, enumerable: true });






var Subtitle = function Subtitle(_ref2) {var children = _ref2.children,className = _ref2.className,props = _objectWithoutProperties(_ref2, ['children', 'className']);
  var classes = classnames('empty-subtitle', className);
  return (
    React.createElement('p', _extends({ className: classes }, props),
      children));


};Subtitle.propTypes = babelPluginFlowReactPropTypes_proptype_SubtitleProps;
Subtitle.defaultProps = {
  children: null,
  className: '' };var babelPluginFlowReactPropTypes_proptype_EmptyProps = { children: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, className: require('prop-types').string, icon: require('prop-types').string, title: require('prop-types').string, subtitle: require('prop-types').string };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_EmptyProps', { value: babelPluginFlowReactPropTypes_proptype_EmptyProps, configurable: true, enumerable: true });









var Empty = function Empty(_ref3)






{var children = _ref3.children,className = _ref3.className,icon = _ref3.icon,title = _ref3.title,subtitle = _ref3.subtitle,props = _objectWithoutProperties(_ref3, ['children', 'className', 'icon', 'title', 'subtitle']);
  var classes = classnames('empty', className);
  return (
    React.createElement('div', _extends({ className: classes }, props),
      icon ? React.createElement(Icon, { className: 'icon-' + icon, style: { fontSize: '4rem' } }) : null,
      title ? React.createElement(Title, null, title) : null,
      subtitle ? React.createElement(Subtitle, null, subtitle) : null,
      children));


};Empty.propTypes = babelPluginFlowReactPropTypes_proptype_EmptyProps;
Empty.defaultProps = {
  children: null,
  className: '',
  icon: '',
  title: null,
  subtitle: null };


export default Empty;