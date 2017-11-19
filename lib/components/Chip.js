var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import Avatar from './Avatar';
import Button from '../elements/Button';var babelPluginFlowReactPropTypes_proptype_AvatarProps = require('./Avatar').babelPluginFlowReactPropTypes_proptype_AvatarProps || require('prop-types').any;











var Chip = function Chip(_ref)







{var clear = _ref.clear,icon = _ref.icon,avatar = _ref.avatar,content = _ref.content,className = _ref.className,onClearClick = _ref.onClearClick,props = _objectWithoutProperties(_ref, ['clear', 'icon', 'avatar', 'content', 'className', 'onClearClick']);
  var classes = classnames('chip', className);
  return (
    React.createElement('span', _extends({ className: classes }, props),
      icon,
      avatar ? React.createElement(Avatar, { sm: true, initial: avatar.initial, img: avatar.img, alt: avatar.alt }) : null,
      content,
      clear ? React.createElement(Button, { clear: true, onClick: onClearClick }) : null));


};Chip.propTypes = { className: require('prop-types').string, clear: require('prop-types').bool, icon: typeof (React.DOM == null ? {} : React.DOM) === 'function' ? require('prop-types').instanceOf(React.DOM == null ? {} : React.DOM) : require('prop-types').any, avatar: typeof babelPluginFlowReactPropTypes_proptype_AvatarProps === 'function' ? babelPluginFlowReactPropTypes_proptype_AvatarProps : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_AvatarProps), content: require('prop-types').string, onClearClick: require('prop-types').func };
Chip.defaultProps = {
  className: '',
  clear: false,
  icon: null,
  avatar: null,
  content: '',
  onClearClick: noop };


export default Chip;