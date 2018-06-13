var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Icon from '../elements/Icon';var bpfrpt_proptype_TitleProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM).isRequired : PropTypes.any.isRequired).apply(this, arguments);}, className: PropTypes.string };






var Title = function Title(_ref)



{var children = _ref.children,className = _ref.className,props = _objectWithoutProperties(_ref, ['children', 'className']);
  var classes = classnames('empty-title', 'h5', className);
  return (
    React.createElement('p', _extends({ className: classes }, props),
      children));


};Title.propTypes = bpfrpt_proptype_TitleProps;
Title.defaultProps = {
  className: '' };var bpfrpt_proptype_SubtitleProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, className: PropTypes.string };






var Subtitle = function Subtitle(_ref2)



{var children = _ref2.children,className = _ref2.className,props = _objectWithoutProperties(_ref2, ['children', 'className']);
  var classes = classnames('empty-subtitle', className);
  return (
    React.createElement('p', _extends({ className: classes }, props),
      children));


};Subtitle.propTypes = bpfrpt_proptype_SubtitleProps;
Subtitle.defaultProps = {
  children: null,
  className: '' };var bpfrpt_proptype_EmptyProps = { children: function children() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, className: PropTypes.string, icon: PropTypes.string, title: PropTypes.string, subtitle: PropTypes.string };









var Empty = function Empty(_ref3)






{var children = _ref3.children,className = _ref3.className,icon = _ref3.icon,title = _ref3.title,subtitle = _ref3.subtitle,props = _objectWithoutProperties(_ref3, ['children', 'className', 'icon', 'title', 'subtitle']);
  var classes = classnames('empty', className);
  return (
    React.createElement('div', _extends({ className: classes }, props),
      icon ?
      React.createElement(Icon, { className: 'icon-' + icon, style: { fontSize: '4rem' } }) :
      null,
      title ? React.createElement(Title, null, title) : null,
      subtitle ? React.createElement(Subtitle, null, subtitle) : null,
      children));


};Empty.propTypes = bpfrpt_proptype_EmptyProps;
Empty.defaultProps = {
  children: null,
  className: '',
  icon: '',
  title: null,
  subtitle: null };


export default Empty;import PropTypes from 'prop-types';export { bpfrpt_proptype_TitleProps };export { bpfrpt_proptype_SubtitleProps };export { bpfrpt_proptype_EmptyProps };