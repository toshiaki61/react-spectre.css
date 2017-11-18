var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import Menu from './Menu';
import Button from '../elements/Button';
import Icon from '../elements/Icon';












var Dropdown = function Dropdown(_ref)








{var className = _ref.className,active = _ref.active,right = _ref.right,initialValue = _ref.initialValue,contents = _ref.contents,onClick = _ref.onClick,onMenuClick = _ref.onMenuClick,props = _objectWithoutProperties(_ref, ['className', 'active', 'right', 'initialValue', 'contents', 'onClick', 'onMenuClick']);
  var classes = classnames('dropdown', {
    'dropdown-right': right,
    active: active },
  className);
  return (
    React.createElement('div', _extends({ className: classes }, props),
      React.createElement(Button, { link: true, className: 'dropdown-toggle', tabIndex: '0', onClick: onClick },
        initialValue, ' ', React.createElement(Icon, { caret: true })),

      React.createElement(Menu, { onClick: onMenuClick, contents: contents })));


};
Dropdown.defaultProps = {
  className: '',
  active: false,
  right: false,
  initialValue: '',
  contents: [],
  onClick: noop };


export default Dropdown;