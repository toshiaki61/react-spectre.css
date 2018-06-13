var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Menu from './Menu';
import Button from '../elements/Button';
import Icon from '../elements/Icon';var bpfrpt_proptype_DropdownProps = { className: PropTypes.string, active: PropTypes.bool, right: PropTypes.bool, initialValue: PropTypes.string, contents: PropTypes.arrayOf(function () {return (typeof bpfrpt_proptype_MenuItemProps === 'function' ? bpfrpt_proptype_MenuItemProps.isRequired ? bpfrpt_proptype_MenuItemProps.isRequired : bpfrpt_proptype_MenuItemProps : PropTypes.shape(bpfrpt_proptype_MenuItemProps).isRequired).apply(this, arguments);}).isRequired, onClick: PropTypes.func.isRequired, onMenuClick: PropTypes.func.isRequired };












var Dropdown = function Dropdown(_ref)








{var className = _ref.className,active = _ref.active,right = _ref.right,initialValue = _ref.initialValue,contents = _ref.contents,onClick = _ref.onClick,onMenuClick = _ref.onMenuClick,props = _objectWithoutProperties(_ref, ['className', 'active', 'right', 'initialValue', 'contents', 'onClick', 'onMenuClick']);
  var classes = classnames(
  'dropdown',
  {
    'dropdown-right': right,
    active: active },

  className);

  return (
    React.createElement('div', _extends({ className: classes }, props),
      React.createElement(Button, { link: true, className: 'dropdown-toggle', tabIndex: '0', onClick: onClick },
        initialValue, ' ', React.createElement(Icon, { caret: true })),

      React.createElement(Menu, { onClick: onMenuClick, contents: contents })));


};Dropdown.propTypes = bpfrpt_proptype_DropdownProps;
Dropdown.defaultProps = {
  className: '',
  active: false,
  right: false,
  initialValue: '' };


export default Dropdown;import { bpfrpt_proptype_ItemProps as bpfrpt_proptype_MenuItemProps } from './Menu';import PropTypes from 'prop-types';export { bpfrpt_proptype_DropdownProps };