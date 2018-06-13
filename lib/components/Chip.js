var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import Avatar from './Avatar';
import Button from '../elements/Button';











var Chip = function Chip(_ref)







{var clear = _ref.clear,icon = _ref.icon,avatar = _ref.avatar,content = _ref.content,className = _ref.className,onClearClick = _ref.onClearClick,props = _objectWithoutProperties(_ref, ['clear', 'icon', 'avatar', 'content', 'className', 'onClearClick']);
  var classes = classnames('chip', className);
  return (
    React.createElement('span', _extends({ className: classes }, props),
      icon,
      avatar ?
      React.createElement(Avatar, { sm: true, initial: avatar.initial, img: avatar.img, alt: avatar.alt }) :
      null,
      content,
      clear ? React.createElement(Button, { clear: true, onClick: onClearClick }) : null));


};Chip.propTypes = { className: PropTypes.string, clear: PropTypes.bool, icon: function icon() {return (typeof (React.DOM == null ? {} : React.DOM) === 'function' ? PropTypes.instanceOf(React.DOM == null ? {} : React.DOM) : PropTypes.any).apply(this, arguments);}, avatar: function avatar() {return (typeof bpfrpt_proptype_AvatarProps === 'function' ? bpfrpt_proptype_AvatarProps : PropTypes.shape(bpfrpt_proptype_AvatarProps)).apply(this, arguments);}, content: PropTypes.string, onClearClick: PropTypes.func };
Chip.defaultProps = {
  className: '',
  clear: false,
  icon: null,
  avatar: null,
  content: '',
  onClearClick: noop };


export default Chip;import { bpfrpt_proptype_AvatarProps } from './Avatar';import PropTypes from 'prop-types';