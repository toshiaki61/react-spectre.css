var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _objectWithoutProperties(obj, keys) {var target = {};for (var i in obj) {if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];}return target;}
import * as React from 'react';
import classnames from 'classnames';

import Menu from './Menu';
import Button from '../elements/Button';
import Icon from '../elements/Icon';var babelPluginFlowReactPropTypes_proptype_ItemProps = require('./Menu').babelPluginFlowReactPropTypes_proptype_ItemProps || require('prop-types').any;var babelPluginFlowReactPropTypes_proptype_DropdownProps = { className: require('prop-types').string, active: require('prop-types').bool, right: require('prop-types').bool, initialValue: require('prop-types').string, contents: require('prop-types').arrayOf(typeof MenuItemProps === 'function' ? require('prop-types').instanceOf(MenuItemProps) : require('prop-types').any).isRequired, onClick: require('prop-types').func.isRequired, onMenuClick: require('prop-types').func.isRequired };if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_DropdownProps', { value: babelPluginFlowReactPropTypes_proptype_DropdownProps, configurable: true, enumerable: true });












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


};Dropdown.propTypes = babelPluginFlowReactPropTypes_proptype_DropdownProps;
Dropdown.defaultProps = {
  className: '',
  active: false,
  right: false,
  initialValue: '' };


export default Dropdown;